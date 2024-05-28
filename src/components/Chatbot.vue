<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const taza = {img:"taza.png"} 
const texto_taza = {img:"texto_taza.png"}

</script>


<template>

    <Header/>

    
          <div id = chat class="row my-3">
          <div class="col-md-2" id="preguntas">
            <img :src=texto_taza.img >
            <h1>pregunta</h1>
            <h1>pregunta</h1>
            <h1>pregunta</h1>
            
          </div>
          <div class="col-md-5" id="img_taza">
            <img :src=taza.img>
          </div>
          </div>
</template>

<style>

    #chat{
        
       margin: 0 auto;
       text-align: center
        
       
    }

    #img_taza{
      
        
    }

    #img_taza img{
      width: 60%;
      margin-top:100px;
      margin-left: -50px
      
    }

    #preguntas img{
        width: 150%;

    }
    #preguntas h1{
      text-align: right;
    }

</style>