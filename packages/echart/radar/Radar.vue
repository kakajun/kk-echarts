<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Radar',
  mixins: [common],
  props: {
    data: {
      type: Object
    }
  },
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
          optionData.indicator[i].name = a
        })
      }
      let option = {
        title: this.title(),
        animation: this.animation,
        legend: this.legend(optionData.series[0].data),
        radar: {
          name: {
            fontSize: this.option.radarNameSize || 12,
            color: this.option.radarNameColor || '#333'
          },
          center: [
            this.option.radiusx ? this.option.radiusx + '%' : '50%',
            this.option.radiusy ? this.option.radiusy + '%' : '50%'
          ],
          indicator: optionData.indicator || [],
          shape: this.option.shape || 'polygon',

          radius: this.option.radiusW ? this.option.radiusW + '%' : '70%'
        },
        series: (() => {
          const list = [
            {
              type: 'radar',
              barWidth: this.option.barWidth || 16,
              barMinHeight: this.option.barMinHeight || 0,
              itemStyle: {
                borderRadius: this.option.barRadius || 0
              },
              data: (() => {
                return (optionData.series[0].data || []).map((ele, index) => {
                  return {
                    name: ele.name,
                    value: ele.value,
                    label: {
                      show: vaildData(this.option.labelShow, false), // 开启显示
                      fontSize: this.option.labelShowFontSize || 14,
                      color: this.getColor(index),
                      fontWeight: this.option.labelShowFontWeight || 500,
                      formatter: this.funformatter
                    },
                    areaStyle: {
                      color: this.getColor(index),
                      opacity: this.option.areaOpacity || 0.9
                    }
                  }
                })
              })()
            }
          ]
          return list
        })()
      }
      this.myChart.resize()
      if (this.option.tooltipShow) {
        option = Object.assign(option, this.tooltipAxis())
      }
      //   console.log(option, 'radarrrrrrrrrrrr')
      this.myChart.setOption(option, true)
    }
  }
}
</script>
