<template>
  <div>
    <b-container
      class="mt-4 d-none d-sm-none d-md-block eventdetails__hero-section"
      :style="{ backgroundImage: `url(${event.img})` }"
    >
      <b-row>
        <b-col class="col">
          <!-- imagen en tamaño escritorio -->
          <b-container class="eventdetails__hero-section-wrapper">
            <b-container class="eventdetails__hero-section-info-wrapper"
              ><b-card-title class="eventdetails__hero-section-info-title">
                {{ event.name }}
              </b-card-title>
              <b-card-title class="eventdetails__hero-section-info-subtitle">
                {{ event.address }}, {{ event.city }}, {{ event.region }}
              </b-card-title>
              <p class="eventdetails__hero-section-info">
                {{ event.creator }}
              </p></b-container
            >
          </b-container>
          <!-- imagen en tamaño mobile -->
        </b-col>
      </b-row>
    </b-container>
    <b-container class="d-block d-sm-block d-md-none">
      <b-row>
        <b-col class="col">
          <b-img fluid :src="event.img" rounded> ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="eventdetails__info-wrapper">
      <b-row>
        <!-- Información de evento -->
        <b-col sm="12" md="12" lg="8" xl="8">
          <div class="d-block d-sm-block d-md-none">
            <h5 class="eventdetails__title mb-3">{{ event.name }}</h5>
            <p class="eventdetails__text">
              {{ event.address }}, {{ event.comun }}, {{ event.city }}
            </p>
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
            <p class="eventdetails__text my-3">
              {{ event.cupos }} disponible/s
            </p>
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
            <div v-for="(review, index) in event.reviews" :key="index">
              <div>
                <img
                  :src="review.avatar"
                  alt=""
                  class="eventdetails__review-avatar d-inline"
                />
                <p class="d-inline mx-2 eventdetails__review-user">
                  {{ review.name }} {{ review.lastName }}
                </p>
              </div>
              <p class="eventdetails__review-text mb-3">{{ review.review }}</p>
            </div>
            <b-form @submit.prevent="addReview()" v-if="userReviewed">
              <div v-if="user.email != ''">
                <b-form-textarea
                  id="textarea"
                  required
                  v-model="review"
                  placeholder="Agrega un nuevo comentario..."
                  rows="3"
                  max-rows="6"
                  class="mt-3"
                ></b-form-textarea>
                <div class="d-flex justify-content-end">
                  <b-button type="submit" variant="primary" class="my-3"
                    >Enviar comentario</b-button
                  >
                </div>
              </div>
            </b-form>
          </div>
        </b-col>
        <!-- Price card -->
        <b-col sm="12" md="12" lg="4" xl="4">
          <b-card class="my-3 shadow-sm p-3 mb-5 bg-white rounded border-0">
            <b-list-group flush>
              <b-list-group-item class="eventdetails__text">
                Precio {{ event.price }} / persona
              </b-list-group-item>
              <b-list-group-item class="eventdetails__text">
                Quedan {{ this.event.cupos - this.event.reserva.length }} cupos
                restantes
              </b-list-group-item>
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
                        variant="danger"
                        size="sm"
                        class="eventdetails__card-list-button"
                        v-if="bookedUser"
                        @click="deleteBooking"
                        >Cancelar reserva</b-button
                      >
                      <b-button
                        variant="primary"
                        size="sm"
                        class="eventdetails__card-list-button"
                        v-else-if="
                          this.event.cupos <= this.event.reserva.length
                        "
                        disabled
                        >No quedan cupos
                      </b-button>

                      <b-button
                        variant="primary"
                        size="sm"
                        class="eventdetails__card-list-button"
                        v-else-if="user.email == ''"
                        @click="pushLogin"
                        >Iniciar sesion</b-button
                      >

                      <b-button
                        variant="primary"
                        size="sm"
                        class="eventdetails__card-list-button"
                        v-else
                        @click="createBooking"
                        >Reservar</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between eventdetails__text"
              >
                <p class="pt-2 eventdetails__card-list-bottom-text">
                  *Las clases se pagan en el lugar donde se realizan.
                </p>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import { setDoc, doc } from "firebase/firestore/lite";
import { db } from "../main";
import router from "@/router";
export default {
  components: { MapComponent },
  name: "EventDetailsView",
  props: ["id"],
  data: () => ({
    review: "",
    reservaCreada: false,
    userReviewed: true,
  }),
  methods: {
    ...mapActions("events", ["addEvent"]),
    async addReview() {
      console.log(this.event.reviews);
      let data = {
        name: this.user.name,
        lastName: this.user.lastName,
        avatar: this.user.avatar,
        review: this.review,
      };
      this.event.reviews.push(data);
      const ref = doc(db, "events", this.id);
      await setDoc(ref, { reviews: this.event.reviews }, { merge: true });
      console.log(this.event.reviews);
      this.userReviewed = false;
    },
    async createBooking() {
      this.event.reserva.push(this.user.email);
      const ref = doc(db, "events", this.id);
      await setDoc(
        ref,
        {
          reserva: this.event.reserva,
        },
        { merge: true }
      );
    },
    async deleteBooking() {
      this.reservaCreada = this.event.reserva.filter(
        (reservaUser) => reservaUser !== this.user.email
      );
      const ref = doc(db, "events", this.id);
      await setDoc(
        ref,
        {
          reserva: this.reservaCreada,
        },
        { merge: true }
      );
      router.go();
    },
    filtrarReserva() {
      this.reservaCreada = this.event.reserva.filter(
        (reservaUser) => reservaUser === this.user.email
      );
      console.log(this.reservaCreada);
    },

    pushLogin() {
      this.$router.push(`/login`);
    },
  },
  computed: {
    ...mapGetters("events", ["getEventById"]),
    event() {
      const { id } = this;
      return this.getEventById(id);
    },
    ...mapState("session", ["user"]),
    bookedUser() {
      return (
        this.event &&
        !!this.event.reserva.find(
          (reservaUser) => reservaUser === this.user.email
        )
      );
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
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
.eventdetails__card-list-bottom-text {
  font-size: 12px;
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
.eventdetails__hero-section {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
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
  width: 1440px;
  top: 302px;
  left: -12px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(249, 249, 249, 0) 100%
  );
  border-radius: 5px;
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
}
.eventdetails__review-avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.eventdetails__review-text {
  margin-left: 35px;
  margin-top: 3px;
  font-weight: 400;
  font-size: 14px;
}
.eventdetails__review-user {
  font-size: 14px;
  font-weight: 600;
}
</style>
