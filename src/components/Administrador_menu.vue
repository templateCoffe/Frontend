<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Administrador_bebidas_calientes from './subComponents/ComponentsAdministradorMenu/Administrador_bebidas_calientes.vue';
import Administrador_bebidas_frias from './subComponents/ComponentsAdministradorMenu/Administrador_bebidas_frias.vue'
import Administrador_bebidas_con_licor from './subComponents/ComponentsAdministradorMenu/Administrador_bebidas_con_licor.vue'
import Administrador_postres_artesanales from './subComponents/ComponentsAdministradorMenu/Administrador_postres_artesanales.vue'
import Administrador_especialidades from './subComponents/ComponentsAdministradorMenu/Administrador_especialidades.vue'
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
        <div id = "g_cabecera">
  
                <a><button type="button" @click="opciones(1)" class="TableButtons"> Bebidas Calientes </button></a>
                <a><button type="button" @click="opciones(2)" class="TableButtons"> Bebidas Frias  </button></a>
                <a><button type="button" @click="opciones(3)" class="TableButtons"> Bebidas con Licor  </button></a>
                <a><button type="button" @click="opciones(4)" class="TableButtons"> Postres artesanales  </button></a>
                <a><button type="button" @click="opciones(5)" class="TableButtons">Especialidades</button></a>
          </div>
    
        <div id = g_cuerpo >

          <Administrador_bebidas_calientes v-if="(change == 1)"/>
          <Administrador_bebidas_frias v-if="(change == 2)"/>
          <Administrador_bebidas_con_licor v-if="(change == 3)"/>
          <Administrador_postres_artesanales v-if="(change == 4)"/>
          <Administrador_especialidades v-if="(change == 5)"/>
        </div>
       
          <div id="g_botones">
        <button type="button" class="TableButtons"> añadir producto </button>
         <button type="button" class="TableButtons"  > eliminar producto </button>
        </div>
        </div>
      </div>

    <Footer />
    <router-view></router-view>
    </template>