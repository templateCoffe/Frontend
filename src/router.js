import Index from './components/Index.vue'
import Menu from './components/Menu.vue'
import Reservas from './components/Reservas.vue'
import Comentarios from './components/Comentarios.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Administrador_menu from './components/Administrador_menu.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/reservas', component: Reservas },
        { path: '/menu', component: Menu },
        { path: '/comentarios', component: Comentarios },
        { path: '/blog', component: Blog },
        { path: '/login', component: Login },
        { path: '/admin', component: Admin },
        { path: '/administrador_menu', component: Administrador_menu},

    ]
});

export default router;