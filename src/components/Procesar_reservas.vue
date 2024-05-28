<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header/>
   <div class="row my-3 " id="edit_menu_pr">
      <div class="col-md-6" id="edit_menu_pr" >
        <h1>modificar item</h1>

        <form class="  row my-5 ">

            <div class="col-md-6 " >
            <input type="text" class="form-control" placeholder="nombre completo: ">
            </div>

            <div class="col-md-6"  >
            <input type="text" class="form-control" placeholder="documento de identidad: ">
                </div>
             <div class="col-md-6 " >
            <input type="date" class="form-control" placeholder="fecha: ">
            </div>
            <div class="col-md-6 " >
            <input type="time" class="form-control" placeholder="hora: ">
            </div>
            <div class="col-md-12 " >
            <input type="text" class="form-control" placeholder="reserva empresarial: ">
            </div>
            <div class="col-md-6" >

                <input type="submit" value="aceptar" class="form-control style-submit_pr">

            </div>

            <div class="col-md-6" >

                <input type="submit" value="rechazar" class="form-control style-submit_pr">

</div>
</form>

      </div>
</div>

   <Footer/>
</template>

<style>
     
    #edit_menu_pr{
        
        margin: 0 auto;
        width: 100%;        

    }

    #edit_menu_pr h1{
      text-align: center;
      background-color: #E5E6E4 ;
      height: 60px;
      border-radius: 20px;
      width: 70%;
      margin: 0px auto ;
      color: #847577
      
    }
    #edit_menu_pr form{
        margin: 0 auto;
        width: 50%;
    }
    #edit_menu_pr input, select{
        margin: 10px;
    }

    #posarea_pr{
        margin-left: 23px
    }
    
    .style-submit_pr{
        color:#E5E6E4;
        background-color: #A6A2A2;
        height: 60px;
        font-size: 30px;
    }
    
</style>