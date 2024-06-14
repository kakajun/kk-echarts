<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone } from '@s/utils/util.js'
export default {
  name: 'Progress',
  mixins: [common],
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      currencyType: [
        { label: '无', value: '' },
        { label: '元', value: 1 },
        { label: '千元', value: 1000 },
        { label: '万元', value: 10000 },
        { label: '亿元', value: 100000000 }
      ]
    }
  },
  computed: {
    styleSuffixName() {
      return {
        paddingTop: this.option.texttop || 30 + '%',
        fontWeight: this.option.suffixFontWeight || 'normal',
        fontSize: (this.option.suffixFontSize || 40) + 'px',
        color: this.option.suffixColor || '#333'
      }
    },
    styleName() {
      return {
        marginBottom: this.option.split + 'px',
        fontWeight: this.option.fontWeight || 'normal',
        fontSize: (this.option.fontSize || 40) + 'px',
        color: this.option.color || '#333'
      }
    },
    type() {
      return this.option.type || 'line'
    },
    color() {
      return this.option.borderColor || '#333'
    },
    color2() {
      return this.option.borderColor2 || 'blue'
    },
    strokeWidth() {
      return this.option.strokeWidth || 14
    }
  },
  watch: {},
  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart)
      const option = {
        animation: true,
        animationDuration(idx) {
          // 越往后的数据时长越大
          return idx * 1500
        },
        title: this.title(),
        grid: this.grid(),
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            margin: 30,
            show: false,
            color: this.option.textColor || '#00F0FF',
            fontSize: 50
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data:
            optionData.innerData && optionData.innerData.map(item => item.name)
        },
        series: [
          /* 外层 */
          {
            type: 'bar',
            barGap: '-65%',
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#000',
                fontSize: 22,
                fontWeight: 'bold',
                formatter: param => {
                  return param.value + ' ' + (this.option.unit || '天')
                }
              }
            },
            barWidth: '28%',
            itemStyle: {
              normal: {
                borderColor: '#00F0FF',
                borderWidth: 2,
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0)'
              }
            },
            z: 1,
            data: optionData.wrapperData
          },
          /* 内层 */
          {
            type: 'bar',
            barGap: '-85%',
            barWidth: '20%',
            itemStyle: {
              normal: {
                barBorderRadius: 16,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#3A7BD5'
                  },
                  {
                    offset: 1,
                    color: '#01d1ff'
                  }
                ])
              }
            },
            max: 1,
            label: {
              normal: {
                color: '#02d6e7', // 公司名称颜色
                show: true,
                position: [0, '-28px'],
                textStyle: {
                  fontSize: 18
                },
                formatter(a) {
                  return a.name
                }
              }
            },
            labelLine: {
              show: false // 一定要关闭,打开了会有异常竖线!!
            },
            z: 2,
            data: optionData.innerData
          }
        ]
      }
      this.myChart.resize()

      this.myChart.setOption(option, true)
    }
  }
}
</script>
