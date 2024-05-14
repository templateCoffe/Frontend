import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import menu from './components/menu.vue'
import categorydetails from './components/categorydetails.vue'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

const routes = [
    {
        path: '/',
        component: categorydetails
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
