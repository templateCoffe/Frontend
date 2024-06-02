<script setup>
import Footer from "./Footer.vue";
</script>

<template>
  <div class="row my-3" id="edit_menu">
    <div class="col-md-6" id="edit_menu">
      <h1>Editar "{{ product.name }}"</h1>

      <form class="row my-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="nombre"
            v-model="product.name"
          />
        </div>

        <div class="col-md-6">
          <select class="form-select" v-model="product.product_type">
            <option value="hot_drink" label="Bebida Caliente" />
            <option value="cold_drink" label="Bebida Fría" />
            <option value="liquor_drink" label="Bebida con licór" />
            <option value="handmade_dessert" label="Postres Artesanales" />
            <option value="specialties" label="Especialidades" />
          </select>
        </div>

        <div class="col-md-6">
          <input
            type="file"
            class="form-control"
            placeholder="imagen"
            accept=".jpg,.png"
            v-on:change="onFileSelected"
          />
        </div>
        <div class="col-md-6">
          <input
            type="number"
            class="form-control"
            placeholder="precio"
            min="0"
            step="1"
            v-model="product.price"
          />
        </div>

        <div class="col-md-12">
          <textarea
            class="form-control tamaño"
            placeholder="descripcion"
            v-model="product.description"
          />
        </div>
        <div class="row my-5 justify-content-center">
          <input
            class="send-menu-changes"
            type="button"
            @click="patchProduct"
            value="Enviar cambios"
          />

          <input
            class="delete-product"
            type="button"
            @click="deleteProduct"
            value="Eliminar Producto"
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
  name: "Menu",

  data() {
    return {
      product: [],
      product_reference: this.getProduct(),
    };
  },

  methods: {
    onFileSelected(event) {
      this.product.header_img = event.target.files[0];
    },

    makeFormData() {
      let formData = new FormData();
      let a = this.product;
      let b = this.product_reference;

      if (a.name != b.name) {
        console.log(a.name, b.name);
        formData.append("name", a.name);
      }
      if (a.price != b.price) {
        formData.append("price", a.price);
      }
      if (a.description != b.description) {
        formData.append("description", a.description);
      }
      if (a.product_type != b.product_type) {
        formData.append("product_type", a.product_type);
      }
      if (a.header_img != b.header_img) {
        formData.append("header_img", a.header_img);
      }

      console.log(formData);
      return formData;
    },

    getProduct() {
      axios
        .get("http://127.0.0.1:8001/menu/product/" + this.$route.params.id) //ajustar la url en el futuro
        .then((res) => {
          this.product_reference = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteProduct() {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title: "Va a eliminar " + this.product.name + ", ¿Está seguro?",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async () => {
          axios
            .delete(
              "http://127.0.0.1:8001/menu/product/" + this.$route.params.id,
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
            title: `Producto eliminado satisfactoriamente`,
          });
          this.$router.push("/Administrador_menu");
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
    axios
      .get("http://127.0.0.1:8001/menu/product/" + this.$route.params.id) //ajustar la url en el futuro
      .then((res) => {
        this.product = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#image {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

#edit_menu {
  margin: 0 auto;
  width: 100%;
}

#edit_menu h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
}

#edit_menu form {
  margin: 0 auto;
  width: 50%;
}

#edit_menu input,
select {
  margin: 10px;
}
.tamaño {
  padding-bottom: 100px;
}

.delete-product {
  width: 200px;
}
</style>

<!-- 
'hot_drink'
'cold_drink'
'liquor_drink'
'handmade_dessert'
'specialties'
-->
