<template>
  <div class="components-attr-edit components-attr-animate-edit">
    <el-scrollbar class="components-attr-edit">
      <div class="attr-edit-inner">
        <div class="animate-edit-btn-wrapper">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="small"
            @click="addAnimate"
          >
            添加动画
          </el-button>
          <el-button
            v-if="!activeObj.menu"
            icon="el-icon-caret-right"
            size="small"
            @click="runAnimate(undefined)"
          >
            预览动画
          </el-button>
          <div v-if="!activeObj.menu" class="is-show-animation">
            <span>执行一次动画：</span>
            <el-switch v-model="activeObj.option.isOnceAnimation"></el-switch>
          </div>
          <div class="is-show-animation">
            <span>开始隐藏：</span>
            <el-switch v-model="startHidden"></el-switch>
          </div>
          <div class="all-delay-time">
            <span>整体播放时长：</span>
            <el-input-number
              v-model="activeObj.option.allDelayTime"
              size="mini"
              controls-position="right"
            />
          </div>
        </div>
        <div
          v-show="animations && animations.length > 0"
          class="el-animate-list-wrapper paddingT20"
        >
          <el-collapse accordion>
            <el-collapse-item v-for="(item, index) in animations" :key="index">
              <template #title>
                <span class="el-animate-title-name">动画 {{ index + 1 }}</span>
                <div class="el-animate-title-type-wrapper">
                  <span
                    class="el-animate-title-type"
                    @click.stop.prevent="handleShowChooseAnimatePanel(index)"
                    >{{ item.name }}
                    <i class="el-icon-caret-right size-mini"></i>
                  </span>
                </div>
                <span
                  class="el-animate-title-btn"
                  @click.stop.prevent="runAnimate(index)"
                  ><i class="el-icon-caret-right"></i
                ></span>
                <span
                  class="el-animate-title-btn"
                  @click.stop.prevent="handleDeleteAnimate(index)"
                  ><i class="el-icon-delete"></i
                ></span>
              </template>
              <div class="el-animate-item">
                <div class="attr-item-edit-wrapper">
                  <p class="attr-item-title">动画时长：</p>
                  <div class="col-2 attr-item-edit-input">
                    <el-input-number
                      v-model="item.duration"
                      size="mini"
                      controls-position="right"
                      :min="0"
                      :step="0.1"
                    />
                  </div>
                </div>
                <div class="attr-item-edit-wrapper">
                  <p class="attr-item-title">动画延迟：</p>
                  <div class="col-2 attr-item-edit-input">
                    <el-input-number
                      v-model="item.delay"
                      size="mini"
                      controls-position="right"
                      :min="0"
                      :step="0.1"
                    />
                  </div>
                </div>
                <div class="attr-item-edit-wrapper">
                  <p class="attr-item-title">循环次数：</p>
                  <div class="col-1 attr-item-edit-input">
                    <el-input-number
                      v-model="item.interationCount"
                      size="mini"
                      controls-position="right"
                    />
                  </div>
                  <div class="attr-item-edit-input">
                    <el-checkbox
                      v-model="item.infinite"
                      label="infinite"
                      border
                      size="small"
                    >
                      循环播放
                    </el-checkbox>
                  </div>
                </div>
              </div>
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
import animateSelectionForm from './AnimateSelectionForm.vue'
export default {
  name: 'Animationedit',
  components: {
    animateSelectionForm
  },
  props: {
    activeObj: {
      type: Object,
      default: () => {
        return {
          menu: false,
          option: {}
        }
      }
    }
  },
  data() {
    return {
      showAnimatePanel: false,
      reSelectAnimateIndex: undefined,
      isout: 0
    }
  },
  inject: ['main'],
  computed: {
    // 因为要处理递归,所以这么设计
    startHidden: {
      get() {
        return this.activeObj.option.startHidden
      },
      set(val) {
        this.activeObj.option.startHidden = val
        // 如果是目录,那么这里执行递归操作
        if (this.activeObj.menu) {
          const detail = item => {
            if (item.children) {
              item.children.forEach(ele => detail(ele))
            } else item.option.startHidden = val
          }
          this.activeObj.children.forEach(ele => detail(ele))
        }
      }
    },

    animations() {
      return this.activeObj.option.animations || []
    }
  },
  watch: {},
  methods: {
    handleAniForm(e) {
      if (!e) {
        // 关闭选择框
        this.showAnimatePanel = false
      } else {
        this.handleChooseAnimate(e)
      }
    },

    /**
     * 选取animate
     * @param item
     */
    handleChooseAnimate(item) {
      // 如果是退出动画
      if (item.value.indexOf('Out') > -1) {
        this.isout = 1
      }
      console.log(this.animations, ' this.animations this.animations')
      this.showAnimatePanel = false
      if (this.reSelectAnimateIndex === undefined) {
        // 初始化数据
        const animateDefaultData = {
          name: item.label, // 动画名称
          type: item.value, // 动画id
          duration: 1,
          infinite: false,
          interationCount: 1,
          delay: 0,
          isout: this.isout,
          allDelayTime: 0 // 为0就不开启
        }
        this.animations.push(animateDefaultData)
      } else {
        const obj = this.animations[this.reSelectAnimateIndex]
        obj.name = item.label
        obj.type = item.value
        obj.isout = this.isout
      }
    },
    /**
     * 删除动画
     * @param index
     */
    handleDeleteAnimate(index) {
      this.animations.splice(index, 1)
    },
    addAnimate(showAnimatePanel = true) {
      this.showAnimatePanel = showAnimatePanel
      this.reSelectAnimateIndex = undefined
    },
    // 重新选择新的动画
    handleShowChooseAnimatePanel(index) {
      this.reSelectAnimateIndex = index
      this.showAnimatePanel = true
    },

    /**
     * 执行此条动画效果
     */
    runAnimate(index) {
      const animationData =
        index === undefined ? this.animations : [this.animations[index]]
      this.main.runAnimations(this.activeObj.index, animationData)
      // this.$bus.$emit('RUN_ANIMATIONS', this.activeObj.index, animationData)
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
  // color: white;
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
    width: 55px;
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
