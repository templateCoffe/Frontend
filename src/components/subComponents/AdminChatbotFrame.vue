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

#cabecera_ac {    
    padding: 19px;
    background-color: #A6A2A2 ;
    width: 90%;
    margin: 0px auto;
    text-align: center;
    }

    #cuerpo_ac {
    background-color: #E5E6E4;    
    border:3px solid #A6A2A2;
    padding: 19px;
    width: 90%;
    margin: 0px auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    }

  #g_botones_ac {
  padding: 19px;
  width: 90%;
  text-align: center;
  margin: 0px auto;
}


</style>
