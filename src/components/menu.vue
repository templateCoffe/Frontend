<script setup>
  const cafe = {img:"cafe.jpg"}
  const cappucchino = {img:"cappucchino.jpg"}
  import Header from './Header.vue';
  import Footer from './Footer.vue';
      
</script>

<template>
  <Header />
<div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id = "cabecera">

              <a><button type="button" class="TableButtons"> Bebidas Calientes  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas Frias  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas con Licor  </button></a>
              <a><button type="button" class="TableButtons"> Postres artesanales  </button></a>
              <a><button type="button" class="TableButtons">Especialidades</button></a>
        </div>
        <div id = cuerpo >
          <div id = producto class="row my-3">
            <img :src=cafe.img id="img">
            <h1>cafe</h1>
            <p>cafe echo a a base de leche con granos traidos de colombia</p>
          </div>
          <div id = producto class="row my-3">
            <img :src=cappucchino.img id="img">
            <h1>cappucchino</h1>

          </div>


        </div>
      </div>
  </div>
<Footer />
</template>

<style>
  #cabecera {    
padding: 19px;
background-color: #A6A2A2 ;
width: 90%;
margin: 0px auto;
}
#cuerpo {
background-color: #E5E6E4;    
border:3px solid #A6A2A2;
padding: 19px;
width: 90%;
margin: 0px auto;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
}
#producto {
  position:relative;
background-color: #FBFBF2;
padding: 20px;
width: 100%;
margin: 0px auto;
border-radius: 20px;
}

  .TableButtons {
display: inline-block;
color: #FBFBF2;
font-size: 20px;
background-color: transparent;
margin-left: 50px;
margin-right: 50px;
border: none;
text-align: center;
cursor: pointer;
}

.TableButtons:hover {
transition: 0ms;
transform: translateX(0px);
background-color: #E5E6E4;
color:  #A6A2A2;
border: none;
}
#img{
  width: 40%;
  
  
}
#producto h1 {
  position:absolute ;
  left:20%;
  text-align: center;
  font-size: 20px;

}
#producto p{
  position:absolute;
  left:20%;
  text-align: center;
  top: 45px;
  
  
}
</style>