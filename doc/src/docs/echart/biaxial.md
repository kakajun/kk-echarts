# EchartBiaxial 双轴图
:::tip
1. 双轴图适合需要以线柱混合展现的图形,可以在数据中规定type的类型是line还是bar,也可以不用指定,反正默认是最后一个系列数据为线图展现(定死的)
2. 在option中,可以指定yaxisLabel2Pecent=true, 这样子最后一个线图可以以百分比展现
::::



:::demo 
```html
<avue-echart-biaxial ref="echart" :option="config" :data="data" width="1000"></avue-echart-biaxial>
<script>
export default {
  data() {
      return {
        data: {
         categories: ['北京', '上海', '杭州', '深圳', '杭州', '深圳', '广州', '连云港'],
    series: [
      {
        name: '手机品牌',
        type: 'line',
        data: [113176, 134011, 90718, 349011, 95718, 66020, 57134, 46397]
      },
      {
        name: '其他手机品牌',
        data: [11317, 13490, 9058, 13411, 9018, 6520, 5234, 4397]
      },
      {
        name: 'aaaasaaa',
        type: 'line',
        yAxisIndex: 1,
        data: [10317, 10490, 9158, 11411, 9118, 6120, 5134, 3397]
      }
    ]
        },
        config: {
          barColor: [
              {
                color1: 'rgba(255, 120, 0, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 90
              },
              {
                color1: 'rgba(35, 183, 229, 1)',
                color2: 'rgba(86, 74, 163, 1)',
                postion: 50
              },
              {
                color1: 'rgba(30, 144, 255, 1)',
                color2: 'rgba(31, 147, 255, 1)',
                postion: 50
              }
            ],
            yAxisShow2:true,  //右轴显示
            yaxisLabel2Pecent:true,  //最后一个线图可以以百分比展现
            barMinHeight: 2,
            barRadius: 8,
            barWidth: 30,
            currencyType: 10000,
            digit: 2,
            gridX: 21, // 左边距
            gridX2: 11, // 右边距
            gridY: 70, // 上边距//默认需要把标题的位置空着
            gridY2: 54, // 下边距
            height: 600,
            labelShow: true,
            labelShowFontSize: 14,
            labelShowFontWeight: 300,
            labelShowWithoutLine: false,
            legend: true,
            legendColor: 'rgba(0, 0, 0, 1)', // 图例颜色
            legendFontSize: 16, // 图例字号
            legendHeight: 'auto', // 图例高度
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'S', // 图例默认放在下面
            legendalign: 'up', // 图例排齐方式
            lineColor: '#333',
            lineWidth: 0,
            nameColor: '#333',
            numberFresh: true,
            refresh: 3,
            subTitleColor: '',
            subtext: '',
            symbolSize: 0,
            time: 5,
            title: '标题文字',
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 24,
            titlePostion: 'center',
            titleShow: true,
            width: 1200,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisTickShow: true,
            xNameFontSize: 16,
            xnameColor: 'rgba(0, 0, 0, 1)',
            yAxisInverse: false,
            yAxisNameFontSize: 12,
            yAxisOffset: 0,
            yAxisRotate: 0,
            yAxisShow: true,
            yAxisSplitLineShow: false,
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(0, 0, 0, 1)',
            ynameGap: 15
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
        data: {
         categories: ['北京', '上海', '杭州', '深圳', '杭州', '深圳', '广州', '连云港'],
    series: [
      {
        name: '手机品牌',
        type: 'line',
        data: [113176, 134011, 90718, 349011, 95718, 66020, 57134, 46397]
      },
      {
        name: '其他手机品牌',
        data: [11317, 13490, 9058, 13411, 9018, 6520, 5234, 4397]
      },
      {
        name: 'aaaasaaa',
        type: 'line',
        yAxisIndex: 1,
        data: [10317, 10490, 9158, 11411, 9118, 6120, 5134, 3397]
      }
    ]
        },
        config: {
          barColor: [
              {
                color1: 'rgba(255, 120, 0, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 90
              },
              {
                color1: 'rgba(35, 183, 229, 1)',
                color2: 'rgba(86, 74, 163, 1)',
                postion: 50
              },
              {
                color1: 'rgba(30, 144, 255, 1)',
                color2: 'rgba(31, 147, 255, 1)',
                postion: 50
              }
            ],
            yAxisShow2:true,  //右轴显示
            yaxisLabel2Pecent:true,  //最后一个线图可以以百分比展现
            barMinHeight: 2,
            barRadius: 8,
            barWidth: 30,
            currencyType: 10000,
            digit: 2,
            gridX: 21, // 左边距
            gridX2: 11, // 右边距
            gridY: 70, // 上边距//默认需要把标题的位置空着
            gridY2: 54, // 下边距
            height: 600,
            labelShow: true,
            labelShowFontSize: 14,
            labelShowFontWeight: 300,
            labelShowWithoutLine: false,
            legend: true,
            legendColor: 'rgba(0, 0, 0, 1)', // 图例颜色
            legendFontSize: 16, // 图例字号
            legendHeight: 'auto', // 图例高度
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'S', // 图例默认放在下面
            legendalign: 'up', // 图例排齐方式
            lineColor: '#333',
            lineWidth: 0,
            nameColor: '#333',
            numberFresh: true,
            refresh: 3,
            subTitleColor: '',
            subtext: '',
            symbolSize: 0,
            time: 5,
            title: '标题文字',
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 24,
            titlePostion: 'center',
            titleShow: true,
            width: 1200,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisTickShow: true,
            xNameFontSize: 16,
            xnameColor: 'rgba(0, 0, 0, 1)',
            yAxisInverse: false,
            yAxisNameFontSize: 12,
            yAxisOffset: 0,
            yAxisRotate: 0,
            yAxisShow: true,
            yAxisSplitLineShow: false,
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(0, 0, 0, 1)',
            ynameGap: 15
        }
      }
    }
}
</script>




