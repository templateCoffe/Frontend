<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import bebidas_frias from './subComponents/ComponentsMenu/bebidas_frias.vue';
import bebidas_calientes from './subComponents/ComponentsMenu/bebidas_calientes.vue';
import bebidas_con_licor from './subComponents/ComponentsMenu/bebidas_con_licor.vue';
import Postres_artesanales from './subComponents/ComponentsMenu/postres_artesanales.vue';
import especialidades from './subComponents/ComponentsMenu/especialidades.vue';
import CuadroMenu from './subComponents/ComponentsMenu/CuadroMenu.vue';
import { ref } from 'vue'

let op = 1
let change = ref(1)
const opciones = (op) => {
  if (op == 1) {
    change.value = 1
  }
  if (op == 2) {
    change.value = 2
  }
  if (op == 3) {
    change.value = 3
  }
  if (op == 4) {
    change.value = 4
  }
  if (op == 5) {
    change.value = 5
  }

}

</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="cabecera">

        <a><button type="button" @click="opciones(1)" class="TableButtons"> Bebidas Calientes </button></a>
        <a><button type="button" @click="opciones(2)" class="TableButtons"> Bebidas Frias </button></a>
        <a><button type="button" @click="opciones(3)" class="TableButtons"> Bebidas con Licor </button></a>
        <a><button type="button" @click="opciones(4)" class="TableButtons"> Postres artesanales </button></a>
        <a><button type="button" @click="opciones(5)" class="TableButtons">Especialidades</button></a>
      </div>
      <div id=cuerpo>
        <bebidas_calientes v-if="(change == 1)" />
        <bebidas_frias v-else-if="(change == 2)" />
        <bebidas_con_licor v-else-if="(change == 3)" />
        <postres_artesanales v-else-if="(change == 4)" />
        <especialidades v-else-if="(change == 5)" />
        <CuadroMenu v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from 'axios';
/* import Swal from 'sweetalert2'; */;

/* optimizar luego */
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9wayI6MSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyNC0wNS0zMCAyMDowMzo0OC42NTgyODErMDA6MDAiLCJyZWZyZXNoIjoiSndTVTZGNVp5ckp4WmZFN3JBa0dhdlRlOWtrSG5iIn0.HCcn9qaweRGeu3Mbk3t0s5yvVPv_jBjtX0Jcdx6tRxg';

export default {
  name: 'Menu',
  components: {
    CuadroMenu,
  },

  data() {
    return {
      products: [],
    };
  },

  mounted() {
    axios.get('http://127.0.0.1:8001/menu/product', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((res) => {

        console.log(res.data);
        if (res.data) {
          this.products = res.data;
          console.log(this.products[0].id);
        }

      }).catch((err) => {
        console.log(err);
      });
  },

}
</script>