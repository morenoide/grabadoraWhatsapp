import Vue from 'vue'

const components = {
  BotonArchivos: () => import('../..\\components\\BotonArchivos.vue' /* webpackChunkName: "components/boton-archivos" */).then(c => c.default || c),
  Botontexto: () => import('../..\\components\\Botontexto.vue' /* webpackChunkName: "components/botontexto" */).then(c => c.default || c),
  InputText: () => import('../..\\components\\InputText.vue' /* webpackChunkName: "components/input-text" */).then(c => c.default || c),
  List: () => import('../..\\components\\List.vue' /* webpackChunkName: "components/list" */).then(c => c.default || c),
  AudioContador: () => import('../..\\components\\Audio\\Contador.vue' /* webpackChunkName: "components/audio-contador" */).then(c => c.default || c),
  AudioPlayer: () => import('../..\\components\\Audio\\Player.vue' /* webpackChunkName: "components/audio-player" */).then(c => c.default || c),
  AudioRecorder: () => import('../..\\components\\Audio\\Recorder.vue' /* webpackChunkName: "components/audio-recorder" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
