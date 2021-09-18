import { createApp } from 'vue';
require('./bootstrap');

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

//get authenticated user data for all time
store.dispatch('getUser').then(() => {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');
});
