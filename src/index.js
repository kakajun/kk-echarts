/**
*@desc: 这里导入所有组件和方法,本来是分js类注册的,但是奈何,分块之后,export导出不行,这导致不能进行按需导入,比如
 import { baseComon } from '/lib/index.es.js'  所以还是通通在这里注册导入好了
*@author:mj
*@date:2021/09/13
*@updateby
*/
import {
  currencyF,
  apply,
  getUrlParams,
  deepClone,
  setPx,
  vaildData,
  findObject
} from '@s/utils/util.js'
import { validatenull } from '@s/utils/validate.js'
import common from '@s/mixins/common.js'
import divCommon from '@s/mixins/divCommon.js'
import CubeChartFormater from '@s/mixins/CubeChartFormater.js'
import dicOption from '@s/config'
import { version } from '../package.json'
import runAnimations from '@p/toolComponent/animationEdit/runAnimations.js'
import baseComon from '@s/baseComon'

// echart组件库
import AvueEchartBar from '@e/bar'
import AvueEchartStackbar from '@e/stackbar'
import AvueEchartBiaxial from '@e/biaxial'
import AvueEchartCommon from '@e/common'
import AvueEchartFlop from '@e/flop'
import AvueEchartFunnel from '@e/funnel'
import AvueEchartGauge from '@e/gauge'
import AvueEchartGauge2 from '@e/gauge2'
import AvueEchartLine from '@e/linea'
import AvueEchartPie from '@e/pie'
import AvueEchartProgress from '@e/progress'
import AvueEchartPictorialbar from '@e/pictorialbar'
import AvueEchartRadar from '@e/radar'
import AvueEchartScatter from '@e/scatter'
// import AvueEchartAnibar from '@e/anibar'
// import AvueEchartMap from '@e/map'
import AvueEchartLiquidfill from '@e/liquidfill'
import AvueEchartLiquidfillfull from '@e/liquidfillFull' // 水球图充满
import AvueEchartPyramid from '@e/pyramid'
// // picText组件库
import AvueEchartText from '@p/picText/texta'
// import AvueEchartShape from '@p/picText/shape'
import AvueEchartDatetime from '@p/picText/datetime'
import AvueEchartFontset from '@p/picText/fontSet' // 炫彩文本
import AvueEchartImgborder from '@p/picText/imgborder'
import AvueEchartSwiper from '@p/picText/swiper'
import AvueEchartVideo from '@p/picText/video'
import AvueEchartTextcount from '@p/picText/textcount'
import AvueEchartIframe from '@p/picText/iframe'
import AvueEchartProgresscircle from '@e/progresscircle' //
import AvueEchartOdometer from '@p/picText/odometer'
import AvueEchartLineelement from '@p/picText/lineelement'
import AvueCountUp from '@p/picText/countUp/CountUp.vue'
// // 百度地图组件
import AvueEchartFlaymap from '@e/flayMap'
import AvueEchartTabs from '@p/other/tabs' // tab

import Animationedit from '@p/toolComponent/animationEdit'
import Animationlunbo from '@p/toolComponent/animationLunbo'
import Companytree from '@t/companyTree'
import AvueCrud from '@p/other/avueCrud'
import Draggable from '@p/avue/draggable/Draggable.vue'
// 工具区的公共组件
import AvueContentmenu from '@t/common/contentmenu.vue'
import AvueDragbox from '@t/common/dragBox.vue'
import AvueSketchRule from '@t/common/sketch-rule.vue'
// import Manydims from '@t/manyDims'
// import Measureselect from '@t/measureSelect'
// import AvueEchartTable from '@p/other/table' // 表格
// import AvueEchartBtn from '@p/avue/btn' // 表格

/* 被迫提升的avue3个别组件,因为整体升级难度太大 */
import AvueSelect from '@p/avue/select'
import AvueInputNumber from '@p/avue/inputNumber'
import AvueRadio from '@p/avue/radio'
/* 注册组件所需的公共方法 */
const prototypes = {
  currencyF, // 全局千分位分隔
  dicOption, // 字典
  apply, // 对象数组拷贝
  getUrlParams, // 解析参数
  deepClone, // 深拷贝
  setPx,
  vaildData,
  findObject,
  validatenull
}
function install(app) {
  const packages = [
    // AvueEchartShape,
    AvueEchartBar,
    AvueEchartStackbar,
    AvueEchartBiaxial,
    AvueEchartCommon,
    AvueEchartFlop,
    AvueEchartFunnel,
    AvueEchartGauge,
    AvueEchartGauge2,
    AvueEchartLine,
    AvueEchartPie,
    AvueEchartProgress,
    AvueEchartPictorialbar,
    AvueEchartRadar,
    AvueEchartScatter,
    AvueEchartLiquidfill,
    // AvueEchartAnibar,
    // AvueEchartMap,
    AvueEchartLiquidfillfull,
    AvueEchartPyramid,
    AvueEchartProgresscircle,
    // picText组件库
    AvueEchartDatetime,
    AvueEchartFontset,
    AvueEchartImgborder,
    AvueEchartSwiper,
    AvueEchartText,
    AvueEchartTextcount,
    AvueEchartVideo,
    AvueEchartIframe,
    AvueEchartOdometer,
    AvueEchartLineelement,
    AvueCountUp,
    // // 百度地图组件
    AvueEchartFlaymap,
    AvueEchartTabs,

    Animationedit,
    Animationlunbo,

    AvueCrud,
    Companytree,
    AvueContentmenu,
    AvueDragbox,
    AvueSketchRule,
    // Manydims,
    // Measureselect,
    // AvueEchartTable,
    // AvueEchartBtn,
    AvueSelect,
    AvueInputNumber,
    AvueRadio,
    Draggable
  ]
  packages.forEach(item => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })

  Object.keys(prototypes).forEach(key => {
    app.config.globalProperties[key] = prototypes[key]
  })
}

export {
  install,
  common,
  baseComon,
  divCommon,
  runAnimations,
  CubeChartFormater,
  // AvueEchartShape,
  AvueEchartBar,
  AvueEchartStackbar,
  AvueEchartBiaxial,
  AvueEchartCommon,
  AvueEchartFlop,
  AvueEchartFunnel,
  AvueEchartGauge,
  AvueEchartGauge2,
  AvueEchartLine,
  AvueEchartPie,
  AvueEchartProgress,
  AvueEchartPictorialbar,
  AvueEchartRadar,
  AvueEchartScatter,
  AvueEchartLiquidfill,
  // AvueEchartAnibar,
  // AvueEchartMap,
  AvueEchartLiquidfillfull,
  AvueEchartPyramid,
  AvueEchartProgresscircle,
  // picText组件库
  AvueEchartDatetime,
  AvueEchartFontset,
  AvueEchartImgborder,
  AvueEchartSwiper,
  AvueEchartText,
  AvueEchartTextcount,
  AvueEchartVideo,
  AvueEchartIframe,
  AvueEchartOdometer,
  AvueEchartLineelement,
  // // 百度地图组件
  AvueEchartFlaymap,
  AvueEchartTabs,
  Animationedit,
  Animationlunbo,
  AvueCrud,
  Companytree,
  AvueContentmenu,
  AvueDragbox,
  // SketchRule,
  // Manydims,
  // Measureselect,
  // AvueEchartTable,
  // AvueEchartBtn,
  AvueSelect,
  AvueInputNumber,
  AvueRadio,
  Draggable,
  AvueSketchRule
}
export default {
  version,
  install
}
