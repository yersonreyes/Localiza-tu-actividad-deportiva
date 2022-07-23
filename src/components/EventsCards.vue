<template>
  <div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`/events/${event.id}`"
    >
      <b-card no-body style="width: 100%; height: 100%" class="mb-5">
        <b-img-lazy
          v-bind="imgProps"
          :src="event.img"
          img-top
          style="width: 100%px; height: 100%px"
        />

        <b-card-body>
          <div class="d-flex justify-content-between eventsCards-title">
            <b-card-title class="eventsCards-cardTitle">{{
              event.name
            }}</b-card-title>

            <b-card-title class="eventsCards-cardTitle-eventScore"
              ><b-icon
                class="eventsCards-cardTitle-eventScore-icon"
                icon="star-fill"
                style="color: #0f172a"
              ></b-icon
              >{{ event.score }}</b-card-title
            >
          </div>
          <b-card-title class="d-flex text-left eventsCards-eventPrice">
            {{ event.price }}
          </b-card-title>
          <b-card-title class="d-flex text-left eventsCards-eventPlace">
            {{ event.place }}
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
        width: 300,
        height: 195,
      },
    };
  },
  props: ["event"],
};
</script>
<style>
.eventsCards-cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}
.eventsCards-cardTitle-eventScore {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 2px;
}
.eventsCards-cardTitle-eventScore-icon {
  margin-right: 5px;
}
.eventsCards-eventPrice {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-weight: bold;
}
.eventsCards-eventPlace {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
</style>
