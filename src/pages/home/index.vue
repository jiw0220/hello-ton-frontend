<template>
  <div class="page">
    <div class="item">
      <div class="item-label">Counter Address</div>
      <div class="item-value">{{ counterAddress }}</div>
    </div>
    <div class="item">
      <div class="item-label">Counter Value</div>
      <div class="item-value">{{ counterValue }}</div>
    </div>
    <template v-if="wallet">
      <NButton type="primary" size="large" strong :loading="loading" @click="onPressSendTransaction">Send Transaction</NButton>

      <NButton type="primary" size="large" strong :disabled="true">{{ wallet.account }}</NButton>
    </template>
    <template v-else>
      <NButton type="primary" size="large" strong @click="onPressConnect">CONNECT TON</NButton>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { NButton } from 'naive-ui';
import { TonConnectUI, type ConnectedWallet, type TonConnectError } from '@tonconnect/ui';
import { TonClient } from '@ton/ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { Counter } from './Counter';
import { Address, type OpenedContract, type SenderArguments } from '@ton/core';
let tonConnectUI: TonConnectUI | null = null;
let tonClient: TonClient | null = null;
let counterContract: OpenedContract<Counter> | null = null;
const counterAddress = ref('EQArIeL-WjHMKdQ89SLT0fWMPcEAfsHkwZ3wu1SEy92zto1N');
const counterValue = ref<bigint>(0n);
const wallet = ref<ConnectedWallet | null>(null);
const loading = ref(false);
onMounted(async () => {
  tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://jiw0220.github.io/hello-ton-frontend/tonconnect-manifest.json',
  });
  tonConnectUI.onStatusChange(
    (_wallet: ConnectedWallet | null) => {
      wallet.value = _wallet;
    },
    (err: TonConnectError) => {
      console.info(err.message);
      wallet.value = null;
    }
  );
  tonClient = new TonClient({
    endpoint: await getHttpEndpoint({ network: 'testnet' }),
  });

  const contract = new Counter(
    Address.parse(counterAddress.value) // replace with your address from tutorial 2 step 8
  );
  counterContract = tonClient.open(contract) as OpenedContract<Counter>;

  counterValue.value = await counterContract.getCounter();
});
async function onPressConnect() {
  await tonConnectUI!.openModal();
}
async function onPressSendTransaction() {
  await counterContract?.sendIncrement({
    send: async (args: SenderArguments) => {
      loading.value = true;
      const resp = await tonConnectUI!
        .sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString('base64'),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        })
        .catch((reason) => {
          loading.value = false;
          console.info(reason);
        });
      loading.value = false;
      //resp = {boc:'base64 string'}
      console.info(resp);
    },
  });
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
