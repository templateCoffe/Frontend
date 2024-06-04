<template>
  <form
    class="col-md-9"
    id="form_reservas"
    form
    @submit.prevent="sendData"
    ref="Post"
  >
    <div class="col-md-12">
      <h1>Detalles de la solicitud</h1>
    </div>
    <div class="col-md-12 my-4">
      <div class="col-md-12 my-4">
        <label for="names">Nombres</label>
        <input
          class="form-control edit_input"
          type="text"
          name="names"
          placeholder="Ingrese sus nombres"
          v-model="names"
          required
        />
      </div>
      <div class="col-md-12 my-4">
        <label for="surname">Apellidos</label>
        <input
          class="form-control edit_input"
          type="text"
          name="surname"
          placeholder="Ingrese sus apellidos"
          v-model="surnames"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="idDoc">Documento de identidad</label>
        <input
          class="form-control edit_input"
          type="number"
          name="idDoc"
          placeholder="Ingrese su Documento de identidad"
          pattern="^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$"
          v-model="idDoc"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="idDoc">Número telefónico</label>
        <input
          class="form-control edit_input"
          type="number"
          name="cellphone"
          placeholder="Ingrese su número telefónico de contacto"
          pattern="^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$"
          v-model="cellphone"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="email">Correo Electrónico</label>
        <input
          class="form-control edit_input"
          type="email"
          name="email"
          placeholder="Ingrese su Correo electrónico"
          v-model="email"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="date">Fecha de Reserva (Día y Hora)</label>
        <input
          class="form-control edit_input"
          type="datetime-local"
          name="date"
          placeholder="Ingrese la fecha y hora de su reserva"
          v-model="date"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="assistants">Número de asistentes</label>
        <input
          class="form-control edit_input"
          type="number"
          min="2"
          max="30"
          name="assistants"
          placeholder="Ingrese el número asistentes a la reserva"
          v-model="assistants"
          required
        />
      </div>

      <div class="col-md-12 my-2">
        <input
          type="checkbox"
          class="edit_check"
          name="isBusiness"
          v-model="is_local_reservation"
        />
        <label for="isBusiness">Reserva empresarial</label>
      </div>

      <div class="col-md-12 my-3 enviar_s">
        <input
          type="button"
          class="form-control edit_input"
          value="Enviar solicitud"
          @click="sendData()"
        />
      </div>
    </div>
  </form>
</template>

<style>
input[name="idDoc"]::-webkit-inner-spin-button,
input[name="idDoc"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[name="idDoc"] {
  -moz-appearance: textfield;
}
</style>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },

  name: "FormReserva",

  data() {
    return {
      names: null,
      surnames: null,
      idDoc: null,
      cellphone: null,
      email: null,
      date: null,
      assistants: null,
      is_local_reservation: false,
    };
  },
  methods: {
    makeReqFormat() {
      let date = this.date.slice(0, -6);
      let hour = this.date.slice(-5);

      console.log(date, hour);

      return {
        document: this.idDoc.toString(),
        email: this.email,
        is_local_reservation: this.is_local_reservation,
        names: this.names,
        number_of_assistants: this.assistants,
        phones: [this.cellphone.toString()],
        reservation_date: date,
        reservation_time: hour,
        surnames: this.surnames,
        type_document: "C.C.",
      };
    },

    sendData() {
      let data = this.makeReqFormat();
      console.log(data);
      axios
        .post("http://18.221.240.167/booking/reservation", data)
        .then((res) => {
          console.log(res);
          this.$refs.Post.reset();
          Swal.fire({
            icon: "success",
            title: "Reserva enviada exitosamente",
          });
          location.reload();
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({
            icon: "error",
            title: "Su reserva no pudo ser enviada",
            text: "Error: " + error.response.data.detailed,
          });
        });
    },
  },
};
</script>
