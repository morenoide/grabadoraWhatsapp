<template>
  <div class="row">
    <div class="col-12" v-show="!grabando">
      <b-button class="rounded-circle" variant="primary" @click="grabar">
        <b-icon font-scale="2" icon="mic-fill"></b-icon>
      </b-button>
    </div>
    <div class="col-12" v-show="grabando">
      <div class="row">
        <div class="p-0 text-right">
          <b-button class="rounded-circle" variant="danger" @click="cancelar"
            ><b-icon font-scale="1" icon="x"></b-icon
          ></b-button>
        </div>
        <AudioContador ref="contador" class="contador p-0 mt-2" />
        <div class="p-0 text-left">
          <b-button class="rounded-circle" variant="success" @click="enviar"
            ><b-icon font-scale="1" icon="caret-right"></b-icon
          ></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contador {
  width: 100px;
}
</style>

<script>
import Recorder from "recorderjs";
export default {
  data() {
    return {
      grabando: false,
      boton: {
        semaforo: {
          type: Boolean,
          default: true,
        },
        color: "primary",
      },
      inicio: true,

      //Elementos de la libreria
      audio_context: null,
      recorder: null,
    };
  },
  methods: {
    async grabar() {
      if (this.inicio) await this.init()
      this.grabando = true;
      this.recorder && this.recorder.record();
      console.log("Grabando...");

      this.$refs.contador.contar();
      this.$emit('grabar')
    },
    cancelar() {
      this.grabando = false;
      this.$refs.contador.pausar();

      this.recorder && this.recorder.stop();
      console.log("Has dejado de grabar.");

      try {
        this.recorder.clear();
      } catch (e) {
        console.log(e);
      }
      this.$emit('parar')
    },
    enviar() {
      this.grabando = false;
      this.$refs.contador.pausar();

      this.recorder && this.recorder.stop();
      console.log("Has dejado de grabar.");

      //crear WAV para descargar el audio blob
      this.createDownloadLink();
      try {
        this.recorder.clear();
      } catch (e) {
        console.log(e);
      }
    },
    stop() {
      this.recorder && this.recorder.stop();
      console.log("Has dejado de grabar.");

      //crear WAV para descargar el audio blob
      this.createDownloadLink();
      try {
        this.recorder.clear();
      } catch (e) {
        console.log(e);
      }
    },
    //Se inicia la aplicación
    init() {
      try {
        // webkit shim (Firefox compability)
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia =
          navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        this.audio_context = new AudioContext();
        console.log("Audio context set up.");
        console.log(
          "navigator.getUserMedia " +
            (navigator.getUserMedia ? "available." : "not present!")
        );
        this.inicio = false
      } catch (e) {
        alert("No web audio support in this browser!");
      }

      navigator.getUserMedia(
        { audio: true },
        this.startUserMedia,
        function (e) {
          console.log("No live audio input: " + e);
        }
      );
    },
    startUserMedia(stream) {
      let input = this.audio_context.createMediaStreamSource(stream);
      console.log("Media stream created.");

      this.recorder = new Recorder(input);
      console.log("Recorder initialised.");
    },
    createDownloadLink() {
      this.recorder &&
        this.recorder.exportWAV((blob) => {
          //this.$emit("nuevo-audio", URL.createObjectURL(blob));

          let audio = new File([blob], "Audio");
          console.log(URL.createObjectURL(blob));
          this.$emit("nuevo-audio", audio);
        });
    },
  },
};
</script>