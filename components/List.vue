<template>
  <div class="lista">
    <ul>
      <li v-for="(mensaje, index) in mensajes" :key="'a' + index" class="m-2">
        <AudioPlayer :sources='["audios/" + mensaje.path + ".wav"]' class="player" v-if="mensaje.type == 'audio'" />
        <p v-if="mensaje.type =='text'">{{ mensaje.path }}</p>
        <a :href="ruta + mensaje.path" :download='ruta + mensaje.path' v-if="mensaje.type == 'archivo'">{{ mensaje.path }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensajes: [],
      ruta: "/archivos/"
    };
  },
  methods: {
    async actualizarLista() {
      // this.audios = new Array();
      // let audio = await this.$axios.$get("/getAudios");

      // for (let index = 0; index < audio.length; index++) {
      //   this.audios.push("audios/" + audio[index] + ".wav");
      // }

      // this.mensajes = await this.$axios.$get("/getTexto");

      this.mensajes = await this.$axios.$get("/getAll")
    },
  },
  mounted() {
    this.actualizarLista();
  },
};
</script>

<style>
.lista {
  position: absolute;
  bottom: 80px;
  right: 100px;
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
.player {
  border: 1px solid black;
  border-radius: 50px;
  width: 500px;
}
</style>