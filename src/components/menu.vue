<script setup>
  import Header from './Header.vue';
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
  <div class="row my-3">
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
</div>
</template>

<style>

  table{
    background-color: #A6A2A2;
    color: rgb(255, 255, 255);
    margin: 0px auto;
  }
  .TableButtons {

color: #FBFBF2;
font-size: 20px;
background-color: transparent;
padding-left: 10px;
margin: 20px;
border: none;
display: absolute;
text-align: center;
cursor: pointer;
width: 100%;
}

.TableButtons:hover {

transition: 0ms;
padding-left: 10px;
transform: translateX(-20px);
background-color: #E5E6E4;
color:  #A6A2A2;
border: none;
}
</style>