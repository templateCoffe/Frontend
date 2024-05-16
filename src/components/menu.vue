<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import bebidas_frias from './bebidas_frias.vue';
import bebidas_calientes from './bebidas_calientes.vue';
import {ref} from 'vue'
let op = 1
let change = ref(1)
const opciones = (op) => {
  if(op==1){
    console.log(op)
    change.value = 1
      }
    else if(op==2){
        console.log(op)
        change.value = 2
      }
      
    }

</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id = "cabecera">

              <a><button type="button" @click="opciones(1)" class="TableButtons"> Bebidas Calientes  </button></a>
              <a><button type="button"  @click="opciones(2)" class="TableButtons"> Bebidas Frias  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas con Licor  </button></a>
              <a><button type="button" class="TableButtons"> Postres artesanales  </button></a>
              <a><button type="button" class="TableButtons">Especialidades</button></a>
        </div>
        <div id = cuerpo >
          <bebidas_calientes v-if="( change==1)" />
          
          <bebidas_frias v-else-if="(change==2)" />         

        </div>
      </div>
  </div>
<Footer />
</template>