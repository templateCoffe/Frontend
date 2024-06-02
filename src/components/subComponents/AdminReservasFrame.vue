<template>
  <div id="producto" class="row my-3">
    <div class="row" id="informacion">
      <div class="col-md-1 text-center">
        <p>{{ booking.id }}</p>
      </div>
      <div class="col">
        <a @click="toModificate(booking.id)" class="name"
          ><p>{{ booking.document }}</p>
        </a>
      </div>
      <div class="col">
        <a @click="toModificate(booking.id)" class="name"
          ><p>{{ booking.reservation.date }}</p>
        </a>
      </div>
      <div class="col">
        <a @click="toModificate(booking.id)" class="name"
          ><p>{{ booking.reservation.time }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["booking"],

  methods: {
    toModificate(id) {
      console.log(id);
      this.$router.push({ name: "procesar_reservas", params: { id: id } });
    },
  },
};
</script>

<style>
button {
  border: 0px;
  background-color: #fbfbf2;
}
input {
  width: 30px;
  height: 30px;
}

.name {
  font-size: 40px;
  text-decoration: none;
  color: gray;
}
</style>
