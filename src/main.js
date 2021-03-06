import { createApp } from 'vue'
import App from './App.vue'
import Button from '../packages/button/index.js';
import '../packages/theme-chalk/src/index.scss';

const components = [
  Button
]
let app = createApp(App);
components.forEach(component => {
    app.component(component.name, component);
})
app.mount('#app')
