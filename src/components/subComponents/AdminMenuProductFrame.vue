<template>
  <div id="producto" class="row my-3">
    
    <div class="col-md-1 row " id="informacion_am_id">
      <b>{{ product.id }}</b>
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
}

#informacion_am_id{
  margin-top: 20px;
  font-size: 20px;
}
</style>
