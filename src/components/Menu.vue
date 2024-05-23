<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import MenuProductFrame from './subComponents/MenuProductFrame.vue';
</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="cabecera">

        <a><button type="button" @click="filter = 'hot_drink'; getProducts()" class="TableButtons"> Bebidas Calientes
          </button></a>
        <a><button type="button" @click="filter = 'cold_drink'; getProducts()" class="TableButtons"> Bebidas Frias
          </button></a>
        <a><button type="button" @click="filter = 'liquor_drink'; getProducts()" class="TableButtons"> Bebidas con Licor
          </button></a>
        <a><button type="button" @click="filter = 'handmade_dessert'; getProducts()" class="TableButtons"> Postres
            artesanales </button></a>
        <a><button type="button" @click="filter = 'specialties'; getProducts()"
            class="TableButtons">Especialidades</button></a>
      </div>
      <div id=cuerpo>
        <MenuProductFrame v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from 'axios';

export default {
  name: 'Menu',
  components: {
    MenuProductFrame,
  },

  data() {
    return {
      products: [],
      filter: 'hot_drink',
    };
  },

  methods: {
    getProducts() {
      axios.get('http://127.0.0.1:8001/menu/product?product_type=' + this.filter)//ajustar la url en el futuro
        .then((res) => {

          console.log(res.data.data);
          if (res.data.data) {
            this.products = res.data.data;
            console.log(this.products[0].id);
          }

        }).catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getProducts();
  }

}
</script>