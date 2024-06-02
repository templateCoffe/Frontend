<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Chatbot from "./Chatbot.vue"
const imagen_1 = {img:"imagen_1.png"}
const imagen_2 = {img:"imagen_2.png"}

</script>

<template>
    <Header/>

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 cabecera" id="box">
            <h1 >Template Blog</h1>
            <p>Actualizaciones de interes sobre temas de interes</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=imagen_1.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #1</h1>
            <router-link to="/Publicacion" class="nav-link"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus...</p></router-link> 
        </div>
        </div>
    </div>    

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=imagen_2.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus...</p> 
        </div>
        </div>
    </div>    
    <Chatbot/>
    <Footer/>
</template>

<style>

    #img_publicacion{
        width: 100%;
        
    }
    #box{
        margin: 0 auto;
    }
    #text_info{
        
        background-color: #E5E6E4;
        padding: 2px;
        color:#847577;
    
    }
    .cabecera{
      text-align: center;
      color:#847577;
      padding: -10px;
    }

    .cabecera p{
      margin-bottom: -5px;
    }
    

</style>
