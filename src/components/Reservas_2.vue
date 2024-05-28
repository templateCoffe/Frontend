<script setup>

import Header from './Header.vue';
import Footer from './Footer.vue';

</script>


<template>

    <Header/>
    <div class="row"> 

    <div class="col-md-3" id="info_reservas">

        <div class="col-md-12">
        <h1>Realizar una reservación en</h1>
        </div>

        <div class="col-md-12 row">
            <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
        </div>

        <div class="col-md-12">
           <p>Diligencia los datos del formulario y nos comunicaremos contigo para informarte si podemos atender tu solicitud.</p>
           <hr/>
        </div>
        <div class="col-md-12">

            <h3>Horarios de atención</h3>
            <p>XX:XX - XX:XX</p>
        </div>
        

    </div>

    <form class="col-md-9" id="form_reservas">

        <div class="col-md-12">
        <h1>Detalles de la solicitud</h1>
        </div>
        <div class="col-md-12">
            <label for="fullname">Nombre Completo</label>
            <input class="form-control" type="text" name="fullname" placeholder="Ingrese su nombre completo" v-model="fullname" required>

            <div class="col-md-12">

                <label for="email">Correo Electrónico</label>
                <input class="form-control" type="email" name="email" placeholder="Ingrese su Correo electrónico" v-model="email" required>
            </div>

            <div class="col-md-12">


                <label for="date">Fecha de Reserva (Día y Hora)</label>
                <input class="form-control" type="datetime-local" name="date" placeholder="Ingrese la fecha y hora de su reserva" v-model="date" required>

            </div>

            <div class="col-md-12">

                <label for="assistants">Número de asistentes</label>
                <input class="form-control" type="number" min="2" max="30" name="assistants" placeholder="Ingrese el número asistentes a la reserva" v-model="assistants" required>

            <div class="col-md-8 my-3">
                <input type="checkbox" class="edit_check"  name="isBusiness" v-model="isBussiness">
                <label for="isBusiness">Reserva empresarial</label>
            </div>



            </div>

        </div>
    </form>

</div>


    <Footer/>
    
</template>

<style>
    #info_reservas{
        padding-top: 100px;
        padding-bottom: 200px;
        background: #E5E6E4;
    }

    #info_reservas h1{
        text-align: center ;
        font-size: 32px;
    }
    #info_reservas p{
        text-align: center ;
        font-size: 23px;
    }
    #info_reservas h3{
        text-align: center ;
    }

    #info_reservas img{
        margin-left: 90px;
        width: 50%;
        
       
    }

    #form_reservas{

        margin: 0px auto;
        text-align: center

    }

    #form_reservas input{
        width: 50%;
        margin: 0px auto;
    }

    .edit_check{

    
    }

</style>