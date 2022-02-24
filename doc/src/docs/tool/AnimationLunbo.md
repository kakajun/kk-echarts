
# 动画设置组件

这是一个自主封装的动画设置组件,目前在大屏中各模块的动画就是这个组件进行设置,添加动画会出现弹窗,设置对象

:::demo 
```html
 <Animationlunbo :activeObj='activeObj' ></Animationlunbo>

<script>
export default {
  data() {
      return {
         activeObj:{
    "top": 310.17,
    "left": 545.37,
    "dataType": 1,
    "dataMethod": "get",
    "lock": false,
    "comhidden": false,
    "dataFormatter": "",
    "url2": "/cnbi/project/query_data/analysis_display",
    "name": "柱状图",
    "icon": "/img/bar.179e480c.png",
    "url": "./bar",
    "time": 5,
    "component": {
        "rotateDeg": 0,
        "width": 400,
        "height": 200,
        "prop": "bar"
    },
    "option": {
      pageArrs:[{
        content: "地图",
        id: "462",
        time: "15",
        "animations": [
          {
              "name": "左长距进入",
              "type": "fadeInLeftBig",
              "duration": 1,
          },
          {
              "name": "左长距出",
              "type": "fadeOutLeftBig",
              "duration": 1,
          }
      ],
      }]
     
    },
    "index": "c9b830e2-5fd0-4aaf-9a34-e8daee8588b8",
    "zIndex": 0
}
}

}
}
</script>



```
:::

<script>
export default {
  data() {
      return {
         activeObj:{
    "top": 310.17,
    "left": 545.37,
    "dataType": 1,
    "dataMethod": "get",
    "lock": false,
    "comhidden": false,
    "dataFormatter": "",
    "url2": "/cnbi/project/query_data/analysis_display",
    "name": "柱状图",
    "icon": "/img/bar.179e480c.png",
    "url": "./bar",
    "time": 5,
    "component": {
        "rotateDeg": 0,
        "width": 400,
        "height": 200,
        "prop": "bar"
    },
    "option": {
      pageArrs:[{
        content: "地图",
        id: "462",
        time: "15",
        "animations": [
          {
              "name": "左长距进入",
              "type": "fadeInLeftBig",
              "duration": 1,
          },
          {
              "name": "左长距出",
              "type": "fadeOutLeftBig",
              "duration": 1,
          }
      ],
      }]
     
    },
    "index": "c9b830e2-5fd0-4aaf-9a34-e8daee8588b8",
    "zIndex": 0
}
}

}
}
</script>
