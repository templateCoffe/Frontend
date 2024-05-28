// Navbar.vue
<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
      <li v-else><a href="#" @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script>
import { isAuthenticated, logout } from './auth';

export default {
  computed: {
    isAuthenticated() {
      return isAuthenticated();
    }
  },
  methods: {
    logout() {
      logout();
      this.$router.push('/login');
    }
  }
};
</script>
