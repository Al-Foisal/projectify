import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/auth/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import Projects from './pages/projects/Projects.vue';
import ProjectDetail from './pages/projects/ProjectDetail.vue';
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: { name: 'login' } },
        { path: '/login', component: Login, name: 'login' },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: { requiresAuth: true },
        },
        {
            path: '/projects',
            component: Projects,
            name: 'projects',
            meta: { requiresAuth: true },
        },
        {
            path: '/projects/:id',
            component: ProjectDetail,
            name: 'project-detail',
            meta: { requiresAuth: true },
            props: true,
        },
    ],
});

//nevagation guard
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isLogin) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next(); //make sure to always call to next()
    }
});

export default router;
