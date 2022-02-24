<!-- 字符云配置 -->
<template>
  <div>
    <el-form-item label="最小字体">
      <avue-input-number
        v-model="main.activeOption.minFontSize"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="最大字体">
      <avue-input-number
        v-model="main.activeOption.maxFontSize"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="间距">
      <avue-input-number
        v-model="main.activeOption.split"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="旋转">
      <el-switch v-model="main.activeOption.rotate"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Wordcloud',
  inject: ['main']
}
</script>
