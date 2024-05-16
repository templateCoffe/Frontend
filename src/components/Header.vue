<template>
    <div class="Header">
        <div class="LogoPlace">
            <router-link to="/">
                <img src="https://github.com/templateCoffe/.github/blob/main/profile/images/logo.png?raw=true"
                    alt="logo" width="150" />
            </router-link>
        </div>
        <div class="MidPart"></div>
        <div class="ButtonPlaces">
            <router-link to="/menu"><button type="button" class="headerButtons" name="">Menú</button></router-link>
            <router-link to="/comentarios"><button type="button" class="headerButtons">Comentarios</button></router-link>
            <router-link to="/reservas"><button type="button" class="headerButtons">Reservas</button></router-link>
            <router-link to="/blog"><button type="button" class="headerButtons">Blog</button></router-link>
        </div>
    </div>
    <div class="Banner"></div>
    <router-view></router-view>
</template>

<style scoped>
.Header {
    display: grid;
    grid-auto-flow: row;
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
    display: absolute;
    text-align: center;
    cursor: pointer;
}

.headerButtons:hover {

    transition: 0ms;
    padding: 14px 20px;
    transform: translateY(-0px);
    background-color: #A6A2A2;
    color: #E5E6E4;
    border: none;
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

.MidPart {
    grid-column: 2;
    /* Segunda columna */
    grid-row: 1;
    /* Primera fila */

}

.ButtonPlaces {
    display: grid;
    grid-auto-flow: column;
    grid-column: 3;
    /* Tercera columna */
    grid-row: 1;
    /* Primera fila */
    text-align: center;
    gap: 0 38px;
    margin: 50px;
}
</style>