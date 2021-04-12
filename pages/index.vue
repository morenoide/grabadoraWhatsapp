<template>
  <div>
    <b-button variant="primary" @click="activar">Activar App</b-button>
    <List ref="actualizar" />
    <div class="row fixed-bottom bg-secondary cajaHablar pt-4 pb-2">
      <div class="col-6 col-md-8">
        <InputText
          class="myTexto ml-2"
          @escribiendo="escribiendo"
          @parado="parado"
          @textoEnviado="actualizarLista"
          ref="enviarTexto"
        />
      </div>
      <div class="col-4 col-md-2">
        <AudioRecorder
          @nuevo-audio="enviarAudio"
          v-show="!escribir"
          @grabar="grabarRecorder"
          @parar="pararRecorder"
          ref="activacion"
        />
        <Botontexto v-show="escribir" @enviarTexto="enviarTexto" />
        
      </div>
      <div class="col-2">
        <BotonArchivos />
      </div>
      
    </div>
  </div>
</template>

<script>
import BotonArchivos from "../components/BotonArchivos.vue";
export default {
  components: { BotonArchivos },
  data() {
    return {
      escribir: false,
      grabando: false,
    };
  },
  methods: {
    async enviarAudio(file) {
      let formData = new FormData();

      formData.append("audioFile", file);
      console.log(file);

      this.actualizarLista();
    },
    escribiendo() {
      if (!this.grabando) this.escribir = true;
    },
    parado() {
      if (!this.grabando) this.escribir = false;
    },
    grabarRecorder() {
      this.grabando = true;
    },
    pararRecorder() {
      this.grabando = false;
    },
    activar() {
      this.$refs.activacion.init();
    },
    actualizarLista() {
      this.$refs.actualizar.actualizarLista();
    },
    enviarTexto() {
      this.$refs.enviarTexto.enviarTexto();
    },
  },
};
</script>

<style>
.cajaHablar {
  height: 80px;
}
</style>