<script setup>
const cafe = {img:"cafe.jpg"}
  const cappucchino = {img:"cappucchino.jpg"}
</script>

<template>
    <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=cafe.img id="img">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>Café</h1>
            <p>El Café con Leche es la armonía perfecta entre la intensidad del espresso y la suavidad de la leche caliente. Cada sorbo ofrece un equilibrio exquisito, ideal para comenzar el día con energía o para disfrutar de una tarde de descanso. Es una bebida clásica que calienta el alma y reconforta el paladar.</p>
          </div>
          </div>
          <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=cappucchino.img id="img">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>cappucchino</h1>
            <p>El Cappuccino es una bebida elegante y equilibrada que combina la fuerza del espresso con la cremosidad de la leche al vapor y la suavidad de la espuma. Se caracteriza por su capa perfectamente aireada que corona el café, ofreciendo una textura que es un placer al paladar. Con cada sorbo, se descubre la rica profundidad del café, complementada por la dulzura sutil de la leche. Es una opción ideal para quienes buscan un toque de indulgencia en su rutina de café.</p>
          </div>

          </div>
</template>