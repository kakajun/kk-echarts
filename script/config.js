// 一些字典的配置,
/*  1.支持在工程里面个性化配置, 最终会合并覆盖到一起,权重以私有工程权重为高
    2.注意这个配置写label在前,value在后,写错会影响合并,仅支持label,value
    3.本配置以大屏配置为主, 不要随意修改,个性化需求请写到私有工程里面   mj 2021/6/17
 */
const dicOption = {
  // 需要说明一下,因为后端和数据库达成一致
  /* ↓ 这里放对象 */
  currencyType: [
    { label: '无', value: '' },
    { label: '%', value: 1 },
    { label: '元', value: '1.00' },
    { label: '千元', value: 1000 },
    { label: '万元', value: 10000 },
    { label: '亿元', value: 100000000 }
  ],
  seriesPosition: [
    { label: '内', value: 'inside' },
    { label: '外', value: 'outside' }
  ],
  line: [
    { label: '线条', value: 'line' },
    { label: '圆环', value: 'circle' }
  ],
  fontWeight: [
    { label: '细', value: 'lighter' },
    { label: '正常', value: 'normal' },
    { label: '加粗', value: 'bold' }
  ],
  border: [
    { label: '无边框', value: '' },
    { label: '内置图片', value: 'img' },
    { label: '内置边框', value: 'border' }
  ],
  textAlign: [
    { label: '居中', value: 'center' },
    { label: '左对齐', value: 'left' },
    { label: '右对齐', value: 'right' }
  ],
  legendPostion: [
    { label: '上', value: 'N' },
    { label: '下', value: 'S' },
    { label: '左', value: 'W' },
    { label: '右', value: 'E' },
    { label: '左上', value: 'NW' },
    { label: '左下', value: 'SW' },
    { label: '右上', value: 'NE' },
    { label: '右下', value: 'SE' }
  ],
  legendAlign: [
    { label: '上', value: 'up' },
    { label: '下', value: 'down' },
    { label: '左', value: 'left' },
    { label: '右', value: 'right' }
  ],
  dataType: [
    { label: '静态数据', value: 0 },
    { label: '接口数据', value: 1 },
    { label: '指标数据', value: 3 }
  ],
  dataTypeLite: [
    { label: '接口数据', value: 1 },
    { label: '指标数据', value: 3 }
  ], // tinymce用,去掉静态数据
  orientList: [
    { label: '横排', value: 'horizontal' },
    { label: '竖排', value: 'vertical' }
  ],
  dataMethod: [
    { label: 'POST', value: 'post' },
    { label: 'GET', value: 'get' }
  ],

  mapType: [{ label: '原生', value: 0 }],
  target: [
    { label: '本窗口', value: '_self' },
    { label: '新窗口', value: '_blank' }
  ],
  swiperType: [
    { label: '普通', value: '' },
    { label: '立体', value: 'card' }
  ],
  swiperIndicator: [
    { label: '外部', value: 'indicator' },
    { label: '不显示', value: 'none' }
  ],
  orientation: [
    { label: '横向', value: '14' },
    { label: '纵向', value: '15' }
  ],
  linetype: [
    { label: '实线', value: 'solid' },
    { label: '虚线', value: 'dashed' }
  ],
  fontFamily: [
    { label: '微软雅黑', value: '微软雅黑' },
    { label: '宋体', value: 'SimSun' },
    { label: '仿宋', value: 'FangSong' },
    { label: '新宋体', value: 'NSimSun' },
    { label: '黑体', value: 'SimHei' },
    { label: '楷体', value: 'KaiTi' },
    { label: '隶书', value: 'LiSu' },
    { label: '幼圆', value: 'YouYuan' },
    { label: '思源宋体', value: 'Source Han Serif' },
    { label: '思源黑体', value: 'Source Han Sans' }
  ],

  // themeList: [{ label: '默认配色', value: 'avue' }, { label: '紫色主题', value: 'macarons' }, { label: '绿色主题', value: 'wonderland' }],
  /* ↓ 下面放单个的 */

  // ↓ 支持调数据的
  dataList: [
    'text',
    'textcount',
    'wordcloud',
    'img',
    'asyncimg',
    'echartsannular',
    'echartsyybar',
    'echartsrankingbar2',
    'echartsColumnLineMixingBar',
    'echartsColumnLineMixingBar2',
    'nkmiyeph',
    'nktagcloud',
    'echarts3dbar',
    'echartspie2',
    'commonecharts',
    'tabs',
    'map',
    'amap',
    'amapthreedimensional',
    'flaymap',
    'bmap',
    'video',
    'pie',
    'pictorialbar',
    'iframe',
    'swiper',
    'flop',
    'bar',
    'stackbar',
    'line',
    'progress',
    'table',
    'gauge',
    'gauge2',
    'funnel',
    'scatter',
    'radar',
    'liquidfill',
    'line2',
    'line3',
    'aniBar',
    'barlinewcl',
    'tinymce',
    'threefourthsround',
    'biaxial'
  ],
  drillList: ['bar'],
  // 多维度
  dimsList: [
    'biaxial',
    'wordcloud',
    'echartsannular',
    'echartsyybar',
    'echartsrankingbar2',
    'echartsColumnLineMixingBar',
    'echartsColumnLineMixingBar2',
    'nkmiyeph',
    'nktagcloud',
    'echarts3dbar',
    'echartspie2',
    'commonecharts',
    'tabs',
    'map',
    'amap',
    'amapthreedimensional',
    'flaymap',
    'bmap',
    'pie',
    'pictorialbar',
    'iframe',
    'swiper',
    'flop',
    'bar',
    'stackbar',
    'line',
    'gauge',
    'gauge2',
    'progresscircle',
    'progress',
    'table',
    'funnel',
    'scatter',
    'radar',
    'line2',
    'line3',
    'aniBar',
    'barlinewcl',
    'liquidfill'
  ],
  // 单位切换
  currencyTypeList: [
    'echartsyybar',
    'textcount',
    'bar',
    'stackbar',
    'pie',
    'line',
    'biaxial',
    'radar',
    'funnel',
    'scatter',
    'flaymap',
    'map',
    'pictorialbar',
    'tinymce',
    'table'
  ],
  // 同柱图一样的option  xy 坐标系
  barList: [
    'bar',
    'stackbar',
    'line',
    'scatter',
    'stackbar',
    'pictorialbar',
    'biaxial'
  ],
  // 标题
  titleList: [
    'bar',
    'stackbar',
    'pie',
    'line',
    'radar',
    'funnel',
    'scatter',
    'flaymap',
    'map',
    'pictorialbar',
    'gauge',
    'gauge2',
    'progresscircle',
    'liquidfill',
    'biaxial'
  ],
  // 标签
  labelList: [
    'bar',
    'stackbar',
    'line',
    'pie',
    'radar',
    'funnel',
    'scatter',
    'biaxial'
  ],
  // 系列
  legendList: [
    'bar',
    'stackbar',
    'pie',
    'flaymap',
    'bmap',
    'line',
    'radar',
    'funnel',
    'scatter',
    'pictorialbar',
    'biaxial'
  ],
  // 颜色选择
  colorList: [
    'bar',
    'stackbar',
    'pie',
    'line',
    'funnel',
    'scatter',
    'radar',
    'biaxial'
  ],
  // 提示
  tipList: [
    'bar',
    'stackbar',
    'pie',
    'line',
    'gauge',
    'funnel',
    'scatter',
    'radar'
  ],
  // 事件编辑, 提示事件,标题事件
  formatterList: [],
  // 自动循环
  loopSeriesList: ['pie'],
  // 雷达系
  radarList: ['radar', 'gauge', 'gauge2', 'pie'],
  // 点击事件
  clickFormatterList: ['map', 'table', 'bar'],
  // 标题事件
  labelFormatterList: [],
  // 点击交互
  eventList: ['tabs'],
  // 联动
  linkageList: [],
  // 阴影
  dropShadowList: ['shape'],
  // 千分位显示
  percentileList: [
    'text',
    'bar',
    'stackbar',
    'pie',
    'flaymap',
    'bmap',
    'line',
    'radar',
    'funnel',
    'scatter',
    'pictorialbar',
    'liquidfill'
  ]
}
export default dicOption
