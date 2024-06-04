<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_pr">
    <div class="col-md-6" id="edit_menu_pr">
      <h1>Procesar Reserva</h1>

      <form class="row my-5" id="info">
        <div class="col-md-6 my-3">
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
          <b>Fecha de la Reservación:</b>
          <p class="form-control">
            {{ reservation.date }}
          </p>
        </div>
        <div class="col-md-6 my-3">
          <b>Hora de la reservación:</b>
          <p class="form-control">{{ reservation.time }}</p>
        </div>
        <div class="col-md-6 my-3">
          <b>Número de contacto:</b>
          <p class="form-control">{{ phone }}</p>
        </div>
        <div class="col-md-6 my-3">
          <b>Correo Electrónico</b>
          <p class="form-control">{{ booking.email }}</p>
        </div>
        <div class="col-md-6 my-3">
          <b>Número de asistentes:</b>
          <p class="form-control">{{ booking.number_of_assistants }}</p>
        </div>
        <div class="col-md-6 my-3">
          <b>¿Es una Reserva empresarial?:</b>
          <p v-if="booking.is_local_reservation" class="form-control">Si</p>
          <p v-else-if="!booking.is_local_reservation" class="form-control">
            No
          </p>
        </div>
        <div class="col-md-6 my-3">
          <input
            type="button"
            value="Aceptar Reserva"
            class="form-control style-submit_pr"
            @click="processBooking('approved')"
          />
        </div>

        <div class="col-md-6 my-3 text-align-center">
          <input
            type="button"
            value="Rechazar Reserva"
            class="form-control style-submit_pr"
            @click="processBooking('rejected')"
          />
        </div>
      </form>
    </div>
  </div>

  <Footer />
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Reservas",

  data() {
    return {
      booking: [],
      reservation: [],
      phone: [],
    };
  },

  methods: {
    makeFormData(key, observation) {
      return {
        status: key,
        observation: observation,
      };
    },

    getBooking() {
      axios
        .get(
          "http://18.221.240.167/booking/reservation/" + this.$route.params.id
        ) //ajustar la url en el futuro
        .then((res) => {
          this.booking = res.data;
          console.log(this.booking);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    processBooking(status) {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title:
          "Va a " +
          (status == "approved" ? "aprobar" : "rechazar") +
          " esta reserva, por favor deje sus observaciones para el cliente",
        input: "text",
        inputPlaceholder: "Observaciones para el cliente",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async (observation) => {
          axios
            .patch(
              "http://18.221.240.167/booking/reservation/" +
                this.$route.params.id,
              this.makeFormData(status, observation),
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err.response);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "info",
            title: `Reserva Procesada satisfactoriamente`,
          });
          this.$router.push("/administrador_reservas");
        }
      });
    },
  },

  mounted() {
    const token = localStorage.getItem("authToken");
    axios
      .get(
        "http://18.221.240.167/booking/reservation/" + this.$route.params.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ) //ajustar la url en el futuro
      .then((res) => {
        this.booking = res.data;
        this.reservation = this.booking.reservation;
        this.phone = this.booking.phones[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#edit_menu_pr {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_pr h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_pr #info {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_pr p,
b {
  margin: 10px;
}

#posarea_pr {
  margin-left: 23px;
}

.style-submit_pr {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  width: auto;
  font-size: 20px;
}
</style>
