<template>
    <div  class="row bg-color_error_401 pos_error_401">
        <div class="col-md-12 bg-color_error_401" id="edit_error_401">
            <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
        </div>

        <div class="col-md-12 bg-color_error_401" id="edit_error_401">
            <h1>Error 401</h1>
        </div>
        <div class="col-md-12 bg-color_error_401" id="edit_error_401">
            <h2>no autorizado</h2>
        </div>
        <div class="col-md-12 bg-color_error_401" id="edit_error_401">
            <router-link to="/"><button type="button" class="Buttons_error_401" name="">Volver a la página principal</button></router-link>
        </div>

        
    </div>
</template>

<style>

.pos_error_401{
    margin-top:200px
}

.bg-color_error_401{
    background-color: #FBFBF2;
}
#edit_error_401{
    text-align: center;
    margin-top:20px
}

.Buttons_error_401{

color: #847577;
font-size: 20px;
background-color: transparent;
padding: 14px 20px;
border: none;
text-align: center;
}

.Buttons_error_401:hover {
padding: 14px 20px;
background-color: #A6A2A2;
color: #E5E6E4;
}
</style>