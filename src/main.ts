import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router'
import './style.css';
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue);

// Место импорта компонентов PrimeVue

// ----------------------------------

app.mount('#app');
