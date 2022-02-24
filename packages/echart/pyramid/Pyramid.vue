<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Pyramid',
  mixins: [common],
  data() {
    return {
      config: null,
      mapData: [],
      flushData: null,
      color: ['#45fed4', '#84a9ef', '#f1e04f', '#dbfe73'],
      totalNum: [],
      sum: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    updateChart() {
      if ((!this.dataChart || this.dataChart.length === 0) && this.data) {
        this.dataChart = this.data
      }
      // const optionData = deepClone(this.dataChart)
      const i = Math.round(Math.random() * 100).toFixed(1)
      const option = {
        animation: this.animation,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['92%', '100%'],
            clockWise: !1,
            avoidLabelOverlap: !1,
            hoverAnimation: !1,
            label: {
              normal: {
                show: !0,
                position: 'center',
                textStyle: {
                  fontSize: 14
                },
                formatter: '{c}%'
              }
            },
            labelLine: {
              show: !1
            },
            data: [
              {
                value: i,
                name: '',
                label: {
                  normal: {
                    show: !0
                  }
                }
              },
              {
                value: 100 - i,
                name: '',
                label: {
                  normal: {
                    show: !1
                  }
                }
              }
            ]
          }
        ]
      }
      this.myChart.resize()

      this.myChart.setOption(option, true)
    }
  }
}
</script>
