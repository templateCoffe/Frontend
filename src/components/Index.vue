<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
const sobre_nosotros={img:"sobre_nosotros.png"}
const nuestro_cafe={img:"nuestro_cafe.png"}
const nuestros_servicios={img:"nuestros_servicios.png"}
const nuestras_especialidades={img:"nuestras_especialidades.png"}
</script>

<template>
    <Header />
   <div class="row my-3" id="edit_imagen">

        <div class="col-md-4"> <img :src="sobre_nosotros.img"> </div>
        <div class="col-md-4"> <img :src="nuestro_cafe.img"> </div>
        <div class="col-md-4"> <img :src="nuestros_servicios.img"></div>
        <div class="col-md-12 my-5"> <img :src="nuestras_especialidades.img"></div>
   </div>
    <Footer />
</template>

<style>

#edit_imagen{
    
    text-align: center;
    margin: 0px auto;
}

#edit_imagen img{

    width: 100%;
}

</style>