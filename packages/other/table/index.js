import Table from './Table.vue'
import prefix from '@/prefix'
Table.install = function (app) {
  app.component(prefix + Table.name, Table)
}
export default Table
