<template>
  <div class="page">
    <h3>Telegram Mini App Demo</h3>
    <div>platform: {{ platform }}</div>
    <template v-if="!isInTelegram">
      <NAlert type="warning">Please open in telegram EMCHubBot</NAlert>
    </template>
    <template v-else>
      <div class="item">
        <h5>Auth Data Parameters</h5>
        <NInput type="textarea" :value="authDataRaw" :autosize="false" :disabled="true"></NInput>
      </div>
      <div class="item">
        <h5>Telegram Mini App User</h5>
        <NInput type="textarea" :value="userInfo" :autosize="false" :disabled="true"></NInput>
      </div>
      <NButton type="primary" size="large" strong :loading="userInfoLoading" @click="onPressSignForTelegram">Sign for Telegram</NButton>
      <NButton type="primary" size="large" strong @click="onPressShowAlert">MiniApp Alert</NButton>
    </template>
    <NButton type="primary" size="large" strong @click="onPressTon">Test Ton</NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, NInput, NAlert, useNotification } from 'naive-ui';
import WebApp from '@twa-dev/sdk';
import { retrieveLaunchParams } from '@tma.js/sdk';
import { http } from '@/tools/http';

const notification = useNotification();
const router = useRouter();

//pc(windows): "tdesktop", pc(macos): "macos", mobile(ios): "ios", mobile(android): "android"
//Not in telegram is "unknown"
const platform = ref(WebApp.platform);
const isInTelegram = WebApp.platform !== 'unknown';
const authDataRaw = ref('');
const userInfoLoading = ref(false);
const userInfo = ref('');

async function onPressSignForTelegram() {
  if (!authDataRaw.value) {
    notification.warning({ title: 'Failed', content: 'Please open in the mini app' });
    return;
  }
  if (userInfoLoading.value) return;
  userInfoLoading.value = true;
  const resp = await http.postJSON({
    url: 'https://dev.emchub.ai/api/v1/auth/telegram',
    data: { raw: authDataRaw.value },
  });
  userInfoLoading.value = false;
  userInfo.value = JSON.stringify(resp.data);
}

onMounted(async () => {
  if (isInTelegram) {
    const { initDataRaw } = retrieveLaunchParams();
    if (initDataRaw) {
      authDataRaw.value = initDataRaw;
    }
  }
});

function onPressShowAlert() {
  WebApp.showAlert('Hey there!');
}

function onPressTon() {
  router.push({ name: 'ton' });
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
  flex-direction: column;
  border: solid 1px #565656;
  gap: 8px 0;
}
.item-label {
  width: 120px;
}
.item-value {
}
</style>
