import {createRouter, createWebHistory} from 'vue-router';
// import HomePage from '../views/HomePage';
// import ContactPage from '../views/ContactPage';
// import HelloWorld from '../HelloWorld';
// import NotFound from '../views/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomePage')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/ContactPage')
        },
        {
            path: '/counter',
            name: 'Counter',
            component: () => import('../HelloWorld.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () => import('../views/NotFound')
        }
    ]
})

export default router