import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeComp.vue'
import User from './components/UserComp.vue'
import About from './components/AboutComp.vue'
const routes = 
[
    {
        path:'/',
        component: Home
    },
    {
        path:'/user',
        component: User
    },
    {
        path:'/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;