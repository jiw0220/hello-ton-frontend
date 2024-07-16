<template>
  <div class="page">
    <h3>Shake</h3>
    <div>{{ count }}</div>

    <NButton type="primary" size="large" strong @click="onPressPermission">Post Shake Permission</NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNotification } from 'naive-ui';
import WebApp from '@twa-dev/sdk';

const notification = useNotification();
const router = useRouter();

const platform = ref(WebApp.platform);
const isInTelegram = WebApp.platform !== 'unknown';
const count = ref(0);

function startListen() {
  window.addEventListener('devicemotion', () => {
    count.value++;
  });
}

async function onPressPermission() {
  let isGranted = true;
  if (typeof window.DeviceMotionEvent !== 'undefined' && typeof window.DeviceMotionEvent.requestPermission === 'function') {
    try {
      const state = await window.DeviceMotionEvent.requestPermission();
      isGranted = 'granted' === state;
    } catch (e) {
      notification.warning({ title: 'Tips', content: 'Grant Error' });
      isGranted = false;
    }
  }
  if (isGranted) {
    startListen();
  } else {
    notification.warning({ title: 'Tips', content: 'Reject' });
  }
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
</style>
