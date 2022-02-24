# EchartLiquidfill 水球图
:::tip
1.0.1+
::::

```
引入水球图依赖
import "echarts-liquidfill"
```

:::demo 
```html
<avue-echart-liquidfill ref="echart"  :option="config" :data="data" width="1000"></avue-echart-liquidfill>
<script>
export default {
  data() {
      return {
        theme:'',
        data: {
          value: 0.5,
          name: '完成率',
          unit: '%'
        },
        config: {
            aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            digit: 2,
            shape: 'circle', // 填充形状
            borderWidth: 5, // 边框宽度
            borderColor: 'rgba(255, 150, 0, 1)', // 'rgba(68, 68, 68, 1)', //边框颜色
            bgcolor: 'rgba(255,255,255,0.8)', // 图形背景颜色
            waterColor1: 'rgba(252, 214, 6, 1)', // 'rgba(68, 145, 253, 0)',
            waterColor2: 'rgba(250, 179, 0, 1)', // 'rgba(68, 145, 253, 0.25)',
            waterColor3: 'rgba(255, 120, 0, 1)', // 'rgba(68, 145, 253, 1)',
            direction: 'left',
            titlePadding: [5, 0, 0, 0],
            subTitleColor: 'rgba(0, 0, 0, 1)',
            subTitleFontSize: 45,
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 45,
            titlePostion: 'center',
            titleShow: true,
            labelFontSize: 40, // 标签字体大小
            waterOpacity: 1, // 0.5, //波浪透明度
            waterSpeed: 2, // 水流速度
            waveColor: 'rgba(255, 102, 0, 1)', // "#ff6600",
            waterWidth: 10
        }
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
        theme:'',
        data: {
         value: 0.5,
          name: '完成率',
          unit: '%'
        },
        config: {
            aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            digit: 2,
            shape: 'circle', // 填充形状
            borderWidth: 5, // 边框宽度
            borderColor: 'rgba(255, 150, 0, 1)', // 'rgba(68, 68, 68, 1)', //边框颜色
            bgcolor: 'rgba(255,255,255,0.8)', // 图形背景颜色
            waterColor1: 'rgba(252, 214, 6, 1)', // 'rgba(68, 145, 253, 0)',
            waterColor2: 'rgba(250, 179, 0, 1)', // 'rgba(68, 145, 253, 0.25)',
            waterColor3: 'rgba(255, 120, 0, 1)', // 'rgba(68, 145, 253, 1)',
            direction: 'left',
            titlePadding: [5, 0, 0, 0],
            subTitleColor: 'rgba(0, 0, 0, 1)',
            subTitleFontSize: 45,
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 45,
            titlePostion: 'center',
            titleShow: true,
            labelFontSize: 40, // 标签字体大小
            waterOpacity: 1, // 0.5, //波浪透明度
            waterSpeed: 2, // 水流速度
            waveColor: 'rgba(255, 102, 0, 1)', // "#ff6600",
            waterWidth: 10
        }
      }
    },
}
</script>




