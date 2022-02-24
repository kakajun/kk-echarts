import Common from './Common.vue'
import prefix from '@/prefix'
Common.install = function (app) {
  app.component(prefix + Common.name, Common)
}
export default Common
