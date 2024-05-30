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


