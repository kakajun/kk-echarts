
# 公司树
以树的形式展现公司列表等

:::demo 
```html
  <companytree ref="refcompany"
                   :companytree-data="companytreeData"
                   :style="style"
                   :company="company"
                   @callchangecompany="handleSelectCompany" />

<script>
export default {
  data() {
      return {
        company:'1010',
        style:{
          width:'400px',      
          height:'400px'
        },
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
            }]
         }
},
methods:{
    handleSelectCompany() {
      const companyInfo = this.$refs.refcompany.selectedCompany
      if (!companyInfo) {
        this.$message.closeAll()
        return this.$message.error("请选择一家公司")
      }
    },
}
}
</script>



```
:::

<script>
export default {
  data() {
      return {
        company:'1010',
        style:{
          width:'400px',
          height:'400px'
        },
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
            }]
         }
},
methods:{
    handleSelectCompany() {
      const companyInfo = this.$refs.refcompany.selectedCompany
      if (!companyInfo) {
        this.$message.closeAll()
        return this.$message.error("请选择一家公司")
      }
    },
}
}
</script>