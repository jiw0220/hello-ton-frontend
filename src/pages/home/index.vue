<template>
  <div class="page">
    <NButton type="primary" size="large" strong @click="onPressNext">Go Next Page</NButton>
    <NButton type="primary" size="large" strong @click="onPressEMCHub">Go EMC Hub</NButton>

    <NButton type="primary" size="large" strong @click="onPressSet">Set Session Storage</NButton>

    <NButton type="primary" size="large" strong @click="onPressGet">Get Session Storage</NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NButton, useMessage } from 'naive-ui';
const router = useRouter();
const message = useMessage();
function onPressNext() {
  router.push({ name: 'test' });
}

function onPressEMCHub() {
  location.href = `https://emchub.ai/#/auth?launch=popup&client=1234&redirect=https%3A%2F%2Fwww.baidu.com&scope=read`;
  // location.href = `http://localhost:5173/#/auth?launch=redirect&client=1234&redirect=https%3A%2F%2Fwww.baidu.com&scope=read`;
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
