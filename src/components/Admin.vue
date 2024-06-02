<template>
  <div class="">
    <router-link to="administrador_menu"
      ><button type="button">Menu</button></router-link
    >
    <router-link to="administrador_reservas"><button type="button">Reservas</button></router-link>
    <router-link to="administrador_blog"
      ><button type="button">Blog</button></router-link
    >
    <router-link to="administrador_chatbot"
      ><button type="button">Chatbot</button></router-link
    >
    <router-link to="administrador_inventario"
      ><button type="button">Inventario</button></router-link
    >
    <button type="button" @click="logout">Cerrar Sesión</button>
  </div>
</template>

<style>
.lista-de-botones {
  display: flex;
  height: 100%;
}
</style>

<script>
import { logout } from "../auth";
export default {
  name: "Login",

  methods: {
    logout() {
      logout();
      this.$router.push("/login");
    },
  },
};
</script>
