<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <HeaderAdministrador/>
  <div class="row my-3" id="edit_menu_mb">
    <div class="col-md-6" id="edit_menu_mb">
      <h1>Editar publicación {{ post.id }}</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <select class="form-select" v-model="post.category">
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
            v-model="post.title"
          />
        </div>

        <div class="col-md-12 row">
          <textarea
            rows="5"
            id="posarea_mb"
            placeholder="Text"
            v-model="post.text"
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
            @click="patchPost"
            value="Enviar cambios"
          />

          <input
            class="delete-product"
            type="button"
            @click="deletePost"
            value="Eliminar Publicación"
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
      post: [],
      post_reference: this.getPost(),
    };
  },

  methods: {
    onFileSelected(event) {
      this.post.file_img = event.target.files[0];
    },

    makeFormData() {
      let formData = new FormData();
      let a = this.post;
      let b = this.post_reference;
      if (a.title != b.title) {
        console.log(a, b);
        formData.append("title", a.title);
      }
      if (a.text != b.text) {
        formData.append("text", a.text);
      }
      if (a.category != b.category) {
        formData.append("category", a.category);
      }
      if (a.file_img != b.file_img) {
        console.log(b.file_img);
        formData.append("file_img", a.file_img);
      }

      console.log(formData);
      return formData;
    },

    getPost() {
      axios
        .get("http://18.221.240.167/blog/publication/" + this.$route.params.id) //ajustar la url en el futuro
        .then((res) => {
          this.post_reference = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deletePost() {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title: 'Va a eliminar "' + this.post.title + '", ¿Está seguro?',
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async () => {
          axios
            .delete(
              "http://18.221.240.167/blog/publication/" + this.$route.params.id,
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
            title: `Publicación eliminada satisfactoriamente`,
          });
          this.$router.push("/Administrador_blog");
        }
      });
    },

    patchPost() {
      const token = localStorage.getItem("authToken");
      axios
        .patch(
          "http://18.221.240.167/blog/publication/" + this.$route.params.id,
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
            title: `Publicación editada satisfactoriamente`,
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

  mounted() {
    axios
      .get("http://18.221.240.167/blog/publication/" + this.$route.params.id) //ajustar la url en el futuro
      .then((res) => {
        this.post = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#edit_menu_mb {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_mb h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_mb form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_mb input,
select {
  margin: 10px;
}

#posarea_mb {
  margin-left: 23px;
}

.style-submit_mb {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
