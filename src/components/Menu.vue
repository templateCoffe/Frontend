<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import bebidas_frias from './bebidas_frias.vue';
import bebidas_calientes from './bebidas_calientes.vue';
import bebidas_con_licor from './bebidas_con_licor.vue';
import Postres_artesanales from './postres_artesanales.vue';
import especialidades from './especialidades.vue';
import {ref} from 'vue'
let op = 1
let change = ref(1)
const opciones = (op) => {
  if(op==1){
    change.value = 1
      }
    if(op==2){
        change.value = 2
      }
    if(op==3){
        change.value = 3
      }
    if(op==4){
        change.value = 4
      }
    if(op==5){
        change.value = 5
      }
      
    }

</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id = "cabecera">

              <a><button type="button" @click="opciones(1)" class="TableButtons"> Bebidas Calientes  </button></a>
              <a><button type="button" @click="opciones(2)" class="TableButtons"> Bebidas Frias  </button></a>
              <a><button type="button" @click="opciones(3)" class="TableButtons"> Bebidas con Licor  </button></a>
              <a><button type="button" @click="opciones(4)" class="TableButtons"> Postres artesanales  </button></a>
              <a><button type="button" @click="opciones(5)" class="TableButtons">Especialidades</button></a>
        </div>
        <div id = cuerpo >
          <bebidas_calientes v-if="( change==1)" />
          <bebidas_frias v-else-if="(change==2)" />
          <bebidas_con_licor v-else-if="(change==3)" />
          <postres_artesanales v-else-if="(change==4)" />
          <especialidades v-else-if="(change==5)" />


        </div>
      </div>
  </div>
<Footer />
</template>
