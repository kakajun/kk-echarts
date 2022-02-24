<template>
  <div>
    <div
      :class="
        b({
          active: (active || overActive) && !readonly,
          move: moveActive,
          click: disabled
        })
      "
      @mousedown.stop="handleMove"
      @mouseover.stop="handleOver"
      @mouseout.stop="handleOut"
      ref="rotateContainer"
      :style="[styleName, { transform: 'rotate(' + rotateDeg2 + 'deg)' }]"
    >
      <div
        v-if="(active || moveActive) && !readonly && !disabled"
        :style="styleMenuName(top)"
        class="editor-obj-tools"
      >
        <el-tooltip placement="top" effect="light" content="复制">
          <i
            class="el-icon-copy-document btn-obj"
            @click="$emit('coppycp')"
          ></i>
        </el-tooltip>
        <el-tooltip placement="top" effect="light" content="删除">
          <i class="el-icon-delete btn-obj" @click="$emit('deletecp')"></i>|
        </el-tooltip>
      </div>
      <!-- 旋转的按钮 -->
      <div
        v-if="(active || moveActive) && !readonly && !disabled"
        :class="b('rotate')"
      >
        <el-tooltip placement="top" effect="light" content="旋转">
          <i
            class="el-icon-refresh"
            :class="b('rotate-icon')"
            @mousedown.stop="handleRotate"
          ></i>
        </el-tooltip>
      </div>
      <div :class="b('wrapper')" ref="wrapper">
        <template v-if="!disabled && !readonly">
          <!-- 左上两条定位线 -->
          <!-- <template v-if="active || overActive || moveActive"> -->
          <!-- <template v-if="moveActive">
          <div :style="[styleLineName,{transform:'rotate('+ rotateDeg3 + 'deg)'}]"
               :class="b('line', ['left'])" />
          <div :style="[styleLineName,{transform:'rotate(' +rotateDeg3 + 'deg)'}]"
               :class="b('line', ['top'])" />
          <div :class="b('line', ['label'])"
               :style="styleLabelName">
            {{ baseLeft }},{{ baseTop }}
          </div>
        </template> -->
          <!-- 八个圆点拖拽 -->
          <template>
            <div v-for="(item, index) in rangeList" :key="index">
              <div
                :class="b('range', [item.classname])"
                v-if="active"
                :style="[styleRangeName, getRangeStyle(item.classname)]"
                @mousedown.stop="rangeMove($event, item.classname)"
              ></div>
            </div>
          </template>
          <!-- 目录 -->
          <div
            :class="b('menu')"
            :style="styleMenuName"
            v-show="active || overActive"
          >
            <slot name="menu" :zIndex="zIndex" :index="index" />
          </div>
          <!-- 遮罩 -->
          <div :class="b('mask')" />
        </template>

        <!-- 内容 -->
        <div :class="b('item')" ref="item">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFixed } from '@s/utils/util.js'
import divCommon from '@s/mixins/divCommon.js'
export default {
  name: 'Draggable',
  mixins: [divCommon],
  props: {
    index: {
      type: [String, Number]
    },
    scale: {
      type: Number,
      default: 1
    },
    readonly: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    zIndex: {
      type: [Number, String],
      default: 1
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    rotateDeg: {
      type: Number,
      default: 0
    },
    shift: {
      type: Boolean,
      default: false
    }
  },
  emits: ['deletecp', 'coppycp', 'out', 'over', 'focus', 'blur'],
  data() {
    return {
      baseWidth: 0,
      baseHeight: 0,
      baseLeft: 0,
      baseTop: 0,
      children: {},
      moveActive: false,
      overActive: false,
      rangeActive: false,
      active: false,
      rotateDeg2: 0, // 这个为过渡旋转
      keydown: null,
      rangeList: [
        {
          classname: 'left'
        },
        {
          classname: 'right'
        },
        {
          classname: 'top'
        },
        {
          classname: 'bottom'
        },
        {
          classname: 'top-left'
        },
        {
          classname: 'top-right'
        },
        {
          classname: 'bottom-left'
        },
        {
          classname: 'bottom-right'
        }
      ]
    }
  },
  computed: {
    rotateDeg3() {
      return 90 - this.rotateDeg2
    },
    scaleVal() {
      return this.scale
    },

    styleLineName() {
      return {
        transformOrigin: '0% 0%',
        borderWidth: this.setPx(this.scaleVal)
      }
    },
    styleRangeName() {
      const calc = 10 * this.scaleVal
      return {
        width: this.setPx(calc),
        height: this.setPx(calc)
      }
    },
    styleLabelName() {
      return {
        fontSize: this.setPx(18 * this.scaleVal)
      }
    },
    styleName() {
      return {
        zIndex: this.zIndex,
        top: this.setPx(this.baseTop),
        left: this.setPx(this.baseLeft),
        width: this.setPx(this.baseWidth),
        height: this.setPx(this.baseHeight),
        transformOrigin: 'center center',
        transform: 'rotate(' + this.rotateDeg2 + 'deg)'
      }
    }
  },
  watch: {
    active(val) {
      if (!val) {
        document.onkeydown = this.keydown
      }
    },
    width(val) {
      this.baseWidth = getFixed(val) || this.children.offsetWidth
    },
    height(val) {
      this.baseHeight = getFixed(val) || this.children.offsetHeight
    },
    left(val) {
      this.baseLeft = getFixed(val)
    },
    top(val) {
      this.baseTop = getFixed(val)
    },
    baseWidth(val) {
      this.$refs.wrapper.style.width = this.setPx(val)
      if (this.resize && this.children.style) {
        this.children.style.width = this.setPx(val)
      }
    },
    baseHeight(val) {
      this.$refs.wrapper.style.height = this.setPx(val)
      if (this.resize && this.children.style) {
        this.children.style.height = this.setPx(val)
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    styleMenuName(top) {
      return {
        top: top < 50 ? 0 : -this.scaleVal * 24 + 'px',
        transformOrigin: '0 0',
        transform: `scale(${this.scaleVal})`
      }
    },

    init() {
      this.children = this.$refs.item.firstChild
      this.baseWidth = getFixed(this.width) || this.children.offsetWidth
      this.baseHeight = getFixed(this.height) || this.children.offsetHeight
      this.baseLeft = getFixed(this.left)
      this.baseTop = getFixed(this.top)
      this.keydown = document.onkeydown
      this.rotateDeg2 = this.rotateDeg || 0
    },
    getRangeStyle(postion) {
      const calc = (10 * this.scaleVal) / 2
      const result = {}
      const list = postion.split('-')
      list.forEach(ele => {
        result[ele] = this.setPx(-calc)
      })
      return result
    },
    setOverActive(val) {
      this.overActive = val
    },
    setActive(val) {
      this.active = val
    },
    rangeMove(e, position) {
      console.log('rangeMove')
      if (this.disabled || this.readonly) return
      //移动的方向
      let x, y
      //移动的位置
      let xp, yp
      //移动的正负1
      let xc, yc
      this.rangeActive = true
      this.handleMouseDown()
      let disX = e.clientX
      let disY = e.clientY
      document.onmousemove = e => {
        this.moveActive = true
        if (position === 'right') {
          x = true
          y = false
        } else if (position === 'left') {
          x = true
          xp = true
          xc = true
          y = false
        } else if (position === 'top') {
          x = false
          y = true
          yp = true
          yc = true
        } else if (position === 'bottom') {
          x = false
          y = true
        } else if (position === 'bottom-right') {
          x = true
          y = true
        } else if (position === 'bottom-left') {
          x = true
          y = true
          xp = true
          xc = true
        } else if (position === 'top-right') {
          x = true
          y = true
          yp = true
          yc = true
        } else if (position === 'top-left') {
          x = true
          y = true
          xp = true
          xc = true
          yp = true
          yc = true
        }
        const left = e.clientX - disX
        const top = e.clientY - disY
        disX = e.clientX
        disY = e.clientY
        if (x) {
          let calc = left * this.step
          if (xc) calc = -calc
          if (xp) this.baseLeft = getFixed(this.baseLeft - calc)
          this.baseWidth = getFixed(this.baseWidth + calc)
        }
        if (y) {
          let calc = top * this.step
          if (yc) calc = -calc
          if (yp) this.baseTop = getFixed(this.baseTop - calc)
          this.baseHeight = getFixed(this.baseHeight + calc)
        }
      }
      this.handleClear()
    },
    handleOut() {
      this.overActive = false
      this.$emit('out', {
        index: this.index,
        width: this.baseWidth,
        height: this.baseHeight,
        left: this.baseLeft,
        top: this.baseTop
      })
    },
    handleOver() {
      if (this.disabled || this.readonly) return
      this.overActive = true
      this.$emit('over', {
        index: this.index,
        width: this.baseWidth,
        height: this.baseHeight,
        left: this.baseLeft,
        top: this.baseTop
      })
    },
    handleMove(e) {
      if (this.disabled || this.readonly) return
      this.active = true
      this.handleMouseDown()
      let disX = e.clientX
      let disY = e.clientY
      document.onmousemove = e => {
        const left = e.clientX - disX
        const top = e.clientY - disY
        disX = e.clientX
        disY = e.clientY
        this.baseLeft = getFixed(this.baseLeft + left * this.step)
        this.baseTop = getFixed(this.baseTop + top * this.step)
      }
      this.handleClear()
    },
    handleClear() {
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        this.handleMouseUp()
      }
    },
    handleMouseDown(e) {
      this.moveActive = true
      this.$emit('focus', {
        index: this.index,
        width: this.baseWidth,
        height: this.baseHeight,
        left: this.baseLeft,
        top: this.baseTop
      })
    },
    handleMouseUp() {
      this.moveActive = false
      this.rangeActive = false
      this.$emit('blur', {
        index: this.index,
        rotateDeg: this.rotateDeg2,
        width: this.baseWidth,
        height: this.baseHeight,
        left: this.baseLeft,
        top: this.baseTop
      })
    },
    /**
     * @desc    : 旋转点击事件
     * @author  : mj
     * @date  : 2021/04/25
     * @update   by
     */
    handleRotate(e) {
      const cenX = this.left + this.width / 2 // 中心坐标x
      const cenY = this.top + this.height / 2
      /* 难点2 为什么要用pageX 而不用clientX, 因为有滚动条的情况下,clientX定位是视口对鼠标的定位,那么视口原点,绝对不是我们
          需要的绝对原点*/
      const aw = e.pageX - cenX //A点宽度
      const ah = e.pageY - cenY //A点高度
      const rad = Math.atan2(ah, aw)
      document.onmousemove = event => {
        const bw = event.pageX - cenX //B点宽度
        const by = event.pageY - cenY
        // 算移动后的弧度
        const lastRad = Math.atan2(by, bw)
        // 这里算出由a点-b点的旋转角度加上之前的旋转角度就是现在的,只要不放鼠标,这个旋转角度的初始值就是之前的
        //两点间的弧度    ( lastRad-rad)   然后弧度转角度(之前就是弧度没转角度,一直卡了很久,transform的单位是角度)
        const temp = parseInt(
          this.rotateDeg + ((lastRad - rad) * 180) / Math.PI
        )
        this.rotateDeg2 = this.setRotateDeg(temp)
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        this.handleMouseUp()
      }
    },
    /**
     *@desc:这里对一些近似的角度多处理
     *@author:mj
     *@date:2021/08/10
     *@updateby
     */
    setRotateDeg(rotateDeg) {
      if (this.shift) {
        if (rotateDeg > -5 && rotateDeg < 5) return 0
        if (rotateDeg > 85 && rotateDeg < 95) return 90
        if (rotateDeg > -95 && rotateDeg < -85) return -90
        else return rotateDeg
      } else return rotateDeg
    }
  }
}
</script>
<style lang="scss" scoped>
// @import url('./draggable.scss');
.Draggable {
  $active__color: rgba(115, 170, 229, 0.5);
  //   padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  &--active {
    cursor: move;
    background-color: $active__color;
    border: 1px dashed #09f;
  }

  &--click {
    cursor: pointer;
  }

  &__line {
    &--left {
      position: absolute;
      top: 0;
      width: 10000px;
      height: 0;
      border-top: 1px dashed #09f;
      //   transform: translateX(-100%);
    }

    &--top {
      position: absolute;
      left: 0;
      width: 0;
      height: 10000px;
      border-left: 1px dashed #09f;
      //   transform: translateY(-100%);
    }

    &--label {
      position: absolute;
      top: -5px;
      left: -8px;
      padding: 5px;
      font-size: 18px;
      color: #09f;
      white-space: nowrap;
      cursor: move;
      transform: translate(-100%, -100%);
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    background-color: #409eff;
  }

  &__rotate {
    position: absolute;
    bottom: -40px;
    left: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid rgb(210, 216, 222);
    border-radius: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
  }

  &__rotate-icon {
    position: absolute;
    top: 2px;
    margin-left: 1px;
    cursor: pointer;
  }

  &__range {
    $calcheight: -6px;
    position: absolute;
    z-index: 9999;
    width: 10px;
    height: 10px;
    background-color: #09f;
    border-radius: 100%;

    &--left,
    &--right {
      &:hover {
        cursor: ew-resize;
      }

      top: 50%;
      transform: translateY(-50%);
    }

    &--left {
      left: $calcheight;
    }

    &--right {
      right: $calcheight;
    }

    &--top,
    &--bottom {
      &:hover {
        cursor: ns-resize;
      }

      left: 50%;
      transform: translateX(-50%);
    }

    &--top {
      top: $calcheight;
    }

    &--bottom {
      bottom: $calcheight;
    }

    &--bottom-right,
    &--top-left {
      &:hover {
        cursor: nwse-resize;
      }
    }

    &--bottom-left,
    &--top-right {
      &:hover {
        cursor: nesw-resize;
      }
    }

    &--top-right {
      top: $calcheight;
      right: $calcheight;
    }

    &--top-left {
      top: $calcheight;
      left: $calcheight;
    }

    &--bottom-right {
      right: $calcheight;
      bottom: $calcheight;
    }

    &--bottom-left {
      bottom: $calcheight;
      left: $calcheight;
    }
  }

  .editor-obj-tools {
    position: absolute;
    bottom: 100%;
    left: 0;
    z-index: 3;
    width: 55px;
    height: 24px;
    padding: 4px 1px;
    margin-bottom: -24px;
    cursor: pointer !important;
    background-color: #006eff;
    border-radius: 1px;
    box-sizing: border-box;

    .btn-obj {
      float: left;
      width: 16px;
      height: 16px;
      margin: 0 5px;
      background-color: transparent;
      border-radius: 2px;
    }
  }
}
</style>
