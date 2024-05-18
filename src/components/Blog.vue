<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
const imagen_1 = {img:"imagen_1.png"}
const imagen_2 = {img:"imagen_2.png"}
import {ref} from 'vue'
let p_1 = ref(false)
let p_2 = ref(false)
const publicacion_1 = () => {
  if( p_1.value ==false){
    p_1.value = true
      }
    else if(p_1.value==true){
        p_1.value = false
      }

    }

    const publicacion_2 = () => {
  if( p_2.value ==false){
    p_2.value = true
      }
    else if(p_2.value==true){
        p_2.value = false
      }

    }

</script>

<template>
    <Header/>

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=imagen_1.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #1</h1>
            <p type="button" @click="publicacion_1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus, incidunt aut amet iste totam eveniet nisi rerum viverra. Aliquam euism vitae in non proident. <a v-if="(p_1==true)">Aliquam euism vitae in non proident non proident. Aliquam euism vitae in non proident pro ident is just euism vitae. Aliquam eu non pro ident</a></p> 
        </div>
        </div>
    </div>    

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=imagen_2.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #2</h1>
            <p type="button" @click="publicacion_2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus, incidunt aut amet iste totam eveniet nisi rerum viverra. Aliquam euism vitae in non proident. <a v-if="(p_2==true)">Aliquam euism vitae in non proident non proident. Aliquam euism vitae in non proident pro ident is just euism vitae. Aliquam eu non pro ident</a></p> 
        </div>
        </div>
    </div>    

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
    
    }


</style>
