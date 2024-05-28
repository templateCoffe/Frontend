<template>
    <div class="lista-de-botones">
        <router-link to="administrador_menu"><button type="button" @click="test()">Menu</button></router-link>
        <router-link ><button type="button">Reservas</button></router-link>
        <router-link to="administrador_blog"><button type="button">Blog</button></router-link>
        <router-link to="administrador_chatbot"><button type="button">Chatbot</button></router-link>
        <router-link to="administrador_inventario"><button type="button">Inventario</button></router-link>
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
    name: 'Login',
    data() {
        return {

        }
    },

    methods: {
        test() {
            if (this.idLogin === "" || this.passwordLogin === "") {
                this.emptyFields = true;
            }
            else {
                axios.get('http://127.0.0.1:8001//admin/menu/product', { //ajustar la url en el futuro
                })
                    .then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    });
            }
        }
    }
}

</script>