<script setup>

const Café_Mocha_Helado = { img: "Café_Mocha_Helado.webp" }
const frappucchino = { img: "frappucchino.webp" }

</script>

<template>
  <div id=producto class="row my-3">
    <div class="col-md-4">
      <img :src=frappucchino.img id="img_menu">
    </div>
    <div class="col-md-8" id="informacion">
      <h1>frappucchino</h1>
      <p>Es una delicia helada que combina la intensidad de un extracto de grano tostado con la suavidad de la leche,
        creando una armonía de sabores. Su textura es espesa y espumosa, ofreciendo un contraste refrescante al paladar.
        A menudo se endulza y se personaliza con una variedad de sabores, lo que lo convierte en una opción versátil
        para cualquier momento del día.</p>
      <p id="precio">xxxx</p>
    </div>

  </div>

  <div id=producto class="row my-3">
    <div class="col-md-4">
      <img :src=Café_Mocha_Helado.img id="img_menu">
    </div>
    <div class="col-md-8" id="informacion">
      <h1>café Mocha Helado</h1>
      <p>El café mocha helado es una exquisitez congelada que fusiona la fuerza de un extracto de café oscuro con la
        delicadeza de la leche fría, resultando en una sinfonía de gustos. Posee una consistencia densa y espumosa que
        brinda una sensación refrescante al degustarlo. Comúnmente se endulza y se personaliza con una diversidad de
        sabores, transformándolo en una bebida adaptable para disfrutar en cualquier instante.</p>
    </div>
    <p id="precio">xxxx</p>

  </div>

</template>