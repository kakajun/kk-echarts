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
      <!-- <el-collapse-item title="边框设置">
        <el-form-item label="X间距">
          <el-slider v-model="main.activeOption.splitx"></el-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <el-slider v-model="main.activeOption.splity"></el-slider>
        </el-form-item>

        <el-form-item label="边框">
          <avue-radio v-model="main.activeOption.type" :dic="dicOption.border">
          </avue-radio>
        </el-form-item>
        <template v-if="main.activeOption.type === 'border'">
          <el-form-item label="边框颜色">
            <el-color-picker
              v-model="main.activeOption.borderColor"
              show-alpha
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="边框宽度">
            <el-input-number
              v-model="main.activeOption.borderWidth"
              controls-position="right"
              style="width: 100%"
              :min="0"
              :max="1000"
            >
            </el-input-number>
          </el-form-item>
        </template>
        <template v-if="main.activeOption.type === 'img'">
          <el-form-item label="图片地址">
            <img
              v-if="main.activeOption.backgroundBorder"
              :src="main.activeOption.backgroundBorder"
              alt=""
              width="100%"
            />
            <el-input v-model="main.activeOption.backgroundBorder">
              <template #append>
                <div
                  @click="
                    main.handleOpenImg(
                      'activeOption.backgroundBorder',
                      'sborder'
                    )
                  "
                >
                  <i class="iconfont icon-img"></i>
                </div>
              </template>
            </el-input>
          </el-form-item>
        </template>
        <el-form-item label="背景颜色">
          <el-color-picker
            v-model="main.activeOption.backgroundColor"
            show-alpha
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="背景图片">
          <img
            v-if="main.activeOption.backgroundImage"
            :src="main.activeOption.backgroundImage"
            alt=""
            width="100%"
          />
          <el-input v-model="main.activeOption.backgroundImage">
            <template #append>
              <div
                @click="main.handleOpenImg('activeOption.empBackgroundImage')"
              >
                <i class="iconfont icon-img"></i>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-collapse-item> -->

      <!-- <el-collapse-item title="内部设置">
        <el-form-item label="字体大小">
          <el-input-number
            v-model="main.activeOption.fontSize"
            controls-position="right"
            style="width: 100%"
            :min="1"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker v-model="main.activeOption.color"></el-color-picker>
        </el-form-item>
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
        </el-form-item>
      </el-collapse-item> -->

      <!-- <el-collapse-item title="前缀设置">
        <el-form-item label="前缀内容1">
          <el-input
            v-model="main.activeObj.data[0].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="前缀内容2">
          <el-input
            v-model="main.activeObj.data[1].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="前缀内容3">
          <el-input
            v-model="main.activeObj.data[2].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="前缀内容4">
          <el-input
            v-model="main.activeObj.data[3].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="前缀内容5">
          <el-input
            v-model="main.activeObj.data[4].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="前缀内容6">
          <el-input
            v-model="main.activeObj.data[5].prefixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>

        <template v-if="!main.activeOption.row">
          <el-form-item label="对齐方式">
            <el-select
              v-model="main.activeOption.prefixTextAlign"
              placeholder=""
            >
              <el-option
                v-for="item in dicOption.textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </template>
        <el-form-item label="X间距">
          <el-slider v-model="main.activeOption.prefixSplitx"></el-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <el-slider v-model="main.activeOption.prefixSplity"></el-slider>
        </el-form-item>
        <el-form-item label="颜色">
          <el-color-picker
            v-model="main.activeOption.prefixColor"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="字体大小">
          <el-input-number
            v-model="main.activeOption.prefixFontSize"
            controls-position="right"
            style="width: 100%"
            :min="0"
            :max="200"
          >
          </el-input-number>
        </el-form-item>
      </el-collapse-item> -->

      <!-- <el-collapse-item title="后缀设置">
        <el-form-item label="后缀内容1">
          <el-input
            v-model="main.activeObj.data[0].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="后缀内容2">
          <el-input
            v-model="main.activeObj.data[1].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="后缀内容3">
          <el-input
            v-model="main.activeObj.data[2].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="后缀内容4">
          <el-input
            v-model="main.activeObj.data[3].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="后缀内容5">
          <el-input
            v-model="main.activeObj.data[4].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="后缀内容6">
          <el-input
            v-model="main.activeObj.data[5].suffixText"
            style="width: 100%"
          ></el-input>
        </el-form-item>

        <template v-if="!isWhole">
          <el-form-item label="对齐方式">
            <el-select
              v-model="main.activeOption.suffixTextAlign"
              placeholder=""
            >
              <el-option
                v-for="item in dicOption.textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </template>
        <el-form-item label="X间距">
          <el-slider v-model="main.activeOption.suffixSplitx"></el-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <el-slider v-model="main.activeOption.suffixSplity"></el-slider>
        </el-form-item>
        <el-form-item label="颜色">
          <el-color-picker
            v-model="main.activeOption.suffixColor"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="字体大小">
          <el-input-number
            v-model="main.activeOption.suffixFontSize"
            controls-position="right"
            style="width: 100%"
            :min="0"
            :max="200"
          >
          </el-input-number>
        </el-form-item>
      </el-collapse-item> -->
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
