<script setup>
import Footer from "./Footer.vue";
import AdminPublicationFrame from "./subComponents/AdminPublicationFrame.vue";
</script>


<template>
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="g_cabecera_adb">
        <a
          ><button
            type="button"
            @click="
              filter = 'event';
              getPosts();
            "
            class="TableButtons"
          >
            Eventos
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'article';
              getPosts();
            "
            class="TableButtons"
          >
            Articulos
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'news';
              getPosts();
            "
            class="TableButtons"
          >
            Noticias
          </button></a
        >
      </div>
      <div id="cuerpo">
        <AdminPublicationFrame
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
        />
        <div class="arrows">
          <button v-if="has_previous" type="button" @click="pagination('left')">
            <
          </button>
          <button v-if="has_next" type="button" @click="pagination('right')">
            >
          </button>
        </div>
        <div id="g_botones_adi">
          <router-link to="./Anadir_producto" class="nav-link">
            <input type="button" value="Añadir producto" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
#g_cabecera_adb {
  background-color: #a6a2a2;
  width: 90%;
  margin: 0px auto;
  text-align: center;
  height: 50px;
}

#g_cuerpo_adb {
  position: relative;
  background-color: #e5e6e4;
  border: 3px solid #a6a2a2;
  padding: 19px;
  width: 90%;
  margin: auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
#g_producto_adb {
  width: 90%;
  text-align: center;
  color: #847577;
  background-color: #fbfbf2;
  margin: 0px auto;
  border-radius: 20px;
}

#g_botones_adb button {
  background: #cfd2cd;
  margin-left: 20%;
  margin-right: 12%;
}

#check_adb {
  position: absolute;
  left: 60px;
  margin-top: 10px;
  height: 24px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "Posts",

  components: {
    AdminPublicationFrame
  },

  data() {
    return {
      posts: [],
      filter: "event",
      page: 1,
      has_next: "",
      has_previous: "",
    };
  },

  methods: {
    getPosts() {
      axios
        .get(
          "http://127.0.0.1:8001/blog/publication?page=" +
            this.page +
            "&category=" +
            this.filter
        ) //ajustar la url en el futuro
        .then((res) => {
          console.log(res.data);
          if (res.data.data) {
            this.posts = res.data.data;
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
        this.getPosts();
      } else if (this.has_previous && movement == "left") {
        this.page = this.page - 1;
        this.getPosts();
      }
    },
  },

  mounted() {
    this.getPosts();
  },
};
</script>