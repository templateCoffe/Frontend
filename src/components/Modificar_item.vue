<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header/>
   <div class="row my-3 " id="edit_menu_mi">
      <div class="col-md-6" id="edit_menu_mi" >
        <h1>modificar item</h1>

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
             <div class="col-md-12 " >
            <input type="password" class="form-control" placeholder="código">
            </div>
            <div class="col-md-12 row " >
            <textarea rows="5" id="posarea_mi" placeholder="Descripción..."></textarea>
            </div>
            <div class="col-md-12" >

                <input type="submit" value="Editar" class="form-control style-submit_mi">

            </div>
</form>

      </div>
</div>

   <Footer/>
</template>

<style>
     
    #edit_menu_mi{
        
        margin: 0 auto;
        width: 100%;        

    }

    #edit_menu_mi h1{
      text-align: center;
      background-color: #E5E6E4 ;
      height: 60px;
      border-radius: 20px;
      width: 70%;
      margin: 0px auto ;
      color: #847577
      
    }
    #edit_menu_mi form{
        margin: 0 auto;
        width: 50%;
    }
    #edit_menu_mi input, select{
        margin: 10px;
    }
    
    #posarea_mi{
        margin-left: 23px;
    }
    
    .style-submit_mi{
        color:#E5E6E4;
        background-color: #A6A2A2;
        height: 60px;
        font-size: 30px;
    }
    
</style>