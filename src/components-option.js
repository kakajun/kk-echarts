/* 这里组件和option一起写,省得两个文件跳来跳去的 */
// 通用设置组件
import MainOption from '@p/commonOption/Main.vue'
import RightOption from '@p/commonOption/Right.vue'
// echart组件库
import BarOption from '@e/bar/Option.vue'
import StackbarOption from '@e/stackbar/Option.vue'
import BiaxialOption from '@e/biaxial/Option.vue'
import FlopOption from '@e/flop/Option.vue'
import FunnelOption from '@e/funnel/Option.vue'
import GaugeOption from '@e/gauge/Option.vue'
import Gauge2Option from '@e/gauge2/Option.vue'
import LineOption from '@e/linea/Option.vue'
import MapOption from '@e/map/Option.vue'
import PictorialbarOption from '@e/pictorialbar/Option.vue'
import PieOption from '@e/pie/Option.vue'
import ProgressOption from '@e/progress/Option.vue'
import RadarOption from '@e/radar/Option.vue'
import ScatterOption from '@e/scatter/Option.vue'
import WordcloudOption from '@e/wordCloud/Option.vue'
import AnibarOption from '@e/anibar/Option.vue'
import LiquidfillOption from '@e/liquidfill/Option.vue'
import LiquidfillfullOption from '@e/liquidfillFull/Option.vue'
import ProgresscircleOption from '@e/progresscircle/Option.vue'
// picText组件库
import ImgborderOption from '@p/picText/imgborder/Option.vue'
import FontsetOption from '@p/picText/fontSet/Option.vue'
import DatetimeOption from '@p/picText/datetime/Option.vue'
import VideoOption from '@p/picText/video/Option.vue'
import ShapeOption from '@p/picText/shape/Option.vue'
import OdometerOption from '@p/picText/odometer/Option.vue'
import SwiperOption from '@p/picText/swiper/Option.vue'
import TextOption from '@p/picText/texta/Option.vue'
import TextcountOption from '@p/picText/textcount/Option.vue'
import IframeOption from '@p/picText/iframe/Option.vue'
import LineelementOption from '@p/picText/lineelement/Option.vue'
// 百度地图组件
import FlaymapOption from '@e/flayMap/Option.vue'
// 工具区的公共组件
import AnimationlunboOption from '@t/animationEdit/Option.vue'
// other
import TableOption from '@p/other/table/Option.vue'
import TabsOption from '@p/other/tabs/Option.vue'
import BtnOption from '@p/other/btn/Option.vue'
const list = {
  // 通用
  MainOption,
  RightOption,
  // echart组件库
  ShapeOption,
  BarOption,
  StackbarOption,
  BiaxialOption,
  DatetimeOption,
  FlopOption,
  FunnelOption,
  GaugeOption,
  Gauge2Option,
  LineOption,
  MapOption,
  PictorialbarOption,
  PieOption,
  ProgressOption,
  RadarOption,
  ScatterOption,
  LiquidfillOption,
  WordcloudOption,
  AnibarOption,
  LiquidfillfullOption,
  ProgresscircleOption,
  // picText组件库
  ImgborderOption,
  FontsetOption,
  SwiperOption,
  TextOption,
  TextcountOption,
  VideoOption,
  IframeOption,
  OdometerOption,
  LineelementOption,
  // 百度地图组件
  FlaymapOption,
  // 工具区的公共组件

  AnimationlunboOption,
  // other
  TableOption,
  TabsOption,
  BtnOption
}

export default list
