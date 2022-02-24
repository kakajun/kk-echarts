import Iframe from './Iframe.vue'
import prefix from '@/prefix'
Iframe.install = function (app) {
  app.component(prefix + Iframe.name, Iframe)
}
export default Iframe
