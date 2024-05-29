<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"} 
</script>

<template>

    <Header/>

    <div class="row my-3" id="pos_chat">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla">

                <tr>
                    <td colspan="2" id="pos_taza_text_c2"><img :src=texto_taza.img>
                    
                    <p id="pos_text">que quieres saber</p>

                    </td>
                </tr>
                <tr>
                    <td id="alinear"><h1>pregunta</h1>
                        <h1>pregunta</h1>
                        <h1>pregunta</h1>
                    </td>
                    <td><img :src=taza.img id="pos_taza_c2"></td>

                </tr>
                <tr>
                    <td></td>
                </tr>

            </table>

        </div>

    </div>
    
    <Footer/>
   
</template>

<style scoped>

#pos_chat{
    position: sticky;

}

#pos_tabla{
    grid-template-columns: repeat(auto-fit, minmax(9rem,1fr));
    background-color: transparent;
    margin: 0 auto;
}
#pos_taza_c2{

    width: 320px;

}

#pos_taza_text_c2{

    position: relative;
    width: 320px;

}

#pos_taza_text_c2 img{

width: 320px;

}

#pos_taza_text_c2 p{
    position: absolute;
    top:3rem;
    left: 1.5rem;
    right: 11rem;
    text-align: center;


}
#alinear{
    text-align: right;
}
</style>