import Linea from './Linea.vue'
import prefix from '@/prefix'
Linea.install = function (app) {
  app.component(prefix + Linea.name, Linea)
}
export default Linea
