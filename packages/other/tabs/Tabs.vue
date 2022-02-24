<template>
  <div ref="main" :class="b()" :style="style">
    <avue-select
      v-if="isSelect"
      v-model="active"
      :dic="typeof dataChart === 'string' ? [] : dataChart"
      :style="styleSelectName"
    ></avue-select>
    <div v-else :class="b('list')">
      <div
        v-for="(item, index) in dataChart"
        :key="index"
        :class="b('item')"
        :style="[styleName, styleActiveName(item)]"
        @click="handleClick(item.value)"
      >
        <div
          v-if="item.icon"
          :class="b('icon')"
          :style="[
            styleIconName,
            styleIconBgName(item),
            styleIconActiveName(item)
          ]"
        ></div>
        <span :style="testStyle">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import { setPx } from '@s/utils/util.js'
export default {
  name: 'Tabs',
  mixins: [common],
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
      setPx,
      active: ''
    }
  },
  computed: {
    testStyle() {
      return {
        letterSpacing: this.setPx(this.option.split)
      }
    },
    isSelect() {
      return this.type === 'select'
    },
    type() {
      return this.option.type
    },
    paramName() {
      return this.option.paramName
    },
    iconSize() {
      return this.option.iconSize || 20
    },
    styleSelectName() {
      return Object.assign(
        {
          fontSize: this.setPx(this.option.fontSize || 30)
        },
        this.style
      )
    },
    styleIconName() {
      return Object.assign({
        marginRight: this.setPx(this.option.iconSplit),
        width: this.setPx(this.option.iconSize),
        height: this.setPx(this.option.iconSize)
      })
    },
    styleName() {
      return Object.assign(
        (() => {
          if (this.option.backgroundImage) {
            return {
              backgroundImage: `url(${this.option.backgroundImage})`,
              backgroundSize: '100% 100%'
            }
          }
          return {}
        })(),
        {
          marginRight: this.setPx(this.boardSplit) || '20px',
          borderColor: this.option.borderColor || '#fff',
          borderStyle: 'solid',
          borderWidth: this.setPx(this.option.borderWidth || 0),
          backgroundColor: this.option.backgroundColor,
          fontSize: this.setPx(this.option.fontSize || 30),
          color: this.option.color
        }
      )
    }
  },
  watch: {
    active(val) {
      if (!val) return
      this.handleClick(val)
    },
    dataChart: {
      handler(val) {
        if (val.length !== 0) {
          this.active = val[0].value
        }
      },
      immediate: true
    }
  },
  methods: {
    styleIconBgName(item) {
      if (item.icon) {
        return {
          backgroundImage: `url(${item.icon})`,
          backgroundSize: '100% 100%'
        }
      }
    },
    /* 这里判断是不是激活的 */
    styleIconActiveName(item) {
      if (this.active === item.value && item.empIcon) {
        return {
          backgroundImage: `url(${item.empIcon})`,
          backgroundSize: '100% 100%'
        }
      }
    },
    styleActiveName(item) {
      if (this.active === item.value) {
        return Object.assign(
          (() => {
            if (this.option.empBackgroundImage) {
              return {
                backgroundImage: `url(${this.option.empBackgroundImage})`,
                backgroundSize: '100% 100%'
              }
            }
            return {}
          })(),
          {
            borderColor: this.option.empBorderColor || '#fff',
            borderStyle: 'solid',
            borderWidth: this.setPx(this.option.empBorderWidth || 0),
            color: this.option.empColor
          }
        )
      }
    },
    handleClick(val) {
      this.active = val
      this.click &&
        this.click({
          type: this.name,
          child: this.child,
          value: this.active
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.Tabs {
  .el-select {
    width: 100%;
  }
  .el-select,
  .el-input,
  input {
    height: 100%;
  }
  .el-input {
    font-size: inherit;
  }
  &__list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  &__icon {
    margin-right: 10px;
  }
  &__item {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
}
</style>
