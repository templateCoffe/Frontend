<template>
  <div id=producto class="row my-3">
      <div class="col-md-2 text-center align-self-center">
        <input type="checkbox" name="toDelete">
      </div>
      <div class="col-md-8 text-right" id="informacion">
          <h1>{{product.name}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>
button {
  border: 0px;
  background-color: #fbfbf2;
}
input{
  width: 30px;
  height: 30px;
}
</style>
