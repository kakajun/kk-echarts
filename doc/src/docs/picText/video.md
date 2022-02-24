

# EchartVideo 视频
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-video :option="option" :data="data" :width="300" height="300"></avue-echart-video>
<script>
export default {
  data() {
      return {
        data: {value: 'http://www.w3school.com.cn/i/movie.ogg'},
        option: {
          loop: true, // 循环播放
          animations: [], // 动画
          allDelayTime: 0, // 整体播放时长
          isOnceAnimation: true // true 动画执行一次 false 无线循环
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
        data:{value: 'http://www.w3school.com.cn/i/movie.ogg'},
        option: {
          URL: 'http://www.w3school.com.cn/i/movie.ogg',
          loop: true, // 循环播放
          animations: [], // 动画
          allDelayTime: 0, // 整体播放时长
          isOnceAnimation: true // true 动画执行一次 false 无线循环
        },
      }
    },
}
</script>



