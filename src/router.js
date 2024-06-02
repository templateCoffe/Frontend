import { isAuthenticated } from './auth'
import Index from './components/Index.vue'
import Menu from './components/Menu.vue'
import Reservas_2 from './components/Reservas_2.vue'
import Comentarios from './components/Comentarios.vue'
import Modificar_menu from './components/Modificar_menu.vue'
import Blog from './components/Blog.vue'
import Publicacion from './components/Publicacion.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Administrador_menu from './components/Administrador_menu.vue'
import Administrador_inventario from './components/Administrador_inventario.vue'
import Anadir_inventario from './components/Anadir_inventario.vue'
import Modificar_item from './components/Modificar_item.vue'
import Administrador_blog from './components/Administrador_blog.vue'
import Modificar_blog from './components/Modificar_blog.vue'
import Anadir_blog from './components/Anadir_blog.vue'
import Administrador_chatbot from './components/Administrador_chatbot.vue'
import Modificar_chatbot from './components/Modificar_chatbot.vue'
import Anadir_chatbot from './components/Anadir_chatbot.vue'
import Administrador_reservas from './components/Administrador_reservas.vue'
import Procesar_reservas from './components/Procesar_reservas.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/reservas', component: Reservas_2 },
        { path: '/menu', component: Menu },
        { path: '/comentarios', component: Comentarios },
        { path: '/blog', component: Blog },
        { path: '/login', component: Login },
        {
            path: '/admin', component: Admin, meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Modificar_menu/:id', name: 'Modificar_menu', component: Modificar_menu,
            meta: {
                requiresAuth: true
            }
        },
        { path: '/Publicacion/:id', component: Publicacion },
        {
            path: '/Administrador_inventario', component: Administrador_inventario,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Anadir_inventario', component: Anadir_inventario,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Modificar_item', name: 'Modificar_item', component: Modificar_item,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Administrador_blog', component: Administrador_blog,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Modificar_blog', component: Modificar_blog,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Anadir_blog', component: Anadir_blog,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Administrador_chatbot', component: Administrador_chatbot,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Modificar_chatbot', name: 'Modificar_chatbot', component: Modificar_chatbot,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Anadir_chatbot', component: Anadir_chatbot,
            meta: {
                requiresAuth: true
            }
        },


        {
            path: '/admin', component: Admin,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/administrador_menu', component: Administrador_menu,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/administrador_reservas', component: Administrador_reservas,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/procesar_reservas/:id', name: 'procesar_reservas', component: Procesar_reservas,
            meta: {
                requiresAuth: false
            }
        },

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