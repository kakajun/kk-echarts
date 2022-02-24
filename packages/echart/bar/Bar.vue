<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone, vaildData } from '@s/utils/util.js'
export default {
  name: 'Bar',
  mixins: [common],
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      tm: ''
    }
  },
  mounted() {
    // alert('msg')
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
      // 如果添加象形图标--就是顶上箭头上升下降那货1     mj
      if (this.option.addPictorialBar) {
        const shangsheng =
          'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA/CAYAAACvv+soAAAGkklEQVRoQ8Waa2wUVRTHz7nDPniaPpC4tu5OA4W208qjxnYqaBViBcVX0A+aqDExmqgYJfLFL8QvxmiIjxg1iolvG8MHUAJEIU3oblsrRrstBUp3+6DQFgqlz+3uzDHTApZ22517Z6bu1z3nf/6/nDtn7p0ZhDn6+ep9CzyJ9ONxndROtbHPqbLolPBk3XGYeMZpBPAR0aUhNpTXUxLpdqK280AHlnty0rydAJh5DYCA+mKjYyu7yk9dsBvKWaD6dS55LNaGiLdMNU4EPXHQ8+xefo4BGcvMG884CQBZM3WBkM4NayOru8vO9NjVKWeAjga8Od5FpwAwO5VRIjoXi40V2bX87Ac6vdwj93qbEDEnFcyka6o9vpjWdCrWp5+9QGFwywNKGAFXmIX5DwqiWqJ/bfv69ku8uZPjbQMyrhn3WEYdQygQNURAp2OuMbWrWHz62QKUFcyaPw/S/rACM2n5nY4TlYhOP8tAgaMBL3oX1SJgkWhnpo10oGYtgWr7+gbu5WcJaNnfRQsXDulHAfEOu2Cu6xA1xKRE+dk7my/yaAsDTWxn0g8jYBlPQc7Y44lE/0aeQSEEZFwzLpZ2EAk2cBrkDieiehwa3ti6qbXfTDI30LJDyxbOX7J0PwMsN1PAjhgCvZa8QxXRNdHLqfS4gCZGc9p+huzeVMJ2/09ANegarmgtnr1TpoHGp5l70T5kuMlus6b1iIJX9HjFhbtODsyUYwrIt9+3wJORXomIW0wXdyiQiKr62ejWvpKWK8lKpAQyOgPehXsZsAcc8sgtS0DHhhf0VnTf3j00NXl2oAPLPXKa92cEfJC7qsMJRqdi7r7NXcVdw+b2cuF8d2CA/cAAH3PYm7A8Af0Wp8tbO9XOkWsiyTsUznfLA/gtAtsmXG2OEonoEMUGH4mWR0eNktOB6sEVGFN+YoiPzpEny2WI9N+lpbEtLStaYjcCfQYuuUj5BgGftFxljgWI4GBkifbwDUC+KiXb7dbv4/WChKWI7AXevJniCegigb6DV48xPZhybJsR9QeV5yXEL8zEmooh/ftWtfEpU7FTgmwBkoOFLyPCRyIGkuUQ6c9E1MavRfRsAQqECnYyYO+IGEiWk0jEi9vXN/8pomcLkBxSPkDAV0UMJMsZo1hWp3rqrIieLUCBkLKXgT1j3nhMHCkJZwIC/W9AOSGlHgDXiRiYmqOTvjuqNr4uqmVLh+RQ4TACzBc1MTlP00FtK2sIiWpZB6rMd+dkSzFRA1Pzhj0jN59f29IrqmcZKPPYysVLJHfSswm3KYIjrWoD9419ch3LQHKNsgwJz3ObT5Kgg1YSLW2qtaJlGSgruKrQja5/rJgwcglAG77Sc1P3/dMPbTzaloH8NcobEuF7PEWTxepAH0ZLw9ut6lgGkoNKAyIqVo1YuZnadg1dfUs37VzPC0dEv0bUsC3HfEsd8letlCW3u5UXYNrNFOJytLQ5alXHyLcEFKjJf46RtMeKkfGDmdqweWIuWP9ZAwoWhq2+E9LiCV/bhhPnrKNMKAgD+epzM71xj/AdfXxUo7YjUtL0vl0wloDkUMFDCGyfqBki6KXYwG3XntaI6kzNE+sQAcrBwmZkkCtqJK6PLO8oazkjmj9TnhCQv3alLOni000H7aVoadOndsMIL7mcUMFXAOxZEUM60I/RjvDT8ARoIvmpcrg75KtTsr0atqcSTvY/AdVFOsKqUzBCHQrUFO5mBK9xAxGdbXWHZSiGOHcuRwJXh+TqPD+yedx3dON7nsGYnttb3jTI4U0o1DyQMdlqlCMIeA9PJQMmcnlUhs0ttp1qZ6tvGshfrWyRGP7CBQN0QsocXWM8ROfJsxJrCigrmHurCz2nEGCBmWIERITwebQk/KKZeDtjUgMdhXk5noKDgMzcWZ8ooRFtbytr/MROo2a1UgLJocK3EeAtM4IEUBsbo21dd4c7zMQ7ETMrkNn9GhGMAGhvRtSmj50wyaM5I1CgOn81Y6wOAF0zCRoPNgDoB/IOvmLmKw8eY6KxSYH8ISWPARxDwPQZ7vg6ARxE0ndF1KY60eJO5E0DCgRzVyG6DZiMJAUTALRPB/1dq8/PnICZtvXxh/LWSiAdmvzRuBFEQG1EuCcBsS9FX3M4BTBV93qH/NUFjzNmvMpH71WIfgCsJILvompD1VwZsloHoRIkOVvZhYQ7CegvQDyU0LTDHWVNQUBntvhWTc+69ZGr8zaAJHkGR7pDveW9jm8enYQxtP8FtvBum1viLigAAAAASUVORK5CYII='
        const xiajiang =
          'image://data:image/png;base64,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'
        const chiping =
          'image://data:image/png;base64,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'
        option.series.push({
          name: 'glyph',
          type: 'pictorialBar',
          barGap: '-100%',
          symbolPosition: 'end',
          symbolSize: this.option.pictorialBarFontSize || 64,
          symbolOffset: [0, '-120%'],
          label: {
            show: true,
            fontSize: 16,
            position: 'top',
            formatter: obj => {
              return obj.data.name + obj.data.percent
            }
          },
          data: (() => {
            /*
            如果存在两个系列,那么就计算,公式(1系列-0系列)/0系列
            如果是负的那就用降低图标,反之上升,同时赋值name
            计算的数值存在percent中11
            */
            const tempArrs = [] // 最终返回值
            if (optionData.series && optionData.series.length === 2) {
              const datas1 = optionData.series[0].data
              let datas2 = optionData.series[1].data
              datas2 =
                typeof datas2[0] === 'object'
                  ? datas2.map(item => item.value)
                  : datas2
              datas1.forEach((item, index) => {
                item = typeof item === 'object' ? item.value : item
                let obj = {}
                if (item * 1 === 0) {
                  // 如果上年是0 那就没有增减率,分母不能为0
                  obj = { name: '' }
                } else {
                  const maxData = Math.max(datas2[index], item)
                  const tempData = (datas2[index] - item) / item
                  if (tempData === 0) {
                    obj = {
                      name: '持平',
                      value: maxData * 1.1,
                      symbol: chiping,
                      percent: ''
                    }
                  } else {
                    obj = {
                      name: tempData > 0 ? '上升' : '下降',
                      value: maxData * 1.05,
                      symbol: tempData > 0 ? shangsheng : xiajiang,
                      percent: `：${(tempData * 100).toFixed(2)}%`
                    }
                  }
                }
                tempArrs.push(obj)
              })
            }
            return tempArrs
          })()
        })
      }
      // 如果要动态滚动数字
      if (this.option.numberFresh) {
        const name = this.option.category ? 'xAxis' : 'yAxis'
        const originData = []
        option.series.forEach(obj => {
          if (obj.type === 'bar') {
            originData.push(obj.data)
          }
        })
        const arrs = originData.map(item => Math.max(...item))
        option[name].max = Math.max(...arrs)
        console.log(option[name].max)
        const stayTime = 20
        const stepArrs = originData.map(item =>
          item.map(item2 => item2 / stayTime)
        )
        // console.log(option, '柱图配置');
        for (let i = 0; i <= stayTime; i++) {
          ;(i => {
            this.tm = setTimeout(() => {
              for (let j = 0; j < originData.length; j++) {
                const ele = originData[j]
                for (let index = 0; index < ele.length; index++) {
                  ele[index] = Math.floor(stepArrs[j][index] * i)
                }
              }
              if (i === stayTime) {
                option.series = option.series.map((obj, index) => {
                  if (obj.type === 'bar') {
                    obj.data = originData[index]
                  }
                  return obj
                })
              }
              this.myChart.setOption(option)
            }, 100 * i)
          })(i)
        }
      } else {
        console.log(option, '柱图配置')
        this.myChart.setOption(option)
        // this.myChart.on('finished',() => {
        //   console.log("执行一次")
        // })
      }
    }
  }
}
</script>
