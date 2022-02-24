import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/md.scss'
import './util/datetime'
import demoBlock from './components/demo-block.vue'
import highlight from './components/highlight/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 水球图依赖
import "echarts-liquidfill"

//赋值全局对象
Vue.use(window.AVUE)
const echarts = require('echarts')
Vue.prototype.$echarts = echarts



if (process.env.NODE_ENV === 'development') {
    /* 公共组件引入 */
    const components = require('./lib')
    console.log(components, "components");
    console.log(window.CNBILB, "window.CNBILB");
    require('./lib/theme/index.css')
    Vue.use(components);
    console.log(Vue.options.components, "查看祖册组件")
} else {
    Vue.use(window.CNBILB)
}

Vue.use(ElementUI);

Vue.component('demo-block', demoBlock);
Vue.component('highlight', highlight);
Vue.config.productionTip = false
window.app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
