<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Biaxial',
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
    labelVibisle(type) {
      if (!this.option.labelShowWithoutLine) {
        return vaildData(this.option.labelShow, false)
      } else {
        if (type === 'line') {
          return false
        } else {
          return true
        }
      }
    },

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
        xAxis: this.xAxis(),
        animation: this.animation,
        legend: this.legend(optionData.series),
        yAxis: [
          ...this.yAxis(),
          {
            type: 'value',
            offset: this.option.yAxisOffset || 1,
            data: this.dataChart.categories || [],
            axisLabel: {
              formatter: this.option.yaxisLabel2Pecent
                ? this.pecentformatter
                : this.funformatter,
              rotate: this.option.yAxisRotate || 0,
              color: this.option.ynameColor || 'rgba(98,108,127,1)',
              fontSize: this.option.yNameFontSize || 10,
              fontFamily: this.option.yFontFamily || 'Microsoft YaHei'
            },
            name: this.option.yAxisName2,
            nameLocation: 'end',
            nameGap: this.option.ynameGap || 0,
            // min: (val) =>
            //   this.option.yAxisMinHandel ? this.option.yAxisMin : val.min > 0 ? 0 : val.min,
            // max: (val) =>
            //   this.option.yAxisMaxHandel ? this.option.yAxisMax : Math.round(val.max * 1.1),
            axisLine: {
              // 是否显示坐标轴轴线。
              lineStyle: {
                color: this.option.ylineColor || '#626C7F',
                type: this.option.yTypeStyle || 'solid'
              }
            },
            inverse: vaildData(this.option.yAxisInverse, false),
            show: vaildData(this.option.yAxisShow2, true), // 注意这里,如果不想显示右侧线,就单独关掉这个
            splitLine: {
              // 坐标轴在 grid 区域中的分隔线。
              show: vaildData(this.option.yAxisSplitLineShow, false),
              lineStyle: {
                color: this.option.yAxisSplitLineShowColor,
                type: this.option.yAxisSplitLineShowType
              }
            }
          }
        ],
        series: (() => {
          const count = optionData.series.length
          const list = (optionData.series || []).map((ele, index) => {
            if (count === index + 1) {
              // 反正就是最后一项就是线,不然你选主线混合图干啥?
              ele.type = 'line'
              ele.yAxisIndex = 1
            }
            return Object.assign(ele, {
              type: ele.type || 'bar',
              smooth: vaildData(this.option.smooth, true),
              // barMaxWidth: 100, // 防止值少时，柱子太宽
              barMinWidth: 4,
              barMaxWidth: (() => {
                if (ele.data && ele.data.length === 1) {
                  return '35%'
                } else {
                  return 100
                }
              })(),

              barMinHeight: this.option.barMinHeight || 10, // 防止值过小时，没有鼠标手的问题
              barWidth: this.option.barWidth || 16,
              itemStyle: this.ishasprop(
                !this.switchTheme,
                { color: this.getColor(index) },
                {
                  borderRadius:
                    [this.option.barRadius, this.option.barRadius, 0, 0] || 0
                }
              ),
              symbolSize: this.option.symbolSize || 10,
              areaStyle: (() => {
                if (this.option.areaStyle) {
                  return { opacity: 0.7 }
                }
              })(),
              lineStyle: {
                width: this.option.lineWidth || 1
              },
              label: {
                // show: vaildData(this.option.labelShow, false), //开启显示
                show: this.labelVibisle(ele.type),
                position: this.option.labelShowPosition || 'top', // 正中间
                // 数值样式
                fontSize: this.option.valueFontSize || 14,
                // 如果自己定了颜色，那么就用定好的，否则用渐变，渐变没有？ 那么就用系统配色
                color:
                  this.option.labelValueColor || this.getColor(index, true),
                fontFamily:
                  this.option.labelShowFontFamily || 'Microsoft YaHei',
                formatter:
                  count === index + 1 && this.option.yaxisLabel2Pecent
                    ? this.pecentformatter
                    : this.funformatter
              },
              markLine: this.ishasprop(
                this.option.markLineShow,
                {
                  // 辅助线
                  lineStyle: {
                    normal: {
                      color: 'rgba(81,130,228,1)',
                      width: 1,
                      type: this.option.markLineTypeStyle || 'dashed'
                    }
                  },
                  label: {
                    show: true,
                    position: 'middle',
                    formatter: '{b}:{c}'
                  },
                  data: [
                    {
                      name: '辅助水平线',
                      yAxis: this.option.markLineVal
                    }
                  ]
                },
                {}
              ),
              markPoint: this.markPoint(),
              data: (() => {
                if (this.option.showCategory) {
                  // console.log(ele.data,ele,'双轴图的数据显示--------')
                  ele.data = ele.data.slice(0, this.option.categoryCounter)
                }
                return ele.data
              })()
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
      console.log(option, '双轴图')
      this.myChart.setOption(option, true)
    }
  }
}
</script>
