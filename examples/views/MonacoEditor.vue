<template>
  <div ref="container" style="height: calc(100% - 2.5rem)"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch, toRefs } from 'vue'
// Import monaco
// https://github.com/vitejs/vite/discussions/1791
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

const container = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor

interface Props {
  isDark?: boolean
  language?: string
  editorValue?: string
}
const props = withDefaults(defineProps<Props>(), {
  isDark: true,
  language: 'javascript'
})

const { language, editorValue, isDark } = toRefs(props)
const emit = defineEmits<(e: 'change', payload: any) => void>()
onMounted(() => {
  editor = monaco.editor.create(container.value!, {
    language: language.value,
    value: editorValue.value,
    theme: isDark ? 'vs-dark' : 'vs'
  })

  emit('change', editorValue)
  editor.onDidChangeModelContent(() => {
    if (editorValue.value !== editor.getValue()!) {
      emit('change', editorValue)
    }
  })
})

watch(isDark, value => {
  editor.updateOptions({
    theme: value ? 'vs-dark' : 'vs'
  })
})

onUnmounted(() => {
  editor?.dispose()
})
</script>
