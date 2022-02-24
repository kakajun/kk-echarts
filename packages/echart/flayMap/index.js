import FlayMap from './FlayMap.vue'
import prefix from '@/prefix'
FlayMap.install = function (app) {
  app.component(prefix + FlayMap.name, FlayMap)
}
export default FlayMap
