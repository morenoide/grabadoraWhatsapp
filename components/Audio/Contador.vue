<template>
  <div class="text-center">
    <p>
      <b-icon icon="record-fill" variant="danger"></b-icon>
      <span v-if="minutos < 10">0{{ minutos }}</span>
      <span v-else>{{ minutos }}</span>
      :
      <span v-if="segundos < 10">0{{ segundos }}</span>
      <span v-else>{{ segundos }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minutos: 0,
      segundos: 0,
      contador: null,
    };
  },
  methods: {
    contar() {
        this.minutos = 0;
        this.segundos = 0;

        this.contador = setInterval(() => {
          this.segundos += 1;
          if (this.segundos >= 60) {
            this.segundos = 0;
            this.minutos += 1;
          }
        }, 1000);
    },
    pausar() {
      clearInterval(this.contador)
    }
  },
};
</script>
<style>
</style>