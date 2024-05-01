<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="container">
        <div class="Body">
            <div class="Description">
                <h2>haz tu reserva</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deserunt magnam inventore ipsum sunt animi. Qui, blanditiis quibusdam! Repellat, ab assumenda aperiam quaerat veniam distinctio sint corrupti quis aut quo?</p>
            </div>
            <div class="FormPlace">
                <h2>Form</h2>
                <label for="s">Tal</label>
                <input type="text" name="s" value="s">
            </div>
        </div>

    </div>
    <Footer />
</template>

<style scoped>
.container {
    /* Resta la altura del header y footer */
    background-color: lightgray;
    /* Para visualizar el contenedor */
}

.Description {
    grid-area: Description;
    width: 25vw;
    margin: 50px;
}

.FormPlace {
    grid-area: FormPlace;
    text-align: center;
    align-content: center
}
</style>