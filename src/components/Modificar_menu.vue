<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="row my-3" id="edit_menu">
    <div class="col-md-6" id="edit_menu">
      <h1>Editar "{{ products.name }}"</h1>

      <form class="row my-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="nombre"
            v-bind:value="products.name"
          />
        </div>

        <div class="col-md-6">
          <select class="form-select" v-model="products.product_type">
            <option value="hot_drink" label="Bebida Caliente"/>
            <option value="cold_drink" label="Bebida Fría"/>
            <option value="liquor_drink" label="Bebida con licór"/>
            <option value="handmade_dessert" label="Postres Artesanales"/>
            <option value="specialties" label="Especialidades"/>
          </select>
        </div>

        <div class="col-md-6">
          <input
            type="file"
            class="form-control"
            placeholder="imagen"
            accept=".jpg,.png"
            v-bind:value="products.header_img"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="precio"
            v-bind:value="products.price"
          />
        </div>

        <div class="col-md-12">
          <textarea
            class="form-control tamaño"
            placeholder="descripcion"
            v-bind:value="products.description"
          />
        </div>
      </form>
    </div>
  </div>

  <Footer />
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",
  /* components: {
    MenuProductFrame,
  }, */

  data() {
    return {
      products: [],
      name: String,
      header_img: null,
      price: Number,
      description: String,
      product_type: String,
    };
  },

  methods: {
    getData() {
      console.log("ñe");
    },

    makeJSON() {
      return {

      }
    }
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8001/menu/product/" + this.$route.params.id) //ajustar la url en el futuro
      .then((res) => {
        this.products = res.data;
        console.log(this.products.product_type);
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

label {
  cursor: pointer;
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
</style>

<!-- 
'hot_drink'
'cold_drink'
'liquor_drink'
'handmade_dessert'
'specialties'
-->
