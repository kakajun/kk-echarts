import baseList from './baseList/baseList'
import singList from './baseList/singList'
import texPic from './baseList/texPic'
import baseComon from '../../../../../script/baseComon';
let arrs = [
  ...baseList,
  ...singList,
  ...texPic
]
arrs = baseComon(arrs)
// 基础组件库
export default arrs
