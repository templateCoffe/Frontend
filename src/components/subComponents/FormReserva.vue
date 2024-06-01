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
      <label for="fullname">Nombre Completo</label>
      <input
        class="form-control"
        type="text"
        name="fullname"
        placeholder="Ingrese su nombre completo"
        v-model="fullname"
        required
      />

      <div class="col-md-12 my-4">
        <label for="idDoc">Documento de identidad</label>
        <input
          class="form-control"
          type="number"
          name="idDoc"
          placeholder="Ingrese su Documento de identidad"
          pattern="^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$"
          v-model="idDoc"
          required
        />
      </div>
    
      <div class="col-md-12 my-4">
        <label for="idDoc">Documento de identidad</label>
        <input
          class="form-control"
          type="number"
          name="idDoc"
          placeholder="Ingrese su Documento de identidad"
          pattern="^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$"
          v-model="idDoc"
          required
        />
      </div>

      <div class="col-md-12 my-4">
        <label for="email">Correo Electrónico</label>
        <input
          class="form-control"
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
          class="form-control"
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
          class="form-control"
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
        <label for="isBusiness">Reserva empresarial</label>
      </div>
      <div class="col-md-12 my-4">
        <input
          type="checkbox"
          class="edit_check"
          name="isBusiness"
          v-model="isBussiness"
        />
      </div>

      <div class="col-md-12 my-3 enviar_s">
        <input
          type="button"
          class="form-control"
          value="Enviar solicitud"
          @click=""
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
      fullname: null,
      idDoc: null,
      email: null,
      date: null,
      assistants: null,
      is_local_reservation: false,
    };
  },
  methods: {
    makeReqFormat() {
        return {
            "document": "{{$randomInt}}",
            "email": "{{$randomEmail}}",
            "is_local_reservation": this.is_local_reservation,
    "names": this.fullname,
    "number_of_assistans": this.assistants,
    "phones": 2,
    "reservation_date": "2024-08-20",
    "reservation_time": "20:45",
    "surnames": "{{$randomLastName}}",
    "type_document": "C.C."
        }
    },

    sendData() {
      axios
        .post(
          "http://127.0.0.1:8001/booking/reservation", //For testing purposes
          {
            parameter: {
              id: 0,
              fullname: this.fullname,
              idDoc: this.idDoc,
              email: this.email,
              date: this.date + "T00:00:00.000Z",
              assistants: this.assistants,
              isBussiness: this.isBussiness,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.$refs.Post.reset();
          Swal.fire({
            icon: "success",
            title: "Reserva enviada exitosamente",
          });
        })
        .catch((error) => {
          this.response = error.response;
          console.log(this.response);
        });
      this.$refs.anyName.reset();
    },
  },
};
</script>
