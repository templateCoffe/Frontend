<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_ai">
    <div class="col-md-6" id="edit_menu_ai">
      <h1>Añadir item</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre del Item"
            v-model="name"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Código"
            v-model="code"
          />
        </div>

        <div class="col-md-6">
          <select class="form-select" v-model="brand">
            <option value="consumible" label="Consumible" />
            <option value="for_cleaning" label="Limpieza" />
            <option value="others" label="Otros" />
          </select>
        </div>
        <div class="col-md-12">
          <textarea
            class="form-control"
            placeholder="Descripcion del producto"
            v-model="description"
          />
        </div>

        <div class="col-md-12 text-align-center">
            <input
            class="send-menu-changes"
            type="button"
            @click="createItem"
            value="Crear Item"
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
      description: null,
      brand: 'consumible',
      code: null,
    };
  },

  methods: {
    makeJSON() {
      return {
        name: this.name,
        description: this.description,
        brand: this.brand,
        code: this.code,
      };
    },

    createItem() {
      const token = localStorage.getItem("authToken");
      axios
        .post("http://127.0.0.1:8001/inventory/item", this.makeJSON(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(this.makeJSON());
          console.log(res);
          location.reload();
          Swal.fire({
            icon: "success",
            title: `Item agregado satisfactoriamente`,
          });
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
