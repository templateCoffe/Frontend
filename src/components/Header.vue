<template>
    <div class="Header">
        <div class="LogoPlace">
            logo
        </div>
        <div class="MidPart">
            MidPart
        </div>
        <div class="ButtonPlaces">
            Button Places
        </div>
    </div>
    <div class="Banner">
        Banner
    </div>
</template>

<style scoped>
.Banner {
    grid-area: Banner;
    background: blue;
    height: 200px;
  }

  .MidPart {
    grid-area: 1 / 1 / 2 / 2;
  }
  
  .ButtonPlaces {
    grid-area: 1 / 2 / 2 / 3;
  }
  
  .LogoPlace {
    grid-area: 1 / 1 / 2 / 1;
  }
</style>