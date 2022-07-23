<template>
  <div>
    <HeroSection />

    <SearchBar
      :events="events"
      @getSearchData="setSearchData"
      @getLocationFilter="setLocationFilter"
    />
    <div v-if="searchData === '' && locationFilter === ''">
      <CategoryButtons @getFilters="setFilter" />
    </div>
    <!-- Tarjetas con los eventos -->
    <div>
      <h1></h1>
      <div class="container fluid">
        <h1
          class="eventscards-categorytitle my-5"
          v-if="searchData === '' && filter === filter"
        >
          Categorías
        </h1>
        <div v-show="searchData">
          <div class="my-5">
            <p class="eventscards-searchtitle">
              Resultados para la búsqueda: "{{ searchData }}"
            </p>
            <b-button
              class="eventscards-newsearch btn-dark"
              size="sm"
              @click="clearSearch"
            >
              Realizar nueva búsqueda
            </b-button>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 gx-4">
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
    searchData: "",
    filter: "",
    locationFilter: "",
  }),
  mounted() {
    this.getAllEvents();
  },
  computed: {
    ...mapState("events", ["events"]),
    filteredByCategory() {
      if (this.filter === "" && this.searchData === this.searchData) {
        return this.events.filter(
          (event) =>
            event.name.toLowerCase().match(this.searchData.toLowerCase()) &&
            event.region.toLowerCase().match(this.locationFilter.toLowerCase())
        );
      } else if (this.searchData === "" && this.filter === this.filter) {
        return this.events.filter((event) => event.category === this.filter);
      } else if (
        this.searchData === this.searchData &&
        this.filter === this.filter
      ) {
        return this.events.filter((event) =>
          event.name.toLowerCase().match(this.searchData.toLowerCase())
        );
      } else {
        return this.events;
      }
    },
  },
  methods: {
    ...mapActions("events", {
      getAllEvents: "getEvents",
    }),
    setFilter(value) {
      this.filter = value;
    },
    setSearchData(value) {
      this.searchData = value;
    },
    setLocationFilter(value) {
      this.locationFilter = value;
    },
    clearSearch() {
      this.filter = "";
      this.searchData = "";
      this.locationFilter = "";
    },
  },
};
</script>
<style scoped>
.eventscards-categorytitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  text-align: left;
}
.eventscards-searchtitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
}
.eventscards-newsearch {
  cursor: pointer;
  text-align: left;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
}
/* * {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
} */
</style>
