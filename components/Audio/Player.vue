<template>
  <div>
    <b-button @click="pausarAudio" variant="danger" pill v-if="estadoBoton">
      <b-icon icon="pause" font-scale="3"></b-icon>
    </b-button>
    <b-button @click="empezarAudio" variant="success" pill v-else>
      <b-icon icon="play" font-scale="3"></b-icon>
    </b-button>
    <label>{{ formatoTiempo(seek) }}</label>
    <b-form-input
      type="range"
      class="form-range w-50 pt-2"
      min="0"
      :max="duration"
      step="0.1"
      v-model="seek"
      @change="actualizarPosicion"
      @input="pausarRange"
      @end.native="prueba"
    />
    <label>{{ formatoTiempo(duration) }}</label>
    <a :download="audio" :href="audio" class="pl-3"
      ><b-button pill variant="primary">
        <b-icon-download></b-icon-download> </b-button
    ></a>
  </div>
</template>

<script>
import VueHowler from "vue-howler";

export default {
  mixins: [VueHowler],
  data() {
    return {
      //True: Play, False: Stop; Visualización del botón
      estadoBoton: false,
      //Comprobar si ya está pausado el Audio no volverlo a hacer
      semaforo: true,
      //Audio
      audio: this.sources[0],
    };
  },
  methods: {
    empezarAudio() {
      this.play();
      this.estadoBoton = true;
    },
    pausarAudio() {
      this.pause();
      this.estadoBoton = false;
    },
    actualizarPosicion() {
      this.seek = parseFloat(this.seek);
      this.setSeek(this.seek);
      if (this.estadoBoton) {
        this.play();
      }
      this.semaforo = true;
      console.log("Posicion Actualizada");
    },
    pausarRange() {
      if (this.estadoBoton && this.semaforo) {
        this.pause();
        this.semaforo = false;
        console.log("pausa");
      }

      console.log("cambio");
    },
    formatoTiempo(tiempo) {
      let segundos = Math.round(tiempo);

      var minute = Math.floor((segundos / 60) % 60);
      minute = minute < 10 ? "0" + minute : minute;
      var second = segundos % 60;
      second = second < 10 ? "0" + second : second;
      return minute + ":" + second;
    },
  },
  watch: {
    seek: function () {
      if (this.progress == 0 && this.playing == false) {
        this.pausarAudio();
        console.log("Audio terminado");
      }
    },
  },
};
</script>

<style>
</style>

