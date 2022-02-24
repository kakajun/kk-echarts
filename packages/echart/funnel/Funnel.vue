<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Funnel',
  mixins: [common],
  props: {
    data: {
      type: Array,
      default: () => []
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
              type: 'funnel',
              animationDelay() {
                return Math.random() * 200
              },
              label: {
                show: vaildData(this.option.labelShow, false),
                fontSize: this.option.labelShowFontSize || 14,
                fontWeight: this.option.labelShowFontWeight || 500,
                formatter: this.funformatterPie
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
                  // emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                  // }
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
      console.log(this.myChart, ' this.myChart')
      this.myChart.setOption(option)
    }
  }
}
</script>
