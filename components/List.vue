<template>
  <div class="lista">
    <ul>
      <li
        v-for="(mensaje, index) in mensajes"
        :key="'a' + index"
        class="m-2 row"
      >
        <div class="col-10">
          <AudioPlayer
            :sources="['audios/' + mensaje.path + '.wav']"
            class="player"
            v-if="mensaje.type == 'audio'"
          />
          <p class="texto text-center" v-if="mensaje.type == 'text'">
            {{ mensaje.path }}
          </p>
          <p class="texto text-center" v-if="mensaje.type == 'archivo'">
            Archivo:
            <a :href="ruta + mensaje.path" :download="ruta + mensaje.path">{{
              mensaje.path
            }}</a>
          </p>
        </div>
        <b-button class="cancelar" variant="danger" @click="borrar(index)"
          ><b-icon-x></b-icon-x
        ></b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensajes: [],
      ruta: "/archivos/",
    };
  },
  methods: {
    async actualizarLista() {
      this.mensajes = await this.$axios.$get("/getAll");
    },
    borrar(index) {
      let mensaje = {
        type: this.mensajes[index].type,
        id: this.mensajes[index].id,
      };

      this.$axios.$post("/BorrarDatos", mensaje);

      this.actualizarLista();
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
  bottom: 15px;
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
.texto {
  width: 500px;
  border: 1px solid black;
  padding: 15px;
  border-radius: 50px;
}
.cancelar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 5px;
}
</style>