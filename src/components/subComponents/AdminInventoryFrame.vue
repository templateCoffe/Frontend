<template>
  <div id="producto" class="row my-3">
    <div class="row" id="informacion">
      <div class="col-md-1 row" id="informacion_ai_id">
        <b>{{ item.id }}</b>
      </div>
      <div class="col">
        <a @click="toModificate(item.id)" class="name"><p>{{ item.name }}</p></a>
        
      </div>
      <div class="col">
        <a v-if="item.brand == 'for_cleaning'" @click="toModificate(item.id)" class="name"><p> Limpieza </p></a>
        <a v-if="item.brand == 'others'" @click="toModificate(item.id)" class="name"><p> Otros </p></a>
        <a v-if="item.brand == 'consumible'" @click="toModificate(item.id)" class="name"><p> Consumible </p></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],

  methods: {
    toModificate(id) {
      console.log(id);
      this.$router.push({ name: "Modificar_item", params: { id: id } });
    },
    
  },
  mounted () {
    console.log(this.item);
  }
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

#informacion_ai_id{
  margin-top: 20px;
  font-size: 20px;
}
</style>
