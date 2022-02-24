import Liquidfill from './Liquidfill.vue'
import prefix from '@/prefix'
Liquidfill.install = function (app) {
  app.component(prefix + Liquidfill.name, Liquidfill)
}
export default Liquidfill
