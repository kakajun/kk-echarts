import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import components from '@/index.js'
// import components from '/lib/index.es.js?url=76454'
import router, { setupRouter } from './router'

import * as echarts from 'echarts'
// Vue.component('Draggable', window.vuedraggable)

// 设置请求头,否则地图请求不到
axios.interceptors.request.use(
  function (config) {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyNzIwMDAsInVzZXJuYW1lIjoibWoifQ.F6ZRn_8qbd3H_LLX8yWMKo30wprim4qpXhcCA3V7Hqg'
    config.headers['X-Access-Token'] = token //将token放到请求头发送给服务器
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
const app = createApp(App)
// app.use(window.CNBILB)
app.use(components)

// console.log(components, "组件库components");
// console.log(option,"optionoption");
app.use(ElementPlus)
// console.log(ElementPlus, "组件库ElementPlus");
// 把$echarts挂载到全局
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$axios = axios
// 挂载路由
setupRouter(app)

router.isReady().then(() => {
  const vm = app.mount('#app')
  console.log(vm, 'appapp')
})
