<!-- 实时时间配置 -->
<template>
  <div>
    <el-form-item label="时间格式">
      <avue-select v-model="main.activeOption.format" :dic="format">
      </avue-select>
    </el-form-item>
    <el-form-item label="自定义格式">
      <el-input v-model="main.activeOption.format"> </el-input>
    </el-form-item>
    <el-form-item label="字体间距">
      <avue-input-number
        v-model="main.activeOption.split"
        style="width: 100%"
        :max="200"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number
        v-model="main.activeOption.fontSize"
        style="width: 100%"
        :max="200"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体背景">
      <el-color-picker v-model="main.activeOption.backgroundColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="对其方式">
      <avue-select
        v-model="main.activeOption.textAlign"
        :dic="dicOption.textAlign"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="文字粗细">
      <avue-select
        v-model="main.activeOption.fontWeight"
        :dic="dicOption.fontWeight"
      >
      </avue-select>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color" show-alpha>
      </el-color-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Datetime',
  inject: ['main'],
  data() {
    return {
      format: [
        { label: '年-月-日', value: 'yyyy-MM-dd' },
        { label: '年-月', value: 'yyyy-MM' },
        { label: '月-日', value: 'MM-dd' },
        { label: '年-月-日 + 时: 分', value: 'yyyy-MM-dd hh:mm' },
        { label: '年-月-日 + 时: 分(24小时)', value: 'yyyy-MM-dd HH:mm' },
        { label: '年-月-日 + 时: 分: 秒', value: 'yyyy-MM-dd hh:mm:ss' },
        {
          label: '年-月-日 + 时: 分: 秒(24小时)',
          value: 'yyyy-MM-dd HH:mm:ss'
        },
        { label: '时: 分', value: 'hh:mm' },
        { label: '时: 分(24小时)', value: 'HH:mm' },
        { label: '时: 分: 秒', value: 'hh:mm:ss' },
        { label: '时: 分: 秒(24小时)', value: 'HH:mm:ss' },
        { label: '星期', value: 'day' }
      ]
    }
  }
}
</script>
