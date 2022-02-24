import Radar from './Radar.vue'
import prefix from '@/prefix'
Radar.install = function (app) {
  app.component(prefix + Radar.name, Radar)
}
export default Radar
