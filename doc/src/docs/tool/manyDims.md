
# 多维度设置组件

设置多选期间,公司,指标等,进行联合查询的一个前端界面,说白了就是设置请求的条件,即params


```
<!-- 需要添加依赖 -->  
    <!-- 拖拽包 -->
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/Vue.Draggable/2.24.3/vuedraggable.umd.js"></script>
```
```js
// 在main.js 或使用的组件中注册window.vuedraggable为Draggable
Vue.component('Draggable', window.vuedraggable)
```


:::demo 
```html
<manydims :companytreeData="companytreeData"
            :measureOptions="measureOptions"
            :baseList="baseList"
            :treeData="treeData"
            :visible.sync="visible"
            :activeObj="activeObj"></manydims>

<script>
export default {
  data() {
      return {
            companytreeData:    [{
                "scode": "1010",
                "parentname": "江苏省农垦集团有限公司（合并）",
                "ranges": "1",
                "level": 2,
                "belongtobk": "6",
                "del": "N",
                "type": "Z",
                "spropname": "其他",
                "iufocode": "n87phit8cp0lgzf89ray",
                "isnf": 0,
                "ctype": "1",
                "cicode": "JSNKJT0019",
                "sname": "江苏省农垦集团有限公司",
                "rangename": "全行业",
                "fullname": "江苏省农垦集团有限公司",
                "spcode": "1",
                "isleaf": "0",
                "industryname": "综合",
                "children": [
                    {
                        "scode": "100",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "J6639",
                        "spropname": "其他",
                        "iufocode": "n6djgf5dqq34g0cgo744",
                        "isnf": 0,
                        "ctype": "1",
                        "cicode": "JSNKJT0060",
                        "sname": "资金管理中心",
                        "rangename": "全行业",
                        "fullname": "资金管理中心",
                        "spcode": "1010",
                        "isleaf": "1",
                        "industryname": "其他非货币银行服务",
                        "label": "(100) 资金管理中心"
                    },
                
                    {
                        "scode": "1010100",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "L7212",
                        "spropname": "其他",
                        "iufocode": "6bzn9are7vw52rp9o1wc",
                        "isnf": 0,
                        "ctype": "0",
                        "cicode": "JSNKJT0121",
                        "sname": "事业办合并",
                        "rangename": "全行业",
                        "fullname": "事业办合并",
                        "spcode": "1010",
                        "isleaf": "0",
                        "industryname": "投资与资产管理",
                        "children": [
                            {
                                "scode": "10101",
                                "parentname": "事业办合并",
                                "ranges": "1",
                                "level": 4,
                                "belongtobk": "6",
                                "del": "N",
                                "type": "L7212",
                                "spropname": "其他",
                                "iufocode": "59m60n98zi6eme209uj9",
                                "isnf": 0,
                                "ctype": "1",
                                "cicode": "JSNKJT0020",
                                "sname": "江苏省农垦事业管理办公室",
                                "rangename": "全行业",
                                "fullname": "江苏省农垦事业管理办公室",
                                "spcode": "1010100",
                                "isleaf": "1",
                                "industryname": "投资与资产管理",
                                "label": "(10101) 江苏省农垦事业管理办公室"
                            },
                            {
                                "scode": "1010101",
                                "parentname": "事业办合并",
                                "ranges": "1",
                                "level": 4,
                                "belongtobk": "6",
                                "del": "N",
                                "type": "L7213",
                                "spropname": "其他",
                                "iufocode": "zbstnrkvzinxhwbryfyw",
                                "isnf": 0,
                                "ctype": "1",
                                "cicode": "HABGS001",
                                "sname": "淮安农垦事业管理办公室",
                                "rangename": "全行业",
                                "fullname": "淮安农垦事业管理办公室",
                                "spcode": "1010100",
                                "isleaf": "1",
                                "industryname": "单位后勤管理服务",
                                "label": "(1010101) 淮安农垦事业管理办公室"
                            }
                          
                        ],
                        "label": "(1010100) 事业办合并"
                    },
                    {
                        "scode": "10104",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "Z",
                        "spropname": "其他",
                        "iufocode": "wwbwu1cras95i2gq8o6a",
                        "isnf": 0,
                        "ctype": "1",
                        "cicode": "JSNKJT0050",
                        "sname": "农业保险",
                        "rangename": "全行业",
                        "fullname": "农业保险",
                        "spcode": "1010",
                        "isleaf": "1",
                        "industryname": "综合",
                        "label": "(10104) 农业保险"
                    },

                ],
                "label": "(1010) 江苏省农垦集团有限公司"
            }],
measureOptions: [{"sname":"年初数","subject":"0001","sfactfield":"A"},{"sname":"期末数","subject":"0001","sfactfield":"B"},{"sname":"预算数","subject":"0001","sfactfield":"C"},{"sname":"环比增减额","subject":"0001","sfactfield":"E"},{"sname":"环比增减率","subject":"0001","sfactfield":"G"},{"sname":"同比增减额","subject":"0001","sfactfield":"H"},{"sname":"同比增减率","subject":"0001","sfactfield":"I"},{"sname":"预算数同比增减额","subject":"0001","sfactfield":"J"},{"sname":"预算数同比增减率","subject":"0001","sfactfield":"K"},{"sname":"预算完成率","subject":"0001","sfactfield":"L"},{"sname":"本期数","subject":"0002","sfactfield":"A"},{"sname":"累计数","subject":"0002","sfactfield":"B"},{"sname":"预算数","subject":"0002","sfactfield":"C"},{"sname":"预算累计数","subject":"0002","sfactfield":"D"},{"sname":"本期环比增减额","subject":"0002","sfactfield":"E"},{"sname":"本期环比增减率","subject":"0002","sfactfield":"G"},{"sname":"累计同比增减额","subject":"0002","sfactfield":"H"},{"sname":"累计同比增减率","subject":"0002","sfactfield":"I"},{"sname":"预算数同比增减额","subject":"0002","sfactfield":"J"},{"sname":"预算数同比增减率","subject":"0002","sfactfield":"K"},{"sname":"预算完成率","subject":"0002","sfactfield":"L"},{"sname":"本期指标","subject":"1016","sfactfield":"A"},{"sname":"累计指标","subject":"1016","sfactfield":"B"},{"sname":"本期环比增减额","subject":"1016","sfactfield":"E"},{"sname":"本期环比增减率","subject":"1016","sfactfield":"F"},{"sname":"本期同比增减额","subject":"1016","sfactfield":"G"},{"sname":"本期同比增减率","subject":"1016","sfactfield":"H"},{"sname":"累计环比增减额","subject":"1016","sfactfield":"I"},{"sname":"累计环比增减率","subject":"1016","sfactfield":"J"},{"sname":"累计同比增减额","subject":"1016","sfactfield":"K"},{"sname":"累计同比增减率","subject":"1016","sfactfield":"L"}],

        treeData:[
    {
        "children": [
            {
                "ssortby": "2001",
                "sname": "一、营业总收入",
                "datas": {
                    "fact_e": 0,
                    "fact_d": -57339224259.6,
                    "scode": "1416001",
                    "fact_c": 0,
                    "cgrade": "z",
                    "year_rate": -100,
                    "yszxl": 0,
                    "month_rate": 0,
                    "simple_name": "营业总收入",
                    "month_a": 0,
                    "year_b": -15822788515.0195,
                    "year_last": 15822788515.0195,
                    "fact_b": 0,
                    "sunit": "unit",
                    "fact_a": 0,
                    "month_last": 0
                },
                "id": "lx_1416001"
            },
            {
                "ssortby": "200101",
                "sname": "  其中：营业收入",
                "datas": {
                    "fact_e": 0,
                    "fact_d": -57358223053.2,
                    "scode": "141600101",
                    "fact_c": 0,
                    "cgrade": "z",
                    "year_rate": -100,
                    "yszxl": 0,
                    "month_rate": 0,
                    "simple_name": "其中：营业收入",
                    "month_a": 0,
                    "year_b": -15818391410.3489,
                    "year_last": 15818391410.3489,
                    "fact_b": 0,
                    "sunit": "unit",
                    "fact_a": 0,
                    "month_last": 0
                },
                "id": "lx_141600101"
            }
        ]
    }
],
        visible:true,
        activeObj:{
                "top": 0,
                "left": 0,
                "dataType": 4,
                "dataMethod": "post",
                "lock": false,
                "comhidden": false,
                "dataFormatter": "(function(data) { return data})",
                "dataQueryb": {
                    "comList": [
                        "1010",
                        "102A",
                        "103A"
                    ],
                    "perList": [
                        "201803",
                        "201903",
                        "202003"
                    ],
                    "lxCodList": [
                        "1416001"
                    ],
                    "lxFaList": [
                        "A"
                    ]
                },
                "url2": "/cnbi/project/query_data/analysis_display",
                "name": "饼图",
                "icon": "icon-bingtu",
                "time": 5,
                "url": "/cnbi/project/access/query",
                "resize": false,
                "component": {
                    "width": 914,
                    "height": 442,
                    "prop": "pie",
                    "rotateDeg": 0
                },
                "option": {
                    "titleShow": true,
                    "title": "",
                    "subtext": "我是副标题",
                    "titleTop": "top",
                    "titlePostion": "left",
                    "titleColor": "#000",
                    "titleFontSize": 14,
                    "titleFontWeight": "bold",
                    "subTitleColor": "#000",
                    "subTitleFontSize": 14,
                    "legend": true,
                    "legendalign": "up",
                    "legendHeight": "auto",
                    "legendColor": "rgba(0, 0, 0, 1)",
                    "legendFontSize": 16,
                    "legendOrient": "vertical",
                    "legendPostion": "E",
                    "legendDataIcon": "rect",
                    "digit": 2,
                    "labelShow": true,
                    "currencyType": 10000
                },
                "index": "2610f293-3550-4171-910c-bbc6f6ab1e4c",
                "zIndex": 0,
                "cubeObject": {
                    "type": "pie",
                    "companys": [
                        "1010",
                        "102A",
                        "103A"
                    ],
                    "slectmonth": [
                        "03"
                    ],
                    "flag": false,
                    "slectyear": [
                        "2018",
                        "2019",
                        "2020"
                    ],
                    "dims": [
                        {
                            "id": "period_name",
                            "text": "期间",
                            "type": "text",
                            "width": null
                        }
                    ],
                    "facts": [
                        {
                            "id": "fact_a",
                            "text": "本期数",
                            "type": "number",
                            "width": null
                        }
                    ],
                    "legend": [],
                    "preFacts": [
                        {
                            "sname": "本期数",
                            "subject": "0002",
                            "sfactfield": "A"
                        }
                    ],
                    "perList": [],
                    "checkedIndex": [
                        "lx_1416001"
                    ],
                    "factParams": {
                        "lxFaList": [
                            "A"
                        ]
                    },
                    "zbPrames": {
                        "lxCodList": [
                            "1416001"
                        ]
                    }
                }
}

}
}

}
</script>



```
:::

<script>
  import baseList from "./js/base.js"
export default {
  data() {
      return {
        baseList:baseList,
            companytreeData:    [{
                "scode": "1010",
                "parentname": "江苏省农垦集团有限公司（合并）",
                "ranges": "1",
                "level": 2,
                "belongtobk": "6",
                "del": "N",
                "type": "Z",
                "spropname": "其他",
                "iufocode": "n87phit8cp0lgzf89ray",
                "isnf": 0,
                "ctype": "1",
                "cicode": "JSNKJT0019",
                "sname": "江苏省农垦集团有限公司",
                "rangename": "全行业",
                "fullname": "江苏省农垦集团有限公司",
                "spcode": "1",
                "isleaf": "0",
                "industryname": "综合",
                "children": [
                    {
                        "scode": "100",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "J6639",
                        "spropname": "其他",
                        "iufocode": "n6djgf5dqq34g0cgo744",
                        "isnf": 0,
                        "ctype": "1",
                        "cicode": "JSNKJT0060",
                        "sname": "资金管理中心",
                        "rangename": "全行业",
                        "fullname": "资金管理中心",
                        "spcode": "1010",
                        "isleaf": "1",
                        "industryname": "其他非货币银行服务",
                        "label": "(100) 资金管理中心"
                    },
                
                    {
                        "scode": "1010100",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "L7212",
                        "spropname": "其他",
                        "iufocode": "6bzn9are7vw52rp9o1wc",
                        "isnf": 0,
                        "ctype": "0",
                        "cicode": "JSNKJT0121",
                        "sname": "事业办合并",
                        "rangename": "全行业",
                        "fullname": "事业办合并",
                        "spcode": "1010",
                        "isleaf": "0",
                        "industryname": "投资与资产管理",
                        "children": [
                            {
                                "scode": "10101",
                                "parentname": "事业办合并",
                                "ranges": "1",
                                "level": 4,
                                "belongtobk": "6",
                                "del": "N",
                                "type": "L7212",
                                "spropname": "其他",
                                "iufocode": "59m60n98zi6eme209uj9",
                                "isnf": 0,
                                "ctype": "1",
                                "cicode": "JSNKJT0020",
                                "sname": "江苏省农垦事业管理办公室",
                                "rangename": "全行业",
                                "fullname": "江苏省农垦事业管理办公室",
                                "spcode": "1010100",
                                "isleaf": "1",
                                "industryname": "投资与资产管理",
                                "label": "(10101) 江苏省农垦事业管理办公室"
                            },
                            {
                                "scode": "1010101",
                                "parentname": "事业办合并",
                                "ranges": "1",
                                "level": 4,
                                "belongtobk": "6",
                                "del": "N",
                                "type": "L7213",
                                "spropname": "其他",
                                "iufocode": "zbstnrkvzinxhwbryfyw",
                                "isnf": 0,
                                "ctype": "1",
                                "cicode": "HABGS001",
                                "sname": "淮安农垦事业管理办公室",
                                "rangename": "全行业",
                                "fullname": "淮安农垦事业管理办公室",
                                "spcode": "1010100",
                                "isleaf": "1",
                                "industryname": "单位后勤管理服务",
                                "label": "(1010101) 淮安农垦事业管理办公室"
                            }
                          
                        ],
                        "label": "(1010100) 事业办合并"
                    },
                    {
                        "scode": "10104",
                        "parentname": "江苏省农垦集团有限公司",
                        "ranges": "1",
                        "level": 3,
                        "belongtobk": "6",
                        "del": "N",
                        "type": "Z",
                        "spropname": "其他",
                        "iufocode": "wwbwu1cras95i2gq8o6a",
                        "isnf": 0,
                        "ctype": "1",
                        "cicode": "JSNKJT0050",
                        "sname": "农业保险",
                        "rangename": "全行业",
                        "fullname": "农业保险",
                        "spcode": "1010",
                        "isleaf": "1",
                        "industryname": "综合",
                        "label": "(10104) 农业保险"
                    },

                ],
                "label": "(1010) 江苏省农垦集团有限公司"
            }],
measureOptions: [{"sname":"年初数","subject":"0001","sfactfield":"A"},{"sname":"期末数","subject":"0001","sfactfield":"B"},{"sname":"预算数","subject":"0001","sfactfield":"C"},{"sname":"环比增减额","subject":"0001","sfactfield":"E"},{"sname":"环比增减率","subject":"0001","sfactfield":"G"},{"sname":"同比增减额","subject":"0001","sfactfield":"H"},{"sname":"同比增减率","subject":"0001","sfactfield":"I"},{"sname":"预算数同比增减额","subject":"0001","sfactfield":"J"},{"sname":"预算数同比增减率","subject":"0001","sfactfield":"K"},{"sname":"预算完成率","subject":"0001","sfactfield":"L"},{"sname":"本期数","subject":"0002","sfactfield":"A"},{"sname":"累计数","subject":"0002","sfactfield":"B"},{"sname":"预算数","subject":"0002","sfactfield":"C"},{"sname":"预算累计数","subject":"0002","sfactfield":"D"},{"sname":"本期环比增减额","subject":"0002","sfactfield":"E"},{"sname":"本期环比增减率","subject":"0002","sfactfield":"G"},{"sname":"累计同比增减额","subject":"0002","sfactfield":"H"},{"sname":"累计同比增减率","subject":"0002","sfactfield":"I"},{"sname":"预算数同比增减额","subject":"0002","sfactfield":"J"},{"sname":"预算数同比增减率","subject":"0002","sfactfield":"K"},{"sname":"预算完成率","subject":"0002","sfactfield":"L"},{"sname":"本期指标","subject":"1016","sfactfield":"A"},{"sname":"累计指标","subject":"1016","sfactfield":"B"},{"sname":"本期环比增减额","subject":"1016","sfactfield":"E"},{"sname":"本期环比增减率","subject":"1016","sfactfield":"F"},{"sname":"本期同比增减额","subject":"1016","sfactfield":"G"},{"sname":"本期同比增减率","subject":"1016","sfactfield":"H"},{"sname":"累计环比增减额","subject":"1016","sfactfield":"I"},{"sname":"累计环比增减率","subject":"1016","sfactfield":"J"},{"sname":"累计同比增减额","subject":"1016","sfactfield":"K"},{"sname":"累计同比增减率","subject":"1016","sfactfield":"L"}],

        treeData:[
    {
        "children": [
            {
                "ssortby": "2001",
                "sname": "一、营业总收入",
                "datas": {
                    "fact_e": 0,
                    "fact_d": -57339224259.6,
                    "scode": "1416001",
                    "fact_c": 0,
                    "cgrade": "z",
                    "year_rate": -100,
                    "yszxl": 0,
                    "month_rate": 0,
                    "simple_name": "营业总收入",
                    "month_a": 0,
                    "year_b": -15822788515.0195,
                    "year_last": 15822788515.0195,
                    "fact_b": 0,
                    "sunit": "unit",
                    "fact_a": 0,
                    "month_last": 0
                },
                "id": "lx_1416001"
            },
            {
                "ssortby": "200101",
                "sname": "  其中：营业收入",
                "datas": {
                    "fact_e": 0,
                    "fact_d": -57358223053.2,
                    "scode": "141600101",
                    "fact_c": 0,
                    "cgrade": "z",
                    "year_rate": -100,
                    "yszxl": 0,
                    "month_rate": 0,
                    "simple_name": "其中：营业收入",
                    "month_a": 0,
                    "year_b": -15818391410.3489,
                    "year_last": 15818391410.3489,
                    "fact_b": 0,
                    "sunit": "unit",
                    "fact_a": 0,
                    "month_last": 0
                },
                "id": "lx_141600101"
            }
        ]
    }
],
        visible:true,
        activeObj:{
                "top": 0,
                "left": 0,
                "dataType": 4,
                "dataMethod": "post",
                "lock": false,
                "comhidden": false,
                "dataFormatter": "(function(data) { return data})",
                "dataQueryb": {
                    "comList": [
                        "1010",
                        "102A",
                        "103A"
                    ],
                    "perList": [
                        "201803",
                        "201903",
                        "202003"
                    ],
                    "lxCodList": [
                        "1416001"
                    ],
                    "lxFaList": [
                        "A"
                    ]
                },
                "url2": "/cnbi/project/query_data/analysis_display",
                "name": "饼图",
                "icon": "icon-bingtu",
                "time": 5,
                "url": "/cnbi/project/access/query",
                "resize": false,
                "component": {
                    "width": 914,
                    "height": 442,
                    "prop": "pie",
                    "rotateDeg": 0
                },
                "option": {
                    "titleShow": true,
                    "title": "",
                    "subtext": "我是副标题",
                    "titleTop": "top",
                    "titlePostion": "left",
                    "titleColor": "#000",
                    "titleFontSize": 14,
                    "titleFontWeight": "bold",
                    "subTitleColor": "#000",
                    "subTitleFontSize": 14,
                    "legend": true,
                    "legendalign": "up",
                    "legendHeight": "auto",
                    "legendColor": "rgba(0, 0, 0, 1)",
                    "legendFontSize": 16,
                    "legendOrient": "vertical",
                    "legendPostion": "E",
                    "legendDataIcon": "rect",
                    "digit": 2,
                    "labelShow": true,
                    "currencyType": 10000
                },
                "index": "2610f293-3550-4171-910c-bbc6f6ab1e4c",
                "zIndex": 0,
                "cubeObject": {
                    "type": "pie",
                    "companys": [
                        "1010",
                        "102A",
                        "103A"
                    ],
                    "slectmonth": [
                        "03"
                    ],
                    "flag": false,
                    "slectyear": [
                        "2018",
                        "2019",
                        "2020"
                    ],
                    "dims": [
                        {
                            "id": "period_name",
                            "text": "期间",
                            "type": "text",
                            "width": null
                        }
                    ],
                    "facts": [
                        {
                            "id": "fact_a",
                            "text": "本期数",
                            "type": "number",
                            "width": null
                        }
                    ],
                    "legend": [],
                    "preFacts": [
                        {
                            "sname": "本期数",
                            "subject": "0002",
                            "sfactfield": "A"
                        }
                    ],
                    "perList": [],
                    "checkedIndex": [
                        "lx_1416001"
                    ],
                    "factParams": {
                        "lxFaList": [
                            "A"
                        ]
                    },
                    "zbPrames": {
                        "lxCodList": [
                            "1416001"
                        ]
                    }
                }
}
}
}
}
</script>
