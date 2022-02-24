# 图表文档
::: warning 
公共组件添加新的props需要经过组长商量同意方可添加, 添加属性按字母顺序添加a-z
:::
## Variables

|参数|说明|类型|可选值|默认值|
|----------------------|--------------------------------|--------|------------|------|
|animation|开启动画|Boolean|-|-|
|App|用于全局暂停|Object|—|—|
|click|传点击事件|Function|-|-|
|clickFormatter|点击传参方法，接收参数{type: this.name,name: e.name,value: e.value[2] ?? e.value,data: this.dataChart}|Object|-|—|
|cubeObject|当多维度取数时,传的配置|Object|—|—|
|data|传入的数据|Object, String, Array|—|—|
|dataAppend|数据逐步增加|Boolean|-|-|
|dataMethod|请求方式|String|post、get|get|2
|dataFormatter|数据格式转换方法|Function|—|—|
|dataQueryb|多维度发送请求时的参数|Object|—|—|
|dataQuery|发送请求时的参数|Object|—|—|
|dataType|请求类型|String|0，1,2,3,4|0|
|eventConfig|事件性配置|Object|—|—|
|height|图形高度|Number, String|-|600|
|id|组件的编号|String|—| 'main_' + new Date().getTime()|
|idData|传入的idData数据，仅datatype===1,2 有用|Object, String, Array|—|—|
|ismobile|判断是否手机|Boolean|—|false|
|labelFormatter|标签格式转换方法|Function|-|-|
|linkageClick|内置联动转换方法|Function|-|-|
|linkageFormatter|外置联动转换方法|Function|-|-|
|option|图形的一些配置参数|Object|—|—|
|themeJson|echart主题文件|Object|-|-|
|time|动态刷新时间，目前不生效，用于需要定期更新数据|Number||0|
|url|请求地址|String|—|—|
|url2|这个也是请求地址，是多维度的|String|—|—|
|width|图形宽度|Number, String|—|600|

## 注意
1. 对于formater类型,需要动态写方法的,一定要先声明,并且在最外层,因为是统一使用组件main.openCode('linkageFormatter')",所以一定会存储在最外层



