<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import HeaderAdministrador from "./HeaderAdministrador.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-1">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="g_cabecera_adi">
        <a
          ><button type="button" class="TableButtons">Lista de items</button></a
        >
      </div>

      <div id="g_cuerpo_adi">
        <div class="row my-3">
          <div class="col-md-12" id="g_producto_adi">
            <router-link to="Modificar_item" class="nav-link" target="_blank"
              ><h1>Servilletas</h1></router-link
            >
          </div>
        </div>

        <div class="row my-3">
          <div class="col-md-12" id="g_producto_adi">
            <router-link to="#" class="nav-link" target="_blank"
              ><h1>Pitillos</h1></router-link
            >
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-12" id="g_producto_adi">
            <router-link to="#" class="nav-link" target="_blank"
              ><h1>[Insert name]</h1></router-link
            >
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-12" id="g_producto_adi">
            <router-link to="#" class="nav-link" target="_blank"
              ><h1>[Insert name]</h1></router-link
            >
          </div>
        </div>
      </div>
      <div id="g_botones_adi">
        <button type="button" class="TableButtons">
          <router-link to="./Anadir_inventario" class="nav-link"
            ><a>Añadir producto</a></router-link
          >
        </button>
        <button type="button" class="TableButtons">Eliminar producto</button>
      </div>
    </div>
  </div>

  <Footer />
  <router-view></router-view>
</template>

<style>
#g_cabecera_adi {
  background-color: #a6a2a2;
  width: 90%;
  margin: 0px auto;
  text-align: center;
}

#g_cuerpo_adi {
  position: relative;
  background-color: #e5e6e4;
  border: 3px solid #a6a2a2;
  padding: 19px;
  width: 90%;
  margin: 0px auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
#g_producto_adi {
  width: 90%;
  text-align: center;
  color: #847577;
  background-color: #fbfbf2;
  margin: 0px auto;
  border-radius: 20px;
}
#g_botones_adi {
  padding: 19px;
  width: 90%;
  text-align: center;
  margin: 0px auto;
}
#g_botones_adi button {
  background: #cfd2cd;
}
</style>
