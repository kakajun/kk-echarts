<template>
  <!-- 水球图充满容器 -->
  <div :ref="id" :class="b()" :style="style"></div>
</template>
<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Liquidfillfull',
  mixins: [common],
  props: {
    borderColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    updateChart() {
      const option = {
        animation: this.animation,
        series: [
          {
            type: 'liquidFill',
            data: [this.dataChart.value / 100 + 0.05], // 加0.05 只是为了100%时充满容器
            radius: '100%',
            waveLength: '90%',
            waveHeight: '10',
            amplitude: 8,
            outline: { show: false },
            backgroundStyle: {
              color: this.option.bgcolor || '#1b1143',
              borderColor: this.option.borderColor || this.borderColor,
              borderWidth: this.option.borderWidth || 6,
              //   shadowColor: 'rgba(0, 3, 0, 1)',
              shadowBlur: 20
            },
            // path代码粘贴到此处,代码的多少取决于图形的复杂度
            // shape:this.option.shape || "path://M0 0h3891.2v1024H0z",  //svg格式的path路径
            shape: 'container', // 容器当做水球图
            color: [this.option.shadowColor || this.borderColor],
            label: { normal: { formatter: '' } }
          }
        ]
      }
      // this.myChart.resize();
      this.myChart.setOption(option)
    }
  }
}
</script>
