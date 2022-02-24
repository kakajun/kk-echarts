<template>
  <!-- 这是多选框加排列的组件 -->
  <div
    class="drag-box"
    @click.prevent.stop=""
    @mousedown.prevent.stop="handleMove"
    @contextmenu.prevent=""
    v-if="showBox"
    :style="dragBoxStyle"
  />
</template>

<script>
export default {
  name: 'AvueDragbox',
  inject: ['contain'],
  data() {
    return {
      selectCount: {},
      selectArr: [] // 选择元素的数组
    }
  },
  props: {
    scale: Number
  },
  computed: {
    showBox() {
      const flag = !this.contain.keys.ctrl
      return flag && this.contain.active.length > 1
    },
    dragBoxStyle() {
      return {
        left: this.selectCount.left + 'px',
        top: this.selectCount.top + 'px',
        width: this.selectCount.width + 'px',
        height: this.selectCount.height + 'px'
      }
    }
  },
  methods: {
    getFixed(val = 0, len = 2) {
      return Number(val.toFixed(len))
    },
    // 上下左右对齐
    handlePostionSelect(postion) {
      this.handleCalcPostionSelect()
      const { left, top, width, height } = this.selectCount
      let leftNum, topNum
      if (postion === 'left') leftNum = left
      if (postion === 'center') leftNum = left + width / 2
      if (postion === 'right') leftNum = left + width
      if (postion === 'top') topNum = top
      if (postion === 'middle') topNum = top + height / 2
      if (postion === 'bottom') topNum = top + height
      this.handleMoveSelectList(leftNum, topNum, postion)
    },
    handleMoveSelectList(left, top, postion) {
      this.contain.active.forEach(ele => {
        ele = this.contain.findlist(ele)
        const centNum = left ? ele.component.width : ele.component.height
        let baseLeft = left || top
        if (postion === 'right' || postion === 'bottom') {
          baseLeft = baseLeft - centNum
        } else if (postion === 'center' || postion === 'middle') {
          const objCenter = ele.left + centNum / 2
          baseLeft = ele.left + (baseLeft - objCenter)
        }
        ele[left ? 'left' : 'top'] = baseLeft
      })
    },
    //计算多选状态下的最大边界值
    handleCalcPostionSelect() {
      const minleft = Math.min(...this.selectArr.map(item => item.left))
      const minTop = Math.min(...this.selectArr.map(item => item.top))
      const maxWidth = Math.max(
        ...this.selectArr.map(item => item.width + item.left)
      )
      const maxHight = Math.max(
        ...this.selectArr.map(item => item.height + item.top)
      )
      this.selectCount = {
        left: minleft,
        top: minTop,
        width: maxWidth - minleft,
        height: maxHight - minTop
      }
    },
    /**
     * @desc    : 移动触发
     * @author  : mj
     * @date  : 2021/02/20
     * @update   by
     */
    handleMove(e) {
      if (e.button != 0 && e.buttons != 1) return //只响应鼠标左键点击拖动, 但是有时候又不触发检测..?
      let disX = e.clientX
      let disY = e.clientY
      document.onmousemove = e => {
        const left = e.clientX - disX
        const top = e.clientY - disY
        disX = e.clientX
        disY = e.clientY
        // 这个if判断很重要,不然移动1个像素就执行以下代码,会有卡顿现象发生
        if (Math.abs(left) > 2 || Math.abs(top) > 2) this.moveItems(left, top)
      }
      this.handleClear()
    },
    moveItems(left, top) {
      this.contain.active.forEach(ele => {
        ele = this.contain.findlist(ele)
        ele.left = this.getFixed(ele.left + left / this.scale)
        ele.top = this.getFixed(ele.top + top / this.scale)
      })
      this.selectCount.left = this.getFixed(
        this.selectCount.left + left / this.scale
      )
      this.selectCount.top = this.getFixed(
        this.selectCount.top + top / this.scale
      )
    },
    handleClear() {
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    /**
     * @desc    : 设置多选拖动盒子参数
     * @author  : mj
     * @date  : 2021/02/20
     * @update   by
     */
    setDragbox(obj) {
      // 判断是不是多选再做计算
      if (this.contain.active.length > 1) {
        const num = this.selectArr.findIndex(item => item.index == obj.index)
        if (num == -1) {
          this.selectArr.push(obj)
          this.handleCalcPostionSelect()
        }
      } else {
        this.selectCount = obj
        this.selectArr = [obj]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.drag-box {
  position: absolute;
  z-index: 99999;
  cursor: move;
  border: 1px solid blue;
}
</style>
