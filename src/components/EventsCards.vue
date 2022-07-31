<template>
  <div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`/events/${event.id}`"
    >
      <b-card no-body class="mb-5">
        <b-img :src="event.img" img-top class="eventcards__img" />

        <b-card-body>
          <div class="d-flex justify-content-between">
            <div>
              <b-card-title class="eventscards__title">{{
                event.name
              }}</b-card-title>
            </div>
            <b-card-title class="eventscards__card-title__score"
              ><b-icon
                class="eventscards__card-title__score-icon"
                icon="star-fill"
                style="color: #0f172a"
              ></b-icon
              >{{ event.score }}</b-card-title
            >
          </div>
          <b-card-title class="d-flex text-left eventscards__price">
            {{ event.price }}
          </b-card-title>
          <b-card-title class="d-flex text-left eventscards__place">
            {{ event.address }}
          </b-card-title>
          <b-card-title class="d-flex text-left eventscards__place">
            {{ event.comun }}, {{ event.city }}
          </b-card-title>
        </b-card-body>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  //Lazy Loading de las fotos. Después podemos poner uno más pro.
  data() {
    return {
      imgProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
      },
    };
  },
  props: ["event"],
};
</script>
<style scoped>
.eventscards__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.eventscards__card-title__score {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 2px;
}
.eventscards__card-title__score-icon {
  margin-right: 5px;
}
.eventscards__price {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-weight: bold;
}
.eventscards__place {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
}
.eventcards__img {
  height: 200px;
}
@media (max-width: 768px) {
  .eventcards__img {
    height: 300px;
  }
}
@media (max-width: 466px) {
  .eventcards__img {
    height: 250px;
  }
}
@media (max-width: 354px) {
  .eventcards__img {
    height: 200px;
  }
}
</style>
