<script setup>
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"} 
</script>

<template>

    <div class="row my-3">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla_cr">

                <tr>
                    <td colspan="2" id="pos_taza_text_cr"><img :src=texto_taza.img>
                    
                    <p >Respuesta </p>

                    </td>
                </tr>
                <tr>
                    <td id="respuesta">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita non illum eligendi saepe neque! Quod consequatur laboriosam sequi animi cupiditate voluptas perspiciatis fugiat, veritatis, rerum, excepturi odit! Culpa, nobis.</p>
                       
                       
                    </td>
                    <td><img :src=taza.img id="pos_taza_cr"></td>

                </tr>
                <tr>
                    <td id="edit_atras_cr"> <h1>volver atrás</h1></td>
                </tr>

            </table>

        </div>

    </div>
</template>

<style scoped>

#pos_tabla_cr{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(6%, -2%);
    
}
#pos_taza_cr{

    width: 180px;
    margin-top:-20px;
    margin-left: -40px ;
}

#pos_taza_text_cr{

    position: relative;

}

#pos_taza_text_cr img{

    width: 250px;
margin-left:0px;

}

#pos_taza_text_cr p{
    position: absolute;
    top:2rem;
    left: 0rem;
    right: 5rem;
    text-align: center;
    color: #847577;
    font-size: 10px;


}
#edit_atras_cr{
    text-align: center;
    
}
#edit_atras_cr h1{
    background-color: #e5e6e4;
    border: 2px solid black;
    border-radius: 5rem;
    color:#847577;
    font-size: 12px;
    margin-top: -10px ;

}


#respuesta{
width: 200px;
text-align: justify;
}

#respuesta p{
    font-size:10px;
    margin-top:-5px;
    background-color: #e5e6e4;
    border-radius: 10px;
    padding: 10px;
}

</style>