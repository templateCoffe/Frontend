<template>
  <div class="login-page">
    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
      <div class="card login" v-bind:class="{ error: emptyFields }">
        <h1>Iniciar Sesión</h1>
        <form class="form-group">
          <input
            v-model="idLogin"
            type="number"
            class="form-control"
            placeholder="Identificación"
            required
          />
          <input
            v-model="passwordLogin"
            type="password"
            class="form-control"
            placeholder="Contraseña"
            required
          />
          <div class="keepLogin">
            <input v-model="keepLogin" type="checkbox" />
            <label for="keepLogin">Mantener sesión iniciada</label>
          </div>
          <input type="button" @click="doLogin" value="Iniciar Sesión" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { logout } from '../auth'

export default {
  name: "Login",
  data() {
    return {
      idLogin: "",
      passwordLogin: "",
      keepLogin: false,
      emptyFields: false,
    };
  },

  methods: {
    doLogin() {
      if (this.idLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        axios
          .post("http://127.0.0.1:8001/base/auth", {
            //ajustar la url en el futuro
            keep_logged_in: this.keepLogin,
            password: this.passwordLogin,
            user: this.idLogin.toString(),
          })
          .then((res) => {
            let token = res.data.token;
            localStorage.setItem("authToken", token);
            this.$router.push("/admin");
          })
          .catch((err) => {
            let code = err.response.data.code;
            let data = err.response.data;
            let button = "OK";
            switch (code) {
              case "invalid_body":
                
                Swal.fire({
                  title: "Error!",
                  text: data.data.password,
                  icon: "error",
                  confirmButtonText: button,
                });
                break;

              case "user_not_found":
                Swal.fire({
                  title: "Error!",
                  text: data.detailed,
                  icon: "error",
                  confirmButtonText: button,
                });
                break;
              case "incorrect_password":
                console.log(data);
                Swal.fire({
                  title: "Error!",
                  text: data.detailed,
                  icon: "error",
                  confirmButtonText: button,
                });
                break;
              default:
                break;
            }
          });
      }
    },
  },
};
</script>

<style>
.keepLogin {
  display: flex;
  align-items: center;
}

input[type="button"] {
  display: flexbox;
  width: 200px;
}
input[type="checkbox"] {
  width: 20px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

label {
  padding-left: 10px;
}

.card {
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }

  25% {
    transform: translateX(25px);
  }

  50% {
    transform: translateX(-25px);
  }

  75% {
    transform: translateX(25px);
  }

  100% {
    transform: translateX(0);
  }
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
}
</style>
