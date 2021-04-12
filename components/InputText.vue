<template>
  <div class="">
    <b-input
      placeholder="Escribe un mensaje aquí"
      class="mensajeTexto"
      v-model="texto"
      @keyup.enter="enviarTexto"
    ></b-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    async enviarTexto() {
      if (this.texto.length > 0) {
        this.$emit("textoEnviado");
        console.log(this.texto);
        await this.$axios.$post("/newTexto", { texto : this.texto });
        this.texto = "";
      }
    },
  },
  watch: {
    texto: function () {
      if (this.texto.length <= 0) {
        this.$emit("parado");
      } else if (this.texto.length == 1) {
        console.log("escribiendo");
        this.$emit("escribiendo");
      }
    },
  },
};
</script>

<style>
.mensajeTexto {
  border-radius: 50px;
}
</style>