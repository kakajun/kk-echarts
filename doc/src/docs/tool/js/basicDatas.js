export default {
    // 柱形图
    bar: {
        categories: [
            "2016年",
            "2017年",
            "2018年"
        ],
        series: [
            {
                name: "本期",
                data: [
                    210106.26,
                    191006.83,
                    186081.48
                ]
            },
            {
                name: "累计",
                data: [
                    2219897.86,
                    2234577.44,
                    2632851.08
                ]
            }
        ]
    },
    // 折线图
    line: {
        categories: [
            "2016年",
            "2017年",
            "2018年"
        ],
        series: [
            {
                name: "净资产收益率(%)",
                data: [
                    14.3954,
                    13.3465,
                    12.2993
                ]
            },
            {
                name: "销售(营业)收入增长率(%)",
                data: [
                    0.6328,
                    0.6328,
                    12.7763
                ]
            }
        ]
    },
    // 饼图
    pie: [
        {
            name: "营业成本",
            value: 1065991.77
        },
        {
            name: "销售费用",
            value: 658392.4
        },
        {
            name: "管理费用",
            value: 345443.92
        },
        {
            name: "财务费用",
            value: 10872.57
        }
    ],
    // 雷达图
    radar: {
        indicator: [{
            name: '销售',
            max: 6500
        },
        {
            name: '管理',
            max: 16000
        },
        {
            name: '信息技术',
            max: 30000
        },
        {
            name: '客服',
            max: 38000
        },
        {
            name: '研发',
            max: 52000
        },
        {
            name: '市场',
            max: 25000
        }
        ],
        series: [{
            data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
            }
            ]
        }]
    },
    // 散点图
    scatter: [{
        data: [
            [1, 8.04],
            [2, 6.95]
        ]
    },
    {
        data: [
            [1, 4.04],
            [2, 3.95]
        ]
    }],
    gauge: {
        min: 1,
        max: 10,
        label: '名称',
        value: 40,
        unit: '%'
    },
    threefourthsround: {
        chartData: [{
            name: "本科及以上1111",
            value: 13211,
            unit: '元'
        },
        {
            name: "高中",
            value: 42111,
            unit: '元'
        },
        {
            name: "初中及以下",
            value: 81711,
            unit: '元'
        },
        {
            name: "其他",
            value: 121711,
            unit: '元'
        }]
    },
    // 柱线混合图
    biaxial: {
        categories: [
            "北京",
            "上海",
            "杭州",
            "深圳",
            "杭州",
            "深圳",
            "广州",
            "连云港",
        ],
        series: [{
            name: "手机品牌",
            type: "line",
            data: [
                113176,
                134011,
                90718,
                349011,
                95718,
                66020,
                57134,
                46397
            ]
        }, {
            name: "其他手机品牌",
            data: [
                11317,
                13490,
                9058,
                13411,
                9018,
                6520,
                5234,
                4397
            ]
        }, {
            name: "aaaasaaa",
            type: "line",
            yAxisIndex: 1,
            data: [
                10317,
                10490,
                9158,
                11411,
                9118,
                6120,
                5134,
                3397
            ]
        }


        ]

    },
    text: {
        value: '我是模拟数据'
    },
    pie2: [{ name: "医药健康", value: 7482191285.20, percent: 76.60, unit: "元" }, { name: "城镇开发", value: 839439276.10, percent: 8.59, unit: "元" }, { name: "投资及其他", value: 760730651.00, percent: 7.79, unit: "元" }, { name: "现代农业", value: 685395336.30, percent: 7.02, unit: "元" }]
}
