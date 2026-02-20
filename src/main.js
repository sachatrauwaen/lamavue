import { createApp } from 'vue'
import App from './App.vue'
import Lama from "./lama";

const el = document.getElementById('demoapp');
if (el) {
  const app = createApp(App);
  app.use(Lama);
  app.mount('#demoapp');
}
