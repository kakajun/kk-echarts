import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import copy from 'rollup-plugin-cpy'
import VitePluginElementPlus from 'vite-plugin-element-plus'
const prefix = 'monaco-editor/esm/vs'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [
      vue(),
      //由于cdn不会被打包进dist目录,所以这里特殊copy一下,为什么cdn不放到pulic里面呢?因为我lib和option都不需要cdn
      copy([{ files: 'cdn', dest: './dist/cdn' }]),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        format: mode === 'development' ? 'esm' : 'cjs'
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        '@e': resolve('packages/echart'),
        '@ev': resolve('examples/views'),
        '@p': resolve('packages'),
        '@t': resolve('packages/toolComponent'),
        '@s': resolve('script')
      }
    },
    server: {
      port: 8088,
      host: '0.0.0.0' // 暴露内网ip
    },
    css: {
      preprocessorOptions: {
        scss: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            jsonWorker: [`${prefix}/language/json/json.worker`],
            cssWorker: [`${prefix}/language/css/css.worker`],
            htmlWorker: [`${prefix}/language/html/html.worker`],
            tsWorker: [`${prefix}/language/typescript/ts.worker`],
            editorWorker: [`${prefix}/editor/editor.worker`]
          }
        }
      }
    }
  }
})
