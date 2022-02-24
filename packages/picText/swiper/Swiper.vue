<template>
  <!-- 轮播图文 -->
  <div :ref="id" :class="b()" :style="style">
    <el-carousel
      :type="type"
      :indicator-position="indicator"
      :interval="interval"
      :height="height"
    >
      <el-carousel-item
        v-for="item in dataChart"
        :key="item"
        @click="handleClick(item, index)"
      >
        <img :src="item.value" draggable="false" :style="styleName" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Swiper',
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
    return {}
  },
  computed: {
    styleName() {
      return {
        opacity: this.opacity
      }
    },
    indicator() {
      return this.opacity.indicator || 'none'
    },
    opacity() {
      return (this.option.opacity || 100) * 0.01
    },
    type() {
      return this.option.type || ''
    },
    interval() {
      return this.option.interval * 1000 || 5
    }
  },
  methods: {
    handleClick(item, index) {
      this.clickFormatter({
        type: index,
        value: item,
        data: this.dataChart
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.Swiper {
  .el-carousel,
  .el-carousel__container {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    user-select: none;
  }
}
</style>
