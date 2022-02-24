<template>
  <div v-if="id == 0">
    <el-form-item label="水平方式">
      <el-tooltip content="左对齐" placement="top">
        <i class="el-icon-s-fold icon" @click="$emit('rankBox', 'left')"></i>
      </el-tooltip>
      <el-tooltip content="居中对齐" placement="top">
        <i
          class="el-icon-s-operation icon"
          @click="$emit('rankBox', 'center')"
        ></i>
      </el-tooltip>
      <el-tooltip content="右对齐" placement="top">
        <i class="el-icon-s-unfold icon" @click="$emit('rankBox', 'right')"></i>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="垂直方式">
      <el-tooltip content="顶对齐" placement="top">
        <i class="el-icon-s-fold icon" @click="$emit('rankBox', 'top')"></i>
      </el-tooltip>
      <el-tooltip content="中部对齐" placement="top">
        <i
          class="el-icon-s-operation icon"
          @click="$emit('rankBox', 'middle')"
        ></i>
      </el-tooltip>
      <el-tooltip content="底对齐" placement="top">
        <i
          class="el-icon-s-unfold icon"
          @click="$emit('rankBox', 'bottom')"
        ></i>
      </el-tooltip>
    </el-form-item>
    <el-form-item label-width="0">
      <el-button
        type="primary"
        size="mini"
        class="block"
        @click="main.handleDel"
      >
        删除
      </el-button>
    </el-form-item>
  </div>
  <!-- 其他事件配置 -->
  <div v-else-if="id == 4">
    <el-form label-width="120px" label-position="left" size="mini">
      <el-form-item label="提示事件">
        <el-button
          size="mini"
          type="primary"
          @click="main.openCode('formatter')"
        >
          编辑
        </el-button>
      </el-form-item>
      <el-form-item
        v-if="main.vaildProp('clickFormatterList')"
        label="点击事件"
      >
        <el-button
          size="mini"
          type="primary"
          @click="main.openCode('clickFormatter')"
        >
          编辑
        </el-button>
      </el-form-item>
      <el-form-item
        v-if="main.vaildProp('labelFormatterList')"
        label="标题事件"
      >
        <el-button
          size="mini"
          type="primary"
          @click="main.openCode('labelFormatter')"
        >
          编辑
        </el-button>
      </el-form-item>

      <!-- 下钻设置 -->
      <el-form-item v-if="main.vaildProp('drillList')" label="开启下钻">
        <el-switch
          v-model="eventConfig.openDrill"
          @change="openDrillChange"
        ></el-switch>
      </el-form-item>

      <div v-if="eventConfig.drill">
        <el-form-item label="打开方式">
          <el-select v-model="drill.way" placeholder="请选择">
            <el-option
              v-for="item in drlloptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="页面类型">
          <el-select v-model="drill.pageType" placeholder="请选择">
            <el-option
              v-for="item in pageOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item v-if="drill.pageType === 'screen'" label="下钻页面id">
          <el-input v-model="drill.targetId" style="width: 60%"></el-input>
        </el-form-item>
        <el-form-item v-else label="下钻地址">
          <el-input
            v-model="drill.targetUrl"
            type="textarea"
            :rows="2"
          ></el-input>
        </el-form-item>
      </div>
      <!-- 联动交互事件配置 -->
      <el-form-item label="开启联动">
        <el-switch
          v-model="eventConfig.openLinkage"
          @change="openLinkageChange"
        ></el-switch>
      </el-form-item>
      <div v-if="eventConfig.openLinkage">
        <div v-if="main.vaildProp('linkageList')">
          <el-form-item label="联动交互2">
            <avue-select
              v-model="eventConfig.childIndexs"
              :dic="childList"
              multiple
              :props="childProps"
            >
            </avue-select>
          </el-form-item>
        </div>
      </div>
      <!-- 不管有没有被联动,都可以编辑联动方法 -->
      <el-form-item label="交互方法">
        <el-button
          size="mini"
          type="primary"
          @click="main.openCode('linkageFormatter')"
        >
          编辑
        </el-button>
      </el-form-item>
      <!-- 交互事件配置 -->
      <div v-if="main.vaildProp('eventList')">
        <el-form-item label="点击交互">
          <avue-select
            v-model="eventConfig.child.index"
            multiple
            :dic="childList"
            :props="childProps"
          >
          </avue-select>
        </el-form-item>
        <el-form-item label="参数名称">
          <el-input v-model="eventConfig.child.paramName"></el-input>
        </el-form-item>
      </div>
      <div v-if="main.vaildProp('localSorageList')">
        <el-form-item label="存储参数">
          <el-input v-model="eventConfig.localSorageKey"></el-input>
        </el-form-item>
      </div>
      <el-form-item label-width="0">
        <el-button
          size="mini"
          type="primary"
          class="block"
          @click="main.handleRefresh"
        >
          刷新
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- 基本参数配置 -->
  <div v-else-if="id == 5">
    <el-form
      label-width="120px"
      label-position="left"
      size="mini"
      class="formCustomStyle"
    >
      <el-form-item label="X位置">
        <avue-input-number v-model="main.activeObj.left"></avue-input-number>
      </el-form-item>
      <el-form-item label="Y位置">
        <avue-input-number v-model="main.activeObj.top"></avue-input-number>
      </el-form-item>
      <el-form-item label="宽度">
        <avue-input-number
          v-model="main.activeComponent.width"
        ></avue-input-number>
      </el-form-item>
      <el-form-item label="高度">
        <avue-input-number
          v-model="main.activeComponent.height"
        ></avue-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Right',
  inject: ['main'],
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  emits: ['rankBox'],
  data() {
    return {
      childProps: {
        label: 'name',
        value: 'index'
      },
      drlloptions: [
        {
          value: 'self',
          label: '当前页面'
        },
        {
          value: 'blank',
          label: '新开窗口'
        }
      ],
      pageOptions: [
        {
          value: 'screen',
          label: '大屏页面'
        },
        {
          value: 'out',
          label: '外部页面'
        }
      ]
    }
  },
  computed: {
    eventConfig() {
      return this.main.activeObj.eventConfig
    },
    drill() {
      return this.main.activeObj.eventConfig.drill
    },
    childList() {
      return this.main.list.filter(ele => {
        if (ele.index === this.main.activeObj.index) {
          return false
        }
        return true
      })
    }
  },
  methods: {
    /**
     *@desc:初始化联动设置
     *@author:mj
     *@date:2021/08/04
     *@updateby
     */
    openLinkageChange(val) {
      if (val && !this.eventConfig.childIndexs) {
        // 注意这里要动态插入,否则下拉会选择不了
        this.eventConfig.childIndexs = []
      }
    },
    /**
     *@desc:初始化下钻设置,如果不初始化,会导致下拉选择失效
     *@author:mj
     *@date:2021/08/03
     *@updateby
     */
    openDrillChange(val) {
      // 如果为true且没有设置过drill,如果不这么判断,会导致之前设置的被冲掉
      if (val && !this.eventConfig.drill) {
        this.eventConfig.drill = {
          targetId: 0, // 下钻id
          pageType: 'screen', // screen或out
          targetUrl: '', // 下钻链接
          way: 'self', // 下钻跳转 类型self 本页面打开 blank 新窗口打开
          params: [] // 自定义参数
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  padding-right: 20px;
  font-size: 20px !important;
}
</style>
