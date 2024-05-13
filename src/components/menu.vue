<script setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
    const menu_cafe=[
      {
        id: "1",
        nombre: "cafe",
        img: "cafe.jpg",
        precio: "10000",
        descripcion: "descripcion café",
        ingredientes_principales: "ingredientes principales café"

      },
      {
        id: "2",
        nombre: "cappucchino",
        img: "cappucchino.jpg",
        precio: "20000",
        descripcion: "descripcion cappucchino",
        ingredientes_principales: "ingredientes principales cappucchino"
      },
      ];
      
</script>

<template>
  <Header />
  <!--<div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <table>
        <thead>
            <tr>
              <th><button type="button" class="TableButtons"> Bebidas Calientes  </button></th>
              <th><button type="button" class="TableButtons"> Bebidas Frias  </button></th>
              <th><button type="button" class="TableButtons"> Bebidas con Licor  </button></th>
              <th><button type="button" class="TableButtons"> Postres artesanales  </button></th>
              <th><button type="button" class="TableButtons">Especialidades</button></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
</div>-->
<div class="row my-3">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div id = "cabecera">

              <a><button type="button" class="TableButtons"> Bebidas Calientes  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas Frias  </button></a>
              <a><button type="button" class="TableButtons"> Bebidas con Licor  </button></a>
              <a><button type="button" class="TableButtons"> Postres artesanales  </button></a>
              <a><button type="button" class="TableButtons">Especialidades</button></a>
        </div>
        <div id = cuerpo>
          <p>este es el cuerpo</p>


        </div>
      </div>
  </div>
<Footer />
</template>

<style>

  /* table{
    background-color: #A6A2A2;
    color: rgb(255, 255, 255);
    margin: 0px auto;
  }*/

  #cabecera {    
padding: 19px;
background-color: #A6A2A2 ;
width: 70%;
margin: 0px auto;
}
#cuerpo {
background-color: #E5E6E4;    
border:3px solid #A6A2A2;
padding: 19px;
width: 70%;
margin: 0px auto;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
}

  .TableButtons {
display: inline-block;
color: #FBFBF2;
font-size: 20px;
background-color: transparent;
margin-left: 4%;
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
</style>