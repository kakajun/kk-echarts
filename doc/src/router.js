import Vue from 'vue'
import Router from 'vue-router'
import routes from './route.config'
Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import(/* webpackChunkName: "views" */ './views/Home.vue')
        },
        ...routes]
})
router.afterEach((to) => {
    document.title = to.name + ' - 经邦组件库';
})
export default router
