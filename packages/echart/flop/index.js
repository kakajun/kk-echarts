import Flop from './Flop.vue'
import prefix from '@/prefix'
Flop.install = function (app) {
  app.component(prefix + Flop.name, Flop)
}
export default Flop
