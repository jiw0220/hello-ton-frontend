<template>
  <div class="page">
    <h3>Shake</h3>
    <div>{{ count }}</div>
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

onMounted(async () => {
  window.addEventListener('devicemotion', () => {
    count.value++;
  });
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
</style>
