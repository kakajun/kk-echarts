<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { timeWait } from '@s/utils/util.js'
export default {
  name: 'Anibar',
  mixins: [common],
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      colorList: [
        '#e30606',
        '#00ffff',
        '#e30606',
        '#b940c1',
        '#fbb700',
        '#1200fd',
        '#fc00c4',
        '#ff7f21',
        '#e4ff00',
        '#5010af',
        '#556fb5',
        '#f19ec2',
        '#22ac38',
        '#f29b76',
        '#8a8000',
        '#7e0043',
        '#59493f',
        '#286270',
        '#003567',
        '#ac6a00',
        '#00ffff',
        '#e30606',
        '#b940c1',
        '#fbb700',
        '#1200fd',
        '#fc00c4',
        '#ff7f21',
        '#e4ff00',
        '#5010af',
        '#556fb5',
        '#f19ec2',
        '#22ac38',
        '#f29b76',
        '#8a8000',
        '#7e0043',
        '#59493f',
        '#286270',
        '#003567',
        '#ac6a00'
      ], // 颜色池
      dataColorObj: {}, // 这里动态生成颜色对照列表,方便后面柱图和名字颜色对上号
      restableData: [], // 柱状数据
      //   numpng: [], // 右下角的0-9数字图片地址数组
      //   yearIdList: [], // 存年份的[2,0,2,1]这样
      myChart: null,
      categories: [], // y轴名字
      curyear: new Date().getFullYear() - 11,
      endyear: new Date().getFullYear() - 1,
      //   icon: require('@a/logo/jsnk.png'),
      splitLineColorArr: ['transparent', '#d7d7d7'] // 分割线的颜色,0那里不显示,所以给透明,其他都给一样的灰色
    }
  },
  async mounted() {
    // this.setNum()
    // for (let i = 0; i < 20; i++) {
    //   this.splitLineColorArr.push(this.splitLineColorArr[1])
    // }
    // let flag = true
    // for (var i = this.curyear; i < this.endyear; ++i) {
    //   // 每次更新
    //   let res = await this.getDataByYear(i, flag)
    //   flag = false
    //   if (!res) return // 数据都没得,不渲染了
    //   this.updateData()
    //   this.setyear(i)
    //   await this.App.checkPause(this.option.updateFrequency) // 是不是按了暂停键
    // }
  },
  methods: {
    // 找到对应的图片
    // setNum() {
    //   for (let index = 0; index < 10; index++) {
    //     let img = require(`./num/${index}.png`)
    //     this.numpng.push(img)
    //   }
    // },
    // 年份的显示,只要传2018进去
    // setyear(val) {
    //   this.yearIdList = []
    //   val = parseInt(val)
    //   let arr = (val + '').split('')
    //   //   console.log(arr, "arrarrarr");
    //   arr.forEach((ele) => {
    //     this.yearIdList.push(this.numpng[ele * 1])
    //   })
    // },
    // 请求得到每一年的数据
    async getDataByYear(syear, isfirst = false) {
      //   let res = await query_farmland(syear, this.option.dataType)
      const res = this.data[syear]
      const totalArr = res.map(item => item.BQ)
      // eslint-disable-next-line no-eval
      const totalSum = eval(totalArr.join('+'))
      if (totalSum * 1 === 0) return // 如果查出来的数据都是0 ,那么别往下走了,没数据了
      //   console.log(res, "resres");
      this.restableData = res.map(item => {
        if (item.SNAME.indexOf('新疆') > -1) {
          return { name: item.SNAME, value: item.BQ < 0 ? 0 : item.BQ } // 新疆的就叫 新疆兵团
        } else if (item.SNAME.indexOf('上海') > -1) {
          return {
            name: item.SNAME + '光明',
            value: item.BQ < 0 ? 0 : item.BQ
          } // 上海光明
        } else if (item.SNAME.indexOf('北京') > -1) {
          return {
            name: item.SNAME + '首农',
            value: item.BQ < 0 ? 0 : item.BQ
          } // 北京首农
        } else if (item.SNAME.indexOf('天津') > -1) {
          return {
            name: item.SNAME + '食品',
            value: item.BQ < 0 ? 0 : item.BQ
          } // 天津食品
        } else {
          return {
            name: item.SNAME + '农垦',
            value: item.BQ < 0 ? 0 : item.BQ
          }
        }
      })
      this.categories = this.restableData.map(item => item.name)
      if (isfirst) {
        // 如果是第一次,name给每个柱子附上颜色把
        this.restableData.forEach((ele, index) => {
          this.dataColorObj[ele.name] = this.option.colorList[index]
        })
        // console.log(this.dataColorObj, "resres@@@@@@@@@@@@@@@@@");
      }
      return this.restableData
    },

    // 设置柱图
    async updateChart() {
      // for (var i = this.curyear; i < this.endyear; ++i) {
      for (let i = 2014; i < 2020; ++i) {
        let res
        console.log(i, 'i')
        if (i === 2014) {
          res = this.getDataByYear(i, true)
        } else {
          res = this.getDataByYear(i)
        }
        if (!res) return // 数据都没得,不渲染了
        this.updateDatas()
        if (i !== 2014) await timeWait(2000)
        //   this.setyear(i)
      }
    },
    updateDatas() {
      //   function getFlag(countryName) {
      //     if (countryName.indexOf('江苏') > -1) {
      //       return '{Icon|}    '
      //     } else return ''
      //   }
      const option = {
        animation: this.animation,
        grid: {
          top: 42,
          bottom: 30,
          left: 150,
          right: 80
        },
        xAxis: {
          label: {
            formatter(n) {
              return Math.round(n)
            }
          },
          axisLabel: {
            // ---坐标轴 刻度
            show: true, // ---是否显示
            margin: -640,
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#afafaf',
            fontSize: 18,
            fontWeight: 'bolder'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: this.splitLineColorArr,
              width: 2
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: 10,
          data: this.categories,
          axisLabel: {
            show: true,
            fontSize: 20,
            color: name =>
              name.indexOf('江苏') > -1
                ? '#08903e'
                : this.dataColorObj[name] || '#5470c6',
            formatter(value) {
              return value // getFlag(value) + value
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5
              }
              //   Icon: {
              //     height: 30,
              //     align: 'left',
              //     backgroundColor: {
              //       image: this.icon,
              //     },
              //   },
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color: param =>
                param.name.indexOf('江苏') > -1
                  ? '#08903e'
                  : this.dataColorObj[param.name] || '#5470c6'
            },
            data: this.restableData,
            barWidth: 36,
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              // fontFamily: 'monospace'
              fontSize: 20,
              color: 'auto' // 重要,自适应颜色,这里写不了方法
            }
          }
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: 300,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
        // TODO   这里不要删除,这是右下角重要的标识,假如不放图片,那就直接放文字就好了
        // graphic: {
        //   elements: [{
        //     type: 'text',
        //     right: 160,
        //     bottom: 60,
        //     style: {
        //       text: startYear,
        //       font: 'bolder 80px monospace',
        //       fill: 'rgba(100, 100, 100, 0.25)'
        //     },
        //     z: 100
        //   }]
        // }
      }
      this.myChart.setOption(option)
    }
  }
}
</script>
