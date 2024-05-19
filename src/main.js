import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './style_menu.css'
import './style_administrador_menu.css'
import App from './App.vue'
import Index from './components/Index.vue'
import Menu from './components/Menu.vue'
import Reservas from './components/Reservas.vue'
import Comentarios from './components/Comentarios.vue'
import Blog from './components/Blog.vue'
import Administrador_menu from './components/Administrador_menu.vue'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/reservas', component: Reservas },
        { path: '/menu', component: Menu },
        { path: '/comentarios', component: Comentarios },
        { path: '/blog', component: Blog},
        { path: '/administrador_menu', component: Administrador_menu},
    ]
});

createApp(App).use(router).mount('#app')