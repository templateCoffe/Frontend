<template>
    <Header />
    <div class="Place">
        <h1>Conoce los comentarios de otros clientes y crea los tuyos mediante GOOGLE REVIEWS</h1>
        <div class="elfsight-app-2adf9dd9-c072-4aaa-bb4b-c6f88d7cb15b" data-elfsight-app-lazy></div>
    </div>
    <Chatbot/>
    <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Chatbot from "./Chatbot.vue"
import { onMounted, ref } from 'vue';

const elfsightContainer = ref(null);

onMounted(() => { //Mecanismo interesante para incluir scripts externos en el código
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    script.onload = () => {
        if (window.ElsWidget) {
            window.ElsWidget.init();
        } else {
            document.addEventListener('ElsWidgetInit', () => {
                window.ElsWidget.init();
            });
        }
    };

    document.body.appendChild(script);
});
</script>

<style>
.Place {
    padding: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 50px;
    color: #847577
}
</style>