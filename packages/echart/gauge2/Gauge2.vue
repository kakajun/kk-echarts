<template>
  <!-- 仪表盘类型2 -->
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, currencyF } from '@s/utils/util.js'
export default {
  name: 'Gauge2',
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
            type: 'gauge',
            animation: true,
            animationDuration: 500,
            startAngle: 180,
            endAngle: 0,
            center: [
              this.option.radiusx ? this.option.radiusx + '%' : '50%',
              this.option.radiusy ? this.option.radiusy + '%' : '50%'
            ],
            radius: this.option.radiusW ? this.option.radiusW + '%' : '70%',
            /* 最大值,内部数据给优先级最高,其次为默认参数给  mj  2020.4.1 */
            min: optionData.min || this.option.gaugeMin || 0,
            max: optionData.max || this.option.gaugeMax || 1,
            //   splitNumber: 12,
            itemStyle: {
              color: this.option.gColor,
              shadowColor:
                'rgba(' +
                parseInt(this.option.gColor.substr(1, 2), 16) +
                ',' +
                parseInt(this.option.gColor.substr(3, 2), 16) +
                ',' +
                parseInt(this.option.gColor.substr(5, 2), 16) +
                ', 0.45)', // 'rgba(0,138,255,0.45)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              width: this.option.borderwidth
            },
            pointer: {
              icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
              length: '75%',
              width: 16,
              offsetCenter: [0, '5%']
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: this.option.borderwidth
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 25, // 30,
              color: '#999',
              fontSize: 20,
              formatter: p => {
                return p.toFixed(0)
              }
            },
            title: {
              show: false
            },
            detail: {
              color: this.option.detailColor || 'auto',
              formatter: p => {
                return currencyF(p) + '%'
              },
              offsetCenter: [0, '35%'],
              valueAnimation: true,
              fontSize: this.option.detailFontSize,
              fontWeight: 'bolder'
            },
            data: [optionData]
          }
        ]
      }
      this.myChart.resize()
      console.log(option, '仪表盘的配置')
      this.myChart.setOption(option, true)
    }
  }
}
</script>
