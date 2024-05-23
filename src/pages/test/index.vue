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

      /**
       * account
       * {
        "address": "0:44ed450ee8693adf8f4eb8a3e0ebb07c1e2921b37395cf654591eef0e96c33a4",
        "chain": "-3",
        "walletStateInit": "te6cckECFgEAAwQAAgE0AgEAUQAAAAApqaMX8FbQT4HcdaMGD0YUO+QqyAA+21J8IkVSHPEIVAd9jrpAART/APSkE/S88sgLAwIBIAkEBPjygwjXGCDTH9Mf0x8C+CO78mTtRNDTH9Mf0//0BNFRQ7ryoVFRuvKiBfkBVBBk+RDyo/gAJKTIyx9SQMsfUjDL/1IQ9ADJ7VT4DwHTByHAAJ9sUZMg10qW0wfUAvsA6DDgIcAB4wAhwALjAAHAA5Ew4w0DpMjLHxLLH8v/CAcGBQAK9ADJ7VQAbIEBCNcY+gDTPzBSJIEBCPRZ8qeCEGRzdHJwdIAYyMsFywJQBc8WUAP6AhPLassfEss/yXP7AABwgQEI1xj6ANM/yFQgR4EBCPRR8qeCEG5vdGVwdIAYyMsFywJQBs8WUAT6AhTLahLLH8s/yXP7AAIAbtIH+gDU1CL5AAXIygcVy//J0Hd0gBjIywXLAiLPFlAF+gIUy2sSzMzJc/sAyEAUgQEI9FHypwICAUgTCgIBIAwLAFm9JCtvaiaECAoGuQ+gIYRw1AgIR6STfSmRDOaQPp/5g3gSgBt4EBSJhxWfMYQCASAODQARuMl+1E0NcLH4AgFYEg8CASAREAAZrx32omhAEGuQ64WPwAAZrc52omhAIGuQ64X/wAA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYALm0AHQ0wMhcbCSXwTgItdJwSCSXwTgAtMfIYIQcGx1Z70ighBkc3RyvbCSXwXgA/pAMCD6RAHIygfL/8nQ7UTQgQFA1yH0BDBcgQEI9ApvoTGzkl8H4AXTP8glghBwbHVnupI4MOMNA4IQZHN0crqSXwbjDRUUAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+IAeAH6APQEMPgnbyIwUAqhIb7y4FCCEHBsdWeDHrFwgBhQBMsFJs8WWPoCGfQAy2kXyx9SYMs/IMmAQPsABsIFq/k=",
        "publicKey": "f056d04f81dc75a3060f46143be42ac8003edb527c2245521cf10854077d8eba"
        }
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
