# 快速上手

::: warning 前提条件
1. 本组件库`index.js`需要自行安装echart挂载到window上面，并且安装ElementUI组件库，
2. 使用`option.js`如需要引用`avue.js`
:::

## 导入
::: tip
index名称开头是图形展示组件，option名称开头是调配图形组件
::::

## 引入方式:
::: warning 前提条件
 1. public引入的方式需要引入umd结尾的js文件
 2. 一定要在index.html中的head中引入,不能在body中引入,否则不会加载
:::
### 1. 按需引用
```js
import {AvueEchartBar} from '@/index.js'
export default {
  components: { AvueEchartBar },
```
### 2. 全局引用，在main.js中引入
```js
import components from '@/index.js'
Vue.use(components)
// 组件中全部导入
import ManyOption from '@/lib/option.js';
import '@/lib/option.css';
export default {
components: { 
   ...
   ,...ManyOption
}
}
```

### 3. 在public中引用
```js
// public的index.html中
    <!-- 公共组件包 -->
    <script src="http://192.168.2.207:7003/index.umd.js?version=2.0"></script>
    <link rel="stylesheet" href="http://192.168.2.207:7003/theme/index.css">
    <!-- option引入 -->
    <script src="http://192.168.2.207:7003/option.umd.js?version=2.0"></script>
    <link rel="stylesheet" href="http://192.168.2.207:7003/theme/option.css">
```
```js
// 在mian.js 中
Vue.use(window.CNBILB)
```

支持使用`babel-plugin-import`插件按需引入,同时项目也支持多入口打包,可以单独引入某个入口打包文件,达到按需引入的目的.  

## 多种方式打包: 

支持rollup和vue cli3两种方式打包成库文件,rollup支持多种格式打包,只需要执行不同的npm命令即可.  

## 组件测试及demo文档
使用jest当做项目测试工具. 暂时没开发 

## 其他一些配置
采用统一高标准要求开发组件，内置了eslint, styleline, commitlint, prettier, conventional等多个插件来规范代码,保证代码质量.  
