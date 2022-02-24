/**
 *================================================
 * @date  : 2021/06/15
 * @author  : mj
 * @desc    :  来自avue的common,每个初始化的基础组件都会加载这个mixin ,为什么要拿出来?因为这个包含数据监听,请求,等方法,所有需要初始化echart的都可以走这个方法,不懂怎么用?参见echarts-liquidfill水球图形1
 *
 *================================================
 */
import { currencyF, getUrlParams } from '@s/utils/util.js'
import { validatenull } from '@s/utils/validate.js'
import { deepClone, vaildData } from '@s/utils/util.js'
import CubeChartFormater from './CubeChartFormater'
// 导入主题文件
import themeChart from '@p/theme/halloween.project.js'
// import './echarts-tooltip-carousel'; // 动效     //暂时不用
import packages from '../packages'
import bem from './bem'
import dicOption from '../config.js'
const currencyType = dicOption.currencyType
export default {
  mixins: [bem],
  inject: ['App'],
  // 公共组件添加新的props需要经过组长商量同意方可添加, 添加属性按字母顺序添加a-z
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    // App: Object, // 用于全局暂停
    click: Function,
    clickFormatter: Function,
    cubeObject: {
      // 当多维度取数时,传的配置
      type: Object,
      default: () => {
        return {}
      }
    },
    data: {
      type: [Object, String, Array]
    },
    dataAppend: {
      type: Boolean,
      default: false
    },
    dataMethod: {
      type: String,
      default: 'get'
    },
    dataFormatter: Function, // 请求数据返回格式转换
    dataQueryb: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dataQuery: {
      // 发送请求时的参数
      type: Object,
      default: () => {
        return {}
      }
    },
    dataType: {
      // 请求类型
      type: Number,
      default: 0
    },
    eventConfig: {
      // 事件性配置
      type: Object,
      default: () => {
        return {}
      }
    },
    height: {
      type: [Number, String],
      default: 600
    },
    id: {
      type: String,
      default: 'main_' + new Date().getTime()
    },
    idData: {
      type: [Object, String, Array]
    },
    ismobile: {
      type: Boolean,
      default: false
    },
    labelFormatter: Function, // 标签格式转换方法
    linkageClick: Function, // 内置联动转换方法
    linkageFormatter: Function, // 外置联动转换方法
    option: {
      // 图形的一些配置参数
      type: Object,
      default: () => {
        return {}
      }
    },
    themeJson: {
      // echart主题文件
      type: Object,
      default: () => {
        return themeChart
      }
    },
    time: {
      // 动态刷新时间，目前不生效，用于需要定期更新数据
      type: Number,
      default: 0
    },
    url: {
      type: String
    },
    url2: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 600
    }
  },
  data() {
    return {
      data2: null, // 专门为联动设置的参数
      propQuery: {},
      dataCount: 0,
      headerHeight: '',
      checkChart: '',
      myChart: '',
      dataChart: [],
      dataChart2: [],
      dataMesasge: '', // 数据返回的message,需要的取
      dataUrl: '',
      key: false,
      isChart: true,
      echartList: [
        'Progress',
        'Common',
        'Map',
        'Flaymap',
        'Pictorialbar',
        'Wordcloud',
        'Scatter',
        'Bar',
        'Stackbar',
        'Line',
        'Pie',
        'Gauge',
        'Gauge2',
        'Funnel',
        'Radar',
        'Biaxial',
        'Liquidfill',
        'Anibar',
        'Liquidfillfull',
        'Pyramid',
        'Progresscircle'
      ] // 需要初始化echart的都要在这里注册(特别注意!!!!!名字里面只能首字母大写!!!!!)
    }
  },
  watch: {
    style() {
      this.$nextTick(() => {
        this.myChart && this.myChart.resize()
      })
    },
    url: {
      handler(val) {
        /* 这里为什么要转为dataUrl? 因为直接使用url 会引起不必要的执行 */
        this.dataUrl = val || ''
      },
      deep: true,
      immediate: true
    },
    data: {
      handler(newval, old) {
        if (JSON.stringify(newval) !== JSON.stringify(old)) {
          this.updateData()
        }
      },
      deep: true,
      immediate: true
    },
    // 取数类型变化,这里就刷新一下数据
    dataType() {
      this.updateData()
    },
    width() {
      this.updateData()
    },
    height() {
      this.updateData()
    },
    // theme() {
    //   // 这三句一句都不能少
    //   this.myChart.dispose()
    //   this.init()
    //   this.updateData()
    // },
    option: {
      handler() {
        this.updateData()
        // if (this.myChart && this.isChart) {
        //     this.updateData()
        // }
      },
      deep: true,
      immediate: true
    },
    dataQuery(val) {
      if (!validatenull(val)) {
        this.updateData()
      }
    },
    dataQueryb(val) {
      // 期间变化,要重新更新
      if (!validatenull(val)) {
        this.updateData()
      }
    },
    // 指标取数主动变化,这边触发更新一下
    idData(val) {
      if (!validatenull(val)) {
        this.updateData()
      }
    }
  },
  computed: {
    child() {
      return this.eventConfig.child
    },
    dataChartLen() {
      return (this.dataChart || []).length
    },
    name() {
      const result = this.$el.className.replace('avue-echart-', '')
      return result
    },
    isApi() {
      return this.dataType === 1
    },
    isId() {
      return this.dataType === 2
    },
    isIndex() {
      return this.dataType === 3
    },
    isManyDims() {
      return this.dataType === 4
    },
    style() {
      let filter = ''
      if (this.option.openShadow) {
        filter = `filter:drop-shadow(${this.option.shadowColor} ${this.option.hShadow}px ${this.option.vShadow}px ${this.option.blur}px);`
      }
      const obj = {
        width: this.width + 'px',
        height: this.height + 'px',
        filter
      }
      return obj
    }
  },
  mounted() {
    if (!window.themeChart) {
      this.$echarts.registerTheme(
        this.themeJson.themeName,
        this.themeJson.theme
      )
      window.themeChart = this.themeJson.theme // 挂window上,以备后面程序要用它的主题颜色
    }
    this.init()
  },
  methods: {
    init() {
      // 判断是否引入echart包
      if (!this.$echarts) {
        packages.logs('echarts')
        return
      }
      const main = this.$refs[this.id]
      if (main) {
        // 判断是否图表去初始化
        this.isChart = this.echartList.includes(this.name)
        if (this.isChart)
          this.myChart = this.$echarts.init(main, this.themeJson.themeName)
        // , { renderer: 'svg' }
      }
    },
    updateUrl(url) {
      this.dataUrl = url
      this.updateData()
    },
    updateDataChange(val) {
      if (typeof this.dataFormatter === 'function') {
        // console.log(this.dataType, 'this77777')
        this.dataChart = this.dataType === 4 ? val : this.dataFormatter(val) // 切换不同组件会导致数据处理函数混乱,然后格式错误,所以多维度下直接返回原值
        // (function (data) { return data })
      } else {
        this.dataChart = val || []
      }
      // 为了自定义图例/x轴文字,稍加改动
      this.dataChart2 = deepClone(this.dataChart)
      if (this.option.openRename) {
        if (this.option.renamecategories) {
          this.dataChart2.categories = this.option.renamecategories
        }
        if (this.option.renamesubcategories) {
          this.dataChart2.subcategories = this.option.renamesubcategories
        }
        if (this.option.renamelegend) {
          this.option.renamelegend.forEach((a, i) => {
            this.dataChart2.series[i].name = a
          })
        }
      }
      // 处理完成,然后在组件中再判断一次openRename打开了没,决定用dataChart2(true) 还是 dataChart(false)
      if (this.isChart && this.myChart) {
        this.myChart.clear()
        this.bindClick()
      }
      this.updateChart && this.updateChart()
    },
    // 更新数据核心方法
    updateData() {
      this.resetData && this.resetData()
      if (this.key) return
      this.key = true
      this.$nextTick(async () => {
        this.key = false
        if (this.isId || this.isIndex) {
          // ID 或者 index  取数优先
          this.updateDataChange(this.idData)
        } else if (this.isApi || this.isManyDims) {
          // URL 取数排第二 动态数据
          const dataUrl = this.isManyDims ? this.url2 : this.dataUrl
          if (!dataUrl) return
          const result = getUrlParams(dataUrl)
          const url = result.url
          const queray = this.isManyDims ? this.dataQueryb : this.dataQuery
          const params = Object.assign(result.params, queray, this.propQuery)
          if (!this.$axios) {
            packages.logs('axios')
            return
          }
          let res
          try {
            res = await this.$axios[this.dataMethod](
              url,
              this.dataMethod === 'get' ? { params } : params
            )
          } catch (error) {
            console.error('请求出错')
            console.log(error, 'error')
            console.log(
              this.dataMethod,
              url,
              params,
              'this.dataMethod, url, params'
            )
          }
          if (this.isManyDims) {
            // 处理图形转换格式,不同图形有不同的formater
            // console.log(this.cubeObject, this.option, res.data || res.result, '不同图形有不同的formater')
            const data = new CubeChartFormater(
              this.cubeObject,
              this.option,
              res.data || res.result
            )
            // console.log(data, 'data-------------///isManyDims')
            this.updateDataChange(data)
          } else this.updateDataChange(res.data || res.result)
          // tiny 需要返回message,通常是 result 为空
          this.dataMesasge = res.message || ''
        } else {
          // 静态数据, 联动优先,假如有联动数据的话,因为直接修改data会引起vue报错
          this.updateDataChange(this.data2 || this.data)
        }
      })
    },
    getLabelFormatter(name) {
      if (this.labelFormatter) {
        return this.labelFormatter(name, this.dataChart)
      }
      return this.funformatter(name.value)
    },
    // 绑定点击事件
    bindClick() {
      this.myChart.off('click')
      this.myChart.on('click', e => {
        if (e.marker) {
          this.clickFormatter &&
            this.clickFormatter({
              type: this.name,
              name: e.name,
              value: e.value[2] || e.value,
              data: this.dataChart
            })
        }
      })
    },
    /**
    *@desc:解析下钻设置
    *@author:mj
    *@date:2021/08/04
    *@param{item}  点击行参数
      targetId: '', // 下钻id
          pageType: 'screen', // screen或out
          targetUrl: '', // 下钻链接
          way: 'self', // 下钻跳转 类型self 本页面打开 blank 新窗口打开
          params: []// 自定义参数
    *@updateby
    */
    parseDrill(item) {
      const { targetId, pageType, targetUrl, way, params } =
        this.eventConfig.drill
      if (way === 'self') {
        // 本页面
        if (pageType === 'screen') {
          // 大屏
          this.$router.push({
            path: '/view/' + targetId,
            query: { params }
          })
        } else {
          window.open(targetUrl)
        }
      } else {
        // 新开页面
        if (pageType === 'screen') {
          // 大屏
          window.open(window.origin + '/view/' + targetId, '_blank')
        } else {
          window.open(targetUrl, '_blank')
        }
      }
    },
    // 下面俩都是chart的公共的方法,就放这里面共用
    getColor(index, first) {
      const barColor = this.option.barColor || []
      // if (barColor.length == 0) return '';
      if (barColor[index]) {
        const color1 = barColor[index].color1
        const color2 = barColor[index].color2
        if (first) return color2
        if (color2) {
          return {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: color1 // 0% 处的颜色
              },
              {
                offset: 1,
                color: color2 // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
        return color1
      } else {
        return window.themeChart.color[index]
      }
    },
    title() {
      return {
        show: vaildData(this.option.titleShow, false),
        text: this.option.title,
        subtext: this.option.subtext || '',
        top: this.option.titleTop || 'auto',
        left: this.option.titlePostion || 'center',
        padding: [10, 10],
        textStyle: {
          color: this.option.titleColor || '#fff',
          fontSize: this.option.titleFontSize || 14,
          fontWeight: this.option.titleFontWeight || 'bolder'
        },
        subtextStyle: {
          color: this.option.subTitleColor || '#aaa',
          fontSize: this.option.subTitleFontSize || 14
        }
      }
    },
    legend(optionData) {
      return {
        show: vaildData(this.option.legend, true),
        // padding: [10, 10],
        x: (() => {
          // right center left
          switch (this.option.legendPostion) {
            case 'NW':
              return 'left'
            case 'NE':
              return 'right'
            case 'W':
              return 'left'
            case 'E':
              return 'right'
            case 'SW':
              return 'left'
            case 'SE':
              return 'right'
            default:
              return 'center'
          }
        })(),
        y: (() => {
          switch (this.option.legendPostion) {
            case 'W':
              return 'center'
            case 'E':
              return 'center'
            case 'SW':
              return 'bottom'
            case 'S':
              return 'bottom'
            case 'SE':
              return 'bottom'
            default:
              return 'top'
          }
        })(),
        orient: (() => {
          return this.option.legendOrient || 'horizontal'
        })(),
        itemGap: 8,
        itemWidth: this.option.legendIconWidth || 10,
        itemHeight: this.option.legendIconHeight || 10,
        type: 'scroll',
        textStyle: {
          fontSize: this.option.legendFontSize || 12,
          color: this.option.legendColor || '#fff',
          padding: [0, 0, 0, -1]
        },
        data: (() => {
          return optionData.map((ele, index) => {
            // 由于饼图和柱图取数方式不一样,这里多写一个判断,保证legend都显示11
            return {
              name: ele.name, // 支持自定义legend
              icon: this.option.legendDataIcon || 'circle'
            }
          })
        })(),
        formatter: this.labelformatter,
        tooltip: {
          show: true
        }
      }
    },
    getcurrencyLabel() {
      const label = currencyType.find(
        item => item.value === this.option.currencyType
      ).label
      if (label === '无') return ''
      else return label
    },
    tooltipAxis() {
      return {
        tooltip: {
          // 参考线的配置
          show: true,
          trigger: this.option.trigger || 'axis',
          backgroundColor: this.option.tooltipBackgroundColor || '#fff',
          textStyle: {
            fontSize: this.option.tipFontSize || 14,
            color: 'rgba(16,16,16,0.75)'
          },
          // position: [this.option.tooltipPositionx || '35%', this.option.tooltipPositionY || '35%'],
          formatter: params => {
            let st = params[0].name + '<br />'
            params.forEach(obj => {
              st =
                st +
                obj.seriesName +
                ':' +
                (this.option.currencyType === ''
                  ? currencyF(obj.value)
                  : currencyF(obj.value / this.option.currencyType)) +
                this.getcurrencyLabel() +
                '<br />'
            })
            return st
          },
          // 指示器配置
          axisPointer: (() => {
            const a = {
              // 如果选了横和纵,那么就是cross
              type: 'shadow',
              lineStyle: {
                width: this.option.axisPointerWidth || 1,
                color:
                  this.option.axisPointerBorderColor ||
                  'rgba(190, 192, 195, 0.3)'
              },
              label: {
                show: this.option.axisPointerLabelShow // 控制参考线下面的文本标签
              }
            }
            // 两个都开了
            if (this.option.yPointerShow && this.option.xPointerShow) {
              a.type = 'cross'
              return a
            } else if (this.option.yPointerShow) {
              // 否则就显示一个
              a.type = 'line'
              a.axis = 'x'
              return a
            } else if (this.option.xPointerShow) {
              // 否则就显示一个
              a.type = 'line'
              a.axis = 'y'
              return a
            } else return a
          })()
        }
      }
    },
    xAxis() {
      const arrs = [
        {
          show: vaildData(this.option.xAxisShow, true),
          type: this.option.category ? 'value' : 'category',
          axisLine: {
            show: vaildData(this.option.axisLineShow, true),

            lineStyle: {
              color: this.option.xlineColor || '#626C7F',
              type: this.option.xTypeStyle || 'solid'
            }
          },
          offset: this.option.xAxisOffset || 1,
          axisTick: {
            show: this.option.xAxisTickShow
          },
          name: this.option.xAxisName,
          nameLocation: 'end',
          nameGap: this.option.xnameGap || 0,
          nameTextStyle: {
            color: this.option.xAxisNameColor, // #2A2F38
            fontSize: this.option.xAxisNameFontSize
          },
          data: this.dataChart2.categories || this.dataChart.categories,
          inverse: vaildData(this.option.xAxisInverse, false),
          // show: vaildData(this.option.xAxisShow, true),
          splitLine: {
            show: vaildData(this.option.xAxisSplitLineShow, false),
            lineStyle: {
              color: this.option.xAxisSplitLineShowColor || '#ccc',
              type: this.option.xAxisSplitLineShowType || 'dashed'
            }
          },
          axisLabel: {
            show: vaildData(this.option.xShowLabel, true),
            interval: 0, // vaildData(!this.option.xAxisinterval, true), // 强制显示所有标签
            rotate: this.option.xAxisRotate || 0,
            formatter: this.option.category ? this.funformatter : null,
            color: this.option.xnameColor || 'rgba(16,16,16,0.75)', //
            fontSize: this.option.xNameFontSize || 10
          }
        }
      ]
      if (!this.option.category) {
        const obj = {
          position: 'bottom',
          // offset: 40,
          axisLine: {
            onZero: false,
            show: false
          },
          axisTick: {
            show: true,
            length: 80,
            lineStyle: {
              type: 'dotted'
            }
          },
          axisLabel: {
            show: vaildData(this.option.xShowLabel, true),
            margin: 50,
            color: this.option.xnameColor || 'rgba(16,16,16,0.75)',
            fontSize: this.option.xNameFontSize || 16
          },
          data: this.dataChart2.subcategories || this.dataChart.subcategories
        }
        arrs.push(obj)
      }
      return arrs
    },

    yAxis() {
      const arrs = [
        {
          type: this.option.category ? 'category' : 'value',
          offset: this.option.yAxisOffset || 1,
          data: this.dataChart.categories || [],
          axisLabel: {
            interval: 0, // 标签设置为全部显示
            formatter: this.option.category ? null : this.funformatter,
            rotate: this.option.yAxisRotate || 0,
            // show: this.option.yaxisLabelShow , // y轴名字显示
            color: this.option.ynameColor || 'rgba(98,108,127,1)',
            fontSize: this.option.yNameFontSize || 10
          },
          axisTick: {
            show: vaildData(this.option.yAxisTickShow, true)
          },
          name: (() => {
            // 如果轴名称填了,那就用轴自定义名称,否则显示单位
            // 单位自由切换
            let name
            if (this.option.currencyType && this.option.yAxisNameFontSize > 0) {
              name = this.getcurrencyLabel()
              return '单位: ' + name
            } else {
              return ''
            }
          })(),
          nameLocation: 'end',
          nameGap: this.option.ynameGap || 0,
          nameTextStyle: {
            fontWeight: this.option.yAxisNameWeight || 'normal',
            color: this.option.yAxisNameColor,
            fontSize: this.option.yAxisNameFontSize || 0,
            padding: this.option.nameTextPadding || 0
          },
          axisLine: {
            // 是否显示坐标轴轴线。
            show: vaildData(this.option.yAxisLineShow, true),
            lineStyle: {
              color: this.option.ylineColor || '#626C7F',
              type: this.option.yTypeStyle || 'solid',
              width: this.option.yAxisAxisLineWidth || 1 // 轴宽度
            }
          },
          axisPointer: {
            // y轴参考线
            type: 'line',
            lineStyle: {
              width: this.option.axisPointerWidth || 1,
              color:
                this.option.axisPointerBorderColor || 'rgba(190, 192, 195, 0.3)'
            }
          },
          show: vaildData(this.option.yAxisShow, true),
          splitLine: {
            // 坐标轴在 grid 区域中的分隔线。
            show: vaildData(this.option.yAxisSplitLineShow, false),
            lineStyle: {
              color: this.option.yAxisSplitLineShowColor,
              type: this.option.yAxisSplitLineShowType
            }
          }
        }
      ]
      if (this.option.category) {
        const obj = {
          position: 'left',
          // offset: 40,
          axisLine: {
            onZero: false,
            show: false
          },
          axisTick: {
            show: true,
            length: 80,
            lineStyle: {
              type: 'dotted'
            }
          },
          show: vaildData(this.option.yAxisShow, true),
          axisLabel: {
            rotate: 90,
            margin: 80,
            color: this.option.ynameColor || 'rgba(16,16,16,0.75)',
            fontSize: this.option.yNameFontSize || 16
          },
          data: this.dataChart.subcategories
        }
        arrs.push(obj)
      }
      return arrs
    },
    dataZoom() {
      return {
        dataZoom: [
          {
            // 实现缩放功能
            show: true,
            type: 'slider', // inside
            start: 0,
            bottom: 'auto',
            end: (() => {
              if (this.ismobile) {
                const num =
                  this.dataChart.categories.length *
                    this.dataChart.series.length >
                  8
                    ? 800 /
                      (this.dataChart.categories.length *
                        this.dataChart.series.length)
                    : 100
                return num
              } else {
                const num =
                  this.dataChart.categories.length *
                    this.dataChart.series.length >
                  24
                    ? 2400 /
                      (this.dataChart.categories.length *
                        this.dataChart.series.length)
                    : 100
                return num
              }
            })(),
            filterMode: 'filter'
          },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
          }
        ]
      }
    },
    /* 位置 */
    grid() {
      return {
        // bottom: this.option.dataZoomShow ? this.option.gridY2 * 1 + 50 : this.option.gridY2 || 22,
        // 暂留,事实上完全找不到dataZoomShow有任何的可设置地方...?
        bottom: this.option.gridY2 || 22,
        left: this.option.gridX || 1,
        right: this.option.gridX2 || 1,
        top: this.option.gridY || 10,
        containLabel: true
      }
    },
    markPoint() {
      // 最大最小值显示
      return {
        // 最大最小值显示
        data: (() => {
          const max = [
            {
              name: '最大值',
              type: 'max',
              symbolOffset: this.option.symbolRotate === 0 ? [0, -24] : [0, 0],
              symbolRotate: this.option.symbolRotate,
              label: {
                color: '#fff',
                position:
                  this.option.symbolRotate === 0 ? 'inside' : 'insideRight',
                textBorderColor: 'rgba(0, 0, 0, 0.6) 0px 1px 2px' // rgba(0, 0, 0, 0.6) 0px 1px 2px   0px 0px 3px rgba(42,47,56,0.8)
              },
              itemStyle: {
                color: 'rgba(16,16,16,0.75)'
              }
            }
          ]
          const min = [
            {
              name: '最小值',
              type: 'min',
              symbolOffset: this.option.symbolRotate === 0 ? [0, -24] : [0, 0],
              symbolRotate: this.option.symbolRotate,
              label: {
                color: 'rgba(98,108,127,1)',
                position:
                  this.option.symbolRotate === 0 ? 'inside' : 'insideRight'
              },
              itemStyle: {
                color: 'rgba(16,16,16,0.16)'
              }
            }
          ]
          const all = max.concat(min)
          if (this.option.markPointMax && this.option.markPointMin) {
            return all
          }
          let final = []
          if (this.option.markPointMax) {
            final = max
          } else if (this.option.markPointMin) {
            final = min
          }
          return final
        })()
      }
    },

    ishasprop(condition, isprop, alwaysObj) {
      return Object.assign(
        (() => {
          return condition ? isprop : {}
        })(),
        alwaysObj
      )
    },
    // 下面是数值的formater,这里搞个标签的formater,目前只有legend是需要折行显示的,其他也可以添加
    labelformatter(params) {
      let finaldata = ''
      // 超过十个字符就换行展示
      const paramsNameNumber = params.length // 实际标签的个数
      // TODO 暂时设置10个字符折行,后面可以开放可设置
      const provideNumber = this.option.textWidth || 100 // 每行能显示的字的个数,默认非常长
      const rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
      // 条件等同于rowNumber>1
      if (paramsNameNumber > provideNumber) {
        for (let p = 0; p < rowNumber; p++) {
          let tempStr = '' // 表示每一次截取的字符串
          const start = p * provideNumber // 开始截取的位置
          const end = start + provideNumber // 结束截取的位置
          // 此处特殊处理最后一行的索引值
          if (p === rowNumber - 1) {
            // 最后一次不换行
            tempStr = params.substring(start, paramsNameNumber)
          } else {
            // 每一次拼接字符串并换行
            tempStr = params.substring(start, end) + '\n'
          }
          finaldata += tempStr // 最终拼成的字符串
        }
      }
      return finaldata || params
    },
    /**
     * @desc    :1. 数值格式化 (传单值不保留小数,传对象保留两位小数{value:555})
     * @author  : mj
     * @date  : 2021/7/5
     * @update   by
     */
    funformatter(params) {
      // 数值显示是包的对象但是轴标签的是数值
      const isval = typeof params === 'object'
      const digit =
        !this.option.digit && this.option.digit !== 0 ? 2 : this.option.digit
      const data = isval ? params.value : params
      // 如果开启标签百分比显示,那么都先乘100
      // data = this.option.yaxisLabelPecent ? data * 100 : data
      const val = currencyF(data, digit)
      let finaldata = ''
      if (this.option.currencyType) {
        finaldata =
          this.option.currencyType === ''
            ? val
            : currencyF(data / this.option.currencyType, digit)
      } else {
        // 如果开启了百分比显示,那么数值乘100 并带%单位
        finaldata = val
      }

      // 如果开启标签百分比显示,最后加个%符号
      return this.option.yaxisLabelPecent ? finaldata + '%' : finaldata
    },
    /**
     * @desc    :区别上面,就是别的数值既做单位转换,但又不影响Y副轴的数值,还要加%
     * @author  : mj
     * @date  : 2021/7/5
     * @update   by
     */
    pecentformatter(params) {
      // 数值显示是包的对象但是轴标签的是数值
      const isval = typeof params === 'object'
      const digit =
        !this.option.digit && this.option.digit !== 0 ? 2 : this.option.digit
      let data = isval ? params.value : params
      // 如果开启标签百分比显示,那么都先乘100
      // data = this.option.yaxisLabel2Pecent ? data * 100 : data
      data = currencyF(data, digit) // 千分位两位小数
      // 如果开启标签百分比显示,最后加个%符号,这里为什么是yaxisLabel2Pecent?因为yaxisLabelPecent开启会导致主轴都会加%
      return this.option.yaxisLabel2Pecent ? data + '%' : data
    },

    funformatterPie(params) {
      // 饼图的专用方法, 返回 数字+单位+百分比
      const name =
        this.option.currencyType !== '' ? this.getcurrencyLabel() : ''
      const cycle = params.data.cycle ? '(' + params.data.cycle + ')' : '' // 空数据时,不可能有占比的
      return this.funformatter(params) + name + cycle
    }
  },
  beforeDestroy() {
    clearInterval(this.checkChart)
  }
}
