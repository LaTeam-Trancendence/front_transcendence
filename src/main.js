import {createApp} from 'vue'
import App from './App.vue'
import "./assets/styles/tailwind.css"
import i18n from './i18n'
import store from './store'
import router from './router'

const app = createApp(App);

store.dispatch('InitializeStore');

app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
