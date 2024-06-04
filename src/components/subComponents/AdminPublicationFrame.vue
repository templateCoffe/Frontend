<template>
  <div id="producto_ab" class="row my-3 ">
    
    <div class="col-md-1 row " id="informacion_ab_id">
      <b>{{ post.id }}</b>
    </div>
    <div class="col-md-8">
      <a @click="toModificate(post.id)" class="name">
        <p>{{ post.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],

  methods: {
    toModificate(id) {
      this.$router.push({name: "Modificar_blog", params: { id: id } });
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

#producto_ab {
    background-color: #FBFBF2;
    padding: 20px;
    width: 100%;
    margin: 0px auto;
    border-radius: 20px;
    text-align: left;
    }

#informacion_ab_id{
  margin-top: 20px;
  font-size: 20px;
}
</style>
