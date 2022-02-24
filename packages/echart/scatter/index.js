import Scatter from './Scatter.vue'
import prefix from '@/prefix'
Scatter.install = function (app) {
  app.component(prefix + Scatter.name, Scatter)
}
export default Scatter
