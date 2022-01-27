import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/style.css";
import router from "./router";
import store from "./store";

//components
import navComponent from "./components/public/navComponent";

const app = createApp(App);
app.component("navComponent",navComponent);
app.use(store);
app.use(router);
app.mount('#app');
