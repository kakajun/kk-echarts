<template>
  <div>
    <slot></slot>
    <el-collapse accordion>
      <el-collapse-item title="饼图设置">
        <el-form-item label="设置为环形">
          <el-switch v-model="main.activeOption.radius"></el-switch>
        </el-form-item>
        <el-form-item label="南丁格尔玫瑰">
          <el-switch v-model="main.activeOption.roseType"></el-switch>
        </el-form-item>
        <el-form-item label="自动排序">
          <el-switch v-model="main.activeOption.sort"></el-switch>
        </el-form-item>
        <el-form-item label="不展示零">
          <el-switch v-model="main.activeOption.notCount"></el-switch>
        </el-form-item>
        <el-form-item label="标签线长度">
          <avue-input-number
            v-model="main.activeOption.labelLineLength"
          ></avue-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Newname',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
