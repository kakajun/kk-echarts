<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="箭头设置">
        <el-form-item label="箭头开启">
          <el-switch v-model="main.activeOption.openArrow"></el-switch>
        </el-form-item>
        <el-form-item v-if="main.activeOption.openArrow" label="图片左箭头">
          <img
            v-if="main.activeOption.arrowLeftImage"
            :src="main.activeOption.arrowLeftImage"
            style="max-height: 60px"
            alt=""
            width="100%"
          />
          <el-input v-model="main.activeOption.arrowLeftImage">
            <template #append>
              <div
                @click="
                  main.handleOpenImg(
                    main.activeOption,
                    'arrowLeftImage',
                    'source'
                  )
                "
              >
                <i class="iconfont icon-img"></i>
              </div>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item v-if="main.activeOption.openArrow" label="图片右箭头">
          <img
            v-if="main.activeOption.arrowRightImage"
            :src="main.activeOption.arrowRightImage"
            style="max-height: 60px"
            width="100%"
          />
          <el-input v-model="main.activeOption.arrowRightImage">
            <template #append>
              <div
                @click="
                  main.handleOpenImg(
                    main.activeOption,
                    'arrowRightImage',
                    'source'
                  )
                "
              >
                <i class="iconfont icon-img"></i>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'Texta',
  inject: ['main'],
  data() {
    return {}
  },

  methods: {}
}
</script>
