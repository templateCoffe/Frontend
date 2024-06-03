<script setup>
    const taza = {img:"taza.png"}
    const texto_taza = {img:"texto_taza.png"}
    const cerrar = {img:"cerrar.png"}
    import {ref} from "vue"
    let mostrarc = ref(false)
    let mostrarp = ref(true)
    let mostrarr = ref(true)
    let verc = ref(false)
    let verp = ref(true)
    let verr = ref(true)
    let rotar = ref(false)
    const avanzar = () => {
        if(mostrarc.value == false){
            mostrarc.value = true
            mostrarp.value = false
            verc.value = true
            verp.value = false

        }

        else if (mostrarp.value == false){
            mostrarp.value = true
            mostrarr.value = false
            verp.value = true
            verr.value = false


            

        }
    }

    const retroceder = () => {
        if(mostrarp.value == false){
            mostrarc.value = false
            mostrarp.value = true
            verc.value = false
            verp.value = true
        }

        else if (mostrarr.value == false){
            mostrarp.value = false
            mostrarr.value = true
            verp.value = false
            verr.value = true


        }
    }

    const abrir_cerrar = () =>{

        if(mostrarc.value == false && verc.value == false){
            verc.value = true
            rotar.value = true
        }
        else if(mostrarc.value == false && verc.value == true){
            verc.value = false
            rotar.value = false
        }

        if(mostrarp.value == false && verp.value == false){
            verp.value = true
            rotar.value = true
        }
        else if(mostrarp.value == false && verp.value == true){
            verp.value = false
            rotar.value = false
        }

        if(mostrarr.value == false && verr.value == false){
            verr.value = true
            rotar.value = true
        }
        else if(mostrarr.value == false && verr.value == true){
            verr.value = false
            rotar.value = false
        }




    }

    

</script>

<template>
    <div class="edit_button">
    
    <button @click="abrir_cerrar"><img :src=cerrar.img class="e_img" :class="{rotar:rotar}"></button>
</div>
<!--categoria-->
 <div class="row my-3">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >
            <table id="pos_tabla_cc" :class="{es_visible:mostrarc, es_visible:verc}">
                <tr>
                    <td colspan="2" id="pos_taza_text_cc"><img :src=texto_taza.img>
                    <p >¡hola!<br>¿en que puedo ayudarte? </p>
                    </td>
                </tr>
                <tr>
                    <td  id="edit_categoria">
                        <input type="button" @click="avanzar"   value="categoria">
                        <input type="button" @click="avanzar"   value="categoria">
                        <input type="button" @click="avanzar"  value="categoria">
                    </td>
                    <td><img :src=taza.img id="pos_taza_cc"></td>
                </tr>
            </table>
        </div>
    </div>

<!--pregunta-->

<div class="row my-3">
<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >
    <table id="pos_tabla_cp" :class="{es_visible:mostrarp, es_visible:verp}">
        <tr>
            <td colspan="2" id="pos_taza_text_cp"><img :src=texto_taza.img>
            <p >¿Cuál es tu inquietud? </p>
            </td>
        </tr>
        <tr>
            <td id="edit_pregunta">
                        <input type="button" @click="avanzar" id="e_input_cc" value="pregunta">
                        <input type="button"  @click="avanzar"  value="pregunta">
                        <input type="button"  @click="avanzar"  value="pregunta">
                        <input type="button"  @click="retroceder"  value="salir">
            </td>
            <td><img :src=taza.img id="pos_taza_cp"></td>
        </tr>
    </table>
</div>
</div>

<!--respuesta-->

<div class="row my-3">
<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12" >
    <table id="pos_tabla_cr" :class="{es_visible:mostrarr,  es_visible:verr}">
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
            <td id="edit_atras_cr"> <input type="button"  @click="retroceder" value="salir"></td>
        </tr>
    </table>
</div>
</div>

</template>

<style scoped>

.edit_button{
    position: fixed;
    left:1;
   top:1;
   right: 0;
   bottom: 0;
   transform: translate(-10%, 0%);

}
.edit_button img{
    width: 100%;
}
.edit_button button
{
    width:50px;
    background:transparent;
}

.e_img.rotar{
    transform: rotate(180deg);
}


/*categoria*/
#pos_tabla_cc{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(-15%, 0%);

}
#pos_taza_cc{
    width: 130px;
}
#pos_tabla_cc.es_visible{
    opacity: 0;
    visibility: visible;
    display: none;
    transform:rotate(360deg);
}
#pos_taza_text_cc{
    position: relative;
}
#pos_taza_text_cc img{
width: 250px;
margin-left:20px;
}
#pos_taza_text_cc p{
    position: absolute;
    top:1.5rem;
    left: 0rem;
    right: 4rem;
    text-align: center;
    color: #847577;
    font-size: 10px;
}

#edit_categoria input{
     background-color: #e5e6e4;
    border-radius: 5rem;
    display: block;
    color:#847577;
    font-size: 12px;
    border: 2px solid black;
    cursor: pointer;
    margin:5px;


}
/*pregunta*/
#pos_tabla_cp{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(-15%, 0%);
}
#pos_tabla_cp.es_visible{
    opacity: 0;
    visibility: visible;
    display: none;
}
#pos_taza_cp{
    width: 130px;
}
#pos_taza_text_cp{
    position: relative;
}
#pos_taza_text_cp img{
    width: 250px;
    margin-left:20px;
}
#pos_taza_text_cp p{
    position: absolute;
    top:2rem;
    left: 0rem;
    right: 4rem;
    text-align: center;
    color: #847577;
    font-size: 10px;
}
#edit_pregunta input{
    background-color: #e5e6e4;
    border-radius: 5rem;
    display: block;
    color:#847577;
    font-size: 12px;
    border: 2px solid black;
    cursor: pointer;
    margin:5px;
}

/*respuesta*/

#pos_tabla_cr{
    position: fixed;
   left:1;
   top:1;
   right: 0;
   bottom: 0;
    background-color: transparent;
    transform: translate(-15%, -2%);
}
#pos_tabla_cr.es_visible{
    opacity: 0;
    visibility: visible;
    display:none ;
}
#pos_taza_cr{
    width: 130px;
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
#edit_atras_cr input{
    background-color: #e5e6e4;
    border: 2px solid black;
    border-radius: 5rem;
    color:#847577;
    font-size: 12px; ;
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