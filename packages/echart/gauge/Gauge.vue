<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'

import { deepClone, vaildData, currencyF } from '@s/utils/util.js'
export default {
  name: 'Gauge',
  mixins: [common],
  data() {
    return {}
  },
  computed: {},
  watch: {},

  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart)
      const option = {
        title: this.title(),
        animation: this.animation,
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            startAngle: this.option.startAngle || 225, //  180
            endAngle: this.option.endAngle || -45, // 0

            radius: this.option.radiusW ? this.option.radiusW + '%' : '70%',
            center: [
              this.option.radiusx ? this.option.radiusx + '%' : '50%',
              this.option.radiusy ? this.option.radiusy + '%' : '50%'
            ],
            /* 最大值,内部数据给优先级最高,其次为默认参数给  mj  2020.4.1 */
            min: optionData.min || this.option.gaugeMin || 0,
            max: optionData.max || this.option.gaugeMax || 1,
            splitNumber: this.option.SplitNumber || 10,
            /* 大刻度 */
            splitLine: {
              distance: -20,
              show: vaildData(this.option.splitLineShow, true),
              length: this.option.splitLineLength || 30,
              lineStyle: {
                color: this.option.splitLineColor || '#fff',
                width: 4
              }
            },
            axisLine: {
              lineStyle: {
                color: this.option.guageColor || [
                  [1 / 4, '#FB745B'],
                  [1 / 2, '#FFCC41'],
                  [3 / 4, '#409EFF'],
                  [1, '#7ED321']
                ],
                width: this.option.lineSize || 10,
                length: this.option.axisTickSplitLen || 10
              }
            },
            /* 刻度标签 */
            axisLabel: {
              formatter: p => {
                const str = p + ''
                if (str.indexOf('.') === -1) {
                  return p
                } else {
                  return p.toFixed(2)
                }
              },
              distance: this.option.axisLabeldDistance || -30,
              show: vaildData(this.option.axisLabelShow, true),
              fontSize: this.option.axisLabelFontSize || 10,
              color: this.option.axisLabelColor || '#666666',
              fontFamily: this.option.axisLabelFontFamily || 'Microsoft YaHei'
            },
            /* 小刻度 */
            axisTick: {
              lineStyle: {
                color: '#fff',
                width: 2
              },
              distance: -20,
              show: this.option.axisTickShow,
              splitNumber: this.option.axisTickSplitNumber,
              length: this.option.axisTickLength || 8
            },
            /* 内部标题 */
            title: {
              show: this.option.gaugeTitleShow,
              fontFamily: this.option.textFontFamily,
              offsetCenter: [
                this.option.titleOffsetCenterX,
                this.option.titleOffsetCenterY
              ],
              color: this.option.nameColor,
              fontSize: this.option.nameFontSize || 20
            },
            pointer: {
              length: this.option.pointLength + '%' || '80%',
              width: this.option.pointWidth || 8
            },
            detail: {
              // 最下边数值的设置
              show: vaildData(this.option.detailShow, true),
              offsetCenter: ['0', this.option.detailoffsetCenter || '85%'], // x, y，单位px
              formatter: p => {
                return currencyF(p) + '%'
              },
              // formatter:'{value}',
              color: 'auto',
              fontSize: this.option.valueFontSize || 30
              // color: '#333'
            },
            data: [optionData]
          }
        ]
      }
      this.myChart.resize()
      console.log(JSON.stringify(option), 'centercentercenter')

      // console.log(option, '仪表盘的配置')
      // console.log( this.myChart," this.myChart")
      this.myChart.setOption(option)
    }
  }
}
</script>
