<template>
  <div>
    <b-container class="mt-4">
      <b-row>
        <b-col class="col">
          <!-- imagen en tamaño escritorio -->
          <b-container
            class="d-none d-sm-none d-md-block eventdetails__hero-section-wrapper"
          >
            <b-container class="eventdetails__hero-section-info-wrapper"
              ><p class="eventdetails__hero-section-info-title">
                {{ event.name }}
              </p>
              <p class="eventdetails__hero-section-info-subtitle">
                {{ event.place }}
              </p>
              <p class="eventdetails__hero-section-info">
                {{ event.creator }}
              </p></b-container
            >
            <b-img
              class="eventdetails__hero-section-img"
              :src="event.img"
              rounded
            ></b-img>
          </b-container>
          <!-- imagen en tamaño mobile -->
          <b-img
            class="d-block d-sm-block d-md-none"
            fluid
            :src="event.img"
            rounded
          >
            ></b-img
          >
        </b-col>
      </b-row>
    </b-container>
    <b-container class="eventdetails__info-wrapper">
      <b-row>
        <!-- Información de evento -->
        <b-col sm="12" md="12" lg="9" xl="9">
          <div class="d-block d-sm-block d-md-none">
            <h5 class="eventdetails__title mb-3">{{ event.name }}</h5>
            <p class="eventdetails__text">{{ event.place }}</p>
            <div class="d-flex justify-content-between">
              <p class="eventdetails__text">{{ event.creator }}</p>
              <div>
                <b-icon icon="star-fill" class="d-inline"></b-icon>
                <p class="eventdetails__text d-inline">
                  {{ event.score }}
                </p>
              </div>
            </div>
            <hr class="eventdetails__separator" />
          </div>
          <div>
            <h5 class="eventdetails__title my-3">Descripción</h5>
            <p class="eventdetails__text my-3">{{ event.desc }}</p>
            <hr class="eventdetails__separator" />
          </div>
          <div>
            <h5 class="eventdetails__title my-3">Cupos disponibles</h5>
            <p class="eventdetails__text my-3">6 disponibles</p>
            <hr class="eventdetails__separator" />
          </div>
          <div>
            <h5 class="eventdetails__title my-3">¿Cómo llegar?</h5>
            <MapComponent
              :city="event.city"
              :address="event.address"
              :region="event.region"
              :comun="event.comun"
            />
            <hr class="eventdetails__separator" />
          </div>
          <div>
            <h5 class="eventdetails__title my-3">Comentarios</h5>
            <p class="eventdetails__text my-3">COMENTARIOS</p>
          </div>
        </b-col>
        <!-- Price card -->
        <b-col sm="12" md="12" lg="3" xl="3">
          <b-card class="my-3">
            <b-list-group flush>
              <b-list-group-item class="eventdetails__text">
                Precio {{ event.price }} / persona
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-content-center"
              >
                <p class="pt-2 eventdetails__text">Personas</p>
                <div class="pt-2 align-content-center">
                  <b-button
                    variant="outline-dark"
                    class="eventdetails__card-buttons"
                  >
                    <p>-</p>
                  </b-button>
                  <p class="d-inline mx-2 eventdetails__text">2</p>
                  <b-button
                    variant="outline-dark"
                    class="eventdetails__card-buttons"
                    >+
                  </b-button>
                </div></b-list-group-item
              >
              <b-list-group-item>
                <b-row>
                  <b-col class="col justify-content-start">
                    <div class="my-2">
                      <p class="eventdetails__text">Incluye</p>
                      <li class="eventdetails__card-list-text">
                        {{ event.priceInclude }}
                      </li>
                    </div>
                  </b-col>
                  <b-col class="col d-flex justify-content-end">
                    <div class="my-2">
                      <b-button
                        variant="primary"
                        size="sm"
                        class="eventdetails__card-list-button"
                        >Reservar</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between eventdetails__text"
              >
                <p class="pt-2">Total</p>
                <p class="pt-2">$4.000</p></b-list-group-item
              >
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";
import { mapGetters } from "vuex";
export default {
  components: { MapComponent },
  name: "EventDetailsView",
  props: ["id"],
  computed: {
    ...mapGetters("events", ["getEventById"]),
    event() {
      const { id } = this;
      return this.getEventById(id);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
}
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.eventdetails__title {
  font-weight: 600;
  font-size: 20px;
}
.eventdetails__text {
  font-weight: 400;
  font-size: 14px;
}
.eventdetails__separator {
  color: #e2e8f0;
  height: 3px;
}
.eventdetails__card-list-text {
  list-style: none;
  font-size: 12px;
  font-weight: 400;
}
.eventdetails__card-buttons {
  width: 24px;
  height: 24px;
  padding: 0px 0px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.eventdetails__card-list-button {
  font-size: 12px;
}
.eventdetails__hero-section-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
}

.eventdetails__info-wrapper {
  padding: 35px;
}
.eventdetails__hero-section-info-wrapper {
  position: absolute;
  width: 100%;
  top: 220px;
}
.eventdetails__hero-section-info-title {
  font-size: 48px;
  font-weight: 600;
  color: white;
}
.eventdetails__hero-section-info-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: white;
}
.eventdetails__hero-section-img {
  object-fit: cover;
  width: 100%;
  max-height: 400px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 100%,
    rgba(9, 9, 121, 1) 31%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
