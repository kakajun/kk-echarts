<template>
  <div class="imgborder">
    <el-form-item label="线条样式">
      <el-select
        v-model="main.activeOption.style"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="方向">
      <el-select
        v-model="main.activeOption.direction"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option
          v-for="item in directionOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="线条颜色">
      <el-color-picker
        v-model="main.activeOption.color"
        show-alpha
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="线条宽度">
      <el-input-number
        v-model="main.activeOption.width"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="100"
        :step="1"
      ></el-input-number>
    </el-form-item>

    <el-form-item label="起点样式">
      <el-select
        v-model="main.activeOption.points[0]"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option
          v-for="item in startOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="终点样式">
      <el-select
        v-model="main.activeOption.points[1]"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option
          v-for="item in startOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Imgborder',
  inject: ['main'],
  data() {
    return {
      directionOptions: [
        {
          value: 'x',
          label: '横向'
        },
        {
          value: 'y',
          label: '竖向'
        }
      ],
      options: [
        {
          value: 'solid',
          label: '实线'
        },
        {
          value: 'dashed',
          label: '虚线'
        }
      ],
      startOptions: [
        {
          value: '',
          label: '无'
        },
        {
          value: 'arrow',
          label: '箭头'
        },
        {
          value: 'dot',
          label: '圆点'
        }
      ]
    }
  },
  methods: {}
}
</script>
