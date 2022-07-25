<template>
  <div>
    <!-- <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
      img-alt="Card Image"
      text-variant="white"
      title="hola"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        voluptatem reprehenderit error, aut architecto doloribus obcaecati.
        Quaerat ipsa officiis neque at blanditiis, consequuntur dolores
        praesentium odit omnis porro, corrupti tempore.</b-card-text
      >
    </b-card> -->
    <b-card no-body style="width: 100%; height: 100%" class="mb-5">
      <b-card-body>
        <div class="d-flex justify-content-between eventsCards-title">
          <b-card-title class="eventsCards-cardTitle">{{
            EventById.name
          }}</b-card-title>

          <b-card-title class="eventsCards-cardTitle-eventScore"
            ><b-icon
              class="eventsCards-cardTitle-eventScore-icon"
              icon="star-fill"
              style="color: #0f172a"
            ></b-icon
          ></b-card-title>
        </div>
        <b-card-title class="d-flex text-left eventsCards-eventPrice">
        </b-card-title>
        <b-card-title class="d-flex text-left eventsCards-eventPlace">
        </b-card-title>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "EventDetailsHS",
  props: ["event"],
};
</script>

<style>
.eventdetailshs__title-location {
  font-size: 14px;
}
.eventdetailshs__text-wrapper {
  margin-top: 20%;
}
.eventdetailshs__container {
  position: relative;
}
.eventdetailshs__img {
  width: 100%;
}
.eventdetailshs__title {
  color: white;
}
</style>
