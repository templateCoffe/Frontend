<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Chatbot from "./Chatbot.vue"
import Publicacion from './Publicacion.vue';


</script>

<template>
    <Header/>

    <div class="row my-3">
        <div class="col-sm-12 col-md-10 col-lg-10 col-xl-10 cabecera" id="box">
            <h1 >Template Blog</h1>
            <p>Actualizaciones de interes sobre temas de interes</p>

        </div>
    </div>

    <div class="row">
        <div v-for="value in posts" class="col-sm-12 col-md-10 col-lg-10 col-xl-10" id="box">
            <img :src=value.file_img id="img_publicacion">
            <div id="text_info">
            <h1>{{ value.title }}</h1>
            <router-link :to="getPostURL(value)" class="nav-link">
                <p>{{ value.text.slice(0, 200) }}...</p>
                <b v-if="value.category == 'news'" class="d-flex justify-content-end">Noticias</b>
                <b v-if="value.category == 'event'" class="d-flex justify-content-end">Eventos</b>
                <b v-if="value.category == 'article'" class="d-flex justify-content-end">Articulos</b>
            </router-link> 
        </div>
        </div>
    </div>   
    <Chatbot/>
    <Footer/>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Menu',
  components: {
    Publicacion,
  },

  data() {
    return {
      posts: [],
      page: 1,
      has_next: '',
      has_previous: ''
    };
  },

  methods: {

    getPostURL(value) {
        return "/Publicacion/" + value.id;
    },

    getProducts() {
      axios.get('http://127.0.0.1:8001/blog/publication?page=' + this.page)//ajustar la url en el futuro
        .then((res) => {

          console.log(res.data);
          if (res.data.data) {
            this.posts = res.data.data;
            this.has_next = res.data.has_next;
            this.has_previous = res.data.has_previous;
          }

        }).catch((err) => {
          console.log(err);
        });
    },

    pagination(movement) {
      if (this.has_next && movement == 'right') {
        this.page = this.page + 1;
        this.getProducts();
      }
      else if (this.has_previous && movement == 'left') {
        this.page = this.page - 1;
        this.getProducts();
      }
    }
  },

  mounted() {
    this.getProducts();
  }
}
</script>

<style>

    #img_publicacion{
        width: 100%;
        
    }
    #box{
        margin: 0 auto;
    }
    #text_info{
        background-color: #E5E6E4;
        padding: 20px;
        color:#847577;
    
    }
    .cabecera{
      text-align: center;
      color:#847577;
      padding: -10px;
    }

    .cabecera p{
      margin-bottom: -5px;
    }
    

</style>
