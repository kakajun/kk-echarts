<template>
  <div :class="b()" :style="style">
    <SvgWrapper
      overflow="visible"
      class="element-content"
      :width="width"
      :height="height"
    >
      <defs>
        <LinePointMarker
          v-if="option.points[0]"
          :id="option.id"
          position="start"
          :type="option.points[0]"
          :color="option.color"
          :base-size="option.width"
        />
        <LinePointMarker
          v-if="option.points[1]"
          :id="option.id"
          position="end"
          :type="option.points[1]"
          :color="option.color"
          :base-size="option.width"
        />
      </defs>
      <path
        :d="path"
        :stroke="option.color"
        :stroke-width="option.width"
        :stroke-dasharray="lineDashArray"
        fill="none"
        stroke-linecap
        stroke-linejoin
        stroke-miterlimit
        :marker-start="
          option.points[0] ? `url(#${option.id}-${option.points[0]}-start)` : ''
        "
        :marker-end="
          option.points[1] ? `url(#${option.id}-${option.points[1]}-end)` : ''
        "
      ></path>
      <!-- v-contextmenu="contextmenus" -->
      <path
        class="line-path"
        :d="path"
        stroke="transparent"
        stroke-width="20"
        fill="none"
      ></path>
    </SvgWrapper>
  </div>
</template>

<script>
import LinePointMarker from './LinePointMarker.vue'
import SvgWrapper from './SvgWrapper.vue'
import common from '@s/mixins/common.js'
export default {
  name: 'Lineelement',
  components: {
    LinePointMarker,
    SvgWrapper
  },
  mixins: [common],
  computed: {
    path() {
      return this.getLineElementPath(this.option)
    },
    lineDashArray() {
      return this.option.style === 'dashed' ? '10 6' : '0 0'
    }
  },
  methods: {
    /**
     * 获取线条元素路径字符串
     * @param element 线条元素
     * @returns
     */
    getLineElementPath(element) {
      let start, end
      if (this.option.direction === 'x') {
        start = [0, this.height / 2]
        end = [this.width, this.height / 2]
      } else {
        start = [this.width / 2, 0]
        end = [this.width / 2, this.height]
      }
      if (element.broken) {
        const mid = element.broken.join(',')
        return `M${start} L${mid} L${end}`
      }
      if (element.curve) {
        const mid = element.curve.join(',')
        return `M${start} Q${mid} ${end}`
      }
      return `M${start} L${end}`
    },
    handleSelectElement(e) {
      e.stopPropagation()
      this.selectElement(e, this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
.element-content {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    overflow: visible;
    transform-origin: 0 0;
  }
}
.line-path {
  cursor: move;
}
</style>
