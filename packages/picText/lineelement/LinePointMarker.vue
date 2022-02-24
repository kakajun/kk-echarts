<template>
  <!-- marker 为svg里面的标签 -->
  <marker
    :id="`${id}-${type}-${position}`"
    markerUnits="userSpaceOnUse"
    orient="auto"
    :markerWidth="size * 3"
    :markerHeight="size * 3"
    :refX="size * 1.5"
    :refY="size * 1.5"
  >
    <path
      :d="path"
      :fill="color"
      :transform="`scale(${size * 0.3}, ${size * 0.3}) rotate(${rotate}, 5, 5)`"
    ></path>
  </marker>
</template>

<script>
export default {
  name: 'LinePointMarker',
  props: {
    id: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    },
    baseSize: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pathMap: {
        dot: 'm0 5a5 5 0 1 0 10 0a5 5 0 1 0 -10 0z',
        arrow: 'M0,0 L10,5 0,10 Z'
      },
      rotateMap: {
        'arrow-start': 180,
        'arrow-end': 0
      }
    }
  },
  computed: {
    size() {
      return this.baseSize < 2 ? 2 : this.baseSize
    },
    rotate() {
      return this.rotateMap[`${this.type}-${this.position}`] || 0
    },
    path() {
      return this.pathMap[this.type]
    }
  }
}
</script>
