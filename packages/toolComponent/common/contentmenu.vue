<template>
  <!-- 这是工具右键公共组件 -->
  <div
    class="contentmenu"
    v-show="contentMenu"
    @click="contentMenu = false"
    :style="styleName"
  >
    <div class="contentmenu__item" @click="handleLock(true)" v-if="isFolder">
      <i class="el-icon-view"></i>分组显隐
    </div>
    <div
      class="contentmenu__item"
      @click="handleSelAllorSelNone()"
      v-if="isFolder"
    >
      <i class="iconfont icon-quanxuan" style="margin-left: -2px"></i>
      <span style="margin-left: -2px">全选内容</span>
    </div>
    <div
      class="contentmenu__item"
      @click="handleLogout()"
      v-if="isFolder && !islock"
    >
      <i class="el-icon-back"></i>解散分组
    </div>
    <div class="contentmenu__item" @click="handleCompose()" v-if="isCompose">
      <i class="el-icon-right"></i>组合分组
    </div>
    <div class="contentmenu__item" @click="folderRename()" v-if="isFolder">
      <i class="el-icon-info"></i>重命名分组
    </div>
    <div
      class="contentmenu__item"
      @click="contain.handleDel()"
      v-if="!isFolder && !islock"
    >
      <i class="el-icon-close"></i>删除图层
    </div>
    <div
      class="contentmenu__item"
      @click="contain.handleDel(1)"
      v-if="isFolder && !islock"
    >
      <i class="el-icon-close"></i>删除分组
    </div>
    <div class="contentmenu__item" @click="handleCopy()" v-if="!isFolder">
      <i class="el-icon-document"></i>复制图层
    </div>
    <div class="contentmenu__item" @click="handleCopy()" v-if="isFolder">
      <i class="el-icon-document"></i>复制分组
    </div>
    <div
      class="contentmenu__item"
      @click="handleTop()"
      :class="hasMany"
      v-if="!isFolder"
    >
      <i class="el-icon-arrow-up"></i>置顶图层
    </div>
    <div
      class="contentmenu__item"
      @click="handleTop()"
      :class="hasMany"
      v-if="isFolder"
    >
      <i class="el-icon-arrow-up"></i>置顶分组
    </div>
    <div
      class="contentmenu__item"
      @click="handleBottom()"
      :class="hasMany"
      v-if="!isFolder"
    >
      <i class="el-icon-arrow-down"></i>置底图层
    </div>
    <div
      class="contentmenu__item"
      @click="handleBottom()"
      :class="hasMany"
      v-if="isFolder"
    >
      <i class="el-icon-arrow-down"></i>置底分组
    </div>
    <div class="contentmenu__item" :class="hasMany" @click="handleStepTop()">
      <i class="el-icon-arrow-up"></i>上移一层
    </div>
    <div class="contentmenu__item" :class="hasMany" @click="handleStepBottom()">
      <i class="el-icon-arrow-down"></i>下移一层
    </div>

    <div class="contentmenu__item" @click="handleLock()">
      <i class="iconfont icon-suo"></i>加解锁
    </div>

    <el-dialog
      title="重命名分组"
      :append-to-body="true"
      v-model="renameDialogVisible"
      width="350px"
      top="30vh"
      :close-on-click-modal="false"
    >
      <span style="margin-left: 10px">请输入新名称:</span>
      <el-input
        v-model="renameDialogInput"
        size="mini"
        style="width: 213px; transform: translateX(10px)"
        placeholder=""
      ></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="mini" @click="renameDialogVisible = false"
            >取 消</el-button
          >
          <el-button size="mini" type="primary" @click="folderRename"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AvueContentmenu',
  inject: ['contain'],
  data() {
    return {
      contentMenu: false,
      contentMenuX: 0,
      contentMenuY: 0,
      renameDialogVisible: false,
      renameDialogInput: ''
    }
  },
  computed: {
    hasMany() {
      return this.contain.active.length > 1 ? 'disable' : ''
    },
    islock() {
      return this.contain.activeObj.lock
    },
    styleName() {
      return {
        left: this.setPx(this.contentMenuX),
        top: this.setPx(this.contentMenuY)
      }
    },
    isFolder() {
      return this.contain.activeObj.children
    },
    isCompose() {
      // 限制只有0级的资源才能组合
      const list = this.contain.active
      const params = this.contain.findnav(list[0], true)
      return !this.contain.activeObj.children && params.pcount == 0
    }
  },
  watch: {},
  methods: {
    uuid() {
      const s = []
      const hexDigits = '0123456789abcdef'
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-'

      const uuid = s.join('')
      return uuid
    },
    show(X = 0, Y = 0) {
      let newY
      if (this.contain.activeObj.children) {
        //folder
        Y + 339 > window.innerHeight
          ? (newY = window.innerHeight - 339)
          : (newY = Y)
      } else {
        //file
        Y + 271 > window.innerHeight
          ? (newY = window.innerHeight - 271)
          : (newY = Y)
      }
      this.contentMenuX = X + 5
      this.contentMenuY = newY
      this.contentMenu = true
    },
    hide() {
      this.contentMenuX = 0
      this.contentMenuY = 0
      this.contentMenu = false
    },
    handleStepBottom() {
      this.handleCommon(false, true)
    },
    handleStepTop() {
      this.handleCommon(true, true)
    },
    //全选文件夹下内容
    handleSelAllorSelNone() {
      const params = this.contain.findnav(this.contain.active[0], true)
      if (params.obj.children) {
        this.contain.active = []
        params.obj.children.forEach(a => {
          this.contain.active.push(a.index)
        })
      }
    },
    //分组逻辑
    handleCompose() {
      const list = this.contain.active
      this.$confirm(`是否组合所选择的图层?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const floder = {
            option: {
              animations: [], //动画
              startHidden: false, // 开始隐藏
              allDelayTime: 0, // 整体播放时长
              isOnceAnimation: true // true 动画执行一次 false 无线循环
            },
            lock: false,
            name: '分组',
            index: this.uuid(),
            menu: true, //刚建立的文件夹默认展开,方便操作
            children: []
          }
          //查找到每个组件调用核心方法就行组合操作
          //寻找父类
          const params = this.contain.findnav(list[0], true)
          list.forEach(ele => {
            const item = this.contain.findnav(ele, true)
            item.parent.splice(item.count, 1)
            floder.children.push(item.obj)
          })
          params.parent.push(floder)
        })
        .catch(() => {})
    },
    //分组解散逻辑
    handleLogout() {
      //   console.log(this.contain, "this.contain");
      const ele = this.contain.activeObj
      this.$confirm(`是否解散${ele.name}图层?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          //查找到分组调用核心方法nav去操作
          const params = this.contain.findnav(ele.index, true)
          const list = this.deepClone(params.obj.children)
          if (params.parent.menu) {
            params.parent.children.splice(params.count, 1)
            list.forEach(ele => params.parent.children.push(ele))
          } else {
            params.parent.splice(params.count, 1)
            list.forEach(ele => params.parent.push(ele))
          }
          this.contain.handleInitActive()
        })
        .catch(() => {})
    },
    //重命名分组
    //因为涉及到遍历,所以 点菜单 和 点确定 都走这个方法
    folderRename() {
      //先判断内容
      const tmpName = this.renameDialogInput.trim()
      if (this.renameDialogVisible) {
        if (tmpName == '') {
          this.$message.closeAll()
          this.$message.error({ message: '分组名称不能为空', duration: 3000 })
          return
        }
      }
      //开始遍历节点
      const params = this.contain.findnav(this.contain.active[0], true)
      this.contain.active.forEach(() => {
        if (Array.isArray(params.parent)) {
          //top-level node
          if (!this.renameDialogVisible) {
            //先显示对话框
            this.renameDialogInput = params.obj.name
            this.renameDialogVisible = true
            return
          }
          //通过了最初的验证,直接替换
          params.obj.name = tmpName
        } else {
          //sub node
          if (!this.renameDialogVisible) {
            //先显示对话框
            this.renameDialogInput = params.parent.children[params.count].name
            this.renameDialogVisible = true
            return
          }
          //通过了最初的验证,直接替换
          params.parent.children[params.count].name = tmpName
        }
        this.renameDialogVisible = false
        this.contain.handleInitActive()
      })
    },

    //复制组件的方法
    handleCopy(datas = this.contain.active) {
      datas.forEach(ele => {
        //寻找父类
        const params = this.contain.findnav(ele, true)
        const obj = this.deepClone(params.obj)
        obj.name = obj.name + '-复制'
        obj.index = this.uuid()
        if (obj.children) {
          this.setuuid(obj.children)
        }
        const arrs = params.parent.menu ? params.parent.children : params.parent
        arrs.forEach((obj1, i) => {
          if (ele == obj1.index) {
            arrs.splice(i + 1, 0, obj)
          }
        })
      })
      this.contain.handleInitActive()
    },
    /**
     * @desc    : 递归设置uuid
     * @author  : mj
     * @date  : 2020/11/27
     * @update   by
     */
    setuuid(array) {
      array.forEach(obj => {
        if (obj.children) {
          this.setuuid(obj.children)
        } else obj.index = this.uuid()
      })
    },
    // 图层的上下移动方法
    handleCommon(first = false, step = false) {
      // 交换数组元素
      const swapItems = function (arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0]
        return arr
      }
      const obj = this.contain.activeObj
      const data = this.deepClone(obj)
      const params = this.contain.findnav(obj.index, true)
      function handler(nav) {
        if (step) {
          if (first && params.count === 0) return
          if (!first && params.count === params.len) return
          const count = first ? params.count - 1 : params.count + 1
          swapItems(nav, params.count, count)
        } else {
          if (first) {
            if (params.count === 0) return
            nav.splice(params.count, 1)
            nav.unshift(data)
          } else {
            if (params.count === params.len) return
            nav.splice(params.count, 1)
            nav.push(data)
          }
        }
      }
      if (params.pcount !== 0) {
        if (params.len < 1) return
        handler(params.parent.children)
      } else {
        if (this.contain.nav.length < 1) return
        handler(this.contain.nav)
      }
    },
    handleTop() {
      this.handleCommon(true)
    },
    handleBottom() {
      this.handleCommon()
    },
    /**
     * @desc    : 加解锁递归连同显影逻辑
     * @author  : mj
     * @date  : 2020/11/27
     * @update   by
     */
    setLockState(item, flag, show) {
      if (!Array.isArray(item)) {
        show ? (item.comhidden = flag) : (item.lock = flag)
        if (item.children) this.setLockState(item.children, flag, show)
      } else {
        // 数组
        item.forEach(ele => {
          show ? (ele.comhidden = flag) : (ele.lock = flag)
          if (ele.children) this.setLockState(ele.children, flag, show)
        })
      }
    },
    handleLock(show) {
      //寻找父类
      this.contain.active.forEach(ele => {
        const item = this.contain.findnav(ele, true)
        // 这里把加解锁和显影共用一个方法
        this.setLockState(
          item.obj,
          show ? !item.obj.comhidden : !item.obj.lock,
          show
        )
      })
      this.contain.handleInitActive()
    }
  }
}
</script>
<style lang="scss" scoped>
.contentmenu {
  position: fixed;
  z-index: 99999;
  width: 160px;
  padding: 0;
  list-style: none;
  background-color: inherit;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &__item {
    position: relative;
    z-index: 10000;
    padding: 8px 12px;
    font-size: 12px;
    color: inherit;
    list-style: none;
    cursor: pointer;
  }

  .disable {
    color: silver;
    pointer-events: none;
  }

  &__item:hover {
    background-color: rgba(0, 192, 222, 0.1);
  }

  &__item i {
    margin-right: 5px;
  }

  &__item :first-child {
    padding-top: 5px;
  }
}
</style>
