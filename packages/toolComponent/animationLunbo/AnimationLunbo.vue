<template>
  <div class="components-attr-edit components-attr-animate-edit">
    <el-scrollbar class="components-attr-edit">
      <div class="attr-edit-inner">
        <div
          v-show="pageArrs && pageArrs.length > 0"
          class="el-animate-list-wrapper paddingT20"
        >
          <el-collapse accordion>
            <el-collapse-item v-for="(item, index) in pageArrs" :key="index">
              <template #title>
                <span class="el-animate-title-name"> {{ item.content }}</span>
              </template>
              <el-collapse accordion>
                <el-collapse-item v-for="(obj, j) of item.animations" :key="j">
                  <template #title>
                    <span class="el-animate-title-name">{{
                      j == 0 ? '入场' : '出场'
                    }}</span>
                    <div class="el-animate-title-type-wrapper">
                      <span
                        class="el-animate-title-type"
                        @click.stop.prevent="
                          handleShowChooseAnimatePanel(index, j)
                        "
                        >{{ obj.name }}
                        <i class="el-icon-caret-right size-mini"></i>
                      </span>
                    </div>
                  </template>
                  <div class="el-animate-item">
                    <div class="attr-item-edit-wrapper">
                      <p class="attr-item-title">动画时长：</p>
                      <div class="col-2 attr-item-edit-input">
                        <el-input-number
                          v-model="obj.duration"
                          size="mini"
                          controls-position="right"
                          :min="0"
                          :step="0.1"
                        />
                      </div>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-scrollbar>
    <animateSelectionForm
      v-if="showAnimatePanel"
      @callFunc="handleAniForm($event)"
    ></animateSelectionForm>
  </div>
</template>

<script>
import animateSelectionForm from '../animationEdit/AnimateSelectionForm.vue'
export default {
  name: 'Animationlunbo',
  components: {
    animateSelectionForm
  },
  props: {
    activeObj: {
      type: Object
    }
  },
  data() {
    return {
      showAnimatePanel: false,
      reSelectAnimateIndex: undefined,
      arrNum: 0 // 入场是数组0,出场是1
    }
  },
  computed: {
    pageArrs() {
      return this.activeObj.option.pageArrs
    }
  },
  created() {
    if (!this.pageArrs) {
      this.activeObj.option.pageArrs = []
      if (!this.pageArrs[0].animations) {
        this.pageArrs.forEach(ele => {
          ele.animations = [
            {
              name: '右进入',
              type: 'fadeInRight',
              duration: 0.5
            },
            {
              name: '向左退出',
              type: 'fadeOutLeft',
              duration: 0.5
            }
          ]
        })
      }
    }
  },
  methods: {
    handleAniForm(e) {
      if (!e) {
        // 关闭选择框
        this.showAnimatePanel = false
      } else {
        this.handleChooseAnimate(e)
      }
    },
    handleClick(val) {
      console.log(val, 'valvalval')
      this.isout = val.label === '退出'
    },
    /**
     * 选取animate
     * @param item
     */
    handleChooseAnimate(item) {
      this.showAnimatePanel = false
      const arr = this.pageArrs[this.reSelectAnimateIndex].animations
      const obj = arr[this.arrNum]
      obj.name = item.label
      obj.type = item.value
    },

    // 重新选择新的动画
    handleShowChooseAnimatePanel(index, arrNum) {
      this.isNewAnimation = false
      this.reSelectAnimateIndex = index
      this.arrNum = arrNum
      this.showAnimatePanel = true
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-tabs) {
  height: 100%;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
}

.is-show-animation {
  margin: 16px 0;
}
.all-delay-time {
  margin: 16px 0;
}
.el-animate-item {
  padding-top: 10px;
  padding-left: 10px;
  color: white;
}

.components-attr-animate-edit {
  position: relative;
}

.attr-title {
  font-weight: bold;
}

.attr-item-edit-wrapper {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  padding-left: 4px;
  text-align: center;
  .attr-item-title {
    min-width: 60px;
    //font-size: 12px;
    line-height: 28px;
    text-align: left;
  }
  .attr-item-edit-input {
    &.col-2 {
      width: 90px;
      margin-left: 10px;
    }
    &.col-1 {
      width: 150px;
    }

    .attr-item-edit-input-des {
      display: inline-block;
      margin-top: 2px;
      //font-size: 12px;
      color: #7f8593;
    }
  }
}

.el-animate-list-wrapper {
  .el-animate-title-name {
    display: inline-block;
    width: 80px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: bold;
    vertical-align: middle;
  }
  .el-animate-title-type-wrapper {
    display: inline-block;
    width: 150px;
  }
  .el-animate-title-type {
    display: inline-block;
    height: 18px;
    max-width: 140px;
    padding: 4px 16px;
    margin: 0 20px 0 10px;
    overflow: hidden;
    line-height: 18px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background: #1d1f26;
    border: 1px solid white !important;
    border: none;
    border-radius: 60px;
    &:hover {
      color: white;
      background: #7f8593;
    }
  }
  .el-animate-title-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    color: #666;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background: rgba(37, 165, 137, 0.08);
    border-radius: 4px;
    &:hover {
      color: white;
      background: #7f8593;
    }
  }
}
</style>
