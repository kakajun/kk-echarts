# EchartLine 折线图
:::tip
 1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-line :option="option" :data="data" width="1000"></avue-echart-line>
<script>
export default {
data() {
    return {
      data:{
        categories: ['2016年', '2017年', '2018年'],
        series: [
      {
        name: '净资产收益率(%)',
        data: [14.3954, 13.3465, 12.2993]
      },
      {
        name: '销售(营业)收入增长率(%)',
        data: [0.6328, 0.6328, 12.7763]
      }
    ]
      },
      option: {
             barColor: [
              {
                color1: 'rgba(131,191,246,1)',
                color2: 'rgba(34, 147, 242, 1)',
                postion: 90,
                $index: 0,
                _show: true
              },
              {
                color1: 'rgba(239, 193, 152, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 50,
                $index: 1,
                _show: true
              }
            ],
            barMinHeight: 2,
            barRadius: 8,
            barWidth: null,
            currencyType: 1,
            digit: 2,
            gridX: 15,
            gridX2: 10,
            gridY: 90,
            gridY2: 75,
            labelShow: true,
            labelShowFontSize: 16,
            labelShowFontWeight: 'lighter',
            labelShowWithoutLine: false,
            legend: true,
            legendColor: 'rgba(9, 100, 188, 1)',
            legendFontSize: 14,
            legendOrient: 'horizontal',
            legendPostion: 'S',
            lineColor: 'rgba(238, 238, 238, 1)',
            lineWidth: 3,
            linearDirection: '从上到下',
            nameColor: 'rgba(238, 238, 238, 1)',
            subTitleColor: 'rgba(45, 97, 135, 1)',
            subTitleFontSize: 25,
            symbolSize: 7,
            title: '',
            titleColor: 'rgba(45, 97, 135, 1)',
            titleFontSize: 16,
            titlePostion: 'center',
            titleShow: true,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            xAxisSplitLineShowType: 'dashed',
            xNameFontSize: 16,
            xnameColor: 'rgba(30, 144, 255, 1)',
            yAxisNameColor: 'rgba(45, 97, 135, 1)',
            yAxisNameFontSize: 0, // 14,
            yAxisOffset: 0,
            yAxisShow: true,
            yAxisSplitLineShow: false,
            yAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            yAxisSplitLineShowType: 'dashed',
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(45, 97, 135, 1)',
            ynameGap: 20
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
      data:{
        categories: ['2016年', '2017年', '2018年'],
        series: [
      {
        name: '净资产收益率(%)',
        data: [14.3954, 13.3465, 12.2993]
      },
      {
        name: '销售(营业)收入增长率(%)',
        data: [0.6328, 0.6328, 12.7763]
      }
    ]
      },
      option: {
             barColor: [
              {
                color1: 'rgba(131,191,246,1)',
                color2: 'rgba(34, 147, 242, 1)',
                postion: 90,
                $index: 0,
                _show: true
              },
              {
                color1: 'rgba(239, 193, 152, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 50,
                $index: 1,
                _show: true
              }
            ],
            barMinHeight: 2,
            barRadius: 8,
            barWidth: null,
            currencyType: 1,
            digit: 2,
            gridX: 15,
            gridX2: 10,
            gridY: 90,
            gridY2: 75,
            labelShow: true,
            labelShowFontSize: 16,
            labelShowFontWeight: 'lighter',
            labelShowWithoutLine: false,
            legend: true,
            legendColor: 'rgba(9, 100, 188, 1)',
            legendFontSize: 14,
            legendOrient: 'horizontal',
            legendPostion: 'S',
            lineColor: 'rgba(238, 238, 238, 1)',
            lineWidth: 3,
            linearDirection: '从上到下',
            nameColor: 'rgba(238, 238, 238, 1)',
            subTitleColor: 'rgba(45, 97, 135, 1)',
            subTitleFontSize: 25,
            symbolSize: 7,
            title: '',
            titleColor: 'rgba(45, 97, 135, 1)',
            titleFontSize: 16,
            titlePostion: 'center',
            titleShow: true,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            xAxisSplitLineShowType: 'dashed',
            xNameFontSize: 16,
            xnameColor: 'rgba(30, 144, 255, 1)',
            yAxisNameColor: 'rgba(45, 97, 135, 1)',
            yAxisNameFontSize: 0, // 14,
            yAxisOffset: 0,
            yAxisShow: true,
            yAxisSplitLineShow: false,
            yAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            yAxisSplitLineShowType: 'dashed',
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(45, 97, 135, 1)',
            ynameGap: 20
      }
    }
  }
} 
</script>



