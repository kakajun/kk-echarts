// import basicDatas from '@/mock/basicDatas'
export default [{
    label: '图文区',
    icon: 'icon-text',
    children: [
        {
            label: '文本框',
            icon: 'icon-text',
            option: {
                name: "文本框",
                icon: 'icon-fuwenben',
                dataQuery: '{"period":"$year$month","company":"$comid"}',
                dataFormatter: "(function(data) { return data})",
                url: '/cnbi/project/select_operational_characteristics',
                data: {
                    value: '文本框'
                },
                dataMethod: 'get',
                dataType: 3,
                component: {
                    width: 200,
                    height: 80,
                    prop: "tinymce",
                },
                option: {
                    zjPrefixColor: ['#239969', '#e03e2d'], // 指标中的 增加 减少 颜色
                    editContent: '',
                    content: '<p><span style="font-family: 微软雅黑;">文本</span></p>',
                    linkHref: '',
                    dataView: "",
                    currencyType: 10000,
                    digit: 2, // 小数点后x位
                    currencyOrText: '货币单位',
                    currencyPercent: '百分比',
                    contentDataType1: '',
                },
            },
        },
        {
            label: '图片',
            option: {
                name: "图片",
                icon: 'icon-tupian',
                data: {
                    value: ''
                },
                component: {
                    width: 240,
                    height: 240,
                    prop: "imagcropper",
                },
                option: {
                    rotate: false,
                    duration: 3,
                    imgRadius: 0,
                    opacity: 0,
                    imgCropDialog: false,
                    // 已保存的剪裁信息
                    isCropped: false,
                    imgCroppedB64Data: '', // 剪裁后的base64格式文件
                    cropXstartpos: 0,
                    cropYstartpos: 0,
                    cropWval: 0,
                    cropHval: 0,
                    divStyle: '',
                    imgStyle: '',
                    // fit: 'fill'
                }
            }
        },
        {
            label: '边框',
            option: {
                name: "边框",
                icon: 'icon-biankuang',
                component: {
                    width: 240,
                    height: 240,
                    prop: "imgborder",
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
        // {
        //     "label": '阿里图标',
        //     "option": {
        //         "title": "阿里图标",
        //         "name": "阿里图标",
        //         "icon": 'icon-biankuang',
        //         "top": 0,
        //         "left": 0,
        //         lock: false, // 是不是加锁，阻止拖动
        //         "component": {
        //             "width": 240,
        //             "height": 240,
        //             "prop": "shape",
        //         },
        //         "option": {
        //             preserveAspectRatio: 'xMinYMin',
        //             fillColor: 'rgba(0, 0, 0, 1)',
        //             remoteJSAddress: 'font_2402009_tukthf1j56.js',
        //             iconName: 'iconRight-5',
        //             openShadow: false,  // 开启阴影
        //             shadowColor: 'rgb(198, 198, 198)',  // 阴影颜色
        //             hShadow: 2,   // 横偏移
        //             vShadow: 2, // 纵偏移
        //             blur: 5     // 模糊
        //         }
        //     }
        // }
    ]
}]
