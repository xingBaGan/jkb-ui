import { createApp } from 'vue'
import App from './App.vue'
import Link from '../packages/link/index.js';

const components = [
  Link
]
let app = createApp(App);
components.forEach(component => {
    app.component(component.name, component);
})
app.mount('#app')
