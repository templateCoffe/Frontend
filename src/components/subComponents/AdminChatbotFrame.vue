<template>
  <div id="producto" class="row my-3">
    
    <div class="col-md-1 text-center">
      <p>{{ question.id }}</p>
    </div>
    <div class="col-md-8 text-right" id="informacion">
      <a @click="toModificate(question.id)" class="name">
        <p>{{ question.question }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],

  methods: {
    toModificate(id) {
      this.$router.push({name: "Modificar_chatbot", params: { id: id } });
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
</style>
