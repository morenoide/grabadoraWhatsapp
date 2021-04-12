export { default as BotonArchivos } from '../..\\components\\BotonArchivos.vue'
export { default as Botontexto } from '../..\\components\\Botontexto.vue'
export { default as InputText } from '../..\\components\\InputText.vue'
export { default as List } from '../..\\components\\List.vue'
export { default as AudioContador } from '../..\\components\\Audio\\Contador.vue'
export { default as AudioPlayer } from '../..\\components\\Audio\\Player.vue'
export { default as AudioRecorder } from '../..\\components\\Audio\\Recorder.vue'

export const LazyBotonArchivos = import('../..\\components\\BotonArchivos.vue' /* webpackChunkName: "components/boton-archivos" */).then(c => c.default || c)
export const LazyBotontexto = import('../..\\components\\Botontexto.vue' /* webpackChunkName: "components/botontexto" */).then(c => c.default || c)
export const LazyInputText = import('../..\\components\\InputText.vue' /* webpackChunkName: "components/input-text" */).then(c => c.default || c)
export const LazyList = import('../..\\components\\List.vue' /* webpackChunkName: "components/list" */).then(c => c.default || c)
export const LazyAudioContador = import('../..\\components\\Audio\\Contador.vue' /* webpackChunkName: "components/audio-contador" */).then(c => c.default || c)
export const LazyAudioPlayer = import('../..\\components\\Audio\\Player.vue' /* webpackChunkName: "components/audio-player" */).then(c => c.default || c)
export const LazyAudioRecorder = import('../..\\components\\Audio\\Recorder.vue' /* webpackChunkName: "components/audio-recorder" */).then(c => c.default || c)
