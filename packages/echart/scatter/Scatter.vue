<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Scatter',
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
      if ((!this.dataChart || this.dataChart.length === 0) && this.data) {
        this.dataChart = this.data
      }
      const optionData = deepClone(this.dataChart)
      let option = {
        title: this.title(),
        grid: this.grid(),
        // legend: this.legend(),
        animation: this.animation,
        xAxis: this.xAxis(),
        yAxis: this.yAxis(),
        series: (() => {
          const list = (optionData || []).map((ele, index) => {
            return Object.assign(ele, {
              type: 'scatter',
              itemStyle: {
                color: this.getColor(index)
              },
              label: {
                show: vaildData(this.option.labelShow, false), // 开启显示
                position: 'top',
                fontSize: this.option.fontSize || 14,
                color: this.option.labelShowColor || this.getColor(index, true),
                fontWeight: this.option.labelShowFontWeight || 500
              }
            })
          })
          return list
        })()
      }
      this.myChart.resize()
      if (this.option.tooltipShow) {
        option = Object.assign(option, this.tooltipAxis())
      }
      this.myChart.setOption(option, true)
    }
  }
}
</script>
