import Map from './Map.vue'
import prefix from '@/prefix'
Map.install = function (app) {
  app.component(prefix + Map.name, Map)
}
export default Map
