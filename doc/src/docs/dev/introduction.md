# 组件库介绍
本组件库打包出来包含2类，一类用于展现的组件，包含多种图形组件，另一类用于调配的组件,都支持按需引入,如果只是需要展示那么只需要引用index组件库就行了。

## 为什么使用markdown-it
1. element-ui和avue的文档都用了它，而且有现成的md文档，改改就行了


## 整个项目目录:
```less
├── build
│   ├── cli.build.js // vue cli3打包配置
│   ├── rollup.build.js // rollup打包配置
│   ├── rollup.createConfig.js 
│   └── utils.js 
├── config
│   ├── alias.js // 路径别名
│   ├── banner.js 
│   ├── dev.js 
│   ├── index.js 
│   ├── prod.js 
│   └── rollup.build.config.js // rollup打包类型配置
├── docs // 开发文档
├── examples // 开发示例
├── lib // 打包后的文件
│   ├── media 打包后的视频文件
│   ├── theme 打包后的css文件
│   ├── index.js 打包后的组件库,包含压缩版本
│   └── option.js 打包后的设置库,包含压缩版本
├── packages // 子模块
├── src 
│   ├── components-option.js // option注册
│   ├── index.js  // 主入口
│   └── lib-list.js // 模块打包配置
├── tests // 测试文件
└── types // 类型定义文件
```









