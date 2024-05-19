<template>
     <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <h1>Café</h1>
            
          </div>
          </div>
        
          <div id = g_producto class="row my-3">
          <div class="col-md-12" id="g_informacion">
            <router-link to="/modificar_menu" target="_blank"><h1><button><h1>cappucchino</h1></button></h1></router-link>
          </div>
          </div>
          <router-view></router-view>
</template>
<style>
  button{
    border:0px;
    background-color:#FBFBF2;
  }
</style>