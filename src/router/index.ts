import { createRouter, createWebHistory } from 'vue-router';

export enum Route {
    MENU = 'menu'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/meniu',
            name: Route.MENU,
            component: () => import('../views/HomeView.vue')
        }
    ]
});

export default router;
