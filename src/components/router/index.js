import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage';
import ContactPage from '../views/ContactPage';

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
        }
    ]
})

export default router