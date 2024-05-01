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
                <p>Diligencia los datos del formulario y nos comunicaremos contigo para informarte si podemos atender tu
                    solicitud.</p>
                <hr />
                <h3>Horarios de atención</h3>

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

.Description {
    grid-area: Description;
    width: 25vw;
    padding: 150px 50px 150px 50px;
    background: lightblue;
    text-align: center;
}

@media screen and (min-width: 601px) {
    .Description {
        font-size: 1.5vw;
    }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
    .Description {
        font-size: 1vw;
    }
}

.FormPlace {
    grid-area: FormPlace;
    text-align: center;
    align-content: center
}
</style>