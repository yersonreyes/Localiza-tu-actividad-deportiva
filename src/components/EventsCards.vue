<template>
  <div @click="pushEvent" class="eventscard__container">
    <img :src="event.img" class="eventcards__img" />

    <div class="eventscard__body">
      <h4 class="eventscards__title">{{ event.name }}</h4>

      <p class="eventscards__price">
        {{ event.price }}
      </p>
      <p class="eventscards__place">
        {{ event.address }}
      </p>
      <p class="eventscards__place">{{ event.comun }}, {{ event.city }}</p>
    </div>
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
  methods: {
    pushEvent() {
      this.$router.push(`/events/${this.event.id}`);
    },
  },
};
</script>
<style>
.eventscard__container {
  margin: 0 auto;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.eventscard__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.eventscards__title {
  margin: 0;
  font-family: "Inter" !important;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  max-width: 250px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.eventscards__price {
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-weight: bold;
}
.eventscards__place {
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
}
.eventcards__img {
  margin: 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
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
