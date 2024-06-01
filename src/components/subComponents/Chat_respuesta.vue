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
    transform: translate(9%, -45%);
    
}
#pos_taza_cr{

    width: 280px;
    margin-top:-20px;
    margin-left: -50px ;

}

#pos_taza_text_cr{

    position: relative;

}

#pos_taza_text_cr img{

width: 420px;
margin-left:-13px;

}

#pos_taza_text_cr p{
    position: absolute;
    top:3rem;
    left: 0rem;
    right: 9rem;
    text-align: center;
    color: #847577;
    font-size: 20px;


}
#edit_atras_cr{
    background-color: #e5e6e4;
    border-radius: 5rem;
    color:#847577;
    text-align: center;
 
    
}

#respuesta{
width: 318px;
vertical-align: top;
text-align: center;
}

</style>