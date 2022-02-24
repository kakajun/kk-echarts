// 这里是多指标区
import basicDatas from '../../mock/basicDatas'
export default [
  {
    label: '多指标图',
    icon: 'icon-bar',
    children: [
      {
        label: '柱形图',
        option: {
          comhidden: false,
          name: '柱形图',
          icon: 'icon-bar',
          dataType: 0,
          dataMethod: 'post',
          data: basicDatas.bar,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"1","unit":1 }',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/bar",
          time: 5,
          lock: false, // 是不是加锁，阻止拖动
          component: {
            width: 914,
            height: 442,
            prop: 'bar'
          },
          option: {
            digit: 2,
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
            yPointerShow: true, // Y指示器
            axisPointerLabelShow: true, // 控制参考线下面的文本标签
            // 数值
            labelShow: true, // 图内数值显示设置
            labelShowFontSize: 12, // 图内数值字号
            // labelShowColor: 'rgba(45, 97, 135, 1)', // 图内汉字字色
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
            barColor: [],
            // barColorSp: [{
            //     color1: '#83bff6',
            //     color2: '#188df0',
            // }],
            barMinHeight: 2,
            currencyType: 10000,
            titleShow: true
          }
        }
      },
      {
        label: '堆积图',
        option: {
          name: '堆积图',
          icon: 'icon-duidiezhuzhuangtu',
          data: basicDatas.bar,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"1","unit":1 }',
          url: '/cnbi/project/access/query', // baseUrl + "/bar",
          time: 5,
          component: {
            width: 914,
            height: 442,
            prop: 'stackbar'
          },
          option: {
            labelPosition: 'inside',
            digit: 2,
            category: false,
            linearDirection: '从左到右',
            numberFresh: false, // 数字滚动刷新
            // 功能设置
            addPictorialBar: false, // 添加趋势图标
            pictorialBarFontSize: 64, // 图标大小
            isStack: true, // 堆积
            labelValueColor: '#fff', // 图内数值字色
            markLineShow: false, // 辅助线
            markLineVal: 0, // 辅助线数值,
            markLineTypeStyle: 'dashed', // 线型
            markLineColor: 'rgba(45, 97, 135, 1)', // 辅助线颜色
            tooltipShow: true, // 提示
            axisPointerShow: true, // 参考线是否显示
            axisPointerWidth: 2,
            axisPointerBorderColor: 'rgba(42,47,56,0.3)',
            tooltipBackgroundColor: '', // 提示框背景色
            tooltipReference: [], // 默认shadow    // 线型开启  ['y', 'x']
            axisPointerLabelShow: true, // 控制参考线下面的文本标签
            // 数值
            labelShow: true, // 图内数值显示设置
            labelShowFontSize: 12, // 图内数值字号
            labelShowColor: 'rgba(45, 97, 135, 1)', // 图内数值字色
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
            categoryCounterPosition: '前',
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
            czAxisMinCustomize: [0], // 次轴最小值自定义控制按钮是否勾选上
            czAxisMaxCustomize: [0], // 次轴最大值自定义控制按钮是否勾选上
            barImgShow: false, // 是否开启自定义渲染背景
            barImg: '', // 背景图片BASE64 或url都成
            barMinHeight: 2,
            currencyType: 10000,
            titleShow: true,
            barColor: [
              {
                color1: 'rgba(69, 114, 168, 1)',
                color2: '',
                $index: 0
              },
              {
                color1: 'rgba(170, 70, 67, 1)',
                color2: '',
                $index: 1
              },
              {
                color1: 'rgba(137, 166, 78, 1)',
                color2: '',
                $index: 2
              },
              {
                color1: 'rgba(113, 88, 144, 1)',
                color2: '',
                $index: 3
              },
              {
                color1: 'rgba(66, 153, 176, 1)',
                color2: '',
                $index: 4
              },
              {
                color1: 'rgba(220, 133, 61, 1)',
                color2: '',
                $index: 5
              },
              {
                color1: 'rgba(147, 170, 207, 1)',
                color2: '',
                $index: 6
              },
              {
                color1: 'rgba(209, 148, 147, 1)',
                color2: '',
                $index: 7
              },
              {
                color1: 'rgba(185, 206, 151, 1)',
                color2: '',
                $index: 8
              },
              {
                color1: 'rgba(169, 156, 189, 1)',
                color2: '',
                $index: 9
              }
            ]
          }
        }
      },
      {
        label: '柱形图-子公司',
        option: {
          name: '柱形图-子公司',
          icon: 'icon-bar',
          dataType: 1,
          dataMethod: 'get',
          comhidden: false,
          data: basicDatas.bar,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery: '{"period": "$year$month"}',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/ocr_data/company_data',
          time: 5,
          component: {
            width: 914, // 800,
            height: 442, // 400,
            prop: 'barSubCompany'
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
            lineFontColor: '#f00'
          }
        }
      },
      {
        label: '柱形图-房地产',
        option: {
          name: '柱形图-房地产',
          icon: 'icon-bar',
          dataType: 1,
          dataMethod: 'post',
          data: basicDatas.bar,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"6","unit":1,"ds":"nkdp_0616"}',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query',
          time: 5,
          component: {
            width: 914, // 800,
            height: 442, // 400,
            prop: 'barFdc'
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
            lineColor: '#ffc71d'
          }
        }
      },
      {
        label: '仪表盘-完成、增减率',
        option: {
          name: '仪表盘-完成、增减率',
          icon: 'icon-yibiaopan',
          dataType: 1,
          dataMethod: 'get',
          data: basicDatas.bar,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery: '{"period": "$year$month"}',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/ocr_data/company_data',
          time: 5,
          component: {
            width: 1021, // 800,
            height: 549, // 400,
            prop: 'bGauge2'
          },
          option: {
            comp: '苏垦农发',
            dType: '营业收入',
            borderwidth: 22, // 外圈圆宽度
            detailFontSize: 20,
            detailColor: '#fff'
          }
        }
      },
      {
        label: '折线图',
        option: {
          name: '折线图',
          icon: 'icon-shujuzhexiantu',
          dataType: 1,
          dataMethod: 'post',
          data: basicDatas.bar,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"1","unit":1,"jd":true }',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // "/bar",
          time: 5,
          component: {
            width: 914, // 800,
            height: 442, // 400,
            prop: 'line'
          },
          option: {
            barColor: [
              {
                color1: 'rgba(131,191,246,1)',
                color2: 'rgba(34, 147, 242, 1)',
                postion: 90,
                $index: 0,
                _show: true
              },
              {
                color1: 'rgba(239, 193, 152, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 50,
                $index: 1,
                _show: true
              }
            ],
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
            labelShowFontWeight: 'lighter',
            labelShowWithoutLine: false,
            legend: true,
            legendColor: 'rgba(9, 100, 188, 1)',
            legendFontSize: 14,
            legendOrient: 'horizontal',
            legendPostion: 'S',
            lineColor: 'rgba(238, 238, 238, 1)',
            lineWidth: 3,
            linearDirection: '从上到下',
            nameColor: 'rgba(238, 238, 238, 1)',
            subTitleColor: 'rgba(45, 97, 135, 1)',
            subTitleFontSize: 25,
            symbolSize: 7,
            titleColor: 'rgba(45, 97, 135, 1)',
            titleFontSize: 16,
            titlePostion: 'center',
            titleShow: true,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            xAxisSplitLineShowType: 'dashed',
            xNameFontSize: 16,
            xnameColor: 'rgba(30, 144, 255, 1)',
            yAxisNameColor: 'rgba(45, 97, 135, 1)',
            yAxisNameFontSize: 0, // 14,
            yAxisOffset: 0,
            yAxisShow: true,
            yAxisSplitLineShow: false,
            yAxisSplitLineShowColor: 'rgba(204, 204, 204, 1)',
            yAxisSplitLineShowType: 'dashed',
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(45, 97, 135, 1)',
            ynameGap: 20
          }
        }
      },
      {
        label: '折线图-增减趋势',
        option: {
          name: '折线图-增减趋势',
          icon: 'icon-shujuzhexiantu',
          dataType: 1,
          dataMethod: 'post',
          data: basicDatas.bar,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{ "company":"$comid", "period":"$year$month", "items": ["1403100", "1416001", "1400111"] }',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/ocr_data/important_indicator',
          time: 5,
          component: {
            width: 914, // 800,
            height: 442, // 400,
            prop: 'lineZZQS'
          },
          option: {
            startPeriod: '本期',
            lineColors: ['#4a7eba', '#bd4a47', '#97b856'],
            lineWidth: 2,
            xAxisFontColor: '#707070',
            xAxisFontSize: 14,
            xAxisFontDblLine: false,
            yAxisFontColor: '#707070',
            yAxisFontSize: 14,
            legendFontColor: '#000000',
            legendFontSize: 25,
            legendBottom: 35,
            xAxisAxisLabelRotate: 0,
            gridBottom: 120
          }
        }
      },
      {
        label: '饼图',
        option: {
          name: '饼图',
          icon: 'icon-bingtu',
          dataType: 0,
          dataMethod: 'post',
          time: 5,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616"}',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // "/pie",
          data: basicDatas.pie,
          resize: false,
          component: {
            width: 914,
            height: 442,
            prop: 'pie'
          },
          option: {
            legendDataIcon: 'rect',
            digit: 2,
            legend: true,
            labelShow: true,
            barColor: [
              {
                color1: 'rgba(131,191,246,1)'
              },
              {
                color1: 'rgba(35, 183, 229, 1)'
              },
              {
                color1: 'rgba(154, 168, 212, 1)'
              },
              {
                color1: 'rgba(24, 141, 240, 1)'
              },
              {
                color1: 'rgba(86, 74, 163, 1)'
              }
            ],
            legendOrient: 'vertical', // 默认竖排
            legendPostion: 'E', // 图例默认放在右
            legendColor: 'rgba(0, 0, 0, 1)',
            currencyType: 10000,
            titlePostion: 'left', // 标题字体位置
            titleShow: true,
            title: ''
          }
        }
      },
      {
        label: '饼图2',
        option: {
          name: '饼图2',
          icon: 'icon-bingtu',
          dataType: 1,
          dataMethod: 'post',
          time: 5,
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616"}',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query',
          data: basicDatas.pie2,
          resize: false,
          component: {
            width: 914,
            height: 442,
            prop: 'pie2'
          },
          option: {
            legendDataIcon: 'rect',
            currencyType: 10000,
            digit: 2,
            // ['#2ec7c9', '#b6a2de', '#ffb980', '#5ab1ef'],
            pieColors: [
              'rgba(46, 199, 201, 1)',
              'rgba(182, 162, 222, 1)',
              'rgba(255, 185, 128, 1)',
              'rgba(90, 177, 239, 1)'
            ],
            titlePostion: 'center',
            titleShow: true,
            titleColor: 'rgba(72, 109, 253, 1)',
            titleFontSize: 26,
            subtext: '产业发展情况',
            subTitleFontSize: 21,
            subTitleColor: 'rgba(108, 74, 45, 1)',
            legend: true,
            legendColor: 'rgba(165, 147, 135, 1)',
            legendFontSize: 18,
            legendOrient: 'horizontal',
            legendPostion: 'S',
            lblBGColor: 'rgba(238, 238, 238, 1)',
            lbltitleColor: 'rgba(114, 82, 54, 1)',
            lbltitleFontSize: 20,
            lblUnitColor: 'rgba(114, 82, 54, 1)',
            lblUnitFontSize: 15,
            lblZBKanjiColor: 'rgba(114, 82, 54, 1)',
            lblZBKanjiFontSize: 15,
            lblKaneColor: 'rgba(251, 204, 94, 1)',
            lblKaneFontSize: 20,
            lblPercentColor: 'rgba(251, 204, 94, 1)',
            lblPercentFontSize: 20
          }
        }
      },
      {
        label: '雷达图',
        option: {
          name: '雷达图',
          icon: 'icon-leidatu',
          dataType: 0,
          dataMethod: 'post',
          time: 5,
          dataQuery: '',
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/radar",
          data: basicDatas.radar,
          component: {
            width: 914,
            height: 442,
            prop: 'radar'
          },
          option: {
            areaOpacity: 0.3,
            barColor: [
              {
                color1: 'rgba(86, 74, 163, 1)'
              },
              {
                color1: 'rgba(24, 141, 240, 1)'
              }
            ],
            currencyType: 10000,
            digit: 2,
            height: 400,
            labelShow: true,
            labelShowFontSize: 15,
            legend: true,
            legendColor: 'rgba(0, 0, 0, 1)',
            legendOrient: 'vertical',
            legendPostion: 'E',
            radarNameColor: 'rgba(45, 97, 135, 1)',
            radarNameSize: 18,
            radiusx: 50,
            radiusY: 50,
            radiusW: 50,
            shape: 'polygon',
            splitNumber: 4,
            subtext: '',
            tipBackgroundColor: 'rgba(50,50,50,0.7)',
            tipColor: 'rgba(45, 97, 135, 1)',
            titleColor: 'rgba(45, 97, 135, 1)',
            titleFontSize: 30,
            titlePostion: 'center',
            titleShow: true,
            width: '100%'
          }
        }
      },
      {
        label: '漏斗图',
        option: {
          name: '漏斗图',
          icon: 'icon-loudoutu',
          dataType: 0,
          dataMethod: 'post',
          lock: false, // 是不是加锁，阻止拖动
          time: 5,
          comhidden: false,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1 }',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/funnel",
          data: basicDatas.pie,
          component: {
            width: 914,
            height: 442,
            prop: 'funnel'
          },
          option: {
            digit: 2,
            radius: true,
            legend: true,
            barColor: [
              {
                color1: 'rgba(131,191,246,1)'
              },
              {
                color1: 'rgba(35, 183, 229, 1)'
              },
              {
                color1: 'rgba(154, 168, 212, 1)'
              },
              {
                color1: 'rgba(24, 141, 240, 1)'
              }
              // {
              //     "color1": "rgba(86, 74, 163, 1)"
              // },
            ],
            currencyType: 10000,
            legendColor: 'rgba(0, 0, 0, 1)',
            legendFontSize: 16,
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'S',
            subTitleColor: null,
            subtext: '',
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 16,
            titlePostion: 'center',
            titleShow: true,
            labelShow: true,
            labelShowFontSize: 16,
            labelShowFontWeight: 'bold'
          }
        }
      },
      {
        label: '颜色块',
        option: {
          name: '颜色块',
          icon: 'icon-yanse',
          top: 0,
          left: 0,
          lock: false, // 是不是加锁，阻止拖动
          dataType: 0,
          data: [
            {
              backgroundColor: '#67C23A',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            },
            {
              backgroundColor: '#409EFF',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            },
            {
              backgroundColor: '#E6A23C',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            },
            {
              backgroundColor: '#F56C6C',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            },
            {
              backgroundColor: '#7232dd',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            },
            {
              backgroundColor: 'blue',
              prefixText: '某某某总人数',
              value: 12345,
              suffixText: '人'
            }
          ],
          comhidden: false,
          dataFormatter: '',
          component: {
            width: 914,
            height: 442,
            prop: 'flop'
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
            backgroundColor: 'rgba(245, 108, 108, 1)',
            suffixText: '人',
            currencyType: 10000,
            suffixInline: true,
            suffixSplitx: 0,
            suffixFontSize: 18
          }
        }
      },
      //   {
      //     label: '3/4环形图',
      //     option: {
      //
      //       name: '3/4环形图',
      //       icon: 'icon-huanxingtu',
      //       dataType: 1,
      //       dataMethod: 'post',
      //       comhidden: false,
      //       lock: false, // 是不是加锁，阻止拖动
      //       dataQuery:
      //         '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616" }',
      //       dataFormatter: '(function(data) { return data})',
      //       url: '/cnbi/project/access/query', // bbaseUrl + "/threefourthsround",
      //       data: basicDatas.threefourthsround,
      //       component: {
      //         width: 914,
      //         height: 442,
      //         prop: 'threefourthsround',
      //
      //       },
      //       option: {
      //         dType: '营业收入',
      //         digit: 2,
      //         pieSeriesColors: [
      //           'rgba(255, 135, 0, 1)',
      //           'rgba(0, 228, 115, 1)',
      //           'rgba(255, 195, 0, 1)',
      //           'rgba(0, 157, 255, 1)'
      //         ], // 前景色
      //         bgColor: 'rgba(0, 0, 0, 0)', // '#fff', //背景色
      //         // 标签说明的位置
      //         lbltop: 0, // 16,//'22.7',
      //         lblbottom: 69, // 55,//'54',
      //         lblleft: 32, // "30",
      //         // 标签整体背景
      //         lbltotalBgColor: 'rgba(0,0,0,0)',
      //         // 标签线设置
      //         lineWidth: 0, // 170,
      //         lineHeight: 0, // 10,
      //         // 各个不同的标签文字的颜色,大小
      //         nameColor: 'rgba(46, 123, 250, 1)',
      //         nameBgColor: 'rgba(0,0,0,0)',
      //         nameFontsize: 25,
      //         bdColor: 'rgba(46, 123, 250, 1)',
      //         bdBgColor: 'rgba(0,0,0,0)',
      //         bdFontsize: 23,
      //         percentColor: 'rgba(46, 123, 250, 1)',
      //         percentBgColor: 'rgba(0,0,0,0)',
      //         percentFontsize: 28,
      //         valueColor: 'rgba(46, 123, 250, 1)',
      //         valueBgColor: 'rgba(0,0,0,0)',
      //         valueFontsize: 36,
      //         unitColor: 'rgba(46, 123, 250, 1)',
      //         unitBgColor: 'rgba(0,0,0,0)',
      //         unitFontsize: 27,
      //         currencyType: 100000000,
      //         // ↓ 农业特殊展示
      //         nameFamingEnabled: true,
      //         nameColorFaming: 'rgba(255, 225, 0, 1)',
      //         nameBgColorFaming: 'rgba(52, 122, 193, 1)',
      //         nameFontsizeFaming: 33,
      //         bdColorFaming: 'rgba(255, 225, 0, 1)',
      //         bdBgColorFaming: 'rgba(52, 122, 193, 1)',
      //         bdFontsizeFaming: 33,
      //         percentColorFaming: 'rgba(255, 225, 0, 1)',
      //         percentBgColorFaming: 'rgba(52, 122, 193, 1)',
      //         percentFontsizeFaming: 33,
      //         valueColorFaming: 'rgba(255, 225, 0, 1)',
      //         valueBgColorFaming: 'rgba(52, 122, 193, 1)',
      //         valueFontsizeFaming: 33,
      //         unitColorFaming: 'rgba(255, 225, 0, 1)',
      //         unitBgColorFaming: 'rgba(52, 122, 193, 1)',
      //         unitFontsizeFaming: 33,
      //         // ↑ 农业特殊展示 end
      //         textShadowEnabled: false, // 文字阴影start
      //         textShadowColor: 'rgba(255, 0, 0, 1)',
      //         textShadowBlur: 5,
      //         textShadowOffsetX: 10,
      //         textShadowOffsetY: 10,
      //         textShadowFamingEnabled: false,
      //         textShadowColorFaming: 'rgba(255, 0, 0, 1)',
      //         textShadowBlurFaming: 5,
      //         textShadowOffsetXFaming: 10,
      //         textShadowOffsetYFaming: 10,
      //         lblPaddingTop: 26,
      //         sideLeft: false // 开口朝向
      //       }
      //     }
      //   },
      {
        label: '双轴图',
        option: {
          name: '双轴图',
          icon: 'icon-shuangzhoutu',
          dataType: 0,
          dataMethod: 'post',
          comhidden: false,
          lock: false, // 是不是加锁，阻止拖动
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"2","unit":1 }',
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/biaxial",
          data: basicDatas.biaxial,
          component: {
            width: 914,
            height: 442,
            prop: 'biaxial'
          },
          option: {
            barColor: [
              {
                color1: 'rgba(255, 120, 0, 1)',
                color2: 'rgba(255, 120, 0, 1)',
                postion: 90
              },
              {
                color1: 'rgba(35, 183, 229, 1)',
                color2: 'rgba(86, 74, 163, 1)',
                postion: 50
              },
              {
                color1: 'rgba(30, 144, 255, 1)',
                color2: 'rgba(31, 147, 255, 1)',
                postion: 50
              }
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
            legendColor: 'rgba(0, 0, 0, 1)', // 图例颜色
            legendFontSize: 16, // 图例字号
            legendHeight: 'auto', // 图例高度
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'S', // 图例默认放在下面
            legendalign: 'up', // 图例排齐方式
            lineColor: '#333',
            lineWidth: 0,
            nameColor: '#333',
            numberFresh: true,
            refresh: 3,
            subTitleColor: '',
            subtext: '',
            symbolSize: 0,
            time: 5,
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 24,
            titlePostion: 'center',
            titleShow: true,
            width: 1200,
            xAxisInverse: false,
            xAxisOffset: 0,
            xAxisShow: true,
            xAxisSplitLineShow: false,
            xAxisTickShow: true,
            xNameFontSize: 16,
            xnameColor: 'rgba(0, 0, 0, 1)',
            yAxisInverse: false,
            yAxisNameFontSize: 12,
            yAxisOffset: 0,
            yAxisRotate: 0,
            yAxisShow: true,
            yAxisShow2: false,
            yAxisSplitLineShow: false,
            yAxisTickShow: true,
            yNameFontSize: 16,
            ynameColor: 'rgba(0, 0, 0, 1)',
            ynameGap: 15
          }
        }
      },
      {
        label: '象形图',
        option: {
          name: '象形图',
          icon: '',
          dataType: 1,
          dataMethod: 'get',
          time: 5,
          url: '',
          data: basicDatas.pictorialbar,
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 800,
            height: 600,
            prop: 'pictorialbar'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            digitalCount: 2, // 两位小数
            symbolSize: 30,
            split: 30,
            symbol: '',
            fontSize: '24',
            gridX: 113,
            gridX2: 164,
            xAxisShow: true,
            yAxisShow: true,
            color: '#4dffff',
            nameColor: 'rgba(159, 147, 234, 1)',
            xNameFontSize: '24',
            yNameFontSize: '24',
            xShowLabel: true
          }
        }
      },
      {
        label: '散点图',
        option: {
          name: '散点图',
          icon: '',
          dataType: 1,
          dataMethod: 'get',
          time: 5,
          url: '',
          data: basicDatas.scatter,
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 600,
            height: 600,
            prop: 'scatter'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            lineSize: 25,
            barColor: [
              {
                postion: 0.2,
                color1: '#91c7ae'
              },
              {
                postion: 0.8,
                color1: '#63869e'
              },
              {
                postion: 1,
                color1: '#c23531'
              }
            ]
          }
        }
      },
      {
        label: '追跑图',
        option: {
          name: '追跑图',
          icon: '',
          dataType: 0, // 1,
          dataMethod: 'post',
          // "data": basicDatas.aniBar,
          dataQuery: '{"year":"2020","item":""}',
          dataFormatter: '(function(data) { return data})',
          // url: '/api/query_farming/query_sowing',
          url: '/cnbi/project/access/query',
          data: basicDatas.Anibar,
          time: 5,
          component: {
            width: 1672,
            height: 674,
            prop: 'anibar'
          },
          option: {
            curyear: 2014, // new Date().getFullYear() - 11,
            endyear: 2019, // new Date().getFullYear() - 1,
            updateFrequency: 1200,
            nkColor: '#08903e',
            colorList: [
              '#00ffff',
              '#e30606',
              '#b940c1',
              '#fbb700',
              '#1200fd',
              '#fc00c4',
              '#ff7f21',
              '#e4ff00',
              '#5010af',
              '#556fb5',
              '#f19ec2',
              '#22ac38',
              '#f29b76',
              '#8a8000',
              '#7e0043',
              '#59493f',
              '#286270',
              '#003567',
              '#ac6a00',
              '#fb2a8c',
              '#fd4b5a',
              '#ff3f2c',
              '#00ffff',
              '#e30606',
              '#b940c1',
              '#fbb700',
              '#1200fd',
              '#fc00c4',
              '#ff7f21',
              '#e4ff00',
              '#5010af',
              '#556fb5',
              '#f19ec2',
              '#22ac38',
              '#f29b76',
              '#8a8000',
              '#7e0043',
              '#59493f',
              '#286270',
              '#003567',
              '#ac6a00',
              '#fb2a8c',
              '#fd4b5a',
              '#ff3f2c'
            ],
            dataType: '1403100'
          }
        }
      },
      {
        label: '地图',
        option: {
          name: '地图',
          icon: 'icon-tubiaozhizuomoban',
          data: [],
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 800,
            height: 500,
            prop: 'map'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            digitalCount: 2, // 两位小数
            mapData: '',
            mapDataUrl:
              import.meta.env.VUE_APP_BASE_API +
              '/project/map/detail?mapid=305',
            borderWidth: 1,
            scale: 87,
            type: 0,
            borderColor: '#0dffff',
            areaColor: '#061d33',
            banner: true,
            bannerTime: 3000,
            fontSize: 14,
            zoom: 0.5,
            empAreaColor: 'rgba(35, 183, 229, 0.42)',
            empColor: '#fff',
            color: 'rgba(13, 255, 255, 1)'
          }
        }
      },
      {
        label: '表格',
        option: {
          title: '表格',
          name: '表格',
          icon: 'icon-table',
          top: 0,
          left: 0,
          dataType: 0,
          data: [
            {
              year: '2016',
              a: 210106.26,
              b: 2219897.86
            },
            {
              year: '2017',
              a: 191006.83,
              b: 2234577.44
            },
            {
              year: '2018',
              a: 186081.48,
              b: 2632851.08
            },
            {
              year: '2016',
              a: 210106.26,
              b: 2219897.86
            },
            {
              year: '2017',
              a: 191006.83,
              b: 2234577.44
            },
            {
              year: '2018',
              a: 186081.48,
              b: 2632851.08
            }
          ],
          dataFormatter: '',
          stylesFormatter: '',
          component: {
            width: 500,
            height: 600,
            name: 'table',
            prop: 'table'
          },
          option: {
            columnShow: true,
            columnViews: true,
            headerBackground: 'rgba(30, 144, 255, 1)',
            headerColor: 'rgba(241, 242, 245, 1)',
            headerTextAlign: 'center',
            bodyBackground: 'rgba(0, 0, 0, 0.01)',
            bodyColor: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(51, 65, 107, 1)',
            bodyTextAlign: 'center',
            column: [
              {
                label: '期间',
                prop: 'year'
              },
              {
                label: '本期',
                prop: 'a'
              },
              {
                label: '累计',
                prop: 'b'
              }
            ],
            align: 'center',
            headerAlign: 'center',
            header: false,
            scroll: true,
            scrollTime: 2000,
            fontSize: 15,
            count: 3,
            nthColor: '#fff', // 奇数行
            othColor: '#fff', // 偶数行
            index: true,
            scrollCount: 1
          }
        }
      },
      {
        label: '3D金字塔',
        option: {
          name: '3D金字塔',
          icon: 'icon-tubiaozhizuomoban',
          data: [],
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 800,
            height: 500,
            prop: 'pyramid'
          },
          option: {
            borderWidth: 1,
            adCode: 13e4,
            mapLevel: 0,
            mapStyle: 'dark',
            openArea: !1,
            showBorder: !1,
            drillDown: !1,
            open3d: !1,
            openCustomColor: !1,
            mapType: 2,
            intensity: 3,
            radius: 10,
            opacity: 1,
            scale: 87,
            type: 0,
            bubble: {
              enable: !1,
              size: {
                field: 'value',
                values: [3, 20]
              }
            },
            borderColor: '#0dffff',
            areaColor: '#061d33',
            cityStroke: '#EBCCB4',
            banner: !0,
            bannerTime: 3e3,
            fontSize: 14,
            show: !0,
            center: '104.288144,36.239692',
            zoom: 3,
            pitch: 0,
            empAreaColor: 'rgba(35, 183, 229, 0.42)',
            empColor: '#fff',
            color: 'rgba(13, 255, 255, 1)'
          }
        }
      },
      {
        label: '通用型',
        option: {
          name: '通用型',
          icon: '',
          data: basicDatas.bar,
          time: 5,
          component: {
            width: 400,
            height: 200,
            prop: 'common'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            digitalCount: 2 // 两位小数
          }
        }
      },
      {
        label: '飞行图',
        option: {
          name: '飞行图',
          icon: '',
          data: basicDatas.bar,

          time: 5,
          component: {
            width: 400,
            height: 200,
            prop: 'flaymap'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            legend: true,
            title: '模拟迁徙',
            subtext: '数据纯属虚构',
            borderWidth: 3,
            scale: 87,
            type: 0,
            borderColor: '#0dffff',
            areaColor: '#061d33',
            fontSize: 12,
            zoom: 1.2,
            empAreaColor: 'rgba(35, 183, 229, 0.42)',
            empColor: '#fff',
            color: 'rgba(13, 255, 255, 1)',
            tipColor: 'red',
            tipBackgroundColor: 'rgba(0,0,0,.5)',
            tipFontSize: 16,
            mapData: '/cnbi/project/map/detail?mapid=305',
            chinaData: null
          }
        }
      }
    ]
  }
]
