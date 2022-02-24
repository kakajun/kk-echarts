// jest api https://jestjs.io/docs/zh-Hans/expect#expectvalue
// https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5
import { shallowMount } from '@vue/test-utils'
import Liquidfill from '../Liquidfill.vue'
// 水球图依赖
import 'echarts-liquidfill'
import getObj from '@s/utils/jestUtil.js'
const activeObj = getObj('liquidfill')

describe('test: Liquidfill.vue', () => {
  const wrapper = shallowMount(Liquidfill, {
    propsData: {
      id: 'ancestor',
      data: activeObj.data,
      width: activeObj.component.width,
      height: activeObj.component.height,
      option: activeObj.option
    }
  })
  it('渲染测试', async () => {
    // console.log(wrapper.html())
    const canvas = wrapper.find('canvas')
    expect(canvas.exists()).toBe(true)
  })
})
