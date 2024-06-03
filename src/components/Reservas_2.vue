<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import FormReserva from "./subComponents/FormReserva.vue";
import Chatbot from "./Chatbot.vue"
</script>

<template>
  <Header />
  <div class="row">
    <div class="col-md-3" id="info_reservas">
      <div class="col-md-12">
        <h1>Realizar una reservación en</h1>
      </div>

      <div class="col-md-12 row">
        <img
          src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
          alt="logo"
          width="150"
        />
      </div>

      <div class="col-md-12">
        <p>
          Diligencia los datos del formulario y nos comunicaremos contigo para
          informarte si podemos atender tu solicitud.
        </p>
        <hr />
      </div>
      <div class="col-md-12">
        <h3>Horarios de atención</h3>
        <p>XX:XX - XX:XX</p>
      </div>
    </div>

    <FormReserva />
  </div>
  <Chatbot/>
  <Footer />
</template>

<script>
export default {
  name: "Reserva",
  components: {
    FormReserva,
  },
};
</script>

<style>
#info_reservas {
  padding-top: 100px;
  background: #e5e6e4;
}

#info_reservas h1 {
  text-align: center;
  font-size: 32px;
}
#info_reservas p {
  text-align: center;
  font-size: 23px;
  padding: 10%;
}
#info_reservas h3 {
  text-align: center;
}

#info_reservas img {
  margin-left: 90px;
  width: 50%;
}

#form_reservas {
  padding: 50px;
  text-align: center;
}

.edit_input{

  width: 50%;
  margin: 0px auto;
  border: 1px solid black;

}

.edit_check {
  height: 20px;
  vertical-align: bottom;
  margin-left: -1rem;
}

.enviar_s {
  margin: 0 auto;
  width: 300px;
}
.enviar_s input:hover {
  background-color: #847577;
  color: #fbfbf2;
}

.enviar_s input {
  height: 50px;
  background-color: #e5e6e4;
  color: #847577;
  font-size: 20px;
  border-radius: 15px;
}
</style>
