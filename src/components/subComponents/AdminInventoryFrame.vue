<template>
  <div id="producto" class="row my-3">
    <div class="row" id="informacion">
      <div class="col-md-1 row" id="informacion_ai_id">
        <p>{{ item.id }}</p>
      </div>
      <div class="col">
        <a @click="toModificate(item.id)" class="name"><p>{{ item.name }}</p></a>
        
      </div>
      <div class="col">
        <a @click="toModificate(item.id)" class="name"><p>{{ item.brand }}</p></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
