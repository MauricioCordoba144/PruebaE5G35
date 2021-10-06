import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: () => import('./Views/Home.vue')
        },

        {
            path: '/pageadoptante',
            name: 'PageAdoptante',
            component: () => import('./Views/PageAdoptante.vue')
        },

        {
            path: '/pagedonante',
            name: 'PageDonante',
            component: () => import('./Views/PageDonante.vue')
        },

        {
            path: '/administrador',
            name: 'Administrador',
            component: () => import('./Views/Administrador.vue')
        },

        {
            path: '/a',
            name: 'a',
            component: () => import('./Views/a.vue')
        }

    ]
})

