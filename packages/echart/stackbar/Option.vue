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
