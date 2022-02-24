import FontSet from './FontSet.vue'
import prefix from '@/prefix'
FontSet.install = function (app) {
  app.component(prefix + FontSet.name, FontSet)
}
export default FontSet
