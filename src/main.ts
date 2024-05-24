import { createApp } from 'vue';
import AppSetup from './AppSetup.vue';
import { router } from './routes/index';
import moment from 'moment';
import { pinia } from './stores/index';
import './tailwind.css';
import './style.css';
// import telegram mini app sdk
import '@twa-dev/sdk';

moment.locale('en-us');

const app = createApp(AppSetup);

app.use(router);
app.use(pinia);
app.mount('#app');

// if (typeof window.web_app_setup_closing_behavior === 'function') {
//   window.web_app_setup_closing_behavior({
//     shouldConfirm: true,
//     confirmText: 'Are you sure you want to exit? Your data will be lost.',
//   });
// }
