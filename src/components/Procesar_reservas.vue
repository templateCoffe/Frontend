<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="row my-3" id="edit_menu_pr">
    <div class="col-md-6" id="edit_menu_pr">
      <h1>Procesar Reserva</h1>

      <form class="row my-5" id="info">
        <div class="col-md-6 my-3 " >
            <p class="form-control">nombre completo:</p>
            </div>

            <div class="col-md-6 my-3"   >
            <p class="form-control" > documento de identidad: </p>
                </div>
             <div class="col-md-6 my-3 " >
            <p class="form-control">fecha:</p>
            </div>
            <div class="col-md-6 my-3 " >
              <p class="form-control">hora:</p>
            </div>
            <div class="col-md-6 my-3 " >
              <p class="form-control">número de contacto:</p>
            </div>
            <div class="col-md-6 my-3 " >
              <p class="form-control">correo:</p>
            </div>
            <div class="col-md-6 my-3 " >
              <p class="form-control">número de asistentes:</p>
            </div>
            <div class="col-md-6 my-3 " >
              <p class="form-control">reserva empresarial:</p>
            </div>
            <div class="col-md-6 my-3"  >

                <input type="submit" value="aceptar" class="form-control style-submit_pr">

            </div>

            <div class="col-md-6 my-3" >

                <input type="submit" value="rechazar" class="form-control style-submit_pr">

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
    };
  },

  methods: {
    makeFormData(processResult) {
      return {
        status: processResult,
        observation: this.observation,
      };
    },

    getBooking() {
      axios
        .get(
          "http://127.0.0.1:8001/booking/reservation/" + this.$route.params.id
        ) //ajustar la url en el futuro
        .then((res) => {
          this.booking = res.data;
          console.log(this.booking);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    processBooking() {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title: "Va a eliminar " + this.booking.document + ", ¿Está seguro?",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async () => {
          axios
            .patch(
              "http://127.0.0.1:8001/booking/reservation" + this.$route.params.id,
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
            icon: "success",
            title: `Reserva Aceptada satisfactoriamente`,
          });
          this.$router.push("/Administrador_rersevas");
        }
      });
    },

    patchProduct() {
      const token = localStorage.getItem("authToken");
      axios
        .patch(
          "http://127.0.0.1:8001/menu/product/" + this.$route.params.id,
          this.makeFormData(),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: `Producto editado satisfactoriamente`,
          });
          this.$router.push("/Administrador_menu");
        })
        .catch((err) => {
          console.log(err.response);
          Swal.fire({
            icon: "error",
            title: "Datos no válidos",
          });
        });
    },
  },

  mounted() {
    const token = localStorage.getItem("authToken");
    axios
      .get(
        "http://127.0.0.1:8001/booking/reservation/" + this.$route.params.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ) //ajustar la url en el futuro
      .then((res) => {
        this.booking = res.data;
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
select {
  margin: 10px;
}

#posarea_pr {
  margin-left: 23px;
}

.style-submit_pr {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
