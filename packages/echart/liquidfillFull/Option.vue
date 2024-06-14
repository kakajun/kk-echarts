<!-- 高德地图配置 -->
<template>
  <div>
    <slot></slot>

    <el-form-item label="图形背景颜色">
      <el-color-picker v-model="main.activeOption.bgcolor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="边框宽度">
      <avue-input-number
        v-model="main.activeOption.borderWidth"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker v-model="main.activeOption.borderColor" show-alpha>
      </el-color-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
