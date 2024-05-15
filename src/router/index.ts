import { createRouter, createWebHistory } from 'vue-router';
import { Route } from '@/router/models/enumerators';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: Route.HOME,
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/paslaugos',
            name: Route.SERVICES,
            component: () => import('@/views/ServicesView.vue')
        },
        // {
        //     path: '/kainu-skaiciuokle',
        //     name: Route.PRICES,
        //     component: () => import('@/views/PricesView.vue')
        // },
        {
            path: '/galerija',
            name: Route.GALLERY,
            component: () => import('@/views/GalleryView.vue')
        },
        {
            path: '/kontaktai',
            name: Route.CONTACTS,
            component: () => import('@/views/ContactsView.vue')
        },
        {
            path: '/rezervacija',
            name: Route.RESERVATION,
            component: () => import('@/views/ReservationView.vue')
        },
        {
            path: '/erdves',
            name: Route.SPACES,
            component: () => import('@/views/SpacesView.vue')
        },
        {
            path: '/salygos-ir-taisykles',
            name: Route.TERMS_AND_CONDITIONS,
            component: () => import('@/views/TermsAndConditionsView.vue')
        },
        {
            path: '/privatumo-politika',
            name: Route.PRIVACY_POLICY,
            component: () => import('@/views/PrivacyPolicyView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                selector: to.hash,
                behavior: 'smooth'
            };
        }

        return {
            top: savedPosition?.top ? savedPosition.top : 0,
            behavior: 'smooth'
        };
    }
});

export default router;
