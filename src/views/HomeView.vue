<template>
  <div>
    <HeroSection />

    <SearchBar :events="events" @eventsFiltered="newEventsList" />
    <CategoryButtons @getFilters="setFilter" />

    <!-- Tarjetas con los eventos -->
    <div>
      <h1></h1>
      <div class="container fluid">
        <h3 class="eventsCards-Title my-5">Clases cerca de ti</h3>
        <div class="row row-cols-1 row-cols-md-3 gx-4">
          <div
            class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 eventsCards-cards"
            v-for="(event, index) in filteredByCategory"
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
import HeroSection from "@/components/HeroSection.vue";
import SearchBar from "@/components/SearchBar.vue";
import EventsCards from "@/components/EventsCards.vue";
import { mapState, mapActions } from "vuex";
import CategoryButtons from "@/components/CategoryButtons.vue";
export default {
  name: "HomeView",
  components: { EventsCards, HeroSection, SearchBar, CategoryButtons },
  data: () => ({
    eventsFiltered: [],
    filter: "",
  }),
  mounted() {
    this.getAllEvents();
  },
  computed: {
    ...mapState("events", ["events"]),
    filteredByCategory() {
      if (this.filter === "") {
        return this.events;
      } else {
        return this.events.filter((event) => event.category === this.filter);
      }
    },
  },
  methods: {
    ...mapActions("events", {
      getAllEvents: "getEvents",
    }),
    setFilter(value) {
      this.filter = value;
      console.log(value);
    },
    newEventsList(filtered) {
      this.eventsFiltered = filtered;
      console.log(this.eventsFiltered);
    },
  },
};
</script>
<style scoped>
.eventsCards-Title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  text-align: left;
}
/* * {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
} */

@media (max-width: 576px) {
  .eventsCards-cards {
    margin-left: 3rem;
  }
}
</style>
