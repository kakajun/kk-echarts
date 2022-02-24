// 这里是图文区
// import basicDatas from '../../mock/basicDatas'
export default [
  {
    label: '图文区',
    icon: 'icon-text',
    children: [
      {
        label: '文本框',
        option: {
          name: '文本框',
          icon: 'icon-fuwenben',
          dataType: 0,
          dataFormatter: '',
          data: {
            value: '文本框'
          },
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'text'
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
            textShadowDistanceY: 4,
            textShadowblur: 0,
            textShadowColor: '#000000',
            fontFamily: '微软雅黑',
            borderRadius: 0
          }
        }
      },
      {
        label: '炫彩文本',
        option: {
          name: '炫彩文本',
          icon: 'icon-fuwenben',
          dataType: 1,
          dataFormatter: '',
          data: {
            value: 5000
          },
          component: {
            rotateDeg: 0,
            width: 400,
            height: 40,
            prop: 'fontset'
          },
          option: {
            content: '最炫名族风',
            isGradual: 'right',
            duration: 2,
            titleFontSize: 50,
            fontWeight: 'normal',
            color: '#000',
            waterColor1: 'red',
            waterColor2: 'blue'
          }
        }
      },
      {
        label: '边框',
        option: {
          name: '边框',
          icon: 'icon-biankuang',
          top: 0,
          left: 0,
          lock: false, // 是不是加锁，阻止拖动
          component: {
            width: 240,
            height: 240,
            prop: 'imgborder'
          },
          option: {
            backgroundColor: 'rgba(180, 181, 198, 1)',
            imgborderRadius: 8,
            imgborderOpacity: 0,
            firClor: '',
            secClor: '',
            selectDrection: 'z',
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: 'rgba(30, 144, 255, 1)',
            switchjb: false
          }
        }
      },
      // TODO  暂时隐藏, 不要删掉
      {
        label: '阿里图标',
        option: {
          name: '阿里图标',
          icon: 'icon-biankuang',
          top: 0,
          left: 0,
          lock: false, // 是不是加锁，阻止拖动
          component: {
            width: 240,
            height: 240,
            prop: 'shape'
          },
          option: {
            dataType: 1,
            preserveAspectRatio: 'xMinYMin',
            fillColor: 'rgba(0, 0, 0, 1)',
            remoteJSAddress: 'font_2402009_tukthf1j56.js',
            url: '/iconfont/font_2402009_tukthf1j56.js',
            iconName: 'iconRight-5',
            openShadow: false, // 开启阴影
            shadowColor: 'rgb(198, 198, 198)', // 阴影颜色
            hShadow: 2, // 横偏移
            vShadow: 2, // 纵偏移
            blur: 5 // 模糊
          }
        }
      },
      {
        label: '实时时间',
        option: {
          name: '实时时间',
          icon: 'icon-fuwenben',
          top: 78,
          left: 1604,
          component: {
            rotateDeg: 0,
            width: 250,
            height: 50,
            prop: 'datetime'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            format: 'yyyy-MM-dd hh:mm:ss',
            color: '#000',
            textAlign: 'left',
            fontSize: 24,
            fontWeight: 'normal'
          }
        }
      },
      {
        label: '滚动数字',
        option: {
          name: '滚动数字',
          icon: 'icon-fuwenben',
          top: 78,
          left: 1604,
          component: {
            rotateDeg: 0,
            width: 400,
            height: 50,
            prop: 'odometer'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            arrowLeftImage: '/img/source/arrowLeftImage.svg', // 左箭头图片
            arrowRightImage: '/img/source/arrowRightImage.svg', // 右箭头图片
            arrowWidth: 10, // 箭头宽度
            arrowHeight: 50 // 箭头高度
          }
        }
      },
      {
        label: '线条',
        option: {
          name: '线条',
          icon: 'icon-fuwenben',
          top: 78,
          left: 1604,
          component: {
            rotateDeg: 0,
            width: 400,
            height: 50,
            prop: 'lineelement'
          },
          option: {
            id: 'FnpZs4',
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            style: 'solid', // 线条样式
            color: '#000', // 线条颜色
            width: 2, // 线条宽度
            points: ['', 'arrow'],
            start: [0, 0],
            end: [549, 0],
            direction: 'x'
          }
        }
      },
      {
        label: '线条',
        option: {
          name: '线条',
          icon: 'icon-fuwenben',
          top: 78,
          left: 1604,
          component: {
            rotateDeg: 0,
            width: 400,
            height: 50,
            prop: 'countup'
          },
          option: {
            id: 'FnpZs4',
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            style: 'solid', // 线条样式
            color: '#000', // 线条颜色
            width: 2, // 线条宽度
            points: ['', 'arrow'],
            start: [0, 0],
            end: [549, 0],
            direction: 'x'
          }
        }
      }
    ]
  }
]
