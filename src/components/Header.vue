<template>
    <div class="Header">
        <div class="LogoPlace">
            logo
        </div>
        <div class="MidPart">
            MidPart
        </div>
        <div class="ButtonPlaces">
            <button type="button" class="tal">Save</button>
            <button type="button" class="tal">Save</button>
            <button type="button" class="tal">Save</button>
            <button type="button" class="tal">Save</button>
            <button type="button" class="tal">Save</button>
        </div>
    </div>
    <div class="Banner">
        Banner
    </div>
</template>

<style scoped>
.Header {
    display: grid;
    grid-auto-flow: row;
    grid-area: Header;
    background: red;
    min-height: 100px;
    align-items: center;
}

.Banner {
    background: blue;
    height: 200px;
}

.LogoPlace {
    grid-column: 1;
    /* Primera columna */
    grid-row: 1;
    /* Primera fila */
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