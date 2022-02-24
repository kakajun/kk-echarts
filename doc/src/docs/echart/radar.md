

# EchartRadar 雷达图
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<el-button type="primary" @click="option.switchTheme=!option.switchTheme" size="small">{{option.switchTheme?'关闭主题':'打开主题'}}</el-button>
<el-button @click="theme='macarons'" size="small">换紫色主题</el-button>
<el-button @click="theme='wonderland'" size="small">换绿色主题</el-button>
<avue-echart-radar  :theme="theme" :option="option" :data="data" :width="1000"></avue-echart-radar>
<script>
export default {
  data() {
      return {
        theme:'',
        data: {
          indicator: [{
              name: '销售',
              max: 6500
            },
            {
              name: '管理',
              max: 16000
            },
            {
              name: '信息技术',
              max: 30000
            },
            {
              name: '客服',
              max: 38000
            },
            {
              name: '研发',
              max: 52000
            },
            {
              name: '市场',
              max: 25000
            }
          ],
          series: [{
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }]
        },
        option:  {
        areaOpacity: 0.3,
        barColor: [{
          color1: "rgba(86, 74, 163, 1)",
        },
        {
          color1: "rgba(24, 141, 240, 1)",
        }
        ],
        currencyType: 10000,
        digit: 2,
        height: 400,
        labelShow: true,
        labelShowFontSize: 15,
        legend: true,
        legendColor: "rgba(0, 0, 0, 1)",
        legendOrient: "vertical",
        legendPostion: "E",
        radarNameColor: "rgba(45, 97, 135, 1)",
        radarNameSize: 18,
        // radius: "75%",
        shape: "polygon",
        splitNumber: 4,
        subtext: "",
        tipBackgroundColor: "rgba(50,50,50,0.7)",
        tipColor: "rgba(45, 97, 135, 1)",
        title: "标题文字",
        titleColor: "rgba(45, 97, 135, 1)",
        titleFontSize: 30,
        titlePostion: "center",
        titleShow: true,
        width: "100%",
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
        theme:'',
        data: {
          indicator: [{
              name: '销售',
              max: 6500
            },
            {
              name: '管理',
              max: 16000
            },
            {
              name: '信息技术',
              max: 30000
            },
            {
              name: '客服',
              max: 38000
            },
            {
              name: '研发',
              max: 52000
            },
            {
              name: '市场',
              max: 25000
            }
          ],
          series: [{
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }]
        },
        option: {
        areaOpacity: 0.3,
        barColor: [{
          color1: "rgba(86, 74, 163, 1)",
        },
        {
          color1: "rgba(24, 141, 240, 1)",
        }
        ],
        currencyType: 10000,
        digit: 2,
        height: 400,
        labelShow: true,
        labelShowFontSize: 15,
        legend: true,
        legendColor: "rgba(0, 0, 0, 1)",
        legendOrient: "vertical",
        legendPostion: "E",
        radarNameColor: "rgba(45, 97, 135, 1)",
        radarNameSize: 18,
        // radius: "75%",
        shape: "polygon",
        splitNumber: 4,
        subtext: "",
        tipBackgroundColor: "rgba(50,50,50,0.7)",
        tipColor: "rgba(45, 97, 135, 1)",
        title: "标题文字",
        titleColor: "rgba(45, 97, 135, 1)",
        titleFontSize: 30,
        titlePostion: "center",
        titleShow: true,
        width: "100%",
      },
      }
    },
}
</script>





