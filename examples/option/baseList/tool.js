// 这里是图文区
// import basicDatas from '../../mock/basicDatas'
export default [
  {
    label: '工具区',
    icon: 'icon-wxbgongju',
    children: [
      {
        label: '带弹窗代码编辑器',
        option: {
          name: '带弹窗代码编辑器',
          icon: 'icon-daima',
          dataType: 0,
          dataFormatter: '',
          data: {
            value: '文本框'
          },
          code: {
            a: 1,
            b: 3
          },
          language: 'json',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'editor'
          }
        }
      },
      {
        label: '代码编辑器',
        option: {
          name: '代码编辑器',
          icon: 'icon-daima',
          code: `function language() {if (!this.editor) returnthis.monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
          }`,
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'monacoeditors'
          },
          option: {
            theme: 'vs'
          }
        }
      },
      {
        label: '动画编辑',
        option: {
          name: '动画编辑',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'animationedit'
          },
          option: {
            theme: 'vs'
          }
        }
      },
      {
        label: '选项卡',
        option: {
          name: '选项卡',
          eventConfig: {
            child: {
              index: [],
              paramName: ''
            }
          },
          dataFormatter: '',
          dataType: 0,
          data: [
            {
              label: '选项卡1',
              value: '1'
            },
            {
              label: '选项卡2',
              value: '2'
            }
          ],
          component: {
            rotateDeg: 0,
            width: 356,
            height: 46,
            prop: 'tabs'
          },
          option: {
            boardSplit: 30, // 边框间距
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            type: 'tabs',
            color: '#eee',
            empColor: '#4dffff',
            fontSize: 20,
            split: 8,
            empBackgroundImage: '/img/banner/banner5.png',
            backgroundImage: '/img/banner/banner4.png'
          }
        }
      },
      {
        label: '选项卡2',
        option: {
          name: '选项卡2',
          eventConfig: {
            child: {
              index: [],
              paramName: ''
            }
          },
          dataFormatter: '',
          dataType: 0,
          data: [
            {
              label: '选项卡1',
              value: '1'
            },
            {
              label: '选项卡2',
              value: '2'
            }
          ],
          component: {
            rotateDeg: 0,
            width: 356,
            height: 46,
            prop: 'tabs2'
          },
          option: {
            animations: [], // 动画
            allDelayTime: 0, // 整体播放时长
            isOnceAnimation: true, // true 动画执行一次 false 无线循环
            currencyType: 1,
            percentile: true, // 千分位显示
            type: 'tabs',
            color: '#eee',
            empColor: '#4dffff',
            fontSize: 20,
            split: 8,
            empBackgroundImage: '/img/banner/banner5.png',
            backgroundImage: '/img/banner/banner4.png'
          }
        }
      },
      {
        label: '多维度取数',
        option: {
          name: '多维度取数',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'manydims'
          },
          option: {
            theme: 'vs'
          }
        }
      },
      {
        label: '按钮',
        option: {
          name: '按钮',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'btn'
          },
          option: {
            text: '返回',
            textSize: 20,
            color: '',
            isround: false,
            // icon="el-icon-share"
            btnType: 'primary',
            btnSize: 'medium',
            btnIcon: 'el-icon-share'
          }
        }
      },
      {
        label: 'avue-select',
        option: {
          name: '按钮',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'AvueSelect'
          },
          option: {}
        }
      },
      {
        label: 'AvueCrud',
        option: {
          name: '表格',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'AvueCrud'
          },
          option: {}
        }
      },
      {
        label: 'SketchRule',
        option: {
          name: 'SketchRule',
          icon: 'icon-daima',
          component: {
            rotateDeg: 0,
            width: 300,
            height: 300,
            prop: 'AvueSketchRule'
          },
          option: {}
        }
      }
    ]
  }
]
