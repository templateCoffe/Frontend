<script setup>
const facebook = { img: "facebook.png" };
const instagram = { img: "Instagram.png" };
const tiktok = { img: "tiktok.png" };
</script>

<template>
    <footer>
    <div class="SocialMedia ">
        <b id="SMTitle">Lema del lugar</b>
        <a href="mailto:info@templatecoffee.com"><p id="SMMail">info@templatecoffee.com</p></a>
        <div id="SMIcons">
          <a href="https://www.facebook.com/"><img height="30px" :src="facebook.img" alt="logo facebook"></a>
          <a href="https://www.instagram.com/"><img height="30px" :src="instagram.img" alt="logo instagram"></a>
          <a href="https://www.tiktok.com/"><img height="30px" :src="tiktok.img" alt="logo tiktok"></a>
        </div>
    </div>
    <div class="Footer">
        <p>© 2024 Template Coffee</p>
    </div>
</footer>
</template>

<style scoped>
.SocialMedia {

    display: grid;
    flex-direction: column;
    background-color: #A6A2A2;
    height: 150px;
    text-align: center;
    align-content: center;

}

a {
    text-decoration: none
}

#SMTitle {
    color: #FBFBF2;
    font-size: 32px;
}

#SMMail {
    color: #FBFBF2;
    font-size: 16px;
}

.Footer {
    grid-area: Footer;
    background-color: #847577;
    bottom: 0;
    height: 40px;
    text-align: center;
    align-content: center;
    color: #FBFBF2;
    
}

#SMIcons {
    display: grid;
    grid-auto-columns: 40 px;
    gap: 40px 50px;
    grid-auto-flow: column;
    justify-content: center;
}
</style>