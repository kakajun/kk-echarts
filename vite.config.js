import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import copy from 'rollup-plugin-cpy'
// import { loadEnv } from "vite";
// const CWD = process.cwd();
// import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import VitePluginElementPlus from 'vite-plugin-element-plus'
const prefix = 'monaco-editor/esm/vs'
// 环境变量
// const BASE_ENV_CONFIG = loadEnv("", CWD);
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [
      vue(),
      //由于cdn不会被打包进dist目录,所以这里特殊copy一下,为什么cdn不放到pulic里面呢?因为我lib和option都不需要cdn
      copy([{ files: 'cdn', dest: './dist/cdn' }]),
      // monacoEditorPlugin({
      //   publicPath: 'https://unpkg.com/vite-plugin-monaco-editor@1.0.5/cdn'
      // }),
      VitePluginElementPlus({
        // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
        // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
        // 的文档注释
        // useSource: true
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
