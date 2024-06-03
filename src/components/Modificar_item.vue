<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_mi">
    <div class="col-md-6" id="edit_menu_ai">
      <h1>Modificar item</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre del Item"
            v-model="item.name"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Código"
            v-model="item.code"
          />
        </div>

        <div class="col-md-6">
          <select class="form-select" v-model="item.brand">
            <option value="consumible" label="Consumible" />
            <option value="for_cleaning" label="Limpieza" />
            <option value="others" label="Otros" />
          </select>
        </div>
        <div class="col-md-12">
          <textarea
            class="form-control"
            placeholder="Descripcion del producto"
            v-model="item.description"
          />
        </div>

        <div class="col-md-12 text-align-center">
          <input
            class="send-menu-changes"
            type="button"
            @click="patchItem()"
            value="Enviar Cambios"
          />
          <input
            class="send-menu-changes"
            type="button"
            @click="deleteItem()"
            value="Eliminar Item"
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
  name: "Chatbot",

  data() {
    return {
      item: [],
    };
  },

  methods: {
    makeJSON() {
      return {
        name: this.item.name,
        description: this.item.description,
        brand: this.item.brand,
        code: this.item.code,
      };
    },

    deleteItem() {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title: 'Va a eliminar "' + this.item.item + '", ¿Está seguro?',
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async () => {
          axios
            .delete(
              "http://18.221.240.167/inventory/item/" + this.$route.params.id,
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
            title: `Item eliminado satisfactoriamente`,
          });
          this.$router.push("/Administrador_inventario");
        }
      });
    },

    patchItem() {
      const token = localStorage.getItem("authToken");
      axios
        .patch(
          "http://18.221.240.167/inventory/item/" + this.$route.params.id,
          this.makeJSON(),
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
            title: `Item editado satisfactoriamente`,
          });
          this.$router.push("/Administrador_inventario");
        })
        .catch((err) => {
          console.log(this.makeJSON());
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
      .get("http://18.221.240.167/inventory/item/" + this.$route.params.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //ajustar la url en el futuro
      .then((res) => {
        console.log(res.data);
        this.item = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#edit_menu_mi {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_mi h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_mi form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_mi input,
select {
  margin: 10px;
}
this.code,
#posarea_mi {
  margin-left: 23px;
}

.style-submit_mi {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
