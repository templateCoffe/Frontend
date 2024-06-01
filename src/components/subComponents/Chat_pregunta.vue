<script setup>
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"} 
</script>

<template>

    <div class="row my-3">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla_cp">

                <tr>
                    <td colspan="2" id="pos_taza_text_cp"><img :src=texto_taza.img>
                    
                    <p >¿Cuál es tu inquietud? </p>

                    </td>
                </tr>
                <tr>
                    <td id="edit_pregunta"><h1>pregunta</h1>
                        <h1>pregunta</h1>
                        <h1>pregunta</h1>
                    </td>
                    <td><img :src=taza.img id="pos_taza_cp"></td>

                </tr>
                <tr>
                    <td></td>
                </tr>

            </table>

        </div>

    </div>
   
</template>

<style scoped>

#pos_tabla_cp{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(6%, 8%);
    
}
#pos_taza_cp{

    width: 180px;
    margin-top:-20px;
    margin-left: -40px ;

}

#pos_taza_text_cp{

    position: relative;


}

#pos_taza_text_cp img{

width: 250px;
margin-left:0px;

}

#pos_taza_text_cp p{
    position: absolute;
    top:2rem;
    left: 0rem;
    right: 5rem;
    text-align: center;
    color: #847577;
    font-size: 10px;


}
#edit_pregunta{
    vertical-align: top;
}

#edit_pregunta h1{
    

    background-color: #e5e6e4;
    border-radius: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    color:#847577;
    font-size: 12px;
    border: 2px solid black;

}

</style>