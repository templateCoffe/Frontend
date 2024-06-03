<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_ac">
    <div class="col-md-6" id="edit_menu_ac">
      <h1>Añadir pregunta</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <select class="form-select" v-model="module">
            <option value="contact" label="Contacto" />
            <option value="faq" label="Preguntas Frecuentes" />
            <option value="location" label="Ubicación" />
          </select>
        </div>

        <div class="col-md-12">
          <input
            type="text"
            class="form-control"
            placeholder="Pregunta"
            v-model="question"
          />
        </div>

        <div class="col-md-12">
          <textarea
            class="form-control tamaño"
            placeholder="Respuesta"
            v-model="answer"
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
      module: "contact",
      question: null,
      answer: null,
    };
  },

  methods: {
    makeJSON() {
      return {
        module: this.module,
        question: this.question,
        answer: this.answer,
      };
    },

    createProduct() {
      const token = localStorage.getItem("authToken");
      axios
        .post("http://127.0.0.1:8001/chatbot/chatbot", this.makeJSON(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(this.makeJSON());
          console.log(res);
          Swal.fire({
            icon: "success",
            title: `Pregunta agregada satisfactoriamente`,
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
#edit_menu_ac {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_ac h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_ac form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_ac input,
select {
  margin: 10px;
}

#posarea_ac {
  margin-left: 23px;
}

.style-submit_ac {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}

#edit_menu_ac textarea {
  margin-left: 10px;
}
</style>
