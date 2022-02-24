## 主题
::: warning 
本插件默认一套主题,并自动加载,如果需要修改主题需要同时传入theme(主题名称)和themeJson(主题的Json),否则名字不匹配会导致主题颜色不一样
:::
## 加载流程
1. common 中 import '@p/theme/avue.project.js'
2. props:theme----> 注册`this.$echarts.init(main, this.theme)`



