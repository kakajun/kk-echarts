import Funnel from './Funnel.vue'
import prefix from '@/prefix'
Funnel.install = function (app) {
  app.component(prefix + Funnel.name, Funnel)
}
export default Funnel
