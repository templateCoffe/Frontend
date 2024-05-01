<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="container">
        <div class="Body">
            <div class="Description">
                testA
            </div>
            <div class="FormPlace">
                testB
            </div>
        </div>

    </div>
    <Footer />
</template>

<style scoped>
.container {
    min-height: calc(100% - 100px);
    /* Resta la altura del header y footer */
    background-color: lightgray;
    /* Para visualizar el contenedor */
}
.Description {
    min-height: 100%;
}
</style>