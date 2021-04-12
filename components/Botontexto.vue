<template>
  <b-button class="rounded-circle" variant="primary" @click="enviar">
    <b-icon font-scale="2" icon="box-arrow-in-right"></b-icon>
  </b-button>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
     enviar() {
        this.$emit('enviarTexto')
      },
  }
};
</script>

<style>
</style>