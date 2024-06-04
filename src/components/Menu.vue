<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import MenuProductFrame from "./subComponents/MenuProductFrame.vue";
import Chatbot from "./Chatbot.vue";
</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="cabecera">
        <a
          ><button
            type="button"
            @click="
              filter = 'hot_drink';
              getProducts();
            "
            class="TableButtons"
          >
            Bebidas Calientes
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'cold_drink';
              getProducts();
            "
            class="TableButtons"
          >
            Bebidas Frias
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'liquor_drink';
              getProducts();
            "
            class="TableButtons"
          >
            Bebidas con Licor
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'handmade_dessert';
              getProducts();
            "
            class="TableButtons"
          >
            Postres artesanales
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'specialties';
              getProducts();
            "
            class="TableButtons"
          >
            Especialidades
          </button></a
        >
      </div>
      <div id="cuerpo">
        <MenuProductFrame
          v-for="product in products"
          v-bind:key="product.id"
          v-bind:product="product"
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
  <Chatbot />
  <Footer />
</template>

<style>
.arrows {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "Menu",
  components: {
    MenuProductFrame,
  },

  data() {
    return {
      products: [],
      filter: "hot_drink",
      page: 1,
      has_next: "",
      has_previous: "",
    };
  },

  methods: {
    getProducts() {
      axios
        .get(
          "http://18.221.240.167/menu/product?page=" +
            this.page +
            "&product_type=" +
            this.filter
        ) //ajustar la url en el futuro
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            this.products = res.data.data;
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
        this.getProducts();
      } else if (this.has_previous && movement == "left") {
        this.page = this.page - 1;
        this.getProducts();
      }
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>
