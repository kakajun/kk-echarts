import { version } from '../package.json'
import options from './components-option.js'

const install = app => {
  for (const obj in options) {
    app.component(obj, options[obj])
  }
}

const obj = {
  version,
  install
}
// 这里做个合并只是为了能够支持按需引入,不影响app.use
Object.assign(obj, options)
export default obj
