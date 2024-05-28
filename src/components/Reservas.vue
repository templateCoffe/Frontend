<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import FormReserva from './subComponents/FormReserva.vue';
</script>

<template>
    <Header />
    <div>
        <div class="Body">
            <div class="Description">
                <h2>Realiza una reservación en</h2>
                <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
                <p>Diligencia los datos del formulario y nos comunicaremos contigo para informarte si podemos atender tu solicitud.</p>
                <hr />
                <h3>Horarios de atención</h3>
                <p>XX:XX - XX:XX</p>

            </div>
            <div class="FormPlace">
                <FormReserva />
            </div>
        </div>

    </div>
    <Footer />
</template>

<script>
export default {
    name: 'Reserva',
    components: {
        FormReserva,
    },
}
</script>

<style scoped>
.Body {
    align-items: left
}

.Description {
    display: flexbox;
    grid-area: Description;
    width: 25vw;
    padding: 150px 50px 150px 50px;
    text-align: center;
    background: #E5E6E4;
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

button[type="submit"] {
    text-align: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    color: #847577;
    font-size: 20px;
    background-color: #E5E6E4;
    padding: 14px 20px;
    border: none;
    display: absolute;
    cursor: pointer;
    border-radius: 10px;
}

button[type="submit"]:hover {
    text-align: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    color: #E5E6E4;
    font-size: 20px;
    background-color: #847577;
    padding: 14px 20px;
    border: none;
    display: absolute;
    cursor: pointer;
    border-radius: 10px;
}

.FormPlace {
    display: grid;
    grid-area: FormPlace;
}
</style>
