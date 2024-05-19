<script setup>
const cortado = {img:"cortado.jpg"}
const affogato = {img:"affogato.jpg"}
</script>

<template>
    <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=cortado.img id="img_menu">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>cortado</h1>
            <p> Un pequeño pero poderoso deleite para los amantes del café. El Cortado comienza con un espresso fuerte y robusto, que constituye la base de esta bebida. A este se le añade una cantidad casi igual de leche caliente y espumosa, que se corta, de ahí su nombre, para suavizar la intensidad del café sin opacar su sabor.<br><br>La presentación es sencilla pero elegante, servido en una taza pequeña que permite que los sabores se concentren y se complementen mutuamente. El resultado es una bebida que ofrece la potencia del espresso y la cremosidad de la leche en perfecta armonía, ideal para aquellos que buscan disfrutar del café en su expresión más pura y sin excesos</p>
            <p id="precio">xxxx</p>
          </div>
          </div>
          <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=affogato.img id="img_menu">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>affogato</h1>
            <p>Un postre que es un espectáculo tanto para la vista como para el paladar. Imagina una bola de helado de vainilla suave y cremosa, servida en un vaso transparente y “ahogada” con un chorro de espresso caliente. El calor del café se encuentra con el frío del helado, creando un contraste de temperaturas que deleita los sentidos. A medida que el espresso se mezcla con el helado, se forma una deliciosa alquimia de sabores y texturas.<br><br>El Affogato es sencillo pero sofisticado, ofreciendo una experiencia indulgente que satisface tanto como postre como bebida. Es una opción popular para aquellos que buscan un placer satisfactorio pero sencillo, y es perfecto para las sobremesas de verano o como un capricho dulce en cualquier momento.</p>
            <p id="precio">xxxx</p>
          </div>

          </div>
</template>