<template>
  <div class="page">
    <iframe class="iframe" :src="iframeUrl"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { walletEntryPlugin, EntryPosition } from '@particle-network/wallet';
import { onMounted, ref } from 'vue';

walletEntryPlugin.init(
  {
    projectId: '9b5f618c-e6dd-45d8-82e8-1a99ad6960d9',
    clientKey: 'cXBpOaCX2oXimYOGm7Tn9NrrnGNhFpWh085e2Ij7',
    appId: '3f60329d-97c9-4484-90d6-2e78d010980c',
  },
  {
    erc4337: {
      // Optional
      name: 'SIMPLE', // SIMPLE, LIGHT, BICONOMY, or CYBERCONNECT
      version: '1.0.0',
    },
    visible: true, // Optional
    preload: true, // Optional
    entryPosition: EntryPosition.BR, // Optional
    topMenuType: 'close', // Optional
    // And so on.
  }
);
const iframeUrl = ref('');
onMounted(() => {
  walletEntryPlugin.setWalletCore({
    ethereum: window.ethereum, // Any EIP-1193 provider
  });

  walletEntryPlugin.walletEntryCreate();
  const url = walletEntryPlugin.getWalletUrl({ topMenuType: 'fullscreen' });
  iframeUrl.value = url;
});
</script>

<style scoped>
.page {
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  height: 100vh;
  min-height: 600px;
}
.iframe {
  width: 100%;
  height: 100%;
}
</style>
