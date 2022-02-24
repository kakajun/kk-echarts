const hash = require('hash-sum')
const LRU = require('lru-cache')
const hljs = require('highlight.js')
const DomParser = require('dom-parser')

// markdown-it 插件
const emoji = require('markdown-it-emoji')
const anchor = require('markdown-it-anchor')
const toc = require('markdown-it-table-of-contents')

// 自定义块
const containers = require('./containers')

const md = require('markdown-it')({
  html: true,
  // 代码高亮
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) { }
    }

    return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
  // 使用 emoji 插件渲染 emoji
  .use(emoji)
  // 使用 anchor 插件为标题元素添加锚点
  .use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  })
  // 使用 table-of-contents 插件实现自动生成目录
  .use(toc, {
    includeLevel: [2, 3]
  })
  // 定义自定义的块容器
  .use(containers)

md.renderer.rules.table_open = function () {
  return '<table class="table">';
};
const cache = new LRU({ max: 1000 })

module.exports = function (src) {
  const isProd = process.env.NODE_ENV === 'production'

  const file = this.resourcePath
  const key = hash(file + src)
  const cached = cache.get(key)

  // 重新模式下构建时使用缓存以提高性能
  if (cached && (isProd || /\?vue/.test(this.resourceQuery))) {
    return cached
  }

  const html = md.render(src)
  const res = renderVueTemplate(html);
  cache.set(key, res)
  return res
}
var renderVueTemplate = function (html) {
  var parser = new DomParser()
  var dom = parser.parseFromString(html)
  var [style] = dom.getElementsByTagName('style')
  var [script] = dom.getElementsByTagName('script')
  var output = {
    style: style ? style.innerHTML : '',
    script: script ? script.innerHTML : ''
  }
  var reg = {
    style: /<style.*?<\/style>/gi,
    script: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
  }
  var result = `<template>\n <section>${html.replace(reg.style, '').replace(reg.script, '')}</section>\n</template>`
  if (output.style) {
    result += `<style>\n${output.style}\n</style>`
  }
  if (output.script) {
    result += `<script>\n${output.script}\n</script>`
  }
  return result
}
