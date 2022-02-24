
# 动画设置组件

这是一个自主封装的动画设置组件,目前在大屏中各模块的动画就是这个组件进行设置,添加动画会出现弹窗,设置对象

:::demo 
```html
 <animationedit :activeObj='activeObj' ></animationedit>

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
        "animations": [
            {
                "name": "左长距进入",
                "type": "fadeInLeftBig",
                "duration": 1,
                "infinite": false,
                "interationCount": 1,
                "delay": 0,
                "isout": 0,
                "allDelayTime": 0
            }
        ],
        "allDelayTime": 0,
        "isOnceAnimation": true
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
        "animations": [
            {
                "name": "左长距进入",
                "type": "fadeInLeftBig",
                "duration": 1,
                "infinite": false,
                "interationCount": 1,
                "delay": 0,
                "isout": 0,
                "allDelayTime": 0
            }
        ],
        "allDelayTime": 0,
        "isOnceAnimation": true
    },
    "index": "c9b830e2-5fd0-4aaf-9a34-e8daee8588b8",
    "zIndex": 0
}
}

}
}
</script>

