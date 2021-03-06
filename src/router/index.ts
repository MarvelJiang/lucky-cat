import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/Money.vue";
import labels from "@/views/labels.vue";
import Statistics from "@/views/statistics.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/labels',
        component: labels
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        component: NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router
