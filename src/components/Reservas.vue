<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="container">
        <div class="Body">
            <div class="Description">
                <h2>Realiza tu reserva</h2>
                <p>Diligencia los datos del formulario y nos comunicaremos contigo para informarte si podemos atender tu
                    solicitud.</p>
                <hr />
                <h3>Horarios de atención</h3>

            </div>
            <div class="FormPlace">
                <h2>Detalles de la Solicitud</h2>
                <label for="fullname">Nombre Completo</label>
                <input class="input" type="text" name="fullname">
                <label for="idDoc">Documento de identidad</label>
                <input class="input" type="text" name="idDoc">
                <label for="email">Correo Electrónico</label>
                <input class="input" type="text" name="email">
                <label for="date">Fecha de Reserva (Día y Hora)</label>
                <input class="input" type="text" name="date">
                <label for="assistants">Número de asistentes</label>
                <input class="input" type="number" min="2" max="20" name="assistants">
                <div class="form-check">
                    <input type="checkbox" name="isBusiness">
                    <label for="assistants">Reserva empresarial</label>
                </div>

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

.FormPlace {
    display: grid;
    grid-auto-flow: row;
    grid-area: FormPlace;
    text-align: center;
    align-content: center;
    margin: 100px;
    padding: 0 200px;
    gap: 10px;
}

.form-check {
    grid-auto-flow: column;
}

input[type="checkbox"] {
    padding: 1px;
}

.input {
    font-size: 16px;
    padding: 10px 10px;
    width: 100%;
    outline: none;
    background: #FFFFFF;
    color: #000000;
    border: 1px solid #C4D1EB;
    border-radius: 5px;
    transition: .3s ease;
}

.input:focus {
    background: #F2F2F2;
    border: 1px solid #5A7EC7;
    border-radius: 10px;
}

.input::placeholder {
    color: #DDDDDD;
}
</style>