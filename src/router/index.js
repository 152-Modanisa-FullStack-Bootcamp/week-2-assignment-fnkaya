import Vue from "vue";
import VueRouter from "vue-router";
import * as ROUTES from "@/router/routes"

Vue.use(VueRouter);

const PageNotFound = { template: '<div>Page Not Found</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: ROUTES.HOME,
            component: () => import('@/views/HomePage'),
        },
        {
            path: ROUTES.VIDEO,
            component: () => import('@/views/VideoPage'),
        },
        {
            path: ROUTES.FAVORITES,
            component: () => import('@/views/FavoritesPage'),
        },
        {
            path: '*',
            component: PageNotFound,
        },
    ]
});

export default router;