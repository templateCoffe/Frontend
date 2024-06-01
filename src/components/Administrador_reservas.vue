<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Pendientes from './subComponents/Pendientes.vue';
import Procesados from './subComponents/Procesados.vue';
import {ref} from 'vue'
let op = 1
let change = ref(1)
const opciones = (op) => {
  if(op==1){
    change.value = 1
      }
    else if(op==2){
        change.value = 2
      }
      
    }

</script>

<template>
    <Header />
    <div class="row my-3">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div id = "g_cabecera_adr">
  
                <a><button type="button" @click="opciones(1)" class="TableButtons"> Pendientes </button></a>
                <a><button type="button" @click="opciones(2)" class="TableButtons"> Procesados  </button></a>
          </div>
    
        <div id = g_cuerpo_adr >
          
          <Pendientes v-if="(change==1)"/>
          <Procesados v-if="(change==2)"/>
          
        </div>
      </div>
    </div>

    <Footer />
    </template>

    <style>
  
  #g_cabecera_adr {    
  padding: 19px;
  background-color: #A6A2A2 ;
  width: 90%;
  margin: 0px auto;
  text-align: center;
  }

  #g_cuerpo_adr {
    background-color: #CFD2CD;    
    border:3px solid #A6A2A2;
    padding: 19px;
    width: 90%;
    margin: 0px auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    }
    #g_producto_adr {
    background-color: #E5E6E4;
    width: 100%;
    
    margin: 0px auto;
    border-radius: 20px;
    }
     
    #g_informacion_adr h1{
      text-align: center;
      color: #847577;

    }
  </style>

  