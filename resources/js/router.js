import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/auth/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import Projects from './pages/projects/Projects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: { name: 'login' } },
        { path: '/login', component: Login, name: 'login' },
        { path: '/dashboard', component: Dashboard, name: 'dashboard' },
        { path: '/projects', component: Projects, name: 'projects' },
    ],
});

export default router;
