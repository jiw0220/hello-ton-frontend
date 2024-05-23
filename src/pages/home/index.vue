<template>
  <div class="page">
    <NButton type="primary" size="large" strong @click="onPressNext">Go Next Page</NButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NButton } from 'naive-ui';
const router = useRouter();
function onPressNext() {
  router.push({ name: 'test' });
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
