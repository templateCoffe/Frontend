
<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header/>
   <div class="row my-3 " id="edit_menu">
      <div class="col-md-6" id="edit_menu" >
        <h1>cappucchino</h1>

        <form class="  row my-5 ">

            <div class="col-md-6 " >
            <input type="text" class="form-control" placeholder="nombre">
            </div>

            <div class="col-md-6"  >
                    <select class="form-select">
                        <option>categorias</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

            <div class="col-md-6 " >
            <input type=" image" class="form-control" placeholder="imagen">
            </div>
             <div class="col-md-6 " >
            <input type="text" class="form-control" placeholder="precio">
            </div>

            <div class="col-md-12 " >
            <input type=" text" class="form-control tamaño" placeholder="descripcion">
            </div>
</form>

      </div>
</div>

   <Footer/>
</template>

<style>
     
    #edit_menu{
        margin: 0 auto;
        width: 100%;

    
        

    }

    #edit_menu h1{
      text-align: center;
      background-color: #E5E6E4 ;
      height: 60px;
      border-radius: 20px;
      width: 70%;
      margin: 0px auto ;
      
      
    }

    #edit_menu form{
        margin: 0 auto;
        width: 50%;

    }

    #edit_menu input, select{
        margin: 10px;
    }
    .tamaño{
        padding-bottom: 100px;
    }
    

</style>