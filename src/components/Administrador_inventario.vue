<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="row my-1">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div id = "g_cabecera_adi">
  
                <a><button type="button" class="TableButtons"> Lista de items </button></a>
          </div>
    
        <div id = g_cuerpo_adi >
    <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adi"/>
        </div>
          <div class="col-md-11" id="g_producto_adi" >
            <router-link to="Modificar_item" class="nav-link" target="_blank"><h1>Servilletas</h1></router-link>
          </div>
        </div>
        
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adi"/>
        </div>
          <div class="col-md-11" id="g_producto_adi" >
            <router-link to="#" class="nav-link" target="_blank"><h1>Pitillos</h1></router-link>
          </div>
        </div>
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adi"/>
        </div>
          <div class="col-md-11" id="g_producto_adi" >
            <router-link to="#" class="nav-link" target="_blank"><h1>[Insert name]</h1></router-link>
          </div>
        </div>
        <div  class="row my-3">
        <div class="col-md-1">
            <input type="checkbox" id="check_adi"/>
        </div>
          <div class="col-md-11" id="g_producto_adi" >
            <router-link to="#" class="nav-link" target="_blank"><h1>[Insert name]</h1></router-link>
          </div>
        </div>
        </div>
          <div id="g_botones_adi">
        <button type="button" class="TableButtons"> <router-link to="./Anadir_inventario" class="nav-link" ><a>añadir producto</a></router-link> </button>
         <button type="button" class="TableButtons"  > eliminar producto </button>
        </div>
        </div>
      </div>


    <Footer />
    <router-view></router-view>
</template>

<style>

    #g_cabecera_adi{ 
    background-color: #A6A2A2 ;
    width: 90%;
    margin: 0px auto;
    text-align: center;

    }

    #g_cuerpo_adi {
    position: relative;
    background-color: #E5E6E4;    
    border:3px solid #A6A2A2;
    padding: 19px;
    width: 90%;
    margin: 0px auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    }
    #g_producto_adi {
        
      
      width: 90%;
      text-align: center;
      color:#847577;
      background-color: #FBFBF2;
      margin: 0px auto;
      border-radius: 20px;
    }
    #g_botones_adi{
      
      padding: 19px;
      width: 90%;
      
      margin: 0px auto;

    }
    #g_botones_adi  button{
      background: #CFD2CD;
      margin-left:20%;
      margin-right:12% ;
      

    }

    #check_adi{
        position: absolute;
        left:60px;
        margin-top:10px;
        height: 24px;
        
    }

</style>