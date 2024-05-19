import { createApp } from 'vue'
import './style.css'
import './style_menu.css'
import './style_administrador_menu.css'
import App from './App.vue'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'
import router from './router.js'

createApp(App).use(router).mount('#app')