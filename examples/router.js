import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  // {
  //   path: '/',
  //   redirect: '/aa'
  // },
  // {
  //   path: '/aa',
  //   name: 'views',
  //   component: () => import(/* webpackChunkName: "combine" */ './aa.vue')
  // }
  {
    path: '/',
    redirect: '/views/bar'
  },
  {
    path: '/views/:id',
    name: 'views',
    component: () =>
      import(/* webpackChunkName: "combine" */ './views/MainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app) {
  app.use(router)
}
export default router
