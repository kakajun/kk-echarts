import Gauge from './Gauge.vue'
import prefix from '@/prefix'
Gauge.install = function (app) {
  app.component(prefix + Gauge.name, Gauge)
}
export default Gauge
