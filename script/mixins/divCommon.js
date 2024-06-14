import bem from './bem'
export default {
  mixins: [bem],
  inject: ['App'],
  props: {
    // App: Object, // 用于全局暂停
    ismobile: {
      type: Boolean,
      default: false
    },
    click: Function,
    dataFormatter: Function,

    labelFormatter: Function,
    clickFormatter: {
      type: Function,
      default: () => {
        return {}
      }
    },
    formatter: Function,
    width: {
      type: [Number, String],
      default: 600
    },
    height: {
      type: [Number, String],
      default: 600
    },
    theme: {
      type: String
    },
    animation: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number,
      default: 0
    },
    url: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: true
    },
    dataType: {
      type: Number,
      default: 0
    },
    dataQuery: {
      type: Object,
      default: () => {
        return {}
      }
    },
    url2: {
      type: String
    },
    dataQueryb: {
      type: Object,
      default: () => {
        return {}
      }
    },
    cubeObject: {
      // 当多维度取数时,传的配置
      type: Object,
      default: () => {
        return {}
      }
    },
    homeUrl: {
      type: String
    },
    dataAppend: {
      type: Boolean,
      default: false
    },
    dataMethod: {
      type: String,
      default: 'get'
    },
    id: {
      type: String,
      default: 'main_' + new Date().getTime()
    },
    data: {
      type: [Object, String, Array]
    },
    idData: {
      type: [Object, String, Array]
    },
    component: {
      type: Object,
      default: () => {
        return {}
      }
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      renIndex: 0,
      propQuery: {},
      dataCount: 0,
      headerHeight: '',
      checkChart: '',
      myChart: '',
      dataChart: [],
      dataUrl: '',
      key: false,
      isChart: true,
      echartList: [
        'Common',
        'Map',
        'Pictorialbar',
        'Wordcloud',
        'Scatter',
        'Bar',
        'Linea',
        'Pie',
        'Gauge',
        'Funnel',
        'Radar',
        'Biaxial',
        'Liquidfill',
        'Anibar'
      ] // 需要初始化echart的都要在这里注册
    }
  },
  watch: {
    data: {
      handler() {
        this.updateData()
      },
      deep: true
      // immediate: true
    },
    width() {
      this.updateData()
    },
    height() {
      this.updateData()
    },
    option: {
      handler() {
        this.updateData()
      },
      deep: true
      // immediate: true
    }
  },
  computed: {
    style() {
      let filter = ''
      if (this.option.openShadow) {
        filter = `filter:drop-shadow(${this.option.shadowColor} ${this.option.hShadow}px ${this.option.vShadow}px ${this.option.blur}px);`
      }
      return `width:${this.width}px;height:${this.height}px;${filter}`
    }
  },

  methods: {
    updateData() {
      this.renIndex++
    }
  }
}
