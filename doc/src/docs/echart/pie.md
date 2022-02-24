

# EchartPie 饼图
:::tip
 1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html


<avue-echart-pie :option="option" :data="data" width="1000"></avue-echart-pie>
<script>
export default {
  data() {
    return {
      data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
      option: {
        legendDataIcon: 'rect',
        digit: 2,
        legend: true,
        labelShow: true,
        barColor: [{
          color1: "rgba(131,191,246,1)"
        },
        {
          color1: "rgba(35, 183, 229, 1)"
        },
        {
          color1: "rgba(154, 168, 212, 1)"
        },
        {
          color1: "rgba(24, 141, 240, 1)"
        },
        {
          color1: "rgba(86, 74, 163, 1)"
        }
        ],
        legendOrient: 'vertical', // 默认竖排
        legendPostion: 'E', // 图例默认放在右
        legendColor: 'rgba(0, 0, 0, 1)',
        currencyType: 10000,
        titlePostion: 'left', // 标题字体位置
        titleShow: true,
        title: '',
      },
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
      data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
      option: {
        legendDataIcon: 'rect',
        digit: 2,
        legend: true,
        labelShow: true,
        barColor: [{
          color1: "rgba(131,191,246,1)"
        },
        {
          color1: "rgba(35, 183, 229, 1)"
        },
        {
          color1: "rgba(154, 168, 212, 1)"
        },
        {
          color1: "rgba(24, 141, 240, 1)"
        },
        {
          color1: "rgba(86, 74, 163, 1)"
        }
        ],
        legendOrient: 'vertical', // 默认竖排
        legendPostion: 'E', // 图例默认放在右
        legendColor: 'rgba(0, 0, 0, 1)',
        currencyType: 10000,
        titlePostion: 'left', // 标题字体位置
        titleShow: true,
        title: '',
      },
    }
  }
}
</script>




