import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage';
import ContactPage from '../views/ContactPage';
import HelloWorld from '../HelloWorld';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/contact',
            component: ContactPage
        },
        {
            path: '/counter',
            component: HelloWorld
        }
    ]
})

export default router