<template>
    <div  class="row bg-color_error_404 pos_error_404">
        <div class="col-md-12 bg-color_error_404" id="edit_error_404">
            <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
        </div>

        <div class="col-md-12 bg-color_error_404" id="edit_error_404">
            <h1>Error 404</h1>
        </div>
        <div class="col-md-12 bg-color_error_404" id="edit_error_404">
            <h2>página no encontrada</h2>
        </div>
        <div class="col-md-12 bg-color_error_404" id="edit_error_404">
            <router-link to="/"><button type="button" class="Buttons_error_404" name="">Volver a la página principal</button></router-link>
        </div>

        
    </div>
</template>

<style>

.pos_error_404{
    margin-top:200px
}

.bg-color_error_404{
    background-color: #FBFBF2;
}
#edit_error_404{
    text-align: center;
    margin-top:20px
}

.Buttons_error_404 {

color: #847577;
font-size: 20px;
background-color: transparent;
padding: 14px 20px;
border: none;
text-align: center;
}

.Buttons_error_404:hover {
padding: 14px 20px;
background-color: #A6A2A2;
color: #E5E6E4;
}
</style>