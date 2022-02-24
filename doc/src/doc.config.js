let list = [
  {
    label: '快速上手',
    default: '/dev/getting-started',
    list: [
      {
        name: '介绍',
        path: '/dev/introduction',
      },
      {
        name: "更新日志",
        path: "/dev/changelog"
      },
      {
        name: "开发指南",
        routerName: 'dev',
        default: '/getting-started',
        groups: [{
          list: [
            {
              title: '快速上手',
              path: '/getting-started',
            },
            {
              title: '开发规范',
              path: '/rules',
            },
            {
              title: '插件说明',
              path: '/plugin',
            },
            {
              title: '开发流程',
              path: '/edit-component',
            },
            {
              title: '小技巧',
              path: '/tips',
            },

          ]
        }]
      },
    ]
  },
  {
    label: 'echart组件',
    default: '/echart/chart-doc',
    list: [{
      name: "图表组件",
      routerName: 'echart',
      groups: [{
        list: [
          {
            title: "通用文档",
            path: "/chart-doc"
          },
          {
            title: "主题更改",
            path: "/theme"
          },
          {
            path: '/bar',
            title: "柱形图"
          },
          {
            path: '/biaxial',
            title: "双轴图"
          },

          {
            path: '/funnel',
            title: "漏斗图"
          },
          {
            path: '/gauge',
            title: "刻度盘"
          },

          {
            path: '/line',
            title: "折线图"
          },
          {
            path: '/pie',
            title: "饼图"
          },
          {
            path: '/progress',
            title: "环形图/进度条(样式不对)"
          },
          {
            path: '/pictorialbar',
            title: "象形图"
          },
          {
            path: '/radar',
            title: "雷达图"
          },
          {
            path: '/scatter',
            title: "散点图"
          },
          {
            path: '/liquidfill',
            title: "水球图"
          },
          {
            path: '/liquidfillfull',
            title: "水球图全容器"
          },
          {
            path: "/wordcloud",
            title: "字符云(无)"
          }, {
            path: '/map',
            title: "地图"
          },
        ]
      }]
    }]
  },
  {
    label: '图文区',
    default: '/picText/datetime',
    list: [{
      name: "图文区",
      routerName: 'picText',
      groups: [{
        list: [{
          path: '/datetime',
          title: "日期时间"
        },
        {
          path: '/flop',
          title: "翻牌器"
        }, {
          path: '/text',
          title: "文本框"
        }, {
          path: '/imgborder',
          title: "边框"
        },
        {
          path: '/textcount',
          title: "跳动文本框"
        },
        {
          path: '/video',
          title: "视频"
        },]
      }]
    }]
  }, {
    label: '工具区',
    default: '/tool/monacoEditors',
    list: [{
      name: "工具区",
      routerName: 'tool',
      groups: [{
        list: [{
          path: '/monacoEditors',
          title: "代码编辑器"
        },
        {
          path: '/AnimationEdit',
          title: "动画设置"
        },
        {
          path: '/AnimationLunbo',
          title: "动画轮播图设置"
        },
        {
          path: '/companyTree',
          title: "公司树"
        },
        {
          path: '/manyDims',
          title: "多维度取数"
        },
          // {
          //     path: '/video',
          //     title: "视频"
          // },
        ]
      }]
    }]
  }]


export default (function () {
  function detail(nav, count) {
    nav.forEach(ele => {
      const children = ele.list || ele.groups;
      ele.count = count;
      if (children) detail(children, count);
    });
  }

  list.forEach((ele, index) => {
    const children = ele.list;
    ele.count = index;
    if (children) detail(children, index);
  });
  return list;
})()