<template>
  <div class="page">
    <h3>EMCHub OAuth</h3>
    <NButton type="primary" size="large" strong @click="onPressEMCHubPopup">OAuth Popup</NButton>
    <NButton type="primary" size="large" strong @click="onPressEMCHubRedirect">OAuth Redirect</NButton>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { NButton, useNotification } from 'naive-ui';
import { signInWithPopup, signInWithRedirect, getRedirectResult } from '@emcecosystem/emchub-auth-client';

const notification = useNotification();

async function onPressEMCHubPopup() {
  const options = { client: '1234' };
  const [err, data] = await signInWithPopup(options);
  if (err) return window.alert(err);
  const code = data.code;
  window.alert(`code: ${code}`);
}

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
    notification.success({ title: 'OAuth Success', content: `code: ${code}` });
    /**  Send a request using code to get accessToken and userInfo in backend
     *   Example code:
     *   await http.post({ url: 'backend url', data: { code } });
     */
  }
});
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
