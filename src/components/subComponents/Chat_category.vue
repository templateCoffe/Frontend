<script setup>
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"} 
</script>

<template>

    <div class="row my-3">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla_cc">

                <tr>
                    <td colspan="2" id="pos_taza_text_cc"><img :src=texto_taza.img>
                    
                    <p >¡hola!<br>¿en que puedo ayudarte? </p>

                    </td>
                </tr>
                <tr>
                    <td id="edit_categoria"><h1>categoría</h1>
                        <h1>categoría</h1>
                        <h1>categoría</h1>
                    </td>
                    <td><img :src=taza.img id="pos_taza_cc"></td>

                </tr>
                <tr>
                    <td></td>
                </tr>

            </table>

        </div>

    </div>
</template>

<style scoped>

#pos_tabla_cc{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(9%, -45%) ;
    
}
#pos_taza_cc{

    width: 280px;
    margin-top:-20px;
    margin-left: -50px ;

}

#pos_taza_text_cc{

    position: relative;


}

#pos_taza_text_cc img{

width: 420px;
margin-left:-13px;

}

#pos_taza_text_cc p{
    position: absolute;
    top:2rem;
    left: 0rem;
    right: 8rem;
    text-align: center;
    color: #847577;
    font-size: 20px;


}
#edit_categoria{
    vertical-align: top;
    
}

#edit_categoria h1{

    background-color: #e5e6e4;
    border-radius: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    color:#847577

}

</style>