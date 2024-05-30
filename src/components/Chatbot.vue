<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const taza = {img:"taza.png"}
const texto_taza = {img:"texto_taza.png"} 
</script>

<template>

    <Header/>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>


    <div class="row my-3" id="pos_chat_c">

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >


            <table id="pos_tabla_c">

                <tr>
                    <td colspan="2" id="pos_taza_text_c"><img :src=texto_taza.img>
                    
                    <p >¿Cuál es tu inquitud? </p>

                    </td>
                </tr>
                <tr>
                    <td id="edit_pregunta_c"><h1>pregunta</h1>
                        <h1>pregunta</h1>
                        <h1>pregunta</h1>
                    </td>
                    <td><img :src=taza.img id="pos_taza_c"></td>

                </tr>
                <tr>
                    <td></td>
                </tr>

            </table>

        </div>

    </div>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex qui explicabo distinctio doloremque, enim id placeat, ut veniam est, ad doloribus. Blanditiis nostrum eaque culpa dolor optio commodi tenetur nam!</p>



    
    <Footer/>
   
</template>

<style scoped>

#pos_tabla_c{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(9%, -45%) ;
    
}
#pos_taza_c{

    width: 280px;
    margin-top:-20px;
    margin-left: -50px ;

}

#pos_taza_text_c{

    position: relative;


}

#pos_taza_text_c img{

width: 420px;
margin-left:-13px;

}

#pos_taza_text_c p{
    position: absolute;
    top:3rem;
    left: 0rem;
    right: 8rem;
    text-align: center;
    color: #847577;
    font-size: 20px;


}
#edit_pregunta_c{
    vertical-align: top;
    
}

#edit_pregunta_c h1{

    background-color: #e5e6e4;
    border-radius: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    color:#847577

}

</style>