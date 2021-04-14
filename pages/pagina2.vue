<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <mdb-btn color="primary" rounded>Primary rounded button</mdb-btn>
  </div>
</template>

<script>
    import { mdbBtn } from 'mdbvue';
    export default {
        name: 'ButtonPage',
        components: {
            mdbBtn
        }
    }
</script>

<style>
.spinner-border {
  height: 300px;
  width: 300px;
  margin-top: 30%;
}
</style>