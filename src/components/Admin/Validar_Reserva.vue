<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="col-md-6" id="edit_menu_pr">
    <h1 v-if="true">Reserva validada</h1>

    <form class="row my-5" id="info">
      <div>
        <b>Nombre Completo:</b>
        <p class="form-control">
          {{ booking.names }}
          {{ booking.surnames }}
        </p>
      </div>
      <div class="col-md-6 my-3">
        <b>Documento de identidad:</b>
        <p class="form-control">{{ booking.document }}</p>
      </div>
      <div class="col-md-6 my-3">
        <b>Correo Electrónico:</b>
        <p class="form-control">{{ booking.email }}</p>
      </div>
    </form>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Validar_Reserva",

  data() {
    return {
      booking: [],
    };
  },

  methods: {
    patchProduct() {
      const token = localStorage.getItem("authToken");
      axios
        .patch(
          "http://18.221.240.167/booking/confirm_reservation/" +
            this.$route.params.comprobante,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.booking = res.data;
        })
        .catch((err) => {
          let code = err.response.data.code;
          let data = err.response.data;
          let button = "OK";
          switch (code) {
            case "reservation_already_confirmed":
              Swal.fire({
                title: "¡Error!",
                text: data.detailed,
                icon: "error",
                confirmButtonText: button,
              });
              this.$router.push("/");
              break;

            case "reservation_not_found":
              Swal.fire({
                title: "¡Error!",
                text: data.detailed,
                icon: "error",
                confirmButtonText: button,
              });
              this.$router.push("/");
              break;
            case "incorrect_password":
              console.log(data);
              Swal.fire({
                title: "Error!",
                text: data.detailed,
                icon: "error",
                confirmButtonText: button,
              });
              this.$router.push("/");
              break;
            default:
              break;
          }
        });
    },
  },
  mounted() {
    this.patchProduct();
  },
};
</script>
