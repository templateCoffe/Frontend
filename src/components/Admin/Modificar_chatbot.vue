<script setup>
import HeaderAdministrador from "./HeaderAdministrador.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <HeaderAdministrador />
  <div class="row my-3" id="edit_menu_mc">
    <div class="col-md-6" id="edit_menu_mc">
      <h1>modificar pregunta</h1>

      <form class="row my-5">
        <div class="col-md-12">
          <select class="form-select" v-model="question.module">
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
            v-model="question.question"
          />
        </div>

        <div class="col-md-12">
          <textarea
            class="form-control tamaño"
            placeholder="descripcion"
            v-model="question.answer"
          />
        </div>
        <div class="row my-5 justify-content-center">
          <input
            class="send-menu-changes"
            type="button"
            @click="patchQuestion"
            value="Enviar cambios"
          />

          <input
            class="delete-product"
            type="button"
            @click="deleteQuestion"
            value="Eliminar Pregunta"
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
  name: "Chatbot",

  data() {
    return {
      question: [],
    };
  },

  methods: {
    makeJSON() {
      return {
        module: this.question.module,
        question: this.question.question,
        answer: this.question.answer,
      };
    },

    deleteQuestion() {
      const token = localStorage.getItem("authToken");
      Swal.fire({
        icon: "info",
        title: 'Va a eliminar "' + this.question.question + '", ¿Está seguro?',
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        preConfirm: async () => {
          axios
            .delete(
              "http://18.221.240.167/chatbot/chatbot/" + this.$route.params.id,
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
            title: `Pregunta eliminada satisfactoriamente`,
          });
          this.$router.push("/Administrador_chatbot");
        }
      });
    },

    patchQuestion() {
      const token = localStorage.getItem("authToken");
      axios
        .patch(
          "http://18.221.240.167/chatbot/chatbot/" + this.$route.params.id,
          this.makeJSON(),
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
            title: `Pregunta editada satisfactoriamente`,
          });
          this.$router.push("/Administrador_chatbot");
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

  mounted() {
    axios
      .get(
        "http://18.221.240.167/chatbot/public_chatbot?get_answer&pk=" +
          this.$route.params.id
      ) //ajustar la url en el futuro
      .then((res) => {
        console.log(res.data);
        this.question = res.data[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#edit_menu_mc {
  margin: 0 auto;
  width: 100%;
}

#edit_menu_mc h1 {
  text-align: center;
  background-color: #e5e6e4;
  height: 60px;
  border-radius: 20px;
  width: 70%;
  margin: 0px auto;
  color: #847577;
}
#edit_menu_mc form {
  margin: 0 auto;
  width: 50%;
}
#edit_menu_mc input,
select {
  margin: 10px;
}
#edit_menu_mc textarea {
  margin-left: 10px;
}

#posarea_mc {
  margin-left: 23px;
}

.style-submit_mc {
  color: #e5e6e4;
  background-color: #a6a2a2;
  height: 60px;
  font-size: 30px;
}
</style>
