<template>
  <div id="producto" class="row my-3">
    
    <div class="col-md-1 text-center">
      <p>{{ product.id }}</p>
    </div>
    <div class="col-md-8 text-right" id="informacion">
      <a @click="toModificate(product.id)" class="name">
        <p>{{ product.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    toModificate(id) {
      this.$router.push({name: "Modificar_menu", params: { id: id } });
      console.log(id);
    },
  },
};
</script>

<style>
button {
  border: 0px;
  background-color: #fbfbf2;
}
input {
  width: 30px;
  height: 30px;
}

.name {
  font-size: 40px;
  text-decoration: none;
  color: gray;
  cursor: pointer;
}
</style>
