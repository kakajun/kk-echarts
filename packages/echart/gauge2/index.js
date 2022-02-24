import Gauge2 from './Gauge2.vue'
import prefix from '@/prefix'
Gauge2.install = function (app) {
  app.component(prefix + Gauge2.name, Gauge2)
}
export default Gauge2
