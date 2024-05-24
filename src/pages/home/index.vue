<template>
  <div class="page">
    <div>isInTelegram: {{ isInTelegram }}</div>
    <NButton type="primary" size="large" strong @click="onPressNext">Go Next Page</NButton>
    <NButton type="primary" size="large" strong @click="onPressEMCHubPopup">Go EMC Hub Popup</NButton>
    <NButton type="primary" size="large" strong @click="onPressEMCHubRedirect">Go EMC Hub Redirect</NButton>

    <NButton type="primary" size="large" strong @click="onPressShowAlert">MiniAppAlert</NButton>

    <NButton type="primary" size="large" strong @click="onPressSet">Set Session Storage</NButton>

    <NButton type="primary" size="large" strong @click="onPressGet">Get Session Storage</NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, useMessage } from 'naive-ui';
import WebApp from '@twa-dev/sdk';
import { signInWithPopup, signInWithRedirect, getRedirectResult } from '@emcecosystem/emchub-auth-client';

async function onPressEMCHubPopup() {
  const options = { client: '1234' };
  const [err, data] = await signInWithPopup(options);
  if (err) return window.alert(err);
  const code = data.code;
  window.alert(`code: ${code}`);
}

const isInTelegram = ref(typeof window.Telegram !== 'undefined');

async function onPressEMCHubRedirect() {
  const options = { client: '1234', redirect: location.href };
  sessionStorage.setItem('redrect', '1');
  const [err, data] = await signInWithRedirect(options);
  if (err) return window.alert(err);
  location.href = data!.url;
}

//Handle redirect result
onMounted(async () => {
  const redirectFlag = sessionStorage.getItem('redrect');
  if (redirectFlag) {
    sessionStorage.removeItem('redrect');
    const [err, data] = await getRedirectResult();
    if (err) return window.alert(err);
    const code = data!.code;
    window.alert(`code: ${code}`);
    /**  Send a request using code to get accessToken and userInfo in backend
     *   Example code:
     *   await http.post({ url: 'backend url', data: { code } });
     */
  }
});

const router = useRouter();
const message = useMessage();
function onPressNext() {
  router.push({ name: 'test' });
}

function onPressShowAlert() {
  WebApp.showAlert('Hey there!');
}

function onPressSet() {
  sessionStorage.setItem('kk', 'hello?');
}
function onPressGet() {
  const msg = sessionStorage.getItem('kk');
  message.info(msg || 'none');
}
</script>

<style scoped>
.page {
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
}
.item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border: solid 1px #565656;
}
.item-label {
  width: 120px;
}
.item-value {
}
</style>
