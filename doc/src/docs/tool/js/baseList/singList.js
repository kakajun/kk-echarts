// 基础公共url
import basicDatas from '../basicDatas'
export default [{
  label: '单指标图',
  icon: 'icon-flop',
  children: [

    {
      label: '进度条',
      option: {
        name: "进度条",
        icon: 'icon-jindutiao',
        data: {
          label: "人数增涨率",
          value: 40,
          data: 80
        },
        dataQuery: '',
        url: '/cnbi/project/access/query',
        component: {
          width: 400,
          height: 200,
          prop: "progress",
        },
        option: {
          type: "line",
          strokeWidth: 25,
          color: "rgba(154, 168, 212, 1)",
          fontSize: 40,
          fontWeight: "normal",
          suffixColor: "rgba(154, 168, 212, 1)",
          suffixFontSize: 40,
          suffixFontWeight: "normal",
          borderColor: "#564AA3",
          split: 20,
          width: 400,
          height: 80,
          currencyType: 10000,
        },
      }
    },
    // {
    //     label: '仪表盘',
    //     option: {
    //         "title": "仪表盘",
    //         "icon": 'icon-yibiaopan',
    //         "name": "仪表盘",
    //         "dataType": 0,
    //         "time": 5,
    //         "dataMethod": 'post',
    //         dataQuery: '',
    //         dataFormatter: "(function(data) { return data})",
    //         lock: false, // 是不是加锁，阻止拖动
    //         url: '/cnbi/project/access/query',//baseUrl + "/gauge",
    //         "data": basicDatas.gauge,
    //         "component": {
    //             "width": 390,
    //             "height": 314,
    //             "prop": "gauge",
    //         },
    //         "option": {
    //             digit: 2,
    //             "lineSize": 15,
    //             "axisLabelShow": false,
    //             "axisLabelFontSize": 25,
    //             "nameFontSize": 20,
    //             "valueFontSize": 30,
    //             "nameColor": "",
    //             "lineColor": "#eee",
    //             "barColor": [{
    //                 "color1": "rgba(154, 168, 212, 1)",
    //                 "postion": "0.2",
    //             },
    //             {
    //                 "color1": "#23B7E5",
    //                 "postion": "0.8",
    //             },
    //             {
    //                 "color1": "#564AA3",
    //                 "postion": "1",
    //             }
    //             ],
    //             titleColor: 'rgba(255, 255, 255, 1)',
    //             titlePostion: 'center',
    //             titleFontSize: 16,
    //             subTitleColor: 'rgba(255, 255, 255, 1)',
    //             subTitleFontSize: 14,
    //         },
    //     },
    // },
    {
      label: '仪表盘-收入/利润',
      option: {
        name: "仪表盘-收入/利润",
        icon: 'icon-yibiaopan',
        dataType: 1,
        dataMethod: 'get',
        data: basicDatas.bar,
        dataQuery: '{"period": "$year$month"}',
        url: '/cnbi/project/ocr_data/company_data',
        time: 5,
        component: {
          width: 914, // 800,
          height: 442, // 400,
          prop: "bGauge1",
        },
        option: {
          comp: '苏垦农发',
          dType: '营业收入',
          gColor: '#58D9F9',
          borderwidth: 22,
          detailFontSize: 50,
          detailColor: '#fff',
        }
      }
    },
    {
      label: '水球图',
      option: {
        icon: 'icon-waterpolo',
        name: "水球图",
        time: 5,
        dataQuery: '{"period":"$year$month","type":"chart","project":"demo1","company":"$comid","cubeId":"5","unit":1 }',
        url: '/cnbi/project/access/query', // baseUrl + "/gauge",
        data: basicDatas.gauge,
        component: {
          width: 390,
          height: 314,
          prop: "liquidfill",
        },
        option: {
          aboveColor: 'rgba(35, 153, 105, 1)',
          belowColor: 'rgba(224, 62, 45, 1)',
          digit: 2,
          shape: 'circle', // 填充形状
          borderWidth: 5, // 边框宽度
          borderColor: "rgba(255, 150, 0, 1)", // 'rgba(68, 68, 68, 1)', //边框颜色
          bgcolor: 'rgba(255,255,255,0.8)', // 图形背景颜色
          waterColor1: "rgba(252, 214, 6, 1)", // 'rgba(68, 145, 253, 0)',
          waterColor2: "rgba(250, 179, 0, 1)", // 'rgba(68, 145, 253, 0.25)',
          waterColor3: "rgba(255, 120, 0, 1)", // 'rgba(68, 145, 253, 1)',
          direction: 'left',
          titlePadding: [5, 0, 0, 0],
          title: "标题文字",
          subTitleColor: "rgba(0, 0, 0, 1)",
          subTitleFontSize: 45,
          titleColor: "rgba(0, 0, 0, 1)",
          titleFontSize: 45,
          titlePostion: "center",
          titleShow: false,
          // waterColor1: "rgba(252, 214, 6, 1)", //from year template
          // waterColor2: "rgba(250, 179, 0, 1)",
          // waterColor3: "rgba(255, 120, 0, 1)",
          waterOpacity: 1, // 0.5, //波浪透明度
          waterSpeed: 2, // 水流速度
          waveColor: 'rgba(255, 102, 0, 1)', // "#ff6600",
          waterWidth: 10,
        },
      },
    }]
}]
