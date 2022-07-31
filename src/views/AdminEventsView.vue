<template>
  <div>
    <div v-if="events.length === 0" class="container container-admin">
      <h1>No tienes eventos creados</h1>
      <button class="btn btn-primary">Crea tu primer evento</button>
    </div>
    <!-- Tarjetas con los eventos -->
    <div v-else>
      <div class="container fluid">
        <h1 class="eventscards-categorytitle my-5">Mis eventos</h1>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 gx-4">
          <div
            class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 eventsCards-cards"
            v-for="(event, index) in this.events"
            :key="index"
          >
            <EventsCards :event="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsCards from "@/components/EventsCards.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "AdminView",
  components: { EventsCards },
  computed: {
    ...mapGetters("events", ["getEventByEmail"]),
    ...mapState("session", ["user"]),
    events() {
      return this.getEventByEmail(this.user.email);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
}

.container-admin {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container-admin h1 {
  text-align: center;
}

.container-admin button {
  text-align: center;
  max-width: 300px;
}
</style>
