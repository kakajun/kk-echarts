<template>
  <div :ref="id" :class="b()" :style="style">
    <div class="swiper-container">
      <div v-if="reload" class="swiper-wrapper">
        <slot></slot>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import { vaildData } from '@s/utils/util.js'
export default {
  name: 'Slide',
  mixins: [common],
  data() {
    return {
      reload: true
    }
  },
  computed: {
    delay() {
      return this.option.delay || 3000
    },
    autoplay() {
      return vaildData(this.option.autoplay, false)
    }
  },
  watch: {
    option: {
      handler() {
        this.reload = false
        this.$nextTick(() => {
          this.reload = true
          this.init()
        })
      },
      deep: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    /* eslint-disable no-new */
    init() {
      //   new Swiper(
      //     '.swiper-container',
      //     Object.assign(
      //       (() => {
      //         if (this.autoplay) {
      //           return {
      //             autoplay: {
      //               delay: this.delay,
      //               disableOnInteraction: false
      //             }
      //           }
      //         } else {
      //           return {}
      //         }
      //       })(),
      //       {
      //         spaceBetween: 80,
      //         pagination: {
      //           el: '.swiper-pagination',
      //           clickable: true
      //         },
      //         observer: true,
      //         observeParents: true
      //       }
      //     )
      //   )
    }
  }
}
</script>
<style lang="scss" scoped>
.Slide {
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
