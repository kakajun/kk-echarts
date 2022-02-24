<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Line',
  mixins: [common],
  mounted() {
    // alert('msg')
    console.log(
      this.myChart,
      'this------------------------------------------------'
    )
  },
  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart)
      // 如果重命名开关没有打开,那么把原数据写进配置
      if (this.option.renamecategories && this.option.openRename) {
        optionData.categories = this.option.renamecategories
      }
      if (this.option.renamesubcategories && this.option.openRename2) {
        optionData.subcategories = this.option.renamesubcategories
      }
      if (this.option.renamelegend && this.option.openRename3) {
        this.option.renamelegend.forEach((a, i) => {
          optionData.series[i].name = a
        })
      }

      let option = {
        title: this.title(),
        grid: this.grid(),
        legend: this.legend(optionData.series),
        xAxis: this.xAxis(),
        animation: this.animation,
        yAxis: this.yAxis(),
        series: (() => {
          const list = (optionData.series || []).map((ele, index) => {
            const barColor = this.option.barColor || []
            return Object.assign(ele, {
              type: 'line',
              smooth: true,
              symbolSize: this.option.symbolSize || 10,
              areaStyle: (() => {
                if (this.option.areaStyle) {
                  return {
                    opacity: 0.7
                  }
                }
              })(),
              lineStyle: {
                width: this.option.lineWidth || 1
              },
              itemStyle: this.ishasprop(
                barColor.length > 0,
                {
                  color: this.getColor(index)
                },
                {}
              ),
              label: {
                show: vaildData(this.option.labelShow, false), // 开启显示
                position: 'top', // 在上方显示,
                // formatter: name => this.getLabelFormatter(name),
                formatter: this.funformatter,
                // 数值样式
                fontSize: this.option.labelShowFontSize || 14,
                // 如果自己定了颜色，那么就用定好的，否则用渐变，渐变没有？ 那么就用系统配色
                color: this.option.labelShowColor || this.getColor(index, true),
                fontWeight: this.option.labelShowFontWeight || 500
              }
            })
          })
          return list
        })()
      }

      this.myChart.resize()
      if (this.option.dataZoomShow) {
        option = Object.assign(option, this.dataZoom())
      }
      if (this.option.tooltipShow) {
        option = Object.assign(option, this.tooltipAxis())
      }
      console.log(option, '线图配置')
      this.myChart.setOption(option)
    }
  }
}
</script>
