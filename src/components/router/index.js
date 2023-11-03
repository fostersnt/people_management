import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage';
import ContactPage from '../views/ContactPage';
import HelloWorld from '../HelloWorld';
import NotFound from '../views/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage
        },
        {
            path: '/counter',
            name: 'Counter',
            component: HelloWorld
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router