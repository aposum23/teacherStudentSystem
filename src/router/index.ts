import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from "vue-router";
import AuthorizationPage from "@/views/authorization/AuthorizationPage.vue";
import notFoundPage from "@/views/notFoundPage/notFoundPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        redirect: {name: 'authorization'},
        component: AuthorizationPage,
    },
    {
        path: '/welcome',
        name: 'welcome',
        children: []
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: notFoundPage
    }
]

const router: Router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
})

export default router;