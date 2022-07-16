<template>
  <!-- Tarjetas con los eventos -->
  <div>
    <div class="container fluid">
      <h3 class="eventsCards-Title my-5">Clases cerca de ti</h3>
      <div class="row row-cols-1 row-cols-md-3 gx-4">
        <div
          class="col col-xl-3 col-lg-4 col-md-6 col-sm-12"
          v-for="(event, index) in events"
          :key="index"
        >
          <EventsCards :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsCards from "@/components/EventsCards.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: { EventsCards },
  mounted() {
    this.getAllEvents();
  },
  computed: {
    ...mapState("events", ["events"]),
  },
  methods: {
    ...mapActions("events", { getAllEvents: "getEvents" }),
  },
};
</script>
<style>
.eventsCards-Title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  text-align: left;
}
</style>
