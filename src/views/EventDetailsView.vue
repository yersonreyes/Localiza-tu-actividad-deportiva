<template>
  <!-- Template de prueba!!! -->
  <div class="detalle py-5 d-flex justify-content-center container">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-5 img">
          <b-img :src="event.img" img-top style="width: 300px; height: 195px" />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h3 class="card-title text-capitalize">{{ event.name }}</h3>
            <hr />
            <p class="card-text">
              {{ event.desc }}
            </p>
            <p class="card-text"></p>
            <ul>
              <li class="text-capitalize w-75">/li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EventDetailsView",
  props: ["id"],
  computed: {
    ...mapGetters("events", ["getEventById"]),
    event() {
      const { id } = this;
      return this.getEventById(id);
    },
  },
};
</script>

<style scoped>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
