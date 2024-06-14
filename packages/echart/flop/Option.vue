<template>
  <div>
    <el-form-item label="整体">
      <el-switch v-model="isWhole"> </el-switch>
    </el-form-item>
    <!-- ↓ 不生效 -->
    <el-form-item label="精度">
      <el-input-number
        v-model="main.activeOption.decimals"
        controls-position="right"
      >
      </el-input-number>
    </el-form-item>
    <el-form-item label="列数">
      <el-input-number
        v-model="main.activeOption.span"
        controls-position="right"
        style="width: 100%"
        :min="1"
        :max="1000"
      >
      </el-input-number>
    </el-form-item>
    <el-collapse accordion>

    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Flop',
  inject: ['main'],
  data() {
    return {
      isWhole: true
    }
  },
  watch: {
    isWhole() {
      this.main.activeOption.whole = this.isWhole
      this.main.activeOption.suffixInline = this.isWhole
    }
  },
  created() {
    this.isWhole = this.main.activeOption.whole
  },
  methods: {}
}
</script>
