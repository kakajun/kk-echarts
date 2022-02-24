<template>
  <el-dialog
    v-model="imgVisible"
    title="图库"
    append-to-body
    width="1180px"
    :before-close="handleClose"
  >
    <el-container class="imgTab">
      <el-tabs v-model="remoteJSAddress" @tab-click="change">
        <el-tab-pane
          v-for="item in shapeList"
          :key="item.label"
          :label="item.label"
          :name="item.name"
        >
          <div class="imgList">
            <div
              v-for="(item2, index) in myImgOption"
              :key="index"
              class="imgBox"
            >
              <svg class="icon imgStyle" aria-hidden="true">
                <use :xlink:href="xlink(item2.iconName)" />
              </svg>
              <el-button
                size="medium"
                class="imgInsetButton"
                @click="handleSetimg(item2)"
              >
                选择
              </el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </el-dialog>
</template>

<script>
export default {
  inject: ['main'],
  data() {
    return {
      imgVisible: false,
      imgObj: '',
      type: 'ssource',
      imgActive: 0,
      imgTabs: [],
      formObj: '',
      remoteJSAddress: 'font_2228136_vk4dr8fp7h.js', // 图片列表
      myImgOption: [], // 图片列表
      shapeList: [
        { name: 'font_2228136_vk4dr8fp7h.js', label: '项目相关' },
        { name: 'font_1509873_qdui7zt7yg.js', label: '符号' },
        { name: 'font_2697842_66asiv2zz4.js', label: '金融' }
      ]
    }
  },
  computed: {
    activeOption() {
      return this.main.activeOption
    }
  },

  methods: {
    xlink(val) {
      return '#' + val
    },
    handleClose(done) {
      done()
    },
    /**
     * @desc    : 1.加载该列表,2获取图片名称,3渲染
     * @author  : mj
     * @date  : 2021/03/06
     * @update   by
     */
    async getImglist() {
      const name = this.remoteJSAddress
      const ojb = this.shapeList.find(item => item.name === name)
      const res = await this.$axios.get('/iconfont' + name)
      const data = res.data || res
      // eslint-disable-next-line no-eval
      eval(data)
      const tmp = data.match(/(?<=id=").*?(?=")/g) // 只截取id的内容
      this.myImgOption = tmp.map(item => {
        const temp = { iconName: item }
        Object.assign(temp, ojb)
        return temp
      })
    },
    /**
     * @desc    : 这里对图片地址进行统一替换,替换地址配置在前端env里面
     * @author  : mj
     * @date  : 2020/12/25
     * @update   by
     */
    pathreWright(str) {
      return str.replace(/http.*?longmap/g, process.env.VUE_APP_BASE_IMG)
    },

    // 这个是打开图片框的第一个方法
    openImg() {
      this.imgVisible = true
      this.remoteJSAddress =
        this.activeOption.remoteJSAddress || 'font_2228136_vk4dr8fp7h.js'
      this.getImglist()
    },
    // 选择图片
    handleSetimg(item) {
      this.activeOption.remoteJSAddress = item.name
      this.activeOption.iconName = item.iconName
      this.imgVisible = false
    },
    change() {
      this.getImglist()
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadImg {
  display: flex;
  .manageBtn {
    margin-left: 10px;
  }
  .radio-wrapper {
    width: 800px;
    padding-left: 20px;
  }
  .radio-item {
    padding-right: 0;
  }
  .el-radio {
    width: 80px;
  }
}
.imgTab {
  padding: 10px;
  margin-top: -20px;
  //   border: 1px solid;
  .imgBox {
    position: relative;
    width: 60px;
    height: 60px;
    padding: 5px;
    flex-direction: column;
    :deep(.el-button--default, .el-dialog .el-button--default) {
      font-size: 14px;
      color: #fff;
    }
    &:hover {
      .imgInsetButton {
        display: inline-block;
        background-color: rgba(10, 10, 10, 0.5);
      }
      .button-bg {
        display: inline-block;
      }
    }
  }
  .imgList {
    display: flex;
    height: 420px;
    height: auto;
    max-height: 420px;
    overflow: auto;
    flex-wrap: wrap;
  }

  .imgList svg {
    width: 60px;
    height: 60px;
    // margin: 5px 10px;
  }
  .imgname {
    width: 130px;
    padding-left: 5px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .imgButton {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 95%;
    height: 95%;
    background: rgb(199, 194, 194);
    border: none;
    opacity: 0.7;
    transform: translate(-50%, -50%);
  }
  .imgInsetButton {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    display: none;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
  .button-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    width: 100%;
    height: 100%;
    background: rgb(199, 194, 194);
    opacity: 0.7;
    transform: translate(-50%, -50%);
  }
}
.imgStyle {
  width: 100%;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC);
  &:hover {
    border: 1px solid rgba(16, 138, 224, 1);
    box-sizing: border-box;
  }
}
</style>
