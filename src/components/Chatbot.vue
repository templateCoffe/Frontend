<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const taza = {img:"taza.png"} 

</script>

<template>
  <div id="chat" class=" col-md-6 row">
    <div>
    <h1>pregunta</h1>
    <h1>pregunta</h1>
    <h1>pregunta</h1>
    </div>   
      <img :src=taza.img id="postaza_c">
  </div>
  <div>
    
  </div>
</template>

<style scoped>
  #chat{
    position: sticky;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem,1fr));
    text-align: center;
    margin: 50px;
    background-color: transparent;
    text-align: right;
    margin: 0 auto;
    
    
  }
  #chat h1{
    margin-top:12% ;
margin-bottom:-3% ;
  }
  #postaza_c{
    width: 100%;
    margin-left: -100px;
    height: 80%;
  }

 

  


</style>