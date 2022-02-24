/**
 *================================================
 *  @date : 2019/08/28
 *  @author : gxb
 *  @desc :常用的计算属性
 *
 *================================================
 */
export default {
  computed: {
    // 数据
    datas() {
      return this.cubeObject.datas
    },

    // 资源视图类型
    subtype() {
      // 类型
      return this.cubeObject.subtype
    },
    // 度量
    facts() {
      return this.cubeObject.facts
    },
    // 维度
    dims() {
      return this.cubeObject.dims
    }
  }
}
