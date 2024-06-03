<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <Header />
  <div class="row my-3">
    <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 cabecera" id="box">
      <h1>Template Blog</h1>
      <p>Actualizaciones de interes sobre temas de interes</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
      <img :src="post.file_img" id="img_publicacion" />
      <div id="text_info">
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
        <b v-if="post.category == 'article'" class="d-flex justify-content-end"
          >Articulo, creado el {{ post.created.slice(0, 10) }}
        </b>
        <b v-if="post.category == 'news'" class="d-flex justify-content-end"
          >Noticias, creado el {{ post.created.slice(0, 10) }}
        </b>
        <b v-if="post.category == 'events'" class="d-flex justify-content-end"
          >Eventos, creado el {{ post.created.slice(0, 10) }}
        </b>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",

  data() {
    return {
      post: [],
    };
  },

  methods: {
    getProduct() {
      axios
        .get("https://18.221.240.167/blog/publication/" + this.$route.params.id) //ajustar la url en el futuro
        .then((res) => {
          if (res.data) {
            this.post = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
