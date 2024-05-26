import { isAuthenticated } from './auth'
import Index from './components/Index.vue'
import Menu from './components/Menu.vue'
import Reservas from './components/Reservas.vue'
import Comentarios from './components/Comentarios.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Administrador_menu from './components/Administrador_menu.vue'
import Modificar_menu from './components/Modificar_menu.vue'

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
        {
            path: '/admin', component: Admin,
            meta: {
                requiresAuth: true // Todas las vistas de administración deberán tener esto de ahora en adelante
            }
        },
        {
            path: '/administrador_menu', component: Administrador_menu,
            meta: {
                requiresAuth: true
            }
        },
        { path: '/modificar_menu', component: Modificar_menu },

    ]
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Esta ruta requiere autenticación, verificar si el usuario está autenticado
        if (!isAuthenticated()) {
            // No está autenticado, redirigir a la página de login
            next({
                path: '/login',
                query: { redirect: to.fullPath } // Para redirigir después de iniciar sesión
            });
        } else {
            next(); // El usuario está autenticado, permitir acceso
        }
    } else {
        next(); // La ruta no requiere autenticación, permitir acceso
    }
});

export default router;