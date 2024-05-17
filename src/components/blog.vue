<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
const publicacion_1 = {img:"publicacion_1.png"}
const publicacion_2 = {img:"publicacion_2.png"}

</script>

<template>
    <Header/>

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=publicacion_1.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #1</h1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus, incidunt aut amet iste totam eveniet nisi rerum.</P>
        </div>
        </div>
    </div>    

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=publicacion_2.img id="img_publicacion">
            <div id="text_info">
            <h1>titulo de publicacion #2</h1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate ab ea esse maiores ratione maxime enim eveniet? Accusantium distinctio quae possimus, incidunt aut amet iste totam eveniet nisi rerum.</P>
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