import Tabs from './Tabs.vue'
import prefix from '@/prefix'
Tabs.install = function (app) {
  app.component(prefix + Tabs.name, Tabs)
}
export default Tabs
