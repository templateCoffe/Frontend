<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "../Footer.vue";
import AdminReservasFrame from "../subComponents/AdminReservasFrame.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="g_cabecera_adr">
        <a
          ><button
            type="button"
            @click="
              filter = 'pending';
              getBookings();
            "
            class="TableButtons"
          >
            Pendientes
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'approved';
              getBookings();
            "
            class="TableButtons"
          >
            Aprobadas
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'rejected';
              getBookings();
            "
            class="TableButtons"
          >
            Rechazadas
          </button></a
        >
      </div>

      <div id="g_cuerpo_adr">
        <AdminReservasFrame
          v-for="booking in bookings"
          v-bind:key="booking.id"
          v-bind:booking="booking"
        />
        <div class="arrows">
          <button v-if="has_previous" type="button" @click="pagination('left')">
            <
          </button>
          <button v-if="has_next" type="button" @click="pagination('right')">
            >
          </button>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import axios from "axios";

export default {
  name: "Admin Reservas",

  components: {
    AdminReservasFrame,
  },

  data() {
    return {
      bookings: [],
      filter: "pending",
      page: 1,
      has_next: "",
      has_previous: "",
    };
  },

  methods: {
    getBookings() {
      const token = localStorage.getItem("authToken");
      axios
        .get(
          "http://18.221.240.167/booking/reservation?page=" +
            this.page +
            "&status=" +
            this.filter,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            this.bookings = res.data.data;
            this.has_next = res.data.has_next;
            this.has_previous = res.data.has_previous;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pagination(movement) {
      if (this.has_next && movement == "right") {
        this.page = this.page + 1;
        this.getBookings();
      } else if (this.has_previous && movement == "left") {
        this.page = this.page - 1;
        this.getBookings();
      }
    },
  },

  mounted() {
    this.getBookings();
  },
};
</script>

<style>
#g_cabecera_adr {
  padding: 19px;
  background-color: #a6a2a2;
  width: 90%;
  margin: 0px auto;
  text-align: center;
}

#g_cuerpo_adr {
  background-color: #cfd2cd;
  border: 3px solid #a6a2a2;
  padding: 19px;
  width: 90%;
  margin: 0px auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
#g_producto_adr {
  background-color: #e5e6e4;
  width: 100%;

  margin: 0px auto;
  border-radius: 20px;
}

#g_informacion_adr h1 {
  text-align: center;
  color: #847577;
}
</style>
