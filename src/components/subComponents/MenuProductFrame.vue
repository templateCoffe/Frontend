<template>
    <div id=producto class="row my-3">
        <div class="col-md-4">
           <img id="img_menu" v-bind:src="product.header_img" alt="producto" />
        </div>
        <div class="col-md-8" id="informacion">
            <h1>{{product.name}}</h1>
            <p>{{product.description}}</p>
            <p id="precio">$ {{product.price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>