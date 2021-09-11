import { createApp } from 'vue';
require('./bootstrap');

import App from './App.vue';
import router from './router.js';

import axios from 'axios';
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://127.0.0.1:8000';

const app = createApp(App);
app.use(router);
app.mount('#app');
