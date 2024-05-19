<script setup>
const Caprichos_de_cafe = {img:"Caprichos_de_café.jpg"}
const Crema_de_cafe_chocolate_y_mascarpone = {img:"Crema_de_café_chocolate_y_mascarpone.jpg"}
</script>

<template>
    <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=Caprichos_de_cafe.img id="img_menu">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>Caprichos de café</h1>
            <p>Un postre que es un verdadero deleite para los sentidos. Imagina una base de bizcocho esponjoso, ligero como una pluma, impregnado con el aroma del café recién hecho. Entre las capas de bizcocho, se encuentra una confitura de albaricoque que aporta un dulzor frutal y una textura suavemente pegajosa. Coronando esta obra maestra, una crema de café rica y sedosa, con la cantidad justa de dulzura y un intenso sabor a café que se funde en la boca. Y para añadir la guinda final, una nuez crujiente que contrasta maravillosamente con la suavidad del resto del postre.<br><br>Cada bocado de Caprichos de Café es una experiencia en sí misma, un viaje a través de texturas y sabores que se complementan a la perfección, creando un final de comida que es tanto reconfortante como exquisitamente sofisticado.</p>
            <p id="precio">xxxx</p>
          </div>
          </div>
          <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=Crema_de_cafe_chocolate_y_mascarpone.img id="img_menu">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>crema de café chocolate y mascarpone</h1>
            <p>Crema de Café, Chocolate y Mascarpone: Imagina una capa de ganache de chocolate negro como base, rica y fundente, que sienta las bases de una experiencia sensorial única. Sobre ella, una crema suave y voluptuosa de mascarpone, batida con yemas de huevo y azúcar hasta alcanzar la perfección. El café se introduce sutilmente, entrelazándose con los otros sabores sin abrumar, aportando un toque de complejidad y profundidad.<br><br>La textura es cremosa, casi como un sueño, con el mascarpone aportando una suavidad que acaricia el paladar. El chocolate añade cuerpo y carácter, mientras que el café infunde cada cucharada con su calidez reconfortante. Es un postre que no solo satisface, sino que también inspira, con cada capa hablando de la pasión y el cuidado puesto en su creación. <br><br>Este postre es ideal para cerrar una comida especial o para darse un capricho en cualquier momento, prometiendo llevar a quien lo degusta a un viaje de sabores y texturas inolvidables.</p>
            <p id="precio">xxxx</p>
          </div>

          </div>
</template>