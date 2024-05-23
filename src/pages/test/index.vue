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
      <div class="item">
        <div class="item-label">Wallet Account Address</div>
        <div class="item-value">{{ wallet.account.address }}</div>
      </div>
      <div class="item">
        <div class="item-label">Ton Balance</div>
        <div class="item-value">{{ fromNano(tonBalance) }}</div>
      </div>
      <NButton type="primary" size="large" strong :loading="loading" @click="onPressSendTransaction">Send Transaction</NButton>
      <NButton type="primary" size="large" strong @click="onPressDisconnect">Disconnect</NButton>
    </template>
    <template v-else>
      <NButton type="primary" size="large" strong @click="onPressConnect">Connect</NButton>
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
import { Address, type OpenedContract, type SenderArguments, fromNano } from '@ton/core';
let tonConnectUI: TonConnectUI | null = null;
let tonClient: TonClient | null = null;
let counterContract: OpenedContract<Counter> | null = null;
const counterAddress = ref('EQArIeL-WjHMKdQ89SLT0fWMPcEAfsHkwZ3wu1SEy92zto1N');
const counterValue = ref<bigint>(0n);
const wallet = ref<ConnectedWallet | null>(null);
const tonBalance = ref<bigint>(0n);
const loading = ref(false);
onMounted(async () => {
  tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://jiw0220.github.io/hello-ton-frontend/tonconnect-manifest.json',
  });
  tonConnectUI.onStatusChange(
    async (_wallet: ConnectedWallet | null) => {
      wallet.value = _wallet;
      tonBalance.value = await tonClient!.getBalance(Address.parse(wallet.value!.account.address));
      /**
       * account
       * { "address": "0:44ed450ee8693adf8f4eb8a3e0ebb07c1e2921b37395cf654591eef0e96c33a4"}
       */
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

async function onPressDisconnect() {
  await tonConnectUI!.disconnect();
}

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
