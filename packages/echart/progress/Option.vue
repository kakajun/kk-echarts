<template>
  <div>
    <slot></slot>

    <el-form-item label="文字色">
      <el-color-picker v-model="main.activeOption.textColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="顶距离">
      <el-input-number
        v-model="main.activeOption.texttop"
        style="width: 100%"
        controls-position="right"
        :min="0"
        :max="200"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker
        v-model="main.activeOption.borderColor"
        show-alpha
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="边框大小">
      <el-input-number
        v-model="main.activeOption.strokeWidth"
        style="width: 100%"
        controls-position="right"
        :min="0"
        :max="50"
      ></el-input-number>
    </el-form-item>

    <el-form-item label="前缀字大小">
      <el-input-number
        v-model="main.activeOption.suffixFontSize"
        style="width: 100%"
        controls-position="right"
        :min="0"
        :max="200"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="前缀字颜色">
      <el-color-picker
        v-model="main.activeOption.suffixColor"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="前缀字粗细">
      <el-select v-model="main.activeOption.suffixFontWeight" placeholder="">
        <el-option
          v-for="item in dicOption.fontWeight"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- <el-select
        v-model="main.activeOption.suffixFontWeight"
        style="width:100%;"
        :dic="dicOption.fontWeight">
      </el-select> -->
    </el-form-item>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.fontSize"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="200"
      ></el-input-number>
    </el-form-item>
    <!-- <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color"></el-color-picker>
    </el-form-item> -->
    <el-form-item label="文字粗细">
      <el-select v-model="main.activeOption.fontWeight" placeholder="">
        <el-option
          v-for="item in dicOption.fontWeight"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <!-- <el-select v-model="main.activeOption.fontWeight"
                 style="width:100%;"
                 :dic="dicOption.fontWeight">
      </el-select> -->
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
