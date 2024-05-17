import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import './style_menu.css'
import App from './App.vue'
import menu from './components/menu.vue'
import blog from './components/blog.vue'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

const routes = [
    {
        path: '/',
        component: menu
    },
    {
        path: '/blog',
        component: blog
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
