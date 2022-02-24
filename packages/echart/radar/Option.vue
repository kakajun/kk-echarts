<template>
  <div>
    <slot></slot>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.radarNameSize"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="200"
      >
      </el-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.radarNameColor">
      </el-color-picker>
    </el-form-item>
    <el-form-item label="区域透明度">
      <el-slider
        v-model="main.activeOption.areaOpacity"
        :min="0.1"
        :max="1"
        :step="0.1"
      >
      </el-slider>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Radar',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
