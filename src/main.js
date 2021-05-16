import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard-plus';
import App from './App.vue'
import router from './router';


const app = createApp(App);

app.use(ElementPlus);

app.use(router);

app.use(VueClipboard);

app.mount('#app');
