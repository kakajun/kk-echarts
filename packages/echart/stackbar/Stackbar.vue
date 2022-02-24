<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Stackbar',
  mixins: [common],
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      tm: '',
      dataChart2: null
    }
  },
  computed: {},
  watch: {},
  beforeUnmount() {
    clearTimeout(this.tm)
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
        animation: this.animation,
        legend: this.legend(optionData.series),
        xAxis: this.xAxis(),
        yAxis: this.yAxis(),
        series: (() => {
          const barColor = this.option.barColor || []
          const list = (optionData.series || []).map((ele, index) => {
            // 这里这样写是因为一旦指定了柱体宽度后,那么柱子宽度就不能再自适应宽度了,所以没制定就让它自适应吧,省的每个都去调
            return Object.assign(
              ele,
              this.ishasprop(
                this.option.barWidth,
                { barWidth: this.option.barWidth || 16 },
                {
                  type: ele.type || 'bar',
                  stack: true,
                  barMinHeight: this.option.barMinHeight || 10,
                  itemStyle: this.ishasprop(
                    barColor.length > 0,
                    { color: this.getColor(index) },
                    {
                      // 表示右上，右下，左下，左上的边框弯曲像素值
                      borderRadius: (() => {
                        const barbarRadius = this.option.barRadius || 0
                        if (this.option.fullRadius) {
                          // 如果全圆角
                          return [
                            barbarRadius,
                            barbarRadius,
                            barbarRadius,
                            barbarRadius
                          ]
                        } else {
                          return this.option.category
                            ? [0, barbarRadius, barbarRadius, 0]
                            : [barbarRadius, barbarRadius, 0, 0]
                        }
                      })()
                    }
                  ),
                  label: {
                    show: vaildData(this.option.labelShow, false), // 开启显示
                    distance: 20, // 条柱之间的距离
                    // labelPosition   主要用在堆积图上,不开放出来
                    position:
                      this.option.labelPosition ||
                      (this.option.category ? 'right' : 'top'), // 'top',//在上方显示,
                    formatter: this.funformatter,
                    // 数值样式
                    fontSize: this.option.valueFontSize || 14,
                    // 如果自己定了颜色，那么就用定好的，否则用渐变，渐变没有？ 那么就用系统配色
                    color:
                      this.option.labelValueColor || this.getColor(index, true),
                    fontWeight: this.option.labelShowFontWeight || 500
                  }
                }
              )
            )
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
      this.myChart.setOption(option)
    }
  }
}
</script>
