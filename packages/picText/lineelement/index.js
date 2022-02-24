import Lineelement from './Lineelement.vue'
import prefix from '@/prefix'
Lineelement.install = function (app) {
  app.component(prefix + Lineelement.name, Lineelement)
}
export default Lineelement
