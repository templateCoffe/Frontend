<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="container">
        <div class="Body">
            <div class="Description">
                <h2>Realiza una reservación en</h2>
                <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
                <p>Diligencia los datos del formulario y nos comunicaremos contigo para informarte si podemos atender tu
                    solicitud.</p>
                <hr />
                <h3>Horarios de atención</h3>
                <p>XX:XX - XX:XX</p>

            </div>
            <div class="FormPlace">
                <h2>Detalles de la Solicitud</h2>
                <form @submit.prevent="editData" ref="Post">
                    <label for="fullname">Nombre Completo</label>
                    <input class="input" type="text" name="fullname" placeholder="Ingrese su nombre completo">
                    <label for="idDoc">Documento de identidad</label>
                    <input class="input" type="text" name="idDoc" placeholder="Ingrese su Documento de identidad">
                    <label for="email">Correo Electrónico</label>
                    <input class="input" type="text" name="email" placeholder="Ingrese su Correo electrónico">
                    <label for="date">Fecha de Reserva (Día y Hora)</label>
                    <input class="input" type="text" name="date" placeholder="Ingrese la fecha y hora de su reserva">
                    <label for="assistants">Número de asistentes</label>
                    <input class="input" type="number" min="2" max="20" name="assistants"
                        placeholder="Ingrese el número asistentes a la reserva">
                    <div class="form-check">
                        <input type="checkbox" name="isBusiness">
                        <label for="assistants">Reserva empresarial</label>
                    </div>
                    <button type="submit">Enviar solicitud</button>
                </form>



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

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
    .Description {
        font-size: 1vw;
    }
}

.FormPlace {
    display: grid;
    grid-area: FormPlace;
}

.FormPlace form{
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    align-content: center;
    margin: 100px;
    padding: 0 200px;
    gap: 10px;
    justify-items: center;
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

<script>
export default {
    name: 'Reservas',
}
</script>