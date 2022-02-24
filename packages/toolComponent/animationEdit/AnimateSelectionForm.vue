<template>
  <div
    class="components-attr-edit animate-choose-list-wrapper"
    :class="{ fadeInUp: true, fadeInDown: false, animate: true }"
  >
    <div class="closeDialog">
      <el-button size="mini" @click="handleEmit(false)"> 关闭 </el-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="item in animateCssDatas"
        :key="item.label"
        :label="item.label"
        :name="item.label"
      >
        <el-scrollbar class="animate-choose-item">
          <div
            v-for="(animate, index) in item.children"
            :key="index"
            class="animate-choose-item-inner"
            @mouseover="hoverPreviewAnimate = animate.value"
            @mouseleave="hoverPreviewAnimate = ''"
            @click="handleEmit(animate)"
          >
            <span
              class="animate-choose-image"
              :style="{ backgroundPosition: `${item.bg_X}px ${item.bg_Y}px` }"
              :class="[
                hoverPreviewAnimate === animate.value &&
                  animate.value + ' animated'
              ]"
            ></span>
            <p>{{ animate.label }}</p>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import animateCssData from './animateCssData.js'
export default {
  name: 'AnimateSelectionForm',
  components: {},
  emits: ['callFunc'],
  data() {
    return {
      animateCssDatas: animateCssData,
      activeName: '进入',
      showAnimatePanel: false,
      hoverPreviewAnimate: ''
    }
  },

  methods: {
    handleEmit(e) {
      this.$emit('callFunc', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.components-attr-edit {
  position: relative;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.animate-choose-list-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 380px;
  height: calc(100% - 48px);
  background: white;
  transition: all 0.28s;
  &.fadeInUp {
    top: 50px;
    opacity: 1;
  }
  &.fadeInDown {
    top: 110%;
    opacity: 0;
  }
}

.animate-choose-item {
  height: 100%;
  .animate-choose-item-inner {
    display: inline-block;
    width: 25%;
    height: 72px;
    color: rgb(118, 131, 143);
    text-align: center;
    cursor: pointer;
    & > .animate-choose-image {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-bottom: 6px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACOElEQVRoQ+1ZO2wTQRB9Yyw6WiokLAUFqEgJVYAKSihckApCBSVo1jJQBSzvCEqoCFSkcAFlUhGooEJQ8RFIjpSKlg45XnTRRjIE53YuPkcDvvbevpl3b2dvd5Zg/CHj+WMiYK8d/D8dEJGZEr58hZnfaXkLOSAiHwEc0wbLwX9i5uNaTrUAEWkCuKcNlIi/xcytROwmTCXAe3+IiL4B2K8JosD+DCFMOefWU8doBTwmovlU8iK4EMKic+5q6thkASIyC+BVKvEucaeZ+XUKh0bASwBnUkhHgFll5rMpPEkCvPeXiehJCuGoMCGEK865p3l8uQI6nc6+brebFe7hPLIRv1+r1WpT9Xp9YyfeXAEisgDg9oiTS6W7y8x3CgtotVrT1Wr1c2q0MnC9Xu9os9n8Mox7RwdE5BmAS2UkpuBcYuY5tQAROQdgWRGoTOh5Zl75W4ChDojIGwAny8xKwf2WmU8lC/DeXyOih4oApUNDCNedc4/+DLTNAe/9ASL6CuBg6VnpAnwPIRxxzv0YHLZNgIjcB3BDxz029ANmvjlUQLvdPlGpVN6PLZ0Cgfr9/kyj0fiwNfQ3B0TkOYALBXjHOeQFM1/8NwWYn0KZLaaLOBNgfhmNIuz+yLaq2/RWItaC7c1cFGF3O50JMH+giS7YPVJmAswf6uOyaretMrCs2m1sxVqw3VqMU8luczcKsN1ej1PJ7gXHQEHbvWKKLti+5BvnATgvVm53Oo9gr99PBEwc2OUX+AXIJPIx3Uv7BAAAAABJRU5ErkJggg==);
      background-size: 100% 100%;
    }
    p {
      //font-size: 12px;
      line-height: 1;
    }
  }
}

.closeDialog {
  position: absolute;
  right: 10px;
  z-index: 3;
  cursor: pointer;
}
</style>
