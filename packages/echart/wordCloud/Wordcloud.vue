<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone } from '@s/utils/util.js'
export default {
  name: 'Wordcloud',
  mixins: [common],
  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart) || []
      const option = {
        animation: this.animation,
        series: [
          {
            type: 'wordCloud',
            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,
            sizeRange: (() => {
              return [
                this.option.minFontSize || 12,
                this.option.maxFontSize || 60
              ]
            })(),
            rotationRange: (() => {
              if (this.option.rotate) {
                return [-90, 90]
              } else {
                return [0, 0]
              }
            })(),
            rotationStep: (() => {
              if (this.option.rotate) {
                return 45
              } else {
                return 0
              }
            })(),
            gridSize: this.option.split || 30,
            drawOutOfBound: false,
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color() {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') +
                  ')'
                )
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            },

            data: optionData
          }
        ]
      }
      this.myChart.resize()
      this.myChart.setOption(option, true)
    }
  }
}
</script>
