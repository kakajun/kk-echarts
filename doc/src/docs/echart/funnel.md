# EchartFunnel 漏斗图
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-funnel :option="option" :data="data" ></avue-echart-funnel>
<script>
export default {
  data() {
      return {
        data: [{
            value: 335,
            name: '直接访问'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 135,
            name: '视频广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ],
        option: {
        digit: 2,
        radius: true,
        legend: true,
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
        ],
        currencyType: 10000,
        legendColor: "rgba(0, 0, 0, 1)",
        legendFontSize: 16,
        legendPostion: "S",
        subTitleColor: null,
        subtext: "",
        title: "标题文字",
        titleColor: "rgba(0, 0, 0, 1)",
        titleFontSize: 16,
        titlePostion: "center",
        titleShow: true,
        labelShow: true,
        labelShowFontSize: 16,
        labelShowFontWeight: 'bold',
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
        data: [{
            value: 335,
            name: '直接访问'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 135,
            name: '视频广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ],
        option: {
        digit: 2,
        radius: true,
        legend: true,
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
        ],
        currencyType: 10000,
        legendColor: "rgba(0, 0, 0, 1)",
        legendFontSize: 16,
        legendPostion: "S",
        subTitleColor: null,
        subtext: "",
        title: "标题文字",
        titleColor: "rgba(0, 0, 0, 1)",
        titleFontSize: 16,
        titlePostion: "center",
        titleShow: true,
        labelShow: true,
        labelShowFontSize: 16,
        labelShowFontWeight: 'bold',
      },
      }
    },
}
</script>




