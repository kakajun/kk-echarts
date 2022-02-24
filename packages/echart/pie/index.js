import Pie from './Pie.vue'
import prefix from '@/prefix'
Pie.install = function (app) {
  app.component(prefix + Pie.name, Pie)
}
export default Pie
