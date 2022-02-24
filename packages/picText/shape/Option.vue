<template>
  <div>
    <el-form-item label="填充颜色">
      <el-color-picker v-model="main.activeOption.fillColor" show-alpha />
    </el-form-item>
    <el-form-item label="平铺方式">
      <el-select
        v-model="main.activeOption.preserveAspectRatio"
        :dic="fitShape"
      />
    </el-form-item>
    <el-form-item class="imgSect" label="图片选择">
      <avue-echart-shape
        :option="main.activeOption"
        style="max-width: 180px; max-height: 180px"
        @handleOpen="handleOpenImg"
      />
    </el-form-item>
    <selectIconDialog ref="imglist" />
  </div>
</template>

<script>
import SelectIconDialog from './SelectIconDialog.vue'
export default {
  name: 'Shape',
  components: {
    SelectIconDialog
  },
  inject: ['main'],
  data() {
    return {
      fitShape: [
        { label: '铺满', value: 'none' },
        { label: '自适应', value: 'xMinYMin' }
      ]
    }
  },
  methods: {
    // 打开图库
    handleOpenImg() {
      this.$refs.imglist.openImg()
    }
  }
}
</script>

<style lang="scss" scoped>
.imgSect {
  margin-bottom: -10px;
}
</style>
