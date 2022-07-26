<template>
  <div>
    <b-container class="d-flex justify-content-around">
      <b-row class="row">
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Football' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Football')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="soccer"
                size="24"
                class="categoryButtons-icon"
              />Fútbol</span
            ></b-button
          >
        </b-col>
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Trekking' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Trekking')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="hiking"
                size="24"
                class="categoryButtons-icon"
              />Trekking</span
            ></b-button
          ></b-col
        >
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Tennis' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Tennis')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="tennis-ball"
                size="24"
                class="categoryButtons-icon"
              />Tenis</span
            ></b-button
          ></b-col
        ><b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Crossfit' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Crossfit')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="weight-lifter"
                size="24"
                class="categoryButtons-icon"
              />Crossfit</span
            ></b-button
          ></b-col
        >
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Calisthenics' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Calisthenics')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="dumbbell"
                size="24"
                class="categoryButtons-icon"
              />Calistenia</span
            ></b-button
          ></b-col
        >
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Surf' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Surf')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="surfing"
                size="24"
                class="categoryButtons-icon"
              />Surf</span
            ></b-button
          ></b-col
        ><b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Swimming' }"
            pill
            variant="outline-dark"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="swim"
                size="24"
                class="categoryButtons-icon"
                @click="assignFilter('Swimming')"
              />Natación</span
            ></b-button
          ></b-col
        >
        <b-col class="col col-xl col-md-2 col-sm-4 categorybuttons__cols">
          <b-button
            class="categorybuttons__button"
            :class="{ 'change-background': filter === 'Snowboard' }"
            pill
            variant="outline-dark"
            @click="assignFilter('Snowboard')"
          >
            <span class="d-flex align-items-center"
              ><mdicon
                name="snowboard"
                size="24"
                class="categoryButtons-icon"
              />Snowboard</span
            ></b-button
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {},
  data: () => ({
    filter: "",
  }),
  props: ["event"],
  computed: {
    ...mapState("events", ["events"]),
  },
  methods: {
    assignFilter(typeOfFilter) {
      if (this.filter === typeOfFilter) {
        this.filter = "";
        this.$emit("getFilters", this.filter);
      } else {
        this.filter = typeOfFilter;
        this.$emit("getFilters", this.filter);
      }
      console.log(this.filter);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
}
.categorybuttons__button {
  border-color: lightgray;
}
.change-background {
  background-color: black;
  color: white;
  border-color: black;
}
.categorybuttons__button:focus {
  outline: none;
  box-shadow: none;
}

.categorybuttons__cols {
  margin-bottom: 5px;
}
</style>
