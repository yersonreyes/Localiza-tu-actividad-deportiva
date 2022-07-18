<template>
  <div>
    <HeroSection />
    <SearchBar :events="events" @eventsFiltered="newEventsList" />
    <CategoryButtons />
    <!-- Tarjetas con los eventos -->
    <div>
      <div class="container fluid">
        <h3 class="eventsCards-Title my-5">Clases cerca de ti</h3>
        <div class="row row-cols-1 row-cols-md-3 gx-4">
          <div
            class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 eventsCards-cards"
            v-for="(event, index) in events"
            :key="index"
          >
            <EventsCards
              :event="eventsFiltered ? event : this.eventsFiltered"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsCards from "@/components/EventsCards.vue";
import HeroSection from "@/components/HeroSection.vue";
import SearchBar from "@/components/SearchBar.vue";
import CategoryButtons from "@/components/CategoryButtons.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: { EventsCards, HeroSection, CategoryButtons, SearchBar },
  data: () => ({
    eventsFiltered: [],
  }),
  mounted() {
    this.getAllEvents();
  },
  computed: {
    ...mapState("events", ["events"]),
  },
  methods: {
    ...mapActions("events", { getAllEvents: "getEvents" }),
    newEventsList(filtered) {
      this.eventsFiltered = filtered;
      console.log(this.eventsFiltered);
    },
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
@media (max-width: 576px) {
  .eventsCards-cards {
    margin-left: 3rem;
  }
}
</style>
