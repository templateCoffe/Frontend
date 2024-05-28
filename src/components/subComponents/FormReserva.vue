<template>
    <form @submit.prevent="sendData" ref="Post" class="row">
        <div class="col-md-12 row">
        <h2>Detalles de la Solicitud</h2>
        <label for="fullname">Nombre Completo</label>
        <input class="input" type="text" name="fullname" placeholder="Ingrese su nombre completo" v-model="fullname"
            required>
        </div>
        <div class="col-md-12 row">
        <label for="idDoc">Documento de identidad</label>
        <input class="input" type="number" name="idDoc" placeholder="Ingrese su Documento de identidad"
            pattern="^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$" v-model="idDoc" required>
        </div>
        <div class="col-md-12 row">
        <label for="email">Correo Electrónico</label>
        <input class="input" type="email" name="email" placeholder="Ingrese su Correo electrónico" v-model="email"
            required>
        </div>
        <div class="col-md-12 row">
        <label for="date">Fecha de Reserva (Día y Hora)</label>
        <input class="input" type="datetime-local" name="date" placeholder="Ingrese la fecha y hora de su reserva"
            v-model="date" required>
        </div>
        <div class="col-md-12 row">
        <label for="assistants">Número de asistentes</label>
        <input class="input" type="number" min="2" max="30" name="assistants"
            placeholder="Ingrese el número asistentes a la reserva" v-model="assistants" required>
        </div>
        <div class="form-check col-md-12 row">
            <input type="checkbox" name="isBusiness" v-model="isBussiness">
            <label for="assistants">Reserva empresarial</label>
        </div>
        <button type="submit">Enviar solicitud</button>
    </form>
</template>

<style scoped>
button[type="submit"] {
    text-align: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    color: #847577;
    font-size: 20px;
    background-color: #E5E6E4;
    padding: 14px 20px;
    border: none;
    display: absolute;
    cursor: pointer;
    border-radius: 10px;
}

button[type="submit"]:hover {
    text-align: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    color: #E5E6E4;
    font-size: 20px;
    background-color: #847577;
    padding: 14px 20px;
    border: none;
    display: absolute;
    cursor: pointer;
    border-radius: 10px;
}

form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));
    text-align: center;
    align-content: center;
    margin: 100px;
    padding: 0 200px;
    gap: 10px;
    justify-items: center;
}

.form-check {
    direction: ltr;
}

input[type="checkbox"] {
    padding: 1px;
}

.input {
    font-size: 16px;
    padding: 10px 10px;
    width: 100%;
    outline: none;
    background: #FFFFFF;
    color: #847577;
    border: 1px solid #847577;
    border-radius: 5px;
    transition: .3s ease;
}

.input:focus {
    background: #F2F2F2;
    border: 1px solid #847577;
    color: #847577;
    border-radius: 15px;
}

.input::placeholder {
    color: #DDDDDD;
}

input[name=idDoc]::-webkit-inner-spin-button,
input[name=idDoc]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[name=idDoc] {
    -moz-appearance: textfield;
}
</style>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    headers: {
        "Access-Control-Allow-Origin": "*"
    },

    name: 'FormReserva',

    data() {
        return {
            fullname: null,
            idDoc: null,
            email: null,
            date: null,
            assistants: null,
            isBussiness: false,
        };
    },
    methods:
    {
        sendData() {
            if (true) { //revisar
                axios.post(
                    'https://httpbin.org/post', //For testing purposes
                    {
                        parameter: {
                            id: 0,
                            fullname: this.fullname,
                            idDoc: this.idDoc,
                            email: this.email,
                            date: this.date + "T00:00:00.000Z",
                            assistants: this.assistants,
                            isBussiness: this.isBussiness,
                        }
                    }
                ).then((res) => {
                    console.log(res);
                    this.$refs.Post.reset();
                    Swal.fire({
                        icon: "success",
                        title: "Reserva enviada exitosamente"
                    });
                }).catch(error => {
                    this.response = error.response
                    console.log(this.response);
                });
                this.$refs.anyName.reset();
            }

        },
    }
}
</script>