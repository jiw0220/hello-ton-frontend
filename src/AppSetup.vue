<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <!-- <n-theme-editor> -->
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <App />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
    <!-- </n-theme-editor> -->
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NGlobalStyle,
  //NThemeEditor,
  darkTheme,
  NConfigProvider,
} from 'naive-ui';
import CustomThemeDark from './theme-dark';
import App from './App.vue';

const isDark = true; //window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = isDark ? darkTheme : null;
const lightThemeOverrides = CustomThemeDark;
const darkThemeOverrides = CustomThemeDark;
const themeOverrides = ref(isDark ? darkThemeOverrides : lightThemeOverrides);
</script>
