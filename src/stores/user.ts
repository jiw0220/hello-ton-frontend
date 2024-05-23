import { ref } from 'vue';
import { defineStore } from 'pinia';
import { http } from '@/tools/http';

export interface User {
  id: string | number;
  signInProvider: SignInProviderType;
  nickname: string;
  avatar: string;
  email: string;
  thirdAuths: ThirdAuth[];
  thirdAuth: ThirdAuth | undefined | null;
  description?: string;
}

export type ThirdAuth = {
  name: string;
  picture: string;
  signInProvider: SignInProviderType;
  identities: string;
  uid: string;
};

export type AuthType = 'password' | 'wallet';

export type SignInProviderType = 'google.com' | 'twitter.com' | 'github.com' | 'web3wallet' | '';

export type SignUpParams = {
  account: string;
  password: string;
  nickname: string;
  email: string;
};

export type SignInParams = {
  account: string;
  password?: string;
};

export type FirebaseSignInParams = {
  token: string;
  signInProvider: SignInProviderType;
};

export const useUserStore = defineStore('user', () => {
  const defaultUser = (): User => ({
    id: '',
    signInProvider: '',
    nickname: '',
    avatar: '',
    email: '',
    thirdAuth: null,
    thirdAuths: [],
    description: '',
  });

  const user = ref<User>(defaultUser());

  function formatThirdAuths(userThirdAuths: any[]): ThirdAuth[] {
    return userThirdAuths.map((item) => {
      const { name, picture, identities, signInProvider, thirdUid: uid } = item;
      return { name, picture, signInProvider, identities, uid };
    });
  }

  const handleSignResponse = (token: string, _user: User) => {
    user.value = _user;
    // ** auto-set token in cookie now, without set http session. **
    // const session = { token };
    // http.setSession(session);
  };

  const initSignResult = () => {
    return { _result: 0, _desc: '', _sid: '', user: defaultUser() };
  };

  async function initUser() {
    const resp = await http.get({
      url: '/emchub/api/client/user/selectByUser',
    });
    if (resp._result !== 0) {
      return resp;
    }
    const data = resp.data || {};
    const nickname: string = data.username || '-';
    const userId: number = data.userId || 0;
    const signInProvider: SignInProviderType = data.signInProvider || '';
    const avatar: string = data.userImage || '';
    const email: string = data.email || '-';
    const thirdAuths = ((data.userThirdAuths || []) as any[]).map((item) => {
      const { name, picture, identities, signInProvider, thirdUid: uid } = item;
      return { name, picture, signInProvider, identities, uid };
    });
    const thirdAuth = thirdAuths.find((item) => item.signInProvider === signInProvider);
    user.value = { id: userId, signInProvider, nickname, avatar, email, thirdAuths, thirdAuth };
    return resp;
  }

  return {
    user,
    initUser,
    async updateUser({ nickname, avatar }: { nickname?: string; avatar?: string }) {
      const resp = await http.post({
        url: '/emchub/api/client/user/updateUserInfo',
        data: { username: nickname, userImage: avatar },
      });
      if (resp._result !== 0) {
        return resp;
      }
      return initUser();
    },
    async bindWithFirebase(params: FirebaseSignInParams) {
      const resp = await http.post({
        url: '/emchub/api/client/user/firebaseBind',
        data: { token: params.token },
      });
      if (resp._result !== 0) return resp;
      return initUser();
    },
    async bindWithFWallet(params: any) {
      const resp = await http.post({
        url: '/emchub/api/client/user/web3Bind',
        data: { address: params.address, signature: params.signature, message: params.message },
      });
      if (resp._result !== 0) return resp;
      return initUser();
    },
    async signup(params: SignUpParams): Promise<{ _result: number; _desc?: string }> {
      const { account = '', password = '', nickname = '', email = '' } = params;
      const resp1 = await http.postJSON({
        url: '/emchub/api/client/user/reg',
        data: { userCode: account, password: password, username: nickname, email },
      });
      if (resp1._result !== 0) {
        return { _result: 1, _desc: resp1._desc };
      }
      return { _result: 0 };
    },
    async signinWithWalletCode(params: any) {
      const resp = await http.get({
        url: '/emchub/api/client/user/genChallengeCode',
        data: { address: params.address },
      });
      return resp;
    },
    async signinWithWallet(params: any) {
      http.clearSession();
      const resp = await http.post({
        url: '/emchub/api/client/user/web3SignIn',
        data: { address: params.address, signature: params.signature, message: params.message },
      });
      const result = initSignResult();
      if (resp?._result !== 0) {
        result._result = 1;
        result._desc = resp?._desc || '';
      }
      if (result._result === 0) {
        const token = resp._sid;
        const respUser = resp.user;
        const userId: number = respUser.userId || 0;
        const signInProvider: SignInProviderType = 'web3wallet';
        const nickname: string = respUser.username || '';
        const avatar: string = respUser.userImage || '';
        const email: string = respUser.email || '';
        const thirdAuths = formatThirdAuths(respUser.userThirdAuths || []);
        const thirdAuth = thirdAuths.find((item) => item.signInProvider === signInProvider);
        const user = { id: userId, signInProvider, nickname, avatar, email, thirdAuths, thirdAuth };
        result.user = user;
        result._sid = token;
        handleSignResponse(token, user);
      }
      return result;
    },
    async signinWithFirebase(params: FirebaseSignInParams) {
      http.clearSession();
      const resp = await http.post({
        url: '/emchub/api/client/user/firebaseLogin',
        data: { token: params.token },
      });
      const result = initSignResult();
      if (resp?._result !== 0) {
        result._result = 1;
        result._desc = resp?._desc || '';
      }
      if (result._result === 0) {
        const token = resp._sid;
        const respUser = resp.user;
        const userId: number = respUser.userId || 0;
        const signInProvider = params.signInProvider;
        const nickname: string = respUser.username || '';
        const avatar: string = respUser.userImage || '';
        const email: string = respUser.email || '';
        const thirdAuths = formatThirdAuths(respUser.userThirdAuths || []);
        const thirdAuth = thirdAuths.find((item) => item.signInProvider === signInProvider);
        const user = { id: userId, signInProvider, nickname, avatar, email, thirdAuths, thirdAuth };
        result.user = user;
        result._sid = token;
        handleSignResponse(token, user);
      }
      return result;
    },
    async signin(params: SignInParams) {
      http.clearSession();
      const resp = await http.post({
        url: '/emchub/api/client/user/login',
        data: {
          userCode: params.account,
          password: params.password || '',
        },
      });
      const result = initSignResult();
      if (resp?._result !== 0) {
        result._result = 1;
        result._desc = resp?._desc || '';
      }
      if (result._result === 0) {
        const token = resp._sid;
        const respUser = resp.user;
        const userId: number = respUser.userId || 0;
        const signInProvider = '' as SignInProviderType;
        const nickname: string = respUser.username || '';
        const avatar: string = respUser.userImage || '';
        const email: string = respUser.email || '';
        const thirdAuths = formatThirdAuths(respUser.userThirdAuths || []);
        const thirdAuth = thirdAuths.find((item) => item.signInProvider === signInProvider);
        const user = { id: userId, signInProvider, nickname, avatar, email, thirdAuths, thirdAuth };
        result.user = user;
        result._sid = token;
        handleSignResponse(token, user);
      }
      return result;
    },
    async signOut() {
      const resp = await http.post({ url: '/emchub/api/client/user/logout' });
      if (resp._result === 0) {
        user.value = defaultUser();
        http.clearSession();
      }
      return resp;
    },
  };
});
