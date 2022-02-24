<!-- 通用配置-->
<template>
  <div>
    <!-- 单位 -->
    <template v-if="main.vaildProp('currencyTypeList')">
      <el-form-item label="单位">
        <avue-select
          v-model="main.activeOption.currencyType"
          style="width: 100%"
          :dic="dicOption.currencyType"
        >
        </avue-select>
      </el-form-item>
    </template>
    <!-- 折叠公共配置 -->
    <el-collapse accordion>
      <!-- 标题设置 -->
      <template v-if="main.vaildProp('titleList')">
        <el-collapse-item title="标题设置">
          <el-form-item label="标题开关">
            <el-switch v-model="main.activeOption.titleShow"></el-switch>
          </el-form-item>
          <div v-if="main.activeOption.titleShow">
            <el-form-item label="标题内容">
              <el-input
                v-model="main.activeOption.title"
                style="width: 100%"
              ></el-input>
            </el-form-item>
            <el-form-item label="标题字体">
              <el-color-picker
                v-model="main.activeOption.titleColor"
                show-alpha
              ></el-color-picker>
              <el-input-number
                v-model="main.activeOption.titleFontSize"
                controls-position="right"
                style="width: 100%"
                :min="1"
                :max="200"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="字体位置">
              <el-select
                v-model="main.activeOption.titlePostion"
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
            <el-form-item label="副标题内容">
              <el-input
                v-model="main.activeOption.subtext"
                style="width: 100%"
              ></el-input>
            </el-form-item>
            <el-form-item label="副标题">
              <el-color-picker
                v-model="main.activeOption.subTitleColor"
                show-alpha
              ></el-color-picker>
              <el-input-number
                v-model="main.activeOption.subTitleFontSize"
                controls-position="right"
                style="width: 100%"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
          </div>
        </el-collapse-item>
      </template>

      <!-- 小数位数   -->
      <el-form-item
        v-if="['tinymce'].includes(main.activeObj.component.prop)"
        label="保留小数位"
      >
        <avue-input-number
          v-model="main.activeOption.digit"
          :max-rows="10"
          :min-rows="0"
        ></avue-input-number>
      </el-form-item>
      <!-- 轴设置 -->
      <template v-if="main.vaildProp('barList')">
        <el-collapse-item title="X轴设置">
          <el-form-item label="显示">
            <el-switch v-model="main.activeOption.xAxisShow"></el-switch>
          </el-form-item>

          <div v-if="main.activeOption.xAxisShow">
            <template v-if="['bar'].includes(main.activeObj.component.prop)">
              <el-form-item label="单位线显示">
                <el-switch v-model="main.activeOption.xAxisTickShow">
                </el-switch>
              </el-form-item>
            </template>
            <el-form-item label="标签显示">
              <el-switch v-model="main.activeOption.xShowLabel"></el-switch>
            </el-form-item>
            <el-form-item label="显示网格线">
              <el-switch v-model="main.activeOption.xAxisSplitLineShow">
              </el-switch>
            </el-form-item>
            <el-form-item
              v-if="main.activeOption.xAxisSplitLineShow"
              label="网格颜色"
            >
              <el-color-picker
                v-model="main.activeOption.xAxisSplitLineShowColor"
                show-alpha
              >
              </el-color-picker>
            </el-form-item>
            <el-form-item
              v-if="main.activeOption.xAxisSplitLineShow"
              label="网格样式"
            >
              <avue-select
                v-model="main.activeOption.xAxisSplitLineShowType"
                style="width: 100%"
                :dic="dicOption.linetype"
              >
              </avue-select>
            </el-form-item>

            <el-form-item label="标签间距">
              <el-input-number
                v-model="main.activeOption.xAxisOffset"
                style="width: 100%"
                controls-position="right"
                :min="0"
                :max="50"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="文字角度">
              <el-input-number
                v-model="main.activeOption.xAxisRotate"
                style="width: 100%"
                controls-position="right"
                :min="0"
                :max="50"
              />
            </el-form-item>

            <el-form-item v-if="main.activeOption.category" label="单位反转">
              <el-switch v-model="main.activeOption.xAxisInverse"> </el-switch>
            </el-form-item>

            <el-form-item v-if="main.activeOption.category" label="标签显示">
              <el-switch v-model="main.activeOption.xShowLabel"> </el-switch>
            </el-form-item>

            <el-form-item label="X轴字体">
              <el-color-picker
                v-model="main.activeOption.xnameColor"
                show-alpha
              />
              <el-input-number
                v-model="main.activeOption.xNameFontSize"
                controls-position="right"
                style="width: 100%"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="x轴颜色">
              <el-color-picker
                v-model="main.activeOption.xlineColor"
                show-alpha
              />
            </el-form-item>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Y轴设置">
          <el-form-item label="显示">
            <el-switch v-model="main.activeOption.yAxisShow"> </el-switch>
          </el-form-item>
          <div v-if="main.activeOption.yAxisShow">
            <el-form-item label="数据线显示">
              <el-switch v-model="main.activeOption.yAxisTickShow"> </el-switch>
            </el-form-item>
            <!-- 这个是只有部分需要%显示的轴 -->
            <el-form-item
              v-if="['biaxial'].includes(main.activeObj.component.prop)"
              label="线百分比显示"
            >
              <el-switch v-model="main.activeOption.yaxisLabel2Pecent">
              </el-switch>
            </el-form-item>
            <el-form-item v-else label="标签百分比显示">
              <el-switch v-model="main.activeOption.yaxisLabelPecent">
              </el-switch>
            </el-form-item>

            <template v-if="main.activeOption.currencyType">
              <el-form-item label="单位距离">
                <el-input-number
                  v-model="main.activeOption.ynameGap"
                  controls-position="right"
                >
                </el-input-number>
              </el-form-item>

              <el-form-item label="单位字体">
                <el-color-picker
                  v-model="main.activeOption.yAxisNameColor"
                  show-alpha
                ></el-color-picker>
                <el-input-number
                  v-model="main.activeOption.yAxisNameFontSize"
                  controls-position="right"
                  :min="0"
                  :max="200"
                />
              </el-form-item>
            </template>

            <el-form-item label="显示网格线">
              <el-switch v-model="main.activeOption.yAxisSplitLineShow">
              </el-switch>
            </el-form-item>
            <el-form-item
              v-if="main.activeOption.yAxisSplitLineShow"
              label="网格颜色"
            >
              <el-color-picker
                v-model="main.activeOption.yAxisSplitLineShowColor"
                show-alpha
              >
              </el-color-picker>
            </el-form-item>
            <el-form-item
              v-if="main.activeOption.yAxisSplitLineShow"
              label="网格样式"
            >
              <avue-select
                v-model="main.activeOption.yAxisSplitLineShowType"
                style="width: 100%"
                :dic="dicOption.linetype"
              >
              </avue-select>
            </el-form-item>

            <el-form-item label="数据位置">
              <el-input-number
                v-model="main.activeOption.yAxisOffset"
                controls-position="right"
                style="width: 100%"
              >
              </el-input-number>
            </el-form-item>

            <el-form-item label="标签字体">
              <el-color-picker
                v-model="main.activeOption.ynameColor"
                show-alpha
              >
              </el-color-picker>
              <el-input-number
                v-model="main.activeOption.yNameFontSize"
                controls-position="right"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="Y轴颜色">
              <el-color-picker
                v-model="main.activeOption.ylineColor"
                show-alpha
              />
            </el-form-item>
            <el-form-item
              v-if="['biaxial'].includes(main.activeObj.component.prop)"
              label="右轴显示"
            >
              <el-switch v-model="main.activeOption.yAxisShow2"> </el-switch>
            </el-form-item>
          </div>
        </el-collapse-item>
      </template>
      <!-- 数值设置 -->
      <template v-if="main.vaildProp('labelList')">
        <el-collapse-item title="数值设置">
          <el-form-item label="显示">
            <el-switch v-model="main.activeOption.labelShow"> </el-switch>
          </el-form-item>
          <div v-if="main.activeOption.labelShow">
            <template
              v-if="
                ['biaxial'].includes(main.activeObj.component.prop) &&
                main.activeOption.labelShow
              "
            >
              <el-form-item label="隐藏折线数值">
                <el-switch v-model="main.activeOption.labelShowWithoutLine">
                </el-switch>
              </el-form-item>
            </template>

            <el-form-item
              v-if="
                ['pie'].includes(main.activeObj.component.prop) &&
                main.activeOption.labelShow
              "
              label="汉字字体大小"
            >
              <el-color-picker
                v-model="main.activeOption.labelShowColor"
                show-alpha
              >
              </el-color-picker>
              <el-input-number
                v-model="main.activeOption.labelShowFontSize"
                controls-position="right"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="数值">
              <el-color-picker
                v-model="main.activeOption.labelValueColor"
                show-alpha
              >
              </el-color-picker>
              <el-input-number
                v-model="main.activeOption.valueFontSize"
                controls-position="right"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item
              v-if="
                ['pie'].includes(main.activeObj.component.prop) &&
                main.activeOption.labelShow
              "
              label="行高"
            >
              <el-input-number
                v-model="main.activeOption.labelLineHeight"
                controls-position="right"
                style="width: 100%"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
            <template
              v-if="!['biaxial'].includes(main.activeObj.component.prop)"
            >
              <el-form-item label="字体粗细">
                <el-select
                  v-model="main.activeOption.labelShowFontWeight"
                  placeholder=""
                >
                  <el-option
                    v-for="item in dicOption.fontWeight"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </div>
        </el-collapse-item>
      </template>
      <!-- 轴距离设置 -->
      <template v-if="main.vaildProp('barList')">
        <el-collapse-item title="坐标轴边距">
          <el-form-item label="左边距">
            <el-input-number
              v-model="main.activeOption.gridX"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="顶边距">
            <el-input-number
              v-model="main.activeOption.gridY"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="右边距">
            <el-input-number
              v-model="main.activeOption.gridX2"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="底边距">
            <el-input-number
              v-model="main.activeOption.gridY2"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
        </el-collapse-item>
      </template>
      <!-- 发散坐标系 -->
      <template v-if="main.vaildProp('radarList')">
        <el-collapse-item title="坐标轴边距">
          <el-form-item label="左边距">
            <el-input-number
              v-model="main.activeOption.radiusx"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="顶边距">
            <el-input-number
              v-model="main.activeOption.radiusy"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="图半径">
            <el-input-number
              v-model="main.activeOption.radiusW"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
        </el-collapse-item>
      </template>
      <!-- 图例设置 -->
      <template v-if="main.vaildProp('legendList')">
        <el-collapse-item title="图例设置">
          <el-form-item label="开启">
            <el-switch v-model="main.activeOption.legend"></el-switch>
          </el-form-item>
          <div v-if="main.activeOption.legend">
            <el-form-item label="位置">
              <el-select
                v-model="main.activeOption.legendPostion"
                placeholder=""
              >
                <el-option
                  v-for="item in dicOption.legendPostion"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <!-- <el-select v-model="main.activeOption.legendPostion"
                         style="width: 100%;"
                         :dic="dicOption.legendPostion">
              </el-select> -->
            </el-form-item>
            <el-form-item label="布局朝向">
              <el-select
                v-model="main.activeOption.legendOrient"
                placeholder=""
              >
                <el-option
                  v-for="item in dicOption.orientList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="图标形状">
              <el-select
                v-model="main.activeOption.legendDataIcon"
                placeholder=""
              >
                <el-option
                  v-for="item in legendDataIcon"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="图标宽度">
              <el-input-number
                v-model="main.activeOption.legendIconWidth"
                controls-position="right"
                style="width: 100%"
                :min="10"
                :max="50"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="图标高度">
              <el-input-number
                v-model="main.activeOption.legendIconHeight"
                controls-position="right"
                style="width: 100%"
                :min="10"
                :max="50"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="折行字数">
              <el-input-number
                v-model="main.activeOption.textWidth"
                controls-position="right"
                style="width: 100%"
                :min="10"
                :max="50"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="图例字体">
              <el-color-picker
                v-model="main.activeOption.legendColor"
                show-alpha
              >
              </el-color-picker>
              <el-input-number
                v-model="main.activeOption.legendFontSize"
                controls-position="right"
                style="width: 100%"
                :min="1"
                :max="200"
              >
              </el-input-number>
            </el-form-item>
          </div>
        </el-collapse-item>
      </template>
      <!-- 直角坐标系的提示框 -->
      <el-collapse-item
        v-if="['bar', 'line'].includes(main.activeObj.component.prop)"
        title="功能设置"
      >
        <el-form-item label="悬浮背景色">
          <el-color-picker
            v-model="main.activeOption.tooltipBackgroundColor"
            show-alpha
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="参考线:">
          <el-switch
            v-model="main.activeOption.tooltipShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
        <el-form-item v-if="main.activeOption.tooltipShow" label="横向">
          <el-switch
            v-model="main.activeOption.xPointerShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
        <el-form-item v-if="main.activeOption.tooltipShow" label="纵向">
          <el-switch
            v-model="main.activeOption.yPointerShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
      </el-collapse-item>
      <!-- 颜色设置 -->
      <template v-if="main.vaildProp('colorList')">
        <el-collapse-item title="自定义配色">
          <avue-crud
            :option="colorOption"
            :data="main.activeOption.barColor"
            style="height: 120%"
            @row-save="rowSave"
            @row-del="rowDel"
            @row-update="rowUpdate"
          ></avue-crud>
        </el-collapse-item>
      </template>
      <template v-if="main.vaildProp('dropShadowList')">
        <el-collapse-item title="阴影">
          <el-form-item label="开启阴影">
            <el-switch v-model="main.activeOption.openShadow"></el-switch>
          </el-form-item>
          <el-form-item label="阴影颜色">
            <el-color-picker v-model="main.activeOption.shadowColor" show-alpha>
            </el-color-picker>
          </el-form-item>
          <el-form-item label="横向偏移">
            <el-input-number
              v-model="main.activeOption.hShadow"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="纵向偏移">
            <el-input-number
              v-model="main.activeOption.vShadow"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="模糊">
            <el-input-number
              v-model="main.activeOption.blur"
              style="width: 100%"
              controls-position="right"
            ></el-input-number>
          </el-form-item>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Main',
  inject: ['main'],
  data() {
    return {
      legendDataIcon: [
        { label: '圆形', value: 'circle' },
        { label: '长方形', value: 'rect' },
        { label: '圆角矩形', value: 'roundRect' },
        { label: '三角形', value: 'triangle' },
        { label: '钻石形', value: 'diamond' },
        { label: '别针形', value: 'pin' },
        { label: '箭头形', value: 'arrow' }
      ],
      colorOption: {
        menuWidth: 150,
        refreshBtn: false,
        columnBtn: false,
        labelWidth: 100,
        column: [
          {
            label: '渐变起始色',
            prop: 'color1',
            type: 'color'
          },
          {
            label: '渐变结束色',
            prop: 'color2',
            type: 'color'
          }
        ]
      }
    }
  },
  watch: {
    'main.activeOption.legendPostion': function (newV, oldV) {
      // this.main.activeObj.component.prop === 'bar'
      /* 各种边距
      this.main.activeOption.gridX    左
      this.main.activeOption.gridY    上
      this.main.activeOption.gridX2   右
      this.main.activeOption.gridY2   下

      // legendOrient: "vertical"

      */
      // console.log(this.main.activeObj.component.prop, this.main.activeOption.legendPostion, this.main.activeOption.legendOrient, this.main.activeOption, 'mainnnnnnnnnnnnnnnnnnnnnnnnnnn')
      if (newV === oldV || newV === undefined || oldV === undefined) return
      const bar = {
        N: [10, 70, 10, 10],
        NW: [10, 70, 10, 10],
        NE: [10, 70, 10, 10],
        W: [140, 70, 10, 10],
        SW: [10, 70, 10, 60],
        S: [10, 70, 10, 60],
        SE: [10, 70, 10, 60],
        E: [10, 70, 80, 10]
      }
      const line = {
        N: [15, 90, 10, 75],
        NW: [15, 90, 10, 75],
        NE: [15, 90, 10, 75],
        W: [140, 90, 10, 75],
        SW: [15, 90, 10, 75],
        S: [15, 90, 10, 75],
        SE: [15, 90, 10, 75],
        E: [15, 90, 140, 75]
      }
      const biaxial = {
        N: [20, 70, 10, 50],
        NW: [20, 70, 10, 50],
        NE: [20, 70, 10, 50],
        W: [300, 70, 10, 50],
        SW: [20, 70, 10, 50],
        S: [20, 70, 10, 50],
        SE: [20, 70, 10, 50],
        E: [20, 70, 300, 50]
      }
      switch (this.main.activeObj.component.prop) {
        case 'bar':
          this.main.activeOption.gridX =
            bar[this.main.activeOption.legendPostion][0]
          this.main.activeOption.gridY =
            bar[this.main.activeOption.legendPostion][1]
          this.main.activeOption.gridX2 =
            bar[this.main.activeOption.legendPostion][2]
          this.main.activeOption.gridY2 =
            bar[this.main.activeOption.legendPostion][3]
          break
        case 'line':
          this.main.activeOption.gridX =
            line[this.main.activeOption.legendPostion][0]
          this.main.activeOption.gridY =
            line[this.main.activeOption.legendPostion][1]
          this.main.activeOption.gridX2 =
            line[this.main.activeOption.legendPostion][2]
          this.main.activeOption.gridY2 =
            line[this.main.activeOption.legendPostion][3]
          break
        case 'biaxial':
          this.main.activeOption.gridX =
            biaxial[this.main.activeOption.legendPostion][0]
          this.main.activeOption.gridY =
            biaxial[this.main.activeOption.legendPostion][1]
          this.main.activeOption.gridX2 =
            biaxial[this.main.activeOption.legendPostion][2]
          this.main.activeOption.gridY2 =
            biaxial[this.main.activeOption.legendPostion][3]
          break

        default:
          break
      }
    }
  },
  // created() {
  // console.log(this.main, 'this.main')
  // },
  methods: {
    rowSave(row, done) {
      this.main.activeOption.barColor.push(row)
      done()
    },
    rowDel(row, index) {
      this.main.activeOption.barColor.splice(index, 1)
    },
    rowUpdate(row, index, done) {
      this.main.activeOption.barColor.splice(index, 1, row)
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-color-picker) {
  display: table-cell;
  padding-top: 4px;
  padding-right: 10px;
  vertical-align: middle;
}
:deep(.el-input-number) {
  display: table-cell;
}

.el-table__fixed-right {
  height: 100% !important; //修正文字底部稍微被遮盖一点的问题
}
</style>
