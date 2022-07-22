<template>
  <div>
    <HeroSection />

    <SearchBar :events="events" @getSearchData="setSearchData" />
    <div v-if="searchData === ''">
      <CategoryButtons @getFilters="setFilter" />
    </div>
    <!-- Tarjetas con los eventos -->
    <div>
      <h1></h1>
      <div class="container fluid">
        <h3
          class="eventsCards-Title my-5"
          v-if="searchData === '' && filter === filter"
        >
          Categorías
        </h3>
        <div v-show="searchData">
          <div>
            <h3 class="eventsCards-Title my-5 d-inline-flex">
              Resultados para la búsqueda: "{{ searchData }}"
              <b-button class="mx-2" pill variant="dark" @click="resetSearch"
                >Realizar una nueva búsqueda</b-button
              >
            </h3>
          </div>
        </div>
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
    searchData: "",
    filter: "",
  }),
  mounted() {
    this.getAllEvents();
  },
  computed: {
    ...mapState("events", ["events"]),
    filteredByCategory() {
      // if (this.filter === "" && this.searchData === "") {
      //   return this.events; }
      if (this.filter === "" && this.searchData === this.searchData) {
        return this.events.filter((event) =>
          event.name.toLowerCase().match(this.searchData.toLowerCase())
        );
        // } else if (this.filter === "" && this.searchData === this.searchData) {
        //   return this.filter;
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
    resetSearch() {
      this.filter = "";
      this.searchData = "";
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
