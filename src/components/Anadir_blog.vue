<script setup>
import Footer from "./Footer.vue";
</script>

<template>
  <div class="row my-3" id="edit_menu_ab">
    <div class="col-md-6" id="edit_menu_ab">
      <h1>añadir publicación</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <select class="form-select" v-model="category">
            <option value="event" label="Eventos" />
            <option value="news" label="Noticias" />
            <option value="article" label="Artículos" />
          </select>
        </div>

        <div class="col-md-12">
          <input
            type="text"
            class="form-control"
            placeholder="Titulo"
            v-model="title"
          />
        </div>

        <div class="col-md-12 row">
          <textarea
            rows="5"
            id="posarea_mb"
            placeholder="Text"
            v-model="text"
          ></textarea>
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
        <div class="row my-5 justify-content-center">
          <input
            class="send-menu-changes"
            type="button"
            @click="createPost"
            value="Enviar cambios"
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
      title: null,
      file_img: null,
      text: null,
      category: "event",
    };
  },

  methods: {
    onFileSelected(event) {
      this.file_img = event.target.files[0];
    },

    makeFormData() {
      let formData = new FormData();

      formData.append("title", this.title);
      formData.append("file_img", this.file_img);
      formData.append("text", this.text);
      formData.append("category", this.category);
      console.log(formData);
      return formData;
    },

    createPost() {
      const token = localStorage.getItem("authToken");
      axios
        .post("https://18.221.240.167/blog/publication", this.makeFormData(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: `Publicación Creada satisfactoriamente`,
          });
          this.$router.push("/Administrador_blog");
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
#edit_menu_ab {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_ab h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_ab form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_ab input,
select {
  margin: 10px;
}

#posarea_ab {
  margin-left: 23px;
}

.style-submit_ab {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
