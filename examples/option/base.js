import baseList from './baseList/baseList'
import single from './baseList/single'
import texPic from './baseList/texPic'
import tool from './baseList/tool'
import baseComon from '@s/baseComon'
let arrs = [...baseList, ...texPic, ...single, ...tool]
arrs = baseComon(arrs)
export default arrs
