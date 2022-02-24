<template>
  <div>
    <el-form-item label="文字内容">
      <el-input v-model="main.activeOption.text"></el-input>
    </el-form-item>
    <el-form-item label="文字大小">
      <el-select v-model="main.activeOption.textSize">
        <el-option
          v-for="item in btnSizes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color"></el-color-picker>
    </el-form-item>

    <el-form-item label="类型">
      <el-select v-model="main.activeOption.btnType">
        <el-option
          v-for="item in btnTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="尺寸">
      <el-select v-model="main.activeOption.btnSize">
        <el-option
          v-for="item in btnSizes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图标编码">
      <el-input v-model="main.activeOption.btnIcon"></el-input>
    </el-form-item>
    <el-form-item label="是否圆角">
      <el-switch v-model="main.activeOption.isround"></el-switch>
    </el-form-item>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.btnfontSize"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="200"
      ></el-input-number>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Texta',
  inject: ['main'],
  data() {
    return {
      btnTypes: [
        { label: '主要', value: 'primary' },
        { label: '警告', value: 'warning' },
        { label: '危险', value: 'danger' },
        { label: '信息', value: 'info' },
        { label: '文本', value: 'text' }
      ],
      // medium、small、mini
      btnSizes: [
        { label: '中等', value: 'medium' },
        { label: '小的', value: 'small' },
        { label: '大的', value: 'mini' }
      ]
    }
  },
  methods: {}
}
</script>
