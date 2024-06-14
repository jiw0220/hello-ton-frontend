<template>
  <template v-if="loading">
    <div class="loading">
      <NSpin />
    </div>
  </template>
  <template v-else>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </template>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useLoadingBar, NSpin } from 'naive-ui';

const loadingBar = useLoadingBar();

const loading = ref(false);

onMounted(async () => {
  window.$loadingBar = loadingBar;
});
</script>
<style scoped>
.loading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
