<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone } from '@s/utils/util.js'
export default {
  name: 'Progresscircle',
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
      const option = {
        title: this.title(),
        grid: this.grid(),
        animation: this.animation,
        legend: this.legend(optionData),
        series: (() => {
          const list = [
            {
              type: 'pie',
              minAngle: 0, // 给个最小角度,防止负数反向把饼图填满了,正值被覆盖到底下
              roseType: this.option.roseType ? 'radius' : '',
              // 圆，半径，值1内圆，值2外圆
              radius: ['55%', '75%'],
              // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
              center: ['50%', '52%'],
              label: {
                show: false,
                position: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                formatter: '{b}\n{c}%'
                // 针对 center 参数校正标签显示位置
                // lineHeight: 3
              },
              data: (() => {
                const list = (optionData[0] && [optionData[0]]) || []
                if (list.length > 0) {
                  list[0].label = {
                    show: true
                  }
                  list.push({
                    value: list[0].value >= 100 ? 0 : 100 - list[0].value,
                    name: ''
                  })
                }
                console.log(list, 'list')
                return list
              })(),
              itemStyle: this.ishasprop(!this.switchTheme, {
                color: params => this.getColor(params.dataIndex)
              })
            }
          ]
          return list
        })()
      }
      this.myChart.resize()
      console.log('环形图配置', option)
      this.myChart.setOption(option)
    }
  }
}
</script>
