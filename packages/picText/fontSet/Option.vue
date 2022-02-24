<!-- 炫彩文本 -->
<template>
  <div>
    <el-form-item label="文本内容">
      <el-input
        v-model="main.activeOption.content"
        placeholder="请输入内容"
      ></el-input>
    </el-form-item>
    <el-form-item label="字体粗细">
      <el-select v-model="main.activeOption.weight" placeholder="请选择">
        <el-option label="normal" value="normal" />
        <el-option label="bold" value="bold" />
        <el-option label="bolder" value="bolder" />
        <el-option label="lighter" value="lighter" />
      </el-select>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number
        v-model="main.activeOption.titleFontSize"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="是否渐变">
      <el-select v-model="main.activeOption.isGradual" placeholder="请选择">
        <el-option label="无渐变" value="0" />
        <el-option label="上下渐变" value="bottom" />
        <el-option label="左右渐变" value="right" />
        <el-option label="左上-右下" value="3" />
        <el-option label="左下-右上" value="4" />
      </el-select>
    </el-form-item>
    <el-form-item label="颜色1">
      <el-color-picker v-model="main.activeOption.waterColor1" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="颜色2">
      <el-color-picker v-model="main.activeOption.waterColor2" show-alpha>
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
