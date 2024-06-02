<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="row my-1">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div id = "g_cabecera_adm">
  
                <a><button type="button" class="TableButtons"> Lista de preguntas </button></a>
          </div>
    
        <div id = g_cuerpo_adm >
    <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adm"/>
        </div>
          <div class="col-md-11" id="g_producto_adm" >
            <router-link to="#" class="nav-link" target="_blank"><h1>¿?</h1></router-link>
          </div>
        </div>
        
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adm"/>
        </div>
          <div class="col-md-11" id="g_producto_adm" >
            <router-link to="#" class="nav-link" target="_blank"><h1>¿?</h1></router-link>
          </div>
        </div>
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adm"/>
        </div>
          <div class="col-md-11" id="g_producto_adm" >
            <router-link to="#" class="nav-link" target="_blank"><h1>¿?</h1></router-link>
          </div>
        </div>
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adm"/>
        </div>
          <div class="col-md-11" id="g_producto_adm" >
            <router-link to="./Modificar_chatbot" class="nav-link" target="_blank"><h1>pregunta</h1></router-link>
          </div>
        </div>
        </div>
          <div id="g_botones_adm">
        <button type="button" class="TableButtons"> <router-link to="./Anadir_chatbot" class="nav-link" ><a>añadir producto</a></router-link> </button>
         <button type="button" class="TableButtons"  > eliminar producto </button>
        </div>
        </div>
      </div>


    <Footer />
    <router-view></router-view>
</template>

<style>

    #g_cabecera_adm{ 
    background-color: #A6A2A2 ;
    width: 90%;
    margin: 0px auto;
    text-align: center;

    }

    #g_cuerpo_adm{
    position: relative;
    background-color: #E5E6E4;    
    border:3px solid #A6A2A2;
    padding: 19px;
    width: 90%;
    margin: 0px auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    }
    #g_producto_adm {
        
      
      width: 90%;
      text-align: center;
      color:#847577;
      background-color: #FBFBF2;
      margin: 0px auto;
      border-radius: 20px;
    }
    #g_botones_adm{
      
      padding: 19px;
      width: 90%;
      
      margin: 0px auto;

    }
    #g_botones_adm  button{
      background: #CFD2CD;
      margin-left:20%;
      margin-right:12% ;
      

    }

    #check_adm{
        position: absolute;
        left:60px;
        margin-top:10px;
        height: 24px;
        
    }

</style>