<template>
  <b-button class="rounded-circle" variant="primary" @click="subirArchivo">
    <b-icon font-scale="2" icon="cloud-upload"></b-icon>
    <input
      type="file"
      id="subir"
      ref="archivo"
      @change="manejarArchivo"
      hidden
    />
  </b-button>
</template>

<script>
export default {
  data() {
    return {
      archivo: "",
    };
  },
  methods: {
    subirArchivo() {
      document.getElementById("subir").click();
    },
    async manejarArchivo() {
      let formData = new FormData();

      this.archivo = this.$refs.archivo.files[0];
      console.log(this.archivo);
      formData.append("archivo", this.archivo);

       await this.$axios.$post("/subirArchivo",formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
  },
};
</script>

<style>
</style>