

# EchartTextbox 文本框
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-text :option="option" :data="data" :width="500" height="1000"></avue-echart-text>
<script>
export default {
  data() {
      return {
        data: {value: '文本框'},
        option: {
          animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: false, // 千分位显示
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'normal',
            color: '#000',
            lineHeight: 0,
            textShadow: false,
            textShadowDistance: 4,
            textShadowblur: 0,
            textShadowColor: '#000000',
            fontFamily: '微软雅黑',
            borderRadius: 30
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
        data: {value: '文本框'},
        option: {
          animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: false, // 千分位显示
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'normal',
            color: '#000',
            lineHeight: 0,
            textShadow: false,
            textShadowDistance: 4,
            textShadowblur: 0,
            textShadowColor: '#000000',
            fontFamily: '微软雅黑',
            borderRadius: 30
        },
      }
    },
}
</script>




