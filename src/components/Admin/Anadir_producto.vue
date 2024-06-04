<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_ai">
    <div class="col-md-6" id="edit_menu_ai">
      <h1>Añadir Producto</h1>

      <form class="row my-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="nombre"
            v-model="name"
          />
        </div>

        <div class="col-md-6">
          <select class="form-select" v-model="product_type">
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
            v-model="price"
          />
        </div>

        <div class="col-md-12">
          <textarea
            class="form-control tamaño"
            placeholder="descripcion"
            v-model="description"
          />
        </div>
        <div class="row my-5 justify-content-center">
          <input
            class="send-menu-changes"
            type="button"
            @click="createProduct"
            value="Crear Producto"
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
      name: null,
      header_img: null,
      price: null,
      description: null,
      product_type: "hot_drink",
    };
  },

  methods: {
    onFileSelected(event) {
      this.header_img = event.target.files[0];
    },

    makeFormData() {
      let formData = new FormData();

      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("product_type", this.product_type);
      formData.append("header_img", this.header_img);
      console.log(formData);
      return formData;
    },

    createProduct() {
      const token = localStorage.getItem("authToken");
      axios
        .post("http://18.221.240.167/menu/product", this.makeFormData(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: `Producto Creado satisfactoriamente`,
          });
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
};
</script>

<style>
#edit_menu_ai {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_ai h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}

#edit_menu_ai form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_ai input,
select {
  margin: 10px;
}

#edit_menu_ai textarea {
  margin-left: 10px;
}

#posarea_ai {
  margin-left: 23px;
}

.style-submit_ai {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
