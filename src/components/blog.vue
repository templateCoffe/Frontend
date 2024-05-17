<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
const publicacion_1 = {img:"publicacion_1.png"}

</script>

<template>
    <Header/>

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=publicacion_1.img id="img_publicacion">
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

</style>