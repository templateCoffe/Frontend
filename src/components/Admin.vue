<template>
    <div class="lista-de-botones">
        <router-link to="administrador_menu"><button type="button">Menu</button></router-link>
        <router-link><button type="button">Reservas</button></router-link>
        <router-link><button type="button">Blog</button></router-link>
        <router-link><button type="button">Chatbot</button></router-link>
        <router-link><button type="button">Inventario</button></router-link>
    </div>
</template>

<style>
.lista-de-botones {
    display: flex;
    height: 100%;
}
</style>

<script>
import axios from 'axios';
export default {

}

</script>