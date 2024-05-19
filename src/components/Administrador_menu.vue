<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
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
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>Café</h1>
            
          </div>
          </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>cappucchino</h1>
          </div>
          </div>
        
       
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>frappuchino</h1>
            
         
          </div>
        </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>Café mocha helado</h1>
            
          </div>
          </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>coctel monte cristo</h1>
            
          
          </div>
        </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>dirthy mother</h1>
            
          </div>
          </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>caprichos de café</h1>
            
          
          </div>
        </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>crema de café chocolate y mascarpone</h1>
          </div>
          </div>
        
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>cortado</h1>
            
          </div>
          </div>
       
       
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>affogato</h1>
            
          </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </template>