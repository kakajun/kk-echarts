<template>
  <!-- 这个是滚动数字
  目前还有颜色需要能动态修改,只能把这个组件重构为vue组件,才好修改颜色
   -->
  <div ref="main" :class="b()" :style="style">
    <div :style="arrowStyle" @click="arrowClick('left')">
      <img
        id="img"
        :src="option.arrowLeftImage"
        style="height: 100%"
        width="100%"
      />
    </div>
    <div class="Odometer2 OdometerBg"></div>
    <div :style="arrowStyle" @click="arrowClick('right')">
      <img
        :src="option.arrowRightImage"
        style="height: 100%"
        alt=""
        width="100%"
      />
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import Odometer from './odo.js'

export default {
  name: 'Odometer',
  mixins: [common],
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      num: new Date().getFullYear(),
      odoObj: null
    }
  },
  computed: {
    arrowStyle() {
      return {
        height: this.option.arrowHeight + '%',
        width: this.option.arrowWidth + '%'
      }
    }
  },

  mounted() {
    this.odoObj = new Odometer('.Odometer2', {
      num: this.num
    })
  },
  methods: {
    // 箭头点击
    arrowClick(st) {
      if (st === 'left') this.num--
      if (st === 'right') this.num++
      this.odoObj.update(this.num)
    }
  }
}
</script>
<style lang="scss">
// 注意这里要用全局的,否则样式不会生效,已经用前缀包裹,所以不会发生泄漏污染全局
.Odometer {
  display: flex;
}

.OdometerBg .number-animate .number-animate-dom,
.OdometerBg .number-animate .number-animate-dot {
  width: 40px;
}
.OdometerBg .number-animate .number-animate-dot span {
  color: yellow;
  background: #222;
  border-left: 1px solid #fff;
}
.OdometerBg .number-animate .number-animate-dom {
  color: yellow;
  background: #222;
  border-left: 1px solid #fff;
}

.number-animate {
  position: relative;
  display: inline-block;
  height: 45px;
  overflow: hidden;
  font-size: 40px;
  line-height: 45px;
}
.number-animate .number-animate-dot {
  float: left;
  width: 21px;
  text-align: center;
}
.number-animate .number-animate-dom {
  position: relative;
  top: 0;
  float: left;
  width: 27px;
  text-align: center;
}
.number-animate .number-animate-dom span,
.number-animate .number-animate-dot span {
  float: left;
  width: 100%;
  height: 45px;
  line-height: 1.1;
}
</style>
