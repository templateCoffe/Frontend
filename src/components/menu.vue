<script setup>
import Header from './Header.vue';
  import Footer from './Footer.vue';
  const cafe = {img:"cafe.jpg"}
  const cappucchino = {img:"cappucchino.jpg"}
  const frappucchino = {img:"frappucchino.webp"}
  const Café_Mocha_Helado = {img:"Café_Mocha_Helado.webp"}
</script>
<script>
export default {
  data() {
    return {
         current: 1,
         pagesize: 5,
      }
  },

  computed: {
      indexstart() {
         return (this.current - 1) * this.pagesize;
      },
      indexend() {
         return this.indexstart + this.pagesize;
      },
      paginated() {
         return this.categories.slice(this.indexstart, this.indexend);
      },
   },
   methods: {
    prev() {
         this.current--;
         if (this.current < 1){
            this.current = 3
         }
      },
      next() {
         this.current++;
         if(this.current > 3){
            this.current = 1
         }
      }
   }

   }

</script>


<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id = "cabecera">

              <a><button type="button" class="TableButtons"> Bebidas Calientes  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas Frias  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas con Licor  </button></a>
              <a><button type="button" class="TableButtons"> Postres artesanales  </button></a>
              <a><button type="button" class="TableButtons">Especialidades</button></a>
        </div>
        <div id = cuerpo >
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

          <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=frappucchino.img id="img">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>frappucchino</h1>
            <p>Es una delicia helada que combina la intensidad de un extracto de grano tostado con la suavidad de la leche, creando una armonía de sabores. Su textura es espesa y espumosa, ofreciendo un contraste refrescante al paladar. A menudo se endulza y se personaliza con una variedad de sabores, lo que lo convierte en una opción versátil para cualquier momento del día.</p>
          </div>

          </div>

          <div id = producto class="row my-3">
            <div class="col-md-4">
            <img :src=Café_Mocha_Helado.img id="img">
          </div>
          <div class="col-md-8" id="informacion">
            <h1>café Mocha Helado</h1>
            <p>El café mocha helado es una exquisitez congelada que fusiona la fuerza de un extracto de café oscuro con la delicadeza de la leche fría, resultando en una sinfonía de gustos. Posee una consistencia densa y espumosa que brinda una sensación refrescante al degustarlo. Comúnmente se endulza y se personaliza con una diversidad de sabores, transformándolo en una bebida adaptable para disfrutar en cualquier instante.</p>
          </div>

          </div>


        </div>
      </div>
  </div>
<Footer />
</template>

<style>
  #cabecera {    
padding: 19px;
background-color: #A6A2A2 ;
width: 90%;
margin: 0px auto;
}
#cuerpo {
background-color: #E5E6E4;    
border:3px solid #A6A2A2;
padding: 19px;
width: 90%;
margin: 0px auto;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
}
#producto {
  position:relative;
background-color: #FBFBF2;
padding: 20px;
width: 100%;
margin: 0px auto;
border-radius: 20px;
}

  .TableButtons {
display: inline-block;
color: #FBFBF2;
font-size: 20px;
background-color: transparent;
margin-left: 50px;
margin-right: 50px;
border: none;
text-align: center;
cursor: pointer;
}

.TableButtons:hover {
transition: 0ms;
transform: translateX(0px);
background-color: #E5E6E4;
color:  #A6A2A2;
border: none;
}
#img{
  width: 100%; 
}
#informacion h1{
  text-align: center;
}
#informacion p{
  text-align: left;
}
</style>