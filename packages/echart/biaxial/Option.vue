<!-- 双轴图配置 -->
<template>
  <div>
    <slot></slot>
    <el-collapse accordion>
      <el-collapse-item title="柱体设置">
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

      <el-collapse accordion>
        <el-collapse-item title="折线设置">
          <el-form-item label="面积堆积">
            <el-switch v-model="main.activeOption.areaStyle"></el-switch>
          </el-form-item>
          <el-form-item label="线条宽度">
            <el-slider v-model="main.activeOption.lineWidth"> </el-slider>
          </el-form-item>
          <el-form-item label="点的大小">
            <el-slider v-model="main.activeOption.symbolSize"> </el-slider>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BiaxialOption',
  inject: ['main'],
  data() {
    return {}
  },
  created() {
    // this.main.activeOption.dataShowAsLineCollections = [{ label: 'aaa', value: 'aaa' }, { label: 'bbb', value: 'bbb' }]
    // // ↑ 如果没有数据, 不执行下面?
    // if (!this.main.activeOption.dataShowAsLine) {
    //   //默认赋值最后一个
    //   this.main.activeOption.dataShowAsLine = this.main.activeOption.dataShowAsLineCollections[this.main.activeOption.dataShowAsLineCollections.length - 1].value
    // }
  },
  methods: {
    // showmsg() {
    //   this.$message('无实际用处')
    // },
    dataShowAsLineChanges() {
      //   this.main.activeOption.dataShowAsLine =
      //   console.log(this.main.activeOption.dataShowAsLine, 'main.activeOption.dataShowAsLine');
      if (this.main.activeOption.dataShowAsLine) {
        // 一个添加 type="line" ,其他修改成"bar"或者删除?
      }
    }
  }
}
</script>
