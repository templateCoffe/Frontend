<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "../Footer.vue";
import AdminInventoryFrame from "../subComponents/AdminInventoryFrame.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-1">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="g_cabecera_adi">
        <a><button type="button" class="TableButtons">Items</button></a>
        <a><button type="button" class="TableButtons">Stock</button></a>
      </div>

      <div id="g_cuerpo_adi">
        <div class="row my-3">
          <AdminInventoryFrame
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:item="item"
          />
        </div>
        <div class="arrows">
          <button v-if="has_previous" type="button" @click="pagination('left')">
            <
          </button>
          <button v-if="has_next" type="button" @click="pagination('right')">
            >
          </button>
        </div>
      </div>

      <div id="g_botones_adi">
        <button type="button" class="TableButtons">
          <router-link to="./Anadir_inventario" class="nav-link"
            ><a>Añadir producto</a></router-link
          >
        </button>
      </div>
    </div>
  </div>

  <Footer />
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin Reservas",

  components: {
    AdminInventoryFrame,
  },

  data() {
    return {
      items: [],
      item_names: [],
      page: 1,
      has_next: "",
      has_previous: "",
    };
  },

  methods: {

    

    getItems() {
      const token = localStorage.getItem("authToken");
      axios
        .get("http://18.221.240.167/inventory/item?page=" + this.page, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            this.items = res.data.data;
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
        this.getItems();
      } else if (this.has_previous && movement == "left") {
        this.page = this.page - 1;
        this.getItems();
      }
    },
  },

  mounted() {
    this.getItems();
  },
};
</script>

<style>
#g_cabecera_adi {
  background-color: #a6a2a2;
  width: 90%;
  margin: 0px auto;
  text-align: center;
}

#g_cuerpo_adi {
  position: relative;
  background-color: #e5e6e4;
  border: 3px solid #a6a2a2;
  padding: 19px;
  width: 90%;
  margin: 0px auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
#g_producto_adi {
  width: 90%;
  text-align: center;
  color: #847577;
  background-color: #fbfbf2;
  margin: 0px auto;
  border-radius: 20px;
}
#g_botones_adi {
  padding: 19px;
  width: 90%;
  text-align: center;
  margin: 0px auto;
}
#g_botones_adi button {
  background: #cfd2cd;
}
</style>
