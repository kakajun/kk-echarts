// 这里是单指标图
import basicDatas from '../../mock/basicDatas'
export default [
  {
    label: '单指标图',
    icon: 'icon-flop',
    children: [
      {
        label: '胶囊图',
        option: {
          name: '胶囊图',
          icon: 'icon-icon2-73',
          top: 0,
          left: 0,
          dataType: 0,
          data: {
            innerData: [
              { name: '公司1', value: 1 },
              { name: '公司2', value: 5 },
              { name: '公司2', value: 9 }
            ],
            wrapperData: [10,10,10]
          },
          dataMethod: 'post',
          lock: false, // 是不是加锁，阻止拖动
          dataQuery: '',
          comhidden: false,
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query',
          component: {
            width: 600,
            height: 300,
            prop: 'progress'
          },
          option: {
            gridX: 10, // 左边距
            gridY: 70, // 上边距//默认需要把标题的位置空着
            gridX2: 100, // 右边距
            gridY2: 10, // 下边距
            aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            currencyType: 10000,
            digit: 2,
            type: 'circle',
            // type: 'line',
            strokeWidth: 45,
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 47,
            fontWeight: 'bold',
            suffixColor: 'rgba(0, 0, 0, 1)',
            suffixFontSize: 50,
            suffixFontWeight: 'bold',
            borderColor: 'rgba(255, 120, 0, 1)',
            split: 0,
            width: 400,
            height: 800,
            useEasing: true
          }
        }
      },
      {
        label: '跳动文本框',
        option: {
          name: '跳动文本框',
          dataType: 0,
          dataFormatter: '',
          data: { value: 5000 },
          component: {
            rotateDeg: 0,
            width: 100,
            height: 40,
            prop: 'textcount'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            decimals: 2,
            currencyType: 1,
            percentile: false, // 千分位显示
            duration: 5, //  animation duration in seconds
            delaytime: 2, // 延迟多少秒滚动
            frontContent: '', // 前缀内容
            backunit: '', // 后缀添加
            textAlign: 'center',
            fontSize: 50,
            split: 4, // 间隔
            fontWeight: 'normal',
            color: '#000',
            borderRadius: 30
          }
        }
      },
      {
        label: '文本框',
        option: {
          name: '文本框',
          dataType: 0,
          dataFormatter: '',
          data: {
            value: '文本框'
          },
          component: {
            rotateDeg: 0,
            width: 100,
            height: 40,
            prop: 'text' // 'textbox',
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: false, // 千分位显示
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'normal',
            color: '#000',
            lineHeight: 0,
            textShadow: false,
            textShadowDistance: 4,
            textShadowblur: 0,
            textShadowColor: '#000000',
            fontFamily: '微软雅黑',
            borderRadius: 30
          }
        }
      },
      {
        label: '仪表盘',
        option: {
          icon: 'icon-icon',
          name: '仪表盘',
          dataType: 0,
          dataMethod: 'get',
          time: 5,
          // "url": baseUrl + "/gauge",
          data: basicDatas.gauge,
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 390,
            height: 314,
            prop: 'gauge'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            minDefault: [0], // 最小值自定义
            maxDefault: [0], // 最大值自定义
            gaugeMin: 0, // 仪表盘的最小值
            gaugeMax: 100, // 仪表盘的最大值
            /* 名称 start */
            gaugeTitleShow: false, // 名称是否显示
            titleOffsetCenterX: 0, // 横向
            titleOffsetCenterY: '30%', // 纵向
            textFontFamily: 'Microsoft YaHei', // 名字字体
            textFontSize: 16, // 名字字号
            textColor: '#626C7F', // 名字颜色
            /*  数值   start */
            gaugeDetailShow: true, // 表内标题显示
            detailOffsetCenterY: '60%', // 纵向
            valueFontFamily: 'Microsoft YaHei', // 名字字体
            valueColor: '#626C7F', // 名字颜色
            /*  图形属性  start */
            radiusW: 95, //  图半径
            guageColor: [
              [1 / 4, '#FB745B'],
              [1 / 2, '#FFCC41'],
              [3 / 4, '#409EFF'],
              [1, '#7ED321']
            ],
            radiusx: 50, // x方向位置
            radiusy: 60, // y方向位置
            startAngle: 225, // 仪表盘起始角度
            startAngleShow: [0],
            endAngleShow: [0],
            endAngle: -45, // 仪表盘结束角度
            lineSize: 20, // 仪表盘起始宽度(厚度)
            // guageShadowBlur: 0,//阴影
            gaugeShowPointer: false, // 显示指针
            /*  刻度显示  start */
            splitLineShow: true, // 大刻度显示/隐藏
            splitLineLength: 20,
            splitLineColor: '#fff',
            SplitNumber: 4, // 刻度数量
            axisTickSplitLen: 5, // 刻度线长度
            axisTickShow: true, // 刻度样式
            axisTickSplitNumber: 10, // 等分
            axisTickLength: 6, // 刻度线长度
            /*  刻度标签  start */
            axisLabelShow: true, // 刻度标签刻度值
            axisLabeldDistance: 27, // 标签位置
            axisLabelFontFamily: 'Microsoft YaHei', // 刻度字体
            axisLabelFontSize: 14, // 刻度字号
            axisLabelColor: '#666666', // 刻度颜色
            labelFormatter: 2, // 默认位数
            /*  指针  start */
            pointLength: 70, // 指针长度
            pointWidth: 8, // 指针宽度
            /* 最下边数值的设置 */
            detailShow: true, // 数值显示
            detailoffsetCenter: '65%', // 纵向位置
            valueFontSize: 20 // 字体大小
          }
        }
      },
      {
        label: '仪表盘2',
        option: {
          name: '仪表盘2',
          icon: 'icon-yibiaopan',
          dataType: 3,
          dataMethod: 'get',
          data: basicDatas.gauge,
          dataQuery: '{"period": "$year$month"}',
          url: '/cnbi/project/ocr_data/company_data',
          time: 5,
          component: {
            width: 914, // 800,
            height: 442, // 400,
            prop: 'gauge2'
          },
          option: {
            radiusW: 95, //  图半径
            radiusx: 50, // x方向位置
            radiusy: 60, // y方向位置
            gColor: '#58D9F9',
            borderwidth: 22,
            detailFontSize: 50,
            detailColor: '' // 字体颜色
          }
        }
      },
      {
        label: '散点图',
        option: {
          name: '散点图',
          dataType: 0,
          dataMethod: 'get',
          time: 5,
          // "url": baseUrl + "/scatter",
          data: basicDatas.scatter,
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 400,
            height: 200,
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
        label: 'video',
        option: {
          name: 'video',
          top: 0,
          left: 0,
          dataType: 0,
          data: {
            value: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          option: {
            loop: true, // 循环播放
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true // true 动画执行一次 false 无线循环
          },
          dataFormatter: '',
          component: {
            rotateDeg: 0,
            width: 1000,
            height: 500,
            prop: 'video'
          }
        }
      },
      {
        label: '水球图',
        option: {
          icon: 'icon-waterpolo',
          name: '水球图',
          dataType: 0,
          time: 5,
          dataMethod: 'post',
          comhidden: false,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"5","unit":1 }',
          lock: false, // 是不是加锁，阻止拖动
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/gauge",
          data: basicDatas.gauge,
          component: {
            width: 390,
            height: 314,
            prop: 'liquidfill'
          },
          option: {
            digitalCount: 2,
            aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            digit: 2,
            shape: 'circle', // 填充形状
            borderWidth: 5, // 边框宽度
            borderColor: 'rgba(255, 150, 0, 1)', // 'rgba(68, 68, 68, 1)', //边框颜色
            bgcolor: 'rgba(255,255,255,0.8)', // 图形背景颜色
            waterColor1: 'rgba(252, 214, 6, 1)', // 'rgba(68, 145, 253, 0)',
            waterColor2: 'rgba(250, 179, 0, 1)', // 'rgba(68, 145, 253, 0.25)',
            waterColor3: 'rgba(255, 120, 0, 1)', // 'rgba(68, 145, 253, 1)',
            direction: 'left',
            titlePadding: [5, 0, 0, 0],
            subTitleColor: 'rgba(0, 0, 0, 1)',
            subTitleFontSize: 45,
            titleColor: 'rgba(0, 0, 0, 1)',
            titleFontSize: 45,
            titlePostion: 'center',
            titleShow: true,
            labelFontSize: 40, // 标签字体大小
            waterOpacity: 1, // 0.5, //波浪透明度
            waterSpeed: 2, // 水流速度
            waveColor: 'rgba(255, 102, 0, 1)', // "#ff6600",
            waterWidth: 10
          }
        }
      },
      {
        label: '水球图充满',
        option: {
          icon: 'icon-waterpolo',
          name: '水球图充满',
          dataType: 0,
          time: 5,
          dataMethod: 'post',
          comhidden: false,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"5","unit":1 }',
          lock: false, // 是不是加锁，阻止拖动
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // baseUrl + "/gauge",
          data: basicDatas.gauge,
          component: {
            width: 390,
            height: 314,
            prop: 'liquidfillfull'
          },
          option: {
            bgcolor: '#1b1143',
            borderColor: 'rgba(98, 67, 199,1)',
            borderWidth: 10
          }
        }
      },
      {
        label: '环形图2',
        option: {
          name: '环形图2',
          dataType: 0,
          icon: 'icon-huanxingtu',
          time: 5,
          dataQuery:
            '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"3","unit":1,"ds":"nkdp_0616"}',
          dataQueryb:
            '{"comList":["1010"],"lxCodList":["1416001"],"lxFaList":["A"],"perList":["201803","201903","202003"]}',
          cubeObject: {
            type: '',
            companys: ['1010'],
            slectmonth: ['03'], // 选择月
            flag: false,
            slectyear: ['2018', '2019', '2020'], // 选择年
            dims: [
              { id: 'period_name', text: '期间', type: 'text', width: null }
            ], // 顶部选的度量
            facts: [
              { id: 'fact_a', text: '本期数', type: 'number', width: null }
            ], // 度量设置
            legend: [], // 系列
            preFacts: [{ sname: '本期数', subject: '0002', sfactfield: 'A' }], // 预选择的度量,有了facts,为什么还要preFacts,因为度量可以是维度,维度可以是度量,并且前面选了度量,不一定后面全部都要用
            perList: [], // 日期传参数
            checkedIndex: ['lx_1416001'], // 选中指标
            factParams: { lxFaList: ['A'] }, // 度量传参数
            zbPrames: { lxCodList: ['1416001'] } // 指标的参数
          },
          dataFormatter: '(function(data) { return data})',
          url: '/cnbi/project/access/query', // "/pie",
          data: basicDatas.progresscircle,
          resize: false,
          component: {
            width: 914,
            height: 442,
            prop: 'progresscircle'
          },
          option: {
            legendDataIcon: 'rect',
            digit: 2,
            legend: false,
            labelShow: true,
            legendalign: 'up',
            legendPostion: 'S',
            legendColor: 'rgba(0, 0, 0, 1)',
            currencyType: 10000,
            titleShow: true,
            title: '',
            titleTop: '1%',
            titlePostion: 'center'
          }
        }
      }
    ]
  }
]
