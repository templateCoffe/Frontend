<template>
<div v-for="category in categories" :key="category.idDrink">

    <img v-bind:src="category.strDrinkThumb" alt="">
    <h6>{{ category.strDrink }}</h6>

</div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                categories: []
            }
        },
        mounted(){
            axios
            // description, image_url, name, flavor_profile
            .get("https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then((res) => {
            console.log(res)
            this.categories = res.data.drinks
            })
            .catch((err) => {
            console.log(err);
            });
        }
    }
</script>