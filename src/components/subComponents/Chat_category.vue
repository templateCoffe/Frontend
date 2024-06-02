<script setup>
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"}
</script>

<template>

    <div class="row my-3">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla_cc" :class="{visible:mostrarc}">

                <tr>
                    <td colspan="2" id="pos_taza_text_cc"><img :src=texto_taza.img>
                    
                    <p >¡hola!<br>¿en que puedo ayudarte? </p>

                    </td>
                </tr>
                <tr>
                    <td id="edit_categoria">
                        
                        
                        <button @click="prueba()"><h1 >categoría</h1> </button>
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
    transform: translate(6%, 8%) ;
    
}
#pos_taza_cc{

    width: 180px;
    margin-top:-20px;
    margin-left: -40px ;
}

#pos_tabla_cc.visible{
    opacity: 0;
    visibility: visible;
}

#pos_taza_text_cc{

    position: relative;


}

#pos_taza_text_cc img{

width: 250px;
margin-left:0px;

}

#pos_taza_text_cc p{
    position: absolute;
    top:1.5rem;
    left: 0rem;
    right: 5rem;
    text-align: center;
    color: #847577;
    font-size: 10px;


}
#edit_categoria{
    vertical-align: top;
    
}

#edit_categoria h1{

    background-color: #e5e6e4;
    border-radius: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    color:#847577;
    font-size: 12px;
    border: 2px solid black;
    cursor: pointer;

}
#edit_categoria button{
    background: red;

}

</style>