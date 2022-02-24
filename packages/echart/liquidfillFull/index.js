import LiquidfillFull from './LiquidfillFull.vue'
import prefix from '@/prefix'
LiquidfillFull.install = function (app) {
  app.component(prefix + LiquidfillFull.name, LiquidfillFull)
}
export default LiquidfillFull
