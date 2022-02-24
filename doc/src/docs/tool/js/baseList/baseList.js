// 基础公共url
import basicDatas from '../basicDatas'
export default [{
  label: '多指标图',
  icon: 'icon-bar',
  children: [{
    label: '柱形图',
    option: {
      name: "柱形图",
      icon: 'icon-bar',
      data: basicDatas.bar,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"1","unit":1 }',
      url: '/cnbi/project/access/query', // baseUrl + "/bar",
      time: 5,
      component: {
        width: 914,
        height: 442,
        prop: "bar",
      },
      option: {
        digit: 2,
        category: false,
        linearDirection: '从左到右',
        numberFresh: false, // 数字滚动刷新
        // 功能设置
        addPictorialBar: false, // 添加趋势图标
        pictorialBarFontSize: 64, // 图标大小
        isStack: false,
        markLineShow: false, // 辅助线
        markLineVal: 0, // 辅助线数值,
        markLineTypeStyle: 'dashed', // 线型
        markLineColor: 'rgba(45, 97, 135, 1)', // 辅助线颜色
        tooltipShow: true, // 提示
        axisPointerShow: true, // 参考线是否显示
        axisPointerWidth: 2,
        axisPointerBorderColor: 'rgba(42,47,56,0.3)',
        tooltipBackgroundColor: '#fff', // 提示框背景色
        yPointerShow:true, //Y指示器
        axisPointerLabelShow: true, // 控制参考线下面的文本标签
        // 数值
        labelShow: true, // 图内数值显示设置
        labelShowFontSize: 12, // 图内数值字号
        labelShowColor: 'rgba(45, 97, 135, 1)', // 图内汉字字色
        labelShowPosition: 'top', // 位置
        markPointMax: false, // 显示最大值
        markPointMin: false, // 显示最小值
        dataZoomShow: false, // 缩略轴
        // contrastShowDataZoom: contrastShowDataZoom,//用来做判断  对比条图不显示缩略轴
        // 图例
        legend: true, // 图例位置
        legendalign: 'up', // 图例排齐方式
        legendHeight: 'auto', // 图例高度
        legendColor: 'rgba(45, 97, 135, 1)', // 图例颜色
        legendFontSize: 16, // 图例字号
        legendOrient: 'horizontal', // 默认横排
        legendPostion: 'N', // 图例默认放在中上
        titlePostion: 'left', // 标题字体位置
        titleColor: 'rgba(45, 97, 135, 1)',
        title: '',
        xAxisTickShow: true,
        yAxisTickShow: true,
        setChartLocation: [0], // 图表位置设置
        xShowLabel: true, // x显示标签
        yShowLabel: [0, 1], // y显示标签
        gridX: 10, // 左边距
        gridY: 70, // 上边距//默认需要把标题的位置空着
        gridX2: 10, // 右边距
        gridY2: 10, // 下边距
        // X轴
        xAxisShow: true, // 坐标轴名称与轴线之间的距离
        xAxisinterval: true, // 强制显示所有标签。
        // xnameGap: 60,
        ynameGap: 15, // 坐标轴名称与轴线之间的距离 !!!!!!!!!!
        // 轴线颜色
        xlineColor: 'rgba(45, 97, 135, 1)',
        xTypeStyle: 'solid', // 轴线样式
        // 字体
        xNameFontSize: 12, // x轴名称字号
        xnameColor: 'rgba(45, 97, 135, 1)', // x轴名称颜色
        xAxisRotate: 0, // 倾斜方向
        xAxisNameShow: [1], // X轴标题是否显示
        // xAxisName: null,
        xAxisNameColor: 'rgba(45, 97, 135, 1)', // x轴坐标名字颜色
        xAxisNameFontSize: 12, // x轴坐标名字字号
        xAxisMin: 0, // x轴最小值
        // xAxisMax: null, // x轴最大值
        xAxisMinCustomize: [0], // x轴最小值自定义控制按钮是否勾选上
        xAxisMaxCustomize: [0], // y轴最大值自定义控制按钮是否勾选上
        // disabledAxis:true, //默认输入框能填写  输入框默认是禁止状态的可以用这个属性
        // y轴
        yAxisShow: true, // y轴显示/隐藏
        yAxisMaxHandel: false, // 手动关闭
        yAxisinterval: true, // 强制显示所有标签。
        // 轴线
        ylineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
        yTypeStyle: 'solid', // y轴轴线样式
        // 字体
        ynameColor: 'rgba(45, 97, 135, 1)', // y轴标题颜色
        yNameFontSize: 12, // y轴标题字号
        yAxisRotate: 0, // y轴旋转
        // yAxisNameShow: [0, 1], //Y轴标题是否显示__
        yAxisOffset: 0, // ~!!!!!!!!!!!!!
        // yAxisName: 'null', // y轴名称
        yAxisNameColor: 'rgba(45, 97, 135, 1)', // y轴名称颜色
        yAxisNameFontSize: 12, // y轴名称字号
        // yAxisMin: null, // y轴最小值
        // yAxisMax: null, // y轴最大值
        // yAxisFormatter: null, // 单位
        // 横网
        xAxisSplitLineShow: false, // 横网显示/隐藏
        xAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 横网颜色
        xAxisSplitLineShowType: 'solid', // 横网样式
        // 纵网
        yAxisSplitLineShow: false, // 纵网显示/隐藏
        yAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 纵网颜色
        yAxisSplitLineShowType: 'solid', // 纵网样式
        legendLeft: 136, // 左对齐
        legendTop: 110, // 上对齐
        xAxisInverse: false, // x轴反转
        smooth: false, // 折线图的曲线或折线
        // areaStyleShow: null, // 面积透明度度  面积折线图的,
        editConfig: {},
        // formatterNumber: null,
        categoryCounterPosition: '前',
        // yFlipRight: yFlipRight,// 是bar2 和bar3的时候  翻转Y轴的轴名字不跟着动
        // setAxisShow: setAxisShow,//是否显示次轴
        czAxisShow: true, // 次轴是否显示
        czShowLabel: [0, 1], // 次轴显示标签
        czNameFontSize: 12, // 次轴字体大小
        cznameColor: 'rgba(45, 97, 135, 1)', // 次轴字体颜色
        czAxisRotate: 0, // 次轴轴旋转
        czAxisNameShow: [0, 1], // 次轴轴标题是否显示
        // czAxisName: null, // 次轴轴名称
        czAxisNameColor: 'rgba(45, 97, 135, 1)', // 次轴轴名称颜色
        czAxisNameFontSize: 12, // 次轴轴名称字号
        czlineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
        czTypeStyle: 'solid', // y轴轴线样式
        cznameGap: 30, // 坐标轴名称与轴线之间的距离
        // czAxisMin: null, // 次轴轴最小值
        // czAxisMax: null, // 次轴轴最大值
        // czAxisFormatter: null, // 次轴单位
        czAxisMinCustomize: [0], // 次轴最小值自定义控制按钮是否勾选上
        czAxisMaxCustomize: [0], // 次轴最大值自定义控制按钮是否勾选上
        barImgShow: false, // 是否开启自定义渲染背景
        barImg: '', // 背景图片BASE64 或url都成
        barColor: [{
          color1: "rgba(131,191,246,1)",
          color2: "rgba(24, 141, 240, 1)",
        }, {
          color1: "rgba(35, 183, 229, 1)",
          color2: "rgba(86, 74, 163, 1)",
        }],
        barMinHeight: 2,
        currencyType: 10000,
        titleShow: true,
      }
    }
  }, {
    label: '柱形图-累计、预算数',
    option: {
      name: "柱形图-累计、预算数",
      icon: 'icon-bar',
      data: basicDatas.bar,
      dataType: 1,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"6","unit":1,"ds":"nkdp_0616"}',
      url: '/cnbi/project/access/query',
      time: 5,
      component: {
        width: 914, // 800,
        height: 442, // 400,
        prop: "barwcl",
      },
      option: {
        gridVal: [80, 30, 54, 26], // 上右下左
        toplineOffset: 25,
        barcolors: ["#2dc6c8", "#b6a2dd"], // ['#2e7bfa', '#7b75fc',],//ff7800
        barcolors_fontSize: 16,
        barcolors_fontWeight: true,
        barcolors_hidden: ['#f00', '#000'], // ['#00c0ff', '#fff'],
        barcolors_hidden_fontSize: 16,
        barcolors_hidden_fontWeight: true,
        currencyType: 100000000,
        digit: 2,
        barTextColor: '#fbc650',
        legendText: ['本年累计', '本年预算'], // 这里放显示的柱子
        legendText_hidden: ['预算完成率'], // 隐藏的柱子!
        legendColor: '#000',
        legendfontSize: 12,
        legendfontWeight: false,
        yAxisName: '预算\n完成率',
        xAxisLabelColor: '#2e7bfa',
        xAxisLabelFontsize: 0, // 16,
        xAxisLabelFontWeight: true,
        yAxisLabelColor: '#2e7bfa',
        yAxisLabelFontsize: 16,
        yAxisLabelFontWeight: true,
        yAxisLabelOffset: 0, // 35,
        yAxisLabelTOffset: 0, // 22,
        yAxisLabelLOffset: 0,
        lineWidth: 3,
        symbolSize: 10,
        dType: '0',
      }
    }
  },
  {
    label: '柱形图-子公司',
    option: {
      name: "柱形图-子公司",
      icon: 'icon-bar',
      data: basicDatas.bar,
      lock: false, // 是不是加锁，阻止拖动
      dataQuery: '{"period": "$year$month"}',
      url: '/cnbi/project/ocr_data/company_data',
      time: 5,
      component: {
        width: 914, // 800,
        height: 442, // 400,
        prop: "barSubCompany",
      },
      option: {
        dataType: 'yysr',
        currencyType: 10000,
        digit: 2,
        barColor: '#054a5a',
        barFontColor: '#000000',
        barFontSize: 15,
        lineColor: '#ff0000',
        lineFontSize: 25,
        lineFontColor: '#f00',
      }
    }
  },
  {
    label: '柱形图-房地产',
    option: {
      name: "柱形图-房地产",
      icon: 'icon-bar',
      data: basicDatas.bar,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"6","unit":1,"ds":"nkdp_0616"}',
      url: '/cnbi/project/access/query',
      time: 5,
      component: {
        width: 914, // 800,
        height: 442, // 400,
        prop: "barFdc",
      },
      option: {
        currencyType: 10000,
        digit: 2,
        legendFontSize: 25,
        legendFontColor: '#4660CF',
        legendTop: 40,
        barColor: 'rgba(45, 172, 184, 1)',
        barFontSize: 40,
        barFontColor: '#FF8400',
        lineFontSize: 28,
        lineFontColor: '#ffc71d',
        lineColor: '#ffc71d',
      }
    }
  },
  {
    label: '仪表盘-完成、增减率',
    option: {
      name: "仪表盘-完成、增减率",
      icon: 'icon-yibiaopan',
      data: basicDatas.bar,
      comhidden: false,
      dataType: 1,
      dataMethod: 'get',
      lock: false, // 是不是加锁，阻止拖动
      dataQuery: '{"period": "$year$month"}',
      url: '/cnbi/project/ocr_data/company_data',
      time: 5,
      component: {
        width: 1021, // 800,
        height: 549, // 400,
        prop: "bGauge2",
      },
      option: {
        comp: '苏垦农发',
        dType: '营业收入',
        borderwidth: 22, // 外圈圆宽度
        detailFontSize: 20,
        detailColor: '#fff',
      }
    }
  },
  {
    label: '折线图',
    option: {
      name: "折线图",
      icon: 'icon-shujuzhexiantu',
      data: basicDatas.bar,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"1","unit":1,"jd":true }',
      url: '/cnbi/project/access/query', // "/bar",
      time: 5,
      component: {
        width: 914, // 800,
        height: 442, // 400,
        prop: "line",
      },
      option: {
        barColor: [{
          color1: "rgba(131,191,246,1)",
          color2: "rgba(34, 147, 242, 1)",
          postion: 90,
          $index: 0,
          _show: true
        }, {
          color1: "rgba(239, 193, 152, 1)",
          color2: "rgba(255, 120, 0, 1)",
          postion: 50,
          $index: 1,
          _show: true
        }],
        barMinHeight: 2,
        barRadius: 8,
        barWidth: null,
        currencyType: 10000,
        digit: 2,
        gridX: 15,
        gridX2: 10,
        gridY: 90,
        gridY2: 75,
        labelShow: true,
        labelShowFontSize: 16,
        labelShowFontWeight: "lighter",
        labelShowWithoutLine: false,
        legend: true,
        legendColor: "rgba(9, 100, 188, 1)",
        legendFontSize: 14,
        legendOrient: "horizontal",
        legendPostion: "S",
        lineColor: "rgba(238, 238, 238, 1)",
        lineWidth: 3,
        linearDirection: "从上到下",
        nameColor: "rgba(238, 238, 238, 1)",
        subTitleColor: "rgba(45, 97, 135, 1)",
        subTitleFontSize: 25,
        symbolSize: 7,
        title: "",
        titleColor: "rgba(45, 97, 135, 1)",
        titleFontSize: 16,
        titlePostion: "center",
        titleShow: true,
        xAxisInverse: false,
        xAxisOffset: 0,
        xAxisShow: true,
        xAxisSplitLineShow: false,
        xAxisSplitLineShowColor: "rgba(204, 204, 204, 1)",
        xAxisSplitLineShowType: "dashed",
        xNameFontSize: 16,
        xnameColor: "rgba(30, 144, 255, 1)",
        yAxisNameColor: "rgba(45, 97, 135, 1)",
        yAxisNameFontSize: 0, // 14,
        yAxisOffset: 0,
        yAxisShow: true,
        yAxisSplitLineShow: false,
        yAxisSplitLineShowColor: "rgba(204, 204, 204, 1)",
        yAxisSplitLineShowType: "dashed",
        yAxisTickShow: true,
        yNameFontSize: 16,
        ynameColor: "rgba(45, 97, 135, 1)",
        ynameGap: 20,
      }
    }
  },
  // {
  //     label: '折线图-增减趋势',
  //     option: {
  //         name: "折线图-增减趋势",
  //         icon: 'icon-shujuzhexiantu',
  //         data: basicDatas.bar,
  //         dataQuery: '{ "company":"$comid", "period":"$year$month", "items": ["1403100", "1416001", "1400111"] }',
  //         dataFormatter: "(function(data) { return data})",
  //         url: '/cnbi/project/ocr_data/important_indicator',
  //         time: 5,
  //         component: {
  //             width: 914, // 800,
  //             height: 442, // 400,
  //             prop: "linezzqs",
  //         },
  //         option: {
  //             startPeriod: '本期',
  //             lineColors: ['#4a7eba', '#bd4a47', '#97b856'],
  //             lineWidth: 2,
  //             xAxisFontColor: '#707070',
  //             xAxisFontSize: 14,
  //             xAxisFontDblLine: false,
  //             yAxisFontColor: '#707070',
  //             yAxisFontSize: 14,
  //             legendFontColor: '#000000',
  //             legendFontSize: 25,
  //             legendBottom: 35,
  //             xAxisAxisLabelRotate: 0,
  //             gridBottom: 120,
  //         }
  //     }
  // },
  {
    label: '饼图',
    option: {
      name: "饼图",
      icon: 'icon-bingtu',
      time: 5,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616"}',
      dataFormatter: "(function(data) { return data})",
      url: '/cnbi/project/access/query', // "/pie",
      data: basicDatas.pie,
      resize: false,
      component: {
        width: 914,
        height: 442,
        prop: "pie",
      },
      option: {
        legendDataIcon: 'rect',
        digit: 2,
        legend: true,
        labelShow: true,
        barColor: [{
          color1: "rgba(131,191,246,1)"
        },
        {
          color1: "rgba(35, 183, 229, 1)"
        },
        {
          color1: "rgba(154, 168, 212, 1)"
        },
        {
          color1: "rgba(24, 141, 240, 1)"
        },
        {
          color1: "rgba(86, 74, 163, 1)"
        }
        ],
        legendOrient: 'vertical', // 默认竖排
        legendPostion: 'E', // 图例默认放在右
        legendColor: 'rgba(0, 0, 0, 1)',
        currencyType: 10000,
        titlePostion: 'left', // 标题字体位置
        titleShow: true,
        title: '',
      }
    }
  },
  {
    label: '饼图-利润总额',
    option: {
      name: "饼图-利润总额",
      icon: 'icon-bingtu',
      time: 5,
      comhidden: false,
      dataType: 1,
      lock: false, // 是不是加锁，阻止拖动
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"9","unit":1,"ds":"nkdp_0616"}',
      dataFormatter: "(function(data) {let arr=[]; if(data[9].data.length>0) data[9].data.forEach(a=>arr.push({name:a.sname,value:a.val}));return arr})",
      url: '/cnbi/project/access/query', // "/pie",
      data: basicDatas.pie,
      resize: false,
      component: {
        width: 914,
        height: 442,
        prop: "pie",
      },
      option: {
        legendDataIcon: 'rect',
        digit: 2,
        legend: true,
        labelShow: true,
        barColor: [{
          color1: "rgba(131,191,246,1)"
        },
        {
          color1: "rgba(35, 183, 229, 1)"
        },
        {
          color1: "rgba(154, 168, 212, 1)"
        },
        {
          color1: "rgba(24, 141, 240, 1)"
        },
        {
          color1: "rgba(86, 74, 163, 1)"
        }
        ],
        legendOrient: 'vertical', // 默认竖排
        legendPostion: 'E', // 图例默认放在右
        legendColor: 'rgba(0, 0, 0, 1)',
        currencyType: 10000,
        titlePostion: 'left', // 标题字体位置
        titleShow: true,
        title: '',
      }
    }
  },
  // {
  //     label: '饼图2',
  //     option: {
  //         name: "饼图2",
  //         icon: 'icon-bingtu',
  //         time: 5,
  //         dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616"}',
  //         url: '/cnbi/project/access/query', // "/pie",
  //         data: basicDatas.pie2,
  //         resize: false,
  //         component: {
  //             width: 914,
  //             height: 442,
  //             prop: "pie2",
  //         },
  //         option: {
  //             legendDataIcon: 'rect',
  //             currencyType: 10000,
  //             digit: 2,
  //             pieColors: // ['#2ec7c9', '#b6a2de', '#ffb980', '#5ab1ef'],
  //                 [
  //                     "rgba(46, 199, 201, 1)",
  //                     "rgba(182, 162, 222, 1)",
  //                     "rgba(255, 185, 128, 1)",
  //                     "rgba(90, 177, 239, 1)"
  //                 ],
  //             titlePostion: "center",
  //             titleShow: true,
  //             title: "| 重要数据",
  //             titleColor: "rgba(72, 109, 253, 1)",
  //             titleFontSize: 26,
  //             subtext: "产业发展情况",
  //             subTitleFontSize: 21,
  //             subTitleColor: "rgba(108, 74, 45, 1)",
  //             legend: true,
  //             legendColor: "rgba(165, 147, 135, 1)",
  //             legendFontSize: 18,
  //             legendOrient: "horizontal",
  //             legendPostion: "S",
  //             lblBGColor: "rgba(238, 238, 238, 1)",
  //             lbltitleColor: "rgba(114, 82, 54, 1)",
  //             lbltitleFontSize: 20,
  //             lblUnitColor: "rgba(114, 82, 54, 1)",
  //             lblUnitFontSize: 15,
  //             lblZBKanjiColor: "rgba(114, 82, 54, 1)",
  //             lblZBKanjiFontSize: 15,
  //             lblKaneColor: "rgba(251, 204, 94, 1)",
  //             lblKaneFontSize: 20,
  //             lblPercentColor: "rgba(251, 204, 94, 1)",
  //             lblPercentFontSize: 20
  //         }
  //     }
  // },
  {
    label: '雷达图',
    option: {
      name: "雷达图",
      icon: 'icon-leidatu',
      time: 5,
      url: '/cnbi/project/access/query', // baseUrl + "/radar",
      data: basicDatas.radar,
      component: {
        width: 914,
        height: 442,
        prop: "radar",
      },
      option: {
        areaOpacity: 0.3,
        barColor: [{
          color1: "rgba(86, 74, 163, 1)",
        },
        {
          color1: "rgba(24, 141, 240, 1)",
        }
        ],
        currencyType: 10000,
        digit: 2,
        height: 400,
        labelShow: true,
        labelShowFontSize: 15,
        legend: true,
        legendColor: "rgba(0, 0, 0, 1)",
        legendOrient: "vertical",
        legendPostion: "E",
        radarNameColor: "rgba(45, 97, 135, 1)",
        radarNameSize: 18,
        // radius: "75%",
        shape: "polygon",
        splitNumber: 4,
        subtext: "",
        tipBackgroundColor: "rgba(50,50,50,0.7)",
        tipColor: "rgba(45, 97, 135, 1)",
        title: "标题文字",
        titleColor: "rgba(45, 97, 135, 1)",
        titleFontSize: 30,
        titlePostion: "center",
        titleShow: true,
        width: "100%",
      },
    }
  }, {
    label: '漏斗图',
    option: {
      name: "漏斗图",
      icon: 'icon-loudoutu',
      time: 5,
      comhidden: false,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1 }',
      url: '/cnbi/project/access/query', // baseUrl + "/funnel",
      data: basicDatas.pie,
      component: {
        width: 914,
        height: 442,
        prop: "funnel",
      },
      option: {
        digit: 2,
        radius: true,
        legend: true,
        barColor: [{
          color1: "rgba(131,191,246,1)"
        },
        {
          color1: "rgba(35, 183, 229, 1)"
        },
        {
          color1: "rgba(154, 168, 212, 1)"
        },
        {
          color1: "rgba(24, 141, 240, 1)"
        },
        ],
        currencyType: 10000,
        legendColor: "rgba(0, 0, 0, 1)",
        legendFontSize: 16,
        legendPostion: "S",
        subTitleColor: null,
        subtext: "",
        title: "标题文字",
        titleColor: "rgba(0, 0, 0, 1)",
        titleFontSize: 16,
        titlePostion: "center",
        titleShow: true,
        labelShow: true,
        labelShowFontSize: 16,
        labelShowFontWeight: 'bold',
      }
    }
  }, {
    label: '颜色块',
    option: {
      name: "颜色块",
      icon: 'icon-yanse',
      data: [{
        backgroundColor: '#67C23A',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }, {
        backgroundColor: '#409EFF',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }, {
        backgroundColor: '#E6A23C',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }, {
        backgroundColor: '#F56C6C',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }, {
        backgroundColor: '#7232dd',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }, {
        backgroundColor: 'blue',
        prefixText: "某某某总人数",
        value: '12345',
        suffixText: '人',
      }],
      component: {
        width: 914,
        height: 442,
        prop: "flop",
      },
      option: {
        span: 3,
        decimals: 2,
        whole: true,
        padding: 12,
        textAlign: 'left',
        borderWidth: 1,
        fontWeight: 'normal',
        splity: 23,
        splitx: 17,
        fontSize: 28,
        prefixSplity: 4,
        prefixFontSize: 12,
        backgroundColor: "rgba(245, 108, 108, 1)",
        suffixText: '人',
        currencyType: 10000,
        suffixInline: true,
        suffixSplitx: 0,
        suffixFontSize: 18,
      },
    }
  },
  {
    label: '3/4环形图',
    option: {
      name: "3/4环形图",
      icon: 'icon-huanxingtu',
      dataType: 1,
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616" }',
      url: '/cnbi/project/access/query', // baseUrl + "/threefourthsround",
      data: basicDatas.threefourthsround,
      component: {
        width: 914,
        height: 442,
        prop: "threefourthsround",
      },
      option: {
        dType: '营业收入',
        digit: 2,
        pieSeriesColors: ['rgba(255, 135, 0, 1)', 'rgba(0, 228, 115, 1)', 'rgba(255, 195, 0, 1)', 'rgba(0, 157, 255, 1)'], // 前景色
        bgColor: 'rgba(0, 0, 0, 0)', // '#fff', //背景色
        // 标签说明的位置
        lbltop: 0, // 16,//'22.7',
        lblbottom: 69, // 55,//'54',
        lblleft: 32, // "30",
        // 标签整体背景
        lbltotalBgColor: 'rgba(0,0,0,0)',
        // 标签线设置
        lineWidth: 0, // 170,
        lineHeight: 0, // 10,
        // 各个不同的标签文字的颜色,大小
        nameColor: "rgba(46, 123, 250, 1)",
        nameBgColor: "rgba(0,0,0,0)",
        nameFontsize: 25,
        bdColor: "rgba(46, 123, 250, 1)",
        bdBgColor: "rgba(0,0,0,0)",
        bdFontsize: 23,
        percentColor: "rgba(46, 123, 250, 1)",
        percentBgColor: "rgba(0,0,0,0)",
        percentFontsize: 28,
        valueColor: "rgba(46, 123, 250, 1)",
        valueBgColor: "rgba(0,0,0,0)",
        valueFontsize: 36,
        unitColor: "rgba(46, 123, 250, 1)",
        unitBgColor: "rgba(0,0,0,0)",
        unitFontsize: 27,
        currencyType: 100000000,
        // ↓ 农业特殊展示
        nameFamingEnabled: true,
        nameColorFaming: "rgba(255, 225, 0, 1)",
        nameBgColorFaming: "rgba(52, 122, 193, 1)",
        nameFontsizeFaming: 33,
        bdColorFaming: "rgba(255, 225, 0, 1)",
        bdBgColorFaming: "rgba(52, 122, 193, 1)",
        bdFontsizeFaming: 33,
        percentColorFaming: "rgba(255, 225, 0, 1)",
        percentBgColorFaming: "rgba(52, 122, 193, 1)",
        percentFontsizeFaming: 33,
        valueColorFaming: "rgba(255, 225, 0, 1)",
        valueBgColorFaming: "rgba(52, 122, 193, 1)",
        valueFontsizeFaming: 33,
        unitColorFaming: "rgba(255, 225, 0, 1)",
        unitBgColorFaming: "rgba(52, 122, 193, 1)",
        unitFontsizeFaming: 33,
        // ↑ 农业特殊展示 end
        textShadowEnabled: false, // 文字阴影start
        textShadowColor: "rgba(255, 0, 0, 1)",
        textShadowBlur: 5,
        textShadowOffsetX: 10,
        textShadowOffsetY: 10,
        textShadowFamingEnabled: false,
        textShadowColorFaming: "rgba(255, 0, 0, 1)",
        textShadowBlurFaming: 5,
        textShadowOffsetXFaming: 10,
        textShadowOffsetYFaming: 10,
        lblPaddingTop: 22,
        sideLeft: false, // 开口朝向
        lblPaddingRightOnSideLeft: 200, // 开口左的时候可以调右边距,用的时候 *-1
      }
    }
  },
  {
    label: '双轴图',
    option: {
      name: "双轴图",
      icon: 'icon-shuangzhoutu',
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"2","unit":1 }',
      url: '/cnbi/project/access/query', // baseUrl + "/biaxial",
      data: basicDatas.biaxial,
      component: {
        width: 914,
        height: 442,
        prop: "biaxial",
      },
      option: {
        barColor: [{
          color1: "rgba(255, 120, 0, 1)",
          color2: "rgba(255, 120, 0, 1)",
          postion: 90
        },
        {
          color1: "rgba(35, 183, 229, 1)",
          color2: "rgba(86, 74, 163, 1)",
          postion: 50
        },
        {
          color1: "rgba(30, 144, 255, 1)",
          color2: "rgba(31, 147, 255, 1)",
          postion: 50
        },
        ],
        barMinHeight: 2,
        barRadius: 8,
        barWidth: 30,
        currencyType: 10000,
        digit: 2,
        gridX: 21, // 左边距
        gridX2: 11, // 右边距
        gridY: 70, // 上边距//默认需要把标题的位置空着
        gridY2: 54, // 下边距
        height: 600,
        labelShow: true,
        labelShowFontSize: 14,
        labelShowFontWeight: 300,
        labelShowWithoutLine: false,
        legend: true,
        legendColor: "rgba(0, 0, 0, 1)", // 图例颜色
        legendFontSize: 16, // 图例字号
        legendHeight: "auto", // 图例高度
        legendOrient: "horizontal", // 默认横排
        legendPostion: "S", // 图例默认放在下面
        legendalign: "up", // 图例排齐方式
        lineColor: "#333",
        lineWidth: 0,
        nameColor: "#333",
        numberFresh: true,
        refresh: 3,
        subTitleColor: "",
        subtext: "",
        symbolSize: 0,
        time: 5,
        title: "标题文字",
        titleColor: "rgba(0, 0, 0, 1)",
        titleFontSize: 24,
        titlePostion: "center",
        titleShow: true,
        width: 1200,
        xAxisInverse: false,
        xAxisOffset: 0,
        xAxisShow: true,
        xAxisSplitLineShow: false,
        xAxisTickShow: true,
        xNameFontSize: 16,
        xnameColor: "rgba(0, 0, 0, 1)",
        yAxisInverse: false,
        yAxisNameFontSize: 12,
        yAxisOffset: 0,
        yAxisRotate: 0,
        yAxisShow: true,
        yAxisShow2: false,
        yAxisSplitLineShow: false,
        yAxisTickShow: true,
        yNameFontSize: 16,
        ynameColor: "rgba(0, 0, 0, 1)",
        ynameGap: 15,
      }
    }
  },
  // {
  //     label: '3D饼图',
  //     option: {
  //         "title": "3D饼图",
  //         "name": "3D饼图",
  //         "icon": 'icon-icon20-3dbingzhuangtu',
  //         "dataType": 0,
  //         "dataMethod": 'post',
  //         dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"6","unit":1,"ds":"nkdp_0616"}',
  //         dataFormatter: "(function(data) { return data})",
  //         url: '/cnbi/project/access/query',//baseUrl + "/biaxial",
  //         "data": basicDatas.pie,
  //         "component": {
  //             "width": 400,
  //             "height": 200,
  //             "name": "gcharts3dpie",
  //             "prop": "gcharts3dpie",
  //         },
  //         "option": {
  //             usePie: true, //负数仍然显示pie 否则bar
  //
  //             titleSize: 12,
  //             titleBold: true,
  //             titleItalic: false,
  //             fontSize: 12,
  //             fontPosition: 'top',
  //             fontAlignment: 'center',
  //             // gcPieHole: 0, //3d下无法使用piehole
  //             percentColors: '#ffffff',
  //             colors: ['#46acb8', '#a8dda8', '#2c6086', '#127D69', '#104368'],
  //         }
  //     }
  // },
  {
    label: '3D饼图',
    option: {
      name: "3D饼图",
      dataType: 1,
      icon: 'icon-icon20-3dbingzhuangtu',
      dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"6","unit":1,"ds":"nkdp_0616"}',
      url: '/cnbi/project/access/query', // baseUrl + "/biaxial",
      data: basicDatas.pie,
      component: {
        width: 914,
        height: 442,
        prop: "amcharts3dpie",
      },
      option: {
        digit: 2,
        pieSizePercent: 80,
        angle: 30,
        depth: 30,
        currencyType: 100000000,
        isDonut: false,
        colors: ['#17B799', '#4EBBC8', '#E7A46F', '#A1E0A1', '#BC1414', '#1B5BE6', '#11D05A', '#0B21C6', '#740FD9', '#E71034',
          '#c767dc', '#dc67ce', '#dc67ab', '#dc6788', '#dc6967'],
        // colors: ['#46acb8', '#a8dda8', '#2c6086', '#127D69', '#104368',/*前面这几个是配合农垦的绿色调系列*/'#67b7dc', '#6794dc', '#6771dc', '#8067dc', '#a367dc', '#c767dc', '#dc67ce', '#dc67ab', '#dc6788', '#dc6967'],
        labelOn: true,
        labelShowOutside: true,
        dataCompareType: 'wcl',
        labelColor: '#000000',
        labelFontSize: 10, // 15,
        labelTextBold: false,
        labelColor0: '#000000',
        labelFontSize0: 40,
        labelTextBold0: true,
        labelColor1: '#000000',
        labelFontSize1: 10,
        labelTextBold1: true,
        labelColor2: '#000000',
        labelFontSize2: 10,
        labelTextBold2: false,
        labelColor3: '#000000',
        labelFontSize3: 10,
        labelTextBold3: true,
        labelColor4: '#000000',
        labelFontSize4: 10,
        labelTextBold4: true,
        // 农业系列
        labelSettingsForFarming: false,
        labelColorFarming: '#000000',
        labelFontSizeFarming: 25, // 15,
        labelTextBoldFarming: true,
        labelColor0Farming: '#000000',
        labelFontSize0Farming: 40,
        labelTextBold0Farming: true,
        labelColor1Farming: '#000000',
        labelFontSize1Farming: 25,
        labelTextBold1Farming: true,
        labelColor2Farming: '#000000',
        labelFontSize2Farming: 30,
        labelTextBold2Farming: false,
        labelColor3Farming: '#000000',
        labelFontSize3Farming: 25,
        labelTextBold3Farming: true,
        labelColor4Farming: '#000000',
        labelFontSize4Farming: 40,
        labelTextBold4Farming: true,
        labelRadius: -20,
        relativeRotation: false,
        legendOn: true,
        legendTextSize: 10, // 15,
        legendTextBold: true,
        legendTextColor: '#000000',
        // 农业专用,
        legendFamingEnabled: true,
        legendTextSizeFaming: 30,
        legendTextBoldFaming: true,
        legendTextColorFaming: '#f00',
        // 农业专用end
        legendPostion: 'E',
        radiusIndexSet: true,
        radiusIndexSetValue: 0,
        dataFieldsdepth: false, // 3D深度
        // 线条相关
        tickSettingOn: true,
        tickColorFollowSliceColor: false,
        tickColor: '#000000',
        tickStrokeWidth: 1,
        tickLength: 5,
        // 标题系列
        enableTitle: true,
        titlePaddingTop: 20,
        titlePaddingLeft: 30,
        titlePaddingRight: 20,
        titleShowInUnit: false,
        titleText: '标题名称',
        titleColor: '#000000',
        titleFontSize: 10,
        titleFontWeight: 'bold',
        titleAlign: 'center',
        leftShowInUnit: false,
        rightShowInUnit: true,
        rightTitleColor: "#2E61E1",
        rightTitleFontSize: 22,
        rightTitlePadTop: 10,
        // 上面是整体的,下面是分散设置(同时只能存在一种)
        // leftTitleText: '',
        // leftTitleColor: '#000000',
        // leftLabelFontSize: 25,
        // leftTitleFontWeight: 'bold',
        // leftTitlePadTop: 30,
        // leftTitlePadLeft: 30,
        // middleTitleText: '',
        // middleTitleColor: '#000000',
        // middleLabelFontSize: 25,
        // middleTitleFontWeight: 'bold',
        // middleTitlePadTop: 30,
        // rightTitleText: '',
        // rightTitleColor: '#000000',
        // rightLabelFontSize: 25,
        // rightTitleFontWeight: 'bold',
        // rightTitlePadTop: 30,
        // rightTitlePadRight: 30,
        // leftShowInUnit: false,
        // middleShowInUnit: false,
        // rightShowInUnit: false,
        // end
      }
    }
  },
  {
    label: '表格',
    option: {
      name: "表格",
      icon: 'icon-table',
      data: [{
        type1: '数据1',
        type2: '数据2'
      }, {
        type1: '数据1',
        type2: '数据2'
      }],
      component: {
        rotateDeg: 0,
        width: 914,
        height: 442,
        prop: "table",
      },
      option: {
        animations: [], // 动画
        allDelayTime: 0, // 整体播放时长
        isOnceAnimation: true, // true 动画执行一次 false 无线循环
        currencyType: 1,
        percentile: true, // 千分位显示
        headerBackground: 'rgba(0, 0, 0, 0.01)',
        headerColor: '#000',
        headerTextAlign: 'center',
        bodyBackground: 'rgba(0, 0, 0, 0.01)',
        bodyColor: '#000',
        fontSize: '40',
        borderColor: 'rgba(51, 65, 107, 1)',
        bodyTextAlign: 'center',
        column: [{
          label: "类型1",
          prop: "type1"
        },
        {
          label: "类型2",
          prop: "type2"
        },
        ]
      }
    }
  },
  ]
}]
