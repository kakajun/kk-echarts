import Wordcloud from './wordcloud.vue'
import prefix from '@/prefix'
Wordcloud.install = function (app) {
  app.component(prefix + Wordcloud.name, Wordcloud)
}
export default Wordcloud
