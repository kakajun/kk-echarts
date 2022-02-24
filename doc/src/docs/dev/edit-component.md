# 组件开发说明

## 编写组件
在package下面新建组件或者js库,这里使用的是vue来做测试例子,组件编写需要提供js文件如下*index.js*  

**编写统一的入口文件**  
在src下面创建*index.js*文件,将所有组件引入,并导出.组件在index中,echart组件在*components-echarts*中配置, option在*components-option.js*中配置

**注意**
组件vue文件名和内部name名称都需要以大驼峰命名.其中组件中名字中有大写的均改为小写,只保持首字母大写即可,否则在引入组件后会报错

**开始打包**  
打包前需要自己编写一个打包入口文件,用于多入口打包,
在 src下面新建 *lib-list.js* 文件,文件名必须一致且不能使用es6语法导出.  

**`lib-list.js`说明**  
*input*: 你需要打包的入口,这里需要使用js,所以package的组件必须提供js入口文件  
*output*: 打包后的组件名,打包后会在lib目录下生成对应的文件
打包  

**rollup打包**  
如果项目偏向于库文件, 建议使用*rollup*打包,执行`npm run lib`即可.  

**使用vue cli3(webpack)打包**  
如果项目偏向于UI库,包含比较多的静态文件, 建议使用这种方式打包  
执行`npm run lib:cli`即可

完成后会显示打包成功字样就可以了,同时会生成lib目录,就是你打包后的文件,  
同时两种打包方式,默认输出的lib文件名会一模一样,方便切换,当然,你也可以自行更改  

## 发布到npm
这里就不再说如何发布到npm了,大家自行百度,注意将package.json的main指向lib/index.js即可  