import { isAuthenticated } from './auth'
import Index from './components/Index.vue'
import Menu from './components/Menu.vue'
import Reservas from './components/Reservas.vue'
import Comentarios from './components/Comentarios.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Administrador_menu from './components/Administrador_menu.vue'
import Modificar_cappucchino from './components/Modificar_cappucchino.vue'
import Modificar_cafe from './components/Modificar_cafe.vue'
import Modificar_frappucchino from './components/Modificar_frappucchino.vue'
import Modificar_cafe_mocha_helado from './components/Modificar_cafe_mocha_helado.vue'
import Modificar_coctel_monte_cristo from './components/Modificar_coctel_monte_cristo.vue'
import Modificar_dirthy_mother from './components/Modificar_dirthy_mother.vue'
import Modificar_caprichos_de_cafe from './components/Modificar_caprichos_de_cafe.vue'
import Modificar_crema_de_cafe_chocolate_y_mascarpone from './components/Modificar_crema_de_cafe_chocolate_y_mascarpone.vue'
import Modificar_cortado from './components/Modificar_cortado.vue'
import Modificar_affogato from './components/Modificar_affogato.vue'
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
<<<<<<< HEAD
        { path: '/admin', component: Admin },
        { path: '/administrador_menu', component: Administrador_menu},
        { path: '/Modificar_cappucchino', component: Modificar_cappucchino},
        { path: '/Modificar_cafe', component: Modificar_cafe},
        { path: '/Modificar_frappucchino', component: Modificar_frappucchino},
        { path: '/Modificar_cafe_mocha_helado', component: Modificar_cafe_mocha_helado},
        { path: '/Modificar_coctel_monte_cristo', component: Modificar_coctel_monte_cristo},
        { path: '/Modificar_dirthy_mother', component: Modificar_dirthy_mother},
        { path: '/Modificar_caprichos_de_cafe', component: Modificar_caprichos_de_cafe},
        { path: '/Modificar_crema_de_cafe_chocolate_y_mascarpone', component: Modificar_crema_de_cafe_chocolate_y_mascarpone},
        { path: '/Modificar_cortado', component: Modificar_cortado},
        { path: '/Modificar_affogato', component: Modificar_affogato},
=======
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
>>>>>>> fee626690fd1dc4dac9a2d63e14871c6d46ff47c

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