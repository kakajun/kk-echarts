<!-- 柱形图配置 -->
<template>
  <div>
    <slot></slot>
    <el-collapse accordion>
      <el-collapse-item title="柱体设置">
        <el-form-item label="竖展示">
          <el-switch v-model="main.activeOption.category"></el-switch>
        </el-form-item>
        <el-form-item label="最大宽度">
          <el-slider v-model="main.activeOption.barWidth"> </el-slider>
        </el-form-item>
        <el-form-item label="圆角">
          <el-slider v-model="main.activeOption.barRadius"> </el-slider>
        </el-form-item>
        <el-form-item label="最小高度">
          <el-slider v-model="main.activeOption.barMinHeight"> </el-slider>
        </el-form-item>
        <el-form-item v-if="!main.activeOption.category" label="数字滚动刷新">
          <el-switch v-model="main.activeOption.numberFresh"></el-switch>
        </el-form-item>

        <el-form-item label="添加趋势图标">
          <el-switch v-model="main.activeOption.addPictorialBar"></el-switch>
        </el-form-item>
        <!-- <el-form-item label="字体颜色">
            <el-input-color v-model="main.activeOption.titleColor"></el-input-color>
          </el-form-item> -->
        <el-form-item label="趋势图标大小">
          <el-input-number
            v-model="main.activeOption.pictorialBarFontSize"
            style="width: 100%"
            controls-position="right"
            :min="1"
            :max="999"
          ></el-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  inject: ['main'],
  data() {
    return {}
  }
}
</script>
