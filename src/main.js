import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index";
import router from './components/router/index';


const app = createApp(App);

//NB: Registration of imports should be done before mounting the app
app.use(store);
app.use(router)

app.mount('#app')
// createApp(App).mount('#app')
