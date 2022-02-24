<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone } from '@s/utils/util.js'
export default {
  name: 'Pie',
  mixins: [common],
  data() {
    return {}
  },
  computed: {},
  watch: {},

  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart)
      if (this.option.renamelegend && this.option.openRename3) {
        this.option.renamelegend.forEach((a, i) => {
          optionData[i].name = a
        })
      }
      let option = {
        title: this.title(),
        grid: this.grid(),
        animation: this.animation,
        legend: this.legend(optionData),
        series: (() => {
          const list = [
            {
              type: 'pie',
              minAngle: 10, // 给个最小角度,防止负数反向把饼图填满了,正值被覆盖到底下
              roseType: this.option.roseType ? 'radius' : '',
              radius: this.option.radius
                ? [
                    this.option.radiusW ? this.option.radiusW + '%' : '40%',
                    this.option.radiusW ? this.option.radiusW + 15 + '%' : '55%'
                  ]
                : this.option.radiusW
                ? this.option.radiusW + '%'
                : '70%',
              center: [
                this.option.radiusx ? this.option.radiusx + '%' : '40%',
                this.option.radiusy ? this.option.radiusy + '%' : '55%'
              ],
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay() {
                return Math.random() * 200
              },
              labelLine: {
                normal: {
                  length: this.option.labelLineLength || 30
                }
              },
              label: {
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                show: this.option.labelShow ?? true,
                position: 'outside',
                // 'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。
                // 'inside' 饼图扇区内部。
                // 'center'
                formatter: p => {
                  // console.log(p, 'p')
                  // (p) => this.funformatterPie(p), // + '({d})%', //'{c}({d})%',
                  const st = `{a|${p.name}}\n{hr|}\n{b|${this.funformatter(
                    p
                  )}}${
                    this.option.currencyType !== ''
                      ? this.getcurrencyLabel()
                      : ''
                  }\n占比{b|${p.percent}%}`
                  return st
                },
                // 数值样式
                fontSize: this.option.labelShowFontSize || 14,
                color: this.option.labelShowColor || '#333',
                fontWeight: this.option.labelShowFontWeight || 500,
                lineHeight: this.option.labelLineHeight || 22,
                padding: [6, 6],
                rich: {
                  a: {
                    fontWeight: this.option.labelShowFontWeight || 500,
                    fontSize: this.option.labelShowFontSize || 18,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: this.option.labelValueColor || '#ff9600',
                    fontSize: this.option.valueFontSize || 18,
                    fontWeight: 'bold',
                    align: 'center'
                  }
                },
                emphasis: {
                  show: true,
                  fontSize: '20',
                  color: 'black',
                  formatter(option) {
                    return option.data.cycle || ''
                  }
                }
              },
              data: (() => {
                let list = optionData
                if (this.option.notCount) {
                  list = list.filter(ele => {
                    if (ele.value !== 0 && ele.value) {
                      return true
                    } else return false
                  })
                }
                if (this.option.sort) {
                  list.sort(function (a, b) {
                    return a.value - b.value
                  })
                }
                return list
              })(),
              itemStyle: this.ishasprop(
                !this.switchTheme,
                {
                  color: params => this.getColor(params.dataIndex)
                },
                {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              )
            }
          ]
          return list
        })()
      }
      this.myChart.resize()
      if (this.option.tooltipShow) {
        option = Object.assign(option, this.tooltipAxis())
      }
      console.log('饼图配置')
      this.myChart.setOption(option, true)

      function createExample(option) {
        // 基于准备好的dom，初始化echarts图表
        // 为echarts对象加载数据
        that.myChart.setOption(option, true)
        console.log(option, '饼图加载optionoption')
      }
      if (this.option.loopSeries) {
        // 要不要加轮播
        createExample(option, {
          loopSeries: true
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Pie {
  &__title {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
