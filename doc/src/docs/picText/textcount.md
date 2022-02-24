

# EchartTextcount 跳动文本框
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-textcount :option="option" :data="data" :width="300" height="300"></avue-echart-textcount>
<script>
export default {
  data() {
      return {
        data: {value: 5000},
        option: {
          animations: [],//动画
          allDelayTime: 0,   // 整体播放时长
          isOnceAnimation: true, // true 动画执行一次 false 无线循环
          decimals: 2,
          digitalCount: 0,
          ontime: false,  // 刷新一次
          currencyType: 1,
          percentile: true, // 千分位显示
          duration: 2,
          delaytime: 1, // 延迟多少秒滚动
          time: 5, 
          frontContent:'',   // 前缀内容
          backunit: '',   //后缀添加 
          "textAlign": "center",
          "fontSize": 26,
          "fontWeight": "normal",
          "color": "#000",
          "borderRadius":0,
          textShadow: false,
          textShadowDistance: 4,
          textShadowDistanceY: 4,
          textShadowblur: 0,
          textShadowColor: '#000000',
        },
      }
    },
}
</script>

```
:::

<script>
export default {
  data() {
      return {
        data: {value: 5000},
        option: {
          animations: [],//动画
          allDelayTime: 0,   // 整体播放时长
          isOnceAnimation: true, // true 动画执行一次 false 无线循环
          decimals: 2,
          digitalCount: 0,
          ontime: false,  // 刷新一次
          currencyType: 1,
          percentile: true, // 千分位显示
          duration: 2,
          delaytime: 1, // 延迟多少秒滚动
          time: 5, 
          frontContent:'',   // 前缀内容
          backunit: '',   //后缀添加 
          "textAlign": "center",
          "fontSize": 26,
          "fontWeight": "normal",
          "color": "#000",
          "borderRadius":0,
          textShadow: false,
          textShadowDistance: 4,
          textShadowDistanceY: 4,
          textShadowblur: 0,
          textShadowColor: '#000000',
        },
      }
    },
}
</script>




