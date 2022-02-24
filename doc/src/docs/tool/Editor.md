# 代码编辑器弹窗

```
<!-- 需要添加依赖 -->  
   "monaco-editor": "^0.25.0",
    "monaco-editor-webpack-plugin": "^4.0.0"
```

1. 这个组件只是进一步封装了编辑器, 包含弹窗部分 
2. 保证修改的东西只有点击提交了,才会正在修改,所以提交后的代码,自己在回调submit中写
3. 保证对象或数组传进去,那么最后会对象,数组传出来,节省一些格式转换的麻烦

其他功能参见代码编辑器

:::demo 

```html
   <editor :value="activeObj.code" :monaco="monaco" :language="activeObj.language" :visible.sync="visible" @submit="codeClose" />
   <script>
       import * as monaco from 'monaco-editor'
       export default {
           data() {
               return {
                   visible: true,
                   monaco: monaco,
                   code: '{test: 123456}'
               }
           }
   </script>
```

:::

<script>

     import * as monaco from 'monaco-editor'
     export default {
         data() {
             return {
               visible:true,
                 monaco: monaco,
                 code: '{test: 123456}'
             }
         }
     }

 </script>
