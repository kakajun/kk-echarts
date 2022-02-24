<template>
  <!-- 翻牌器 -->
  <div :class="b()" :style="style">
    <div
      v-for="(item, index) in listData"
      :key="index"
      :style="styleParentSize"
    >
      <el-tooltip
        :disabled="!item.formatter"
        placement="top-start"
        :style="[
          styleParentName,
          {
            backgroundColor: item.backgroundColor || option.backgroundColor
          }
        ]"
      >
        <template #content>
          <div v-html="item.formatter && item.formatter()"></div>
        </template>
        <div
          :class="
            b('item', {
              none: statusDIC.includes(item) || type === '',
              whole: isWhole,
              img: isWhole && (isImg || isBorder)
            })
          "
          :style="!isWhole ? '' : styleName"
          @click="handleClick(item, index)"
        >
          <div v-if="getValByArray(item, 'prefixText')" :style="prefixStyle">
            {{ getValByArray(item, 'prefixText') }}
          </div>
          <count-up
            v-if="isWhole"
            :decimals="decimals"
            :end="item.data || item.value"
          ></count-up>
          <div v-else :class="b('count')">
            <div
              v-for="(item2, index2) in (item.data || item.value) +
              ''.split(',')"
              :key="index2"
              :class="
                b('item2', {
                  none: statusDIC.includes(item2) || type === '',
                  img: isImg
                })
              "
              :style="styleName"
              @click="handleClick(item2, index)"
            >
              <div v-if="statusDIC.includes(item2)">
                {{ item2 }}
              </div>
              <el-input-number
                v-else
                controls-position="right"
                :precision="decimals"
                :max="item2"
              ></el-input-number>
            </div>
          </div>
          <div v-if="getValByArray(item, 'suffixText')" :style="suffixStyle">
            {{ getValByArray(item, 'suffixText') }}
          </div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import { currencyF, vaildData, setPx } from '@s/utils/util.js'
import CountUp from '@p/picText/countUp/CountUp.vue'
export default {
  name: 'Flop',
  mixins: [common],
  components: { CountUp },
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      statusDIC: ['.', ',']
    }
  },
  computed: {
    isArray() {
      return Array.isArray(this.dataChart)
    },
    decimals() {
      return this.option.decimals ?? 0
    },
    listData() {
      console.log(this.dataChart, 'this.dataChart')
      if (this.isArray) {
        return this.dataChart
      } else {
        return [this.dataChart]
      }
    },
    isWhole() {
      return vaildData(this.option.whole, false)
    },
    type() {
      return this.option.type
    },
    isBorder() {
      return this.type === 'border'
    },
    isImg() {
      return this.type === 'img'
    },
    span() {
      return this.option.span || 1
    },
    prefixStyle() {
      return {
        display: this.option.prefixInline ? 'inline-block' : 'block',
        textAlign: this.option.prefixTextAlign,
        marginBottom: setPx(this.option.prefixSplity),
        marginRight: setPx(this.option.prefixSplitx),
        color: this.option.prefixColor || '#fff',
        fontSize: setPx(this.option.prefixFontSize || 24)
      }
    },
    suffixStyle() {
      return {
        display: this.option.suffixInline ? 'inline-block' : 'block',
        textAlign: this.option.suffixTextAlign,
        marginTop: setPx(this.option.suffixSplity),
        marginLeft: setPx(this.option.suffixSplitx),
        color: this.option.suffixColor || '#fff',
        fontSize: setPx(this.option.suffixFontSize || 24)
      }
    },
    styleParentSize() {
      const obj = {
        boxSizing: 'border-box',
        display: 'inline-block',
        width: 100 / this.span - 1 + '%'
      }
      if (this.option.splitx) {
        obj.paddingRight = setPx(this.option.splitx)
      }
      if (this.option.splity) {
        obj.paddingBottom = setPx(this.option.splity)
      }
      return obj
    },
    styleParentName() {
      let obj = {}
      if (!this.isImg && !this.isBorder) {
        obj = Object.assign(obj, {
          backgroundImage: `url(${this.option.backgroundImage})`,
          backgroundColor: this.option.backgroundColor
        })
      }
      if (this.option.padding) {
        obj.padding = setPx(this.option.padding)
      }
      return obj
    },
    styleName() {
      return Object.assign(
        (() => {
          let obj = {}
          if (this.option.splitx) {
            obj.marginRight = setPx(this.option.splitx)
          }
          if (this.option.splity) {
            obj.marginBottom = setPx(this.option.splity)
          }
          if (this.option.backgroundImage) {
            obj = Object.assign(obj, {
              backgroundImage: `url(${this.option.backgroundImage})`,
              backgroundSize: '100% 100%'
            })
          }
          return obj
        })(),
        {
          textAlign: this.option.textAlign,
          backgroundColor: this.option.backgroundColor,
          color: this.option.color || '#fff',
          fontSize: setPx(this.option.fontSize || 64),
          fontWeight: this.option.fontWeight
        },
        (() => {
          if (this.type === 'img') {
            return {
              borderImageSource: `url(${this.option.backgroundBorder})`
            }
          } else if (this.type === 'border') {
            return {
              borderColor: this.option.borderColor || '#fff',
              borderStyle: 'solid',
              borderWidth: setPx(this.option.borderWidth)
            }
          }
        })()
      )
    }
  },
  methods: {
    handleClick(item, index) {
      this.clickFormatter({
        type: index,
        value: item,
        data: this.dataChart
      })
    },
    getValByArray(item, prop) {
      return this.isArray ? item[prop] : this.option[prop]
    },
    setPx(val, defval = '') {
      if (this.validatenull(val)) val = defval
      if (this.validatenull(val)) return ''
      val = val + ''
      if (val.indexOf('%') === -1) {
        val = val + 'px'
      }
      return val
    },
    validatenull(val) {
      // 特殊判断
      if (val && parseInt(val) === 0) return false
      const list = ['$parent']
      if (typeof val === 'boolean') {
        return false
      }
      if (typeof val === 'number') {
        return false
      }
      if (val instanceof Array) {
        if (val.length === 0) return true
      } else if (val instanceof Object) {
        val = deepClone(val)
        list.forEach(ele => {
          delete val[ele]
        })
        if (JSON.stringify(val) === '{}') return true
      } else {
        if (
          val === 'null' ||
          val == null ||
          val === 'undefined' ||
          val == undefined ||
          val === ''
        ) {
          return true
        }
        return false
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.Flop {
  .el-tooltip {
    width: 100%;
  }

  &__count {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__item {
    display: inline-block;
    font-family: 'Microsoft Yahei';
    font-size: 28px;
    font-weight: normal;
    color: rgb(255, 255, 255);
    box-sizing: border-box;

    &--img {
      padding: 0 5px;
      border-style: solid;
      border-width: 10px 16px 15px 10px;
      border-image-slice: 10 16 15 10 fill;
    }

    &--none {
      padding: 0 !important;
      background-color: transparent !important;
      border-width: 0 !important;
    }
  }
}
</style>
