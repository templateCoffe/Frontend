<template>
    <div class="Header">
        <div class="LogoPlace">
            logo
        </div>
        <div class="MidPart">
            MidPart
        </div>
        <div class="ButtonPlaces">
            <button type="button" class="headerButtons">Save</button>
            <button type="button" class="headerButtons">Save</button>
            <button type="button" class="headerButtons">Save</button>
            <button type="button" class="headerButtons">Save</button>
            <button type="button" class="headerButtons">Save</button>
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
    min-height: 100px;
    align-items: center;
}

.headerButtons {

    color: #847577;
    font-size: 20px;
    background-color: transparent;
    padding: 14px 30px;
    border: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    cursor: pointer;
  }
  
  .headerButtons:hover {
  
    transition: 0ms;
    padding: 14px 30px;
    transform: translateY(-0px);
    background-color: #A6A2A2;
    color: #E5E6E4;
    border: none;
  }

.Banner {
    background-image: url('https://image.slidesdocs.com/responsive-images/background/coffee-shop-bar-interior-powerpoint-background_0e0a795d8e__960_540.jpg');
    height: 300px;
    width: auto;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
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