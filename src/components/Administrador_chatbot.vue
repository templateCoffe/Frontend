<script setup>
import Footer from "./Footer.vue";
import AdminChatbotFrame from "./subComponents/AdminChatbotFrame.vue";
</script>

<template>
  <div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id="cabecera_ac">
        <a
          ><button
            type="button"
            @click="
              filter = 'contact';
              getQuestions();
            "
            class="TableButtons"
          >
            Contacto
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'faq';
              getQuestions();
            "
            class="TableButtons"
          >
            Preguntas Frecuentes
          </button></a
        >
        <a
          ><button
            type="button"
            @click="
              filter = 'location';
              getQuestions();
            "
            class="TableButtons"
          >
            Ubicación
          </button></a
        >
      </div>
      <div id="cuerpo_ac">
        <AdminChatbotFrame
          v-for="question in questions"
          v-bind:key="question.id"
          v-bind:question="question"
        />
        <div class="arrows">
          <button v-if="has_previous" type="button" @click="pagination('left')">
            <
          </button>
          <button v-if="has_next" type="button" @click="pagination('right')">
            >
          </button>
        </div>
        <div id="g_botones_ac">
          <button type="button" class="TableButtons">
            <router-link to="./Anadir_chatbot" class="nav-link">
              Añadir Pregunta
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";

export default {
  name: "Chatbot",

  components: {
    AdminChatbotFrame,
  },

  data() {
    return {
      questions: [],
      filter: "contact",
      page: 1,
      has_next: "",
      has_previous: "",
    };
  },

  methods: {
    getQuestions() {
      axios
        .get(
          "http://18.221.240.167//chatbot/public_chatbot?get_question&module=" +
            this.filter
        ) //ajustar la url en el futuro
        .then((res) => {
          console.log(res.data);
          this.questions = res.data;
          this.has_next = res.data.has_next;
          this.has_previous = res.data.has_previous;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getQuestions() {
      axios
        .get(
          "http://18.221.240.167//chatbot/public_chatbot?get_question&module=" +
            this.filter
        ) //ajustar la url en el futuro
        .then((res) => {
          console.log(res.data);
          this.questions = res.data;
          this.has_next = res.data.has_next;
          this.has_previous = res.data.has_previous;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    pagination(movement) {
      if (this.has_next && movement == "right") {
        this.page = this.page + 1;
        this.getQuestions();
      } else if (this.has_previous && movement == "left") {
        this.page = this.page - 1;
        this.getQuestions();
      }
    },
  },

  mounted() {
    this.getQuestions();
  },
};
</script>
