<template>
  <div class="row d-flex align-items-center">
    <div class="all justify-content-center">
      <img
        width="300"
        src="https://github.com/templateCoffe/.github/raw/main/profile/images/logo.png?raw=true"
        alt="logo del local"
      />
      <h1>Administrador</h1>
    </div>
    <div class="row d-flex justify-content-center lista-de-botones">
      <router-link to="administrador_menu">
        <input type="button" value="Menú" />
      </router-link>
      <router-link to="administrador_reservas">
        <input type="button" value="Reservas" />
      </router-link>
      <router-link to="administrador_blog">
        <input type="button" value="Blog" />
      </router-link>
      <router-link to="administrador_chatbot">
        <input type="button" value="Chatbot" />
      </router-link>
      <router-link to="administrador_inventario">
        <input type="button" value="Inventario" />
      </router-link>
      <router-link
        ><input type="button" @click="logout" value="Cerrar Sesión"
      /></router-link>
    </div>
  </div>
</template>

<style>
.all {
  height: max-content;
  background: transparent;
  padding: 50px;
  text-align: center;
  gap: 10px;
}

.lista-de-botones {
  gap: 20px;
}

.lista-de-botones a {
  width: auto;
}
</style>

<script>
import { logout } from "../../auth";
export default {
  name: "Login",

  methods: {
    logout() {
      logout();
      this.$router.push("/");
    },
  },
};
</script>
