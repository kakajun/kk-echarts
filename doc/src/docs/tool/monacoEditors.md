# 代码编辑器

```
<!-- 需要添加依赖 -->  
   "monaco-editor": "^0.25.0",
    "monaco-editor-webpack-plugin": "^4.0.0"
```

```js
<!-- 在vue.config.js中配置 -->  
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
    configureWebpack: config => {
        config.plugins.push(new MonacoWebpackPlugin()) //这个括号里面不能写任何东西,否则会报错,影响格式化,而且必须要有
    }
}
```

编辑器支持ctrl+s快捷键对代码进行格式化, 对theme赋值可以更改皮肤, vs 白色  vs-dark  黑色
language可以添加支持的语言类型进行格式化, 前端基本也就用到javescript, json这一类的.
:::demo 

```html
 <monacoeditor v-model="code" :monaco="monaco" :width="500" theme="vs" language="json" :height="500"></monacoeditor>
 <script>
     import * as monaco from 'monaco-editor'
     export default {
         data() {
             return {
                 monaco: monaco,
                 code: '{test: 123456}'
             }
         }
     }
 </script>

 <div tag="一个可用的的配合el-dialog的例子(注:monaco也需要加v-if动态加载卸载, 否则无法再次初始化, 自动格式化方法不生效哦!):"></div>
 <el-dialog v-dialogdrag title="我是标题:" :modal-append-to-body="false" :append-to-body="true" :visible.sync="monacoVisible" width="750px" :before-close="handleClose" :destroy-on-close="true">
     <monacoeditors v-if="monacoVisible" v-model="code" :monaco="monaco" :width="700" theme="vs" language="json" :height="500"></monacoeditors>

     <span slot="footer" class="dialog-footer">
         <el-button size="mini" @click="monacoVisible = false">取 消</el-button>
         <el-button size="mini" type="primary" @click="manualUpdateOptions">确 定</el-button>
     </span>
 </el-dialog>

 <script>
     import * as monaco from 'monaco-editor'
     export default {
         data() {
             return {
                 monacoVisible: false,
                 monaco: monaco,
                 code: '',
             }
         },
         methods: {
             manualEditOptions() {
                 this.code = 'let a=1, b=2'
                 //  this.code = JSON.stringify(如果目标是一个json对象)
                 this.monacoVisible = true
             },
             manualUpdateOptions() {
                 // 确定 执行xxxx
             },
             handleClose(done) {
                 done()
             },

         },
     }
 </script>
```

:::
<script>

    import * as monaco from 'monaco-editor'

export default {
  data() {

      return {
        monaco:monaco,
       code:`module.exports = {

configureWebpack: config => {

        config.plugins.push(new MonacoWebpackPlugin()) //这个括号里面不能写任何东西,否则会报错,影响格式化,而且必须要有
    }
    }`
      }
    }

}
</script>
