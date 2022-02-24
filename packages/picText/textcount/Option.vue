<!-- 文字配置 -->
<template>
  <div>
    <el-form-item label="文本内容">
      <el-input v-model="value" @change="changeValue"></el-input>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number
        v-model="main.activeOption.fontSize"
        :min-rows="1"
        :max-rows="200"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="字体间距">
      <avue-input-number
        v-model="main.activeOption.split"
        :max-rows="300"
        :min-rows="0"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体行高">
      <avue-input-number
        v-model="main.activeOption.lineHeight"
        :max-rows="300"
        :min-rows="0"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体背景">
      <el-color-picker v-model="main.activeOption.backgroundColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="文字粗细">
      <avue-select
        v-model="main.activeOption.fontWeight"
        :dic="dicOption.fontWeight"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="对齐方式">
      <avue-select
        v-model="main.activeOption.textAlign"
        :dic="dicOption.textAlign"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="小数位数">
      <el-input-number
        v-model="main.activeOption.decimals"
        controls-position="right"
        :min="0"
      ></el-input-number>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="更新设置">
        <el-form-item label="延迟时间">
          <el-input-number
            v-model="main.activeOption.delaytime"
            controls-position="right"
            :min="0"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="滚动速度">
          <el-input
            v-model="main.activeOption.speed"
            @change="changeValue"
          ></el-input>
        </el-form-item>

        <el-form-item label="滚动时间">
          <el-input v-model="main.activeOption.duration"></el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Textcount',
  inject: ['main'],
  data() {
    return {
      value: 0
    }
  },
  created() {
    this.value = this.main.activeObj.data.value
  },
  methods: {
    changeValue() {
      this.main.activeObj.data.value = this.value
    }
  }
}
</script>
