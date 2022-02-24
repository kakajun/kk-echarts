/**
 *@desc:这个文件相当于main.js 测试要预先加载的插件,公共方法都可以在这里引入处理
 *@author:mj
 *@date:2021/08/18
 *@updateby
 */
import 'jest-canvas-mock'
import Vue from 'vue'
// 导入elementui
import ElementUI from 'element-ui'
import { currencyF, apply, getUrlParams } from '@s/utils/util'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
const AVUE = require('./avue.js')
Vue.use(ElementUI)
Vue.use(AVUE, {
  size: 'mini'
})
/* 注册组件所需的公共方法 */
const prototypes = {
  currencyF, // 全局千分位分隔
  apply, // 对象数组拷贝
  getUrlParams // 解析参数
}
Object.keys(prototypes).forEach(key => {
  Vue.prototype[key] = prototypes[key]
})
