<script setup>
import {ref} from "vue"
let ver = ref(false)

const mostrar = () =>{
    if(ver.value==false){
        ver.value = true
    }
    else if (ver.value==true){
        ver.value = false
    }
}


</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="Header">
        <div class="LogoPlace">
            <router-link to="/">
                <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
            </router-link>
            
        </div>
        <input type="checkbox" @click="mostrar" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
        <nav class="ButtonPlaces" :class="{visible:ver}">
            
           
            <router-link to="/menu"><button type="button" class="headerButtons" name="">Menú</button></router-link>
            <router-link to="/comentarios"><button type="button" class="headerButtons">Comentarios</button></router-link>
            <router-link to="/reservas"><button type="button" class="headerButtons">Reservas</button></router-link>
            <router-link to="/blog"><button type="button" class="headerButtons">Blog</button></router-link>
            
            
        </nav>
        
    </div>
    <div class="Banner"></div>
    <router-view></router-view>
</template>

<style scoped>
.Header {
    display: grid;
    grid-auto-flow: flow;
    grid-area: Header;
    min-height: 100px;
    align-items: center;
}

.headerButtons {

    color: #847577;
    font-size: 20px;
    background-color: transparent;
    padding: 14px 20px;
    border: none;
    text-align: center;
    cursor: pointer;
}

.headerButtons:hover {
    padding: 14px 20px;
    background-color: #A6A2A2;
    color: #E5E6E4;
}

.Banner {
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/restaurant-bar_THXU08ODDE.jpg');
    height: 400px;
    width: 100%;
    background-size: cover;
    background-repeat: repeat-y;
    background-position: center bottom;
}

.LogoPlace {
    grid-column: 1;
    /* Primera columna */
    grid-row: 1;
    /* Primera fila */
    text-align: center;
}


.ButtonPlaces {
    
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem,1fr));
    grid-column: 2;
    /* Tercera columna */
    /* Primera fila */
    text-align: center;
    margin: 50px;
}
.checkbtn{
    display: none;
    position: absolute;
    font-size: 30px;
    color:#AAAA;;
    cursor: pointer;
    right: 0px;
    top: 10px
    
}
#check{
    display: none
}

@media(max-width: 1386px){
    .checkbtn{
        display: block;

    }
    .ButtonPlaces{
        opacity:0;
        visibility:hidden;
        position: absolute;
        left:-4rem;
        right: -4rem;
        bottom: 1;
        top: 45px;
        background: #FFFFFF;
        transition:all 0.5s;
        
        

    }
    .ButtonPlaces.visible{
        opacity: 1;
        visibility: visible;
    }
    .headerButtons{
       margin:10px
        
    }
    .LogoPlace {

        position:absolute;
   
    }
    .checkbtn{

        position: absolute;
        right: 10px;
        top:30px

    }
    
}

</style>