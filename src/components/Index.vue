<script setup>
import Chatbot from "./Chatbot.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const sobre_nosotros = { img: "sobre_nosotros.png" };
const nuestro_cafe = { img: "nuestro_cafe.png" };
const nuestros_servicios = { img: "nuestros_servicios.png" };
const nuestras_especialidades = { img: "nuestras_especialidades.png" };
</script>

<template>
  <Header />

  <div class="row my-3" id="edit_imagen">
    <div class="col-md-4">
      <img :src="sobre_nosotros.img" @click="$router.push('/Publicacion/1')" />
    </div>
    <div class="col-md-4">
      <img :src="nuestro_cafe.img" @click="$router.push('/Publicacion/2')" />
    </div>
    <div class="col-md-4">
      <img
        :src="nuestros_servicios.img"
        @click="$router.push('/Publicacion/3')"
      />
    </div>
    <div class="col-md-12 my-5">
      <img
        :src="nuestras_especialidades.img"
        @click="$router.push('/Publicacion/4')"
      />
    </div>
  </div>
  <Chatbot />
  <Footer />
</template>

<style>
#edit_imagen {
  text-align: center;
  margin: 0px auto;
}

#edit_imagen img {
  width: 100%;
  cursor: pointer;
}
</style>
