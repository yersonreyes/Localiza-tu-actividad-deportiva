<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-9 col-xl-6">
        <h1>Crear evento</h1>

        <div class="img-container">
          <b-img :src="form.img" fluid alt="Responsive image"></b-img>
          <label class="btn btn-primary img-label" for="img-input"
            >Subir portada</label
          >
          <input type="file" id="img-input" />
        </div>
        <b-form @submit.prevent="CreateEvent" class="login-form-container">
          <b-form-group
            id="input-group-1"
            label="Nombre del evento"
            label-for="input-1"
            class="event-Text"
          >
            <b-form-input
              v-model="form.name"
              id="input-1"
              type="text"
              placeholder="Ej. Clase de Crossfit"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label=" Descripción "
            label-for="input-2"
            class="event-Text"
          >
            <b-form-textarea
              v-model="form.desc"
              id="input-group-2"
              placeholder="Agregar una descripción para tu evento..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Precio"
            label-for="input-3"
            class="event-Text"
          >
            <b-form-input
              v-model="form.price"
              id="input-3"
              type="text"
              placeholder="$"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label=" ¿Qué incluye el evento?"
            label-for="input-4"
            class="event-Text"
          >
            <b-form-textarea
              v-model="form.priceInclude"
              id="input-4"
              placeholder="Indica que incluye el evento"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Cupos disponibles"
            label-for="input-5"
            class="event-Text"
          >
            <b-form-spinbutton
              id="input-5"
              v-model="form.cupos"
              inline
            ></b-form-spinbutton>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Fecha"
            label-for="input-6"
            class="event-Text"
          >
            <b-form-input
              v-model="form.date"
              id="input-6"
              type="date"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-7"
            label="Dirección"
            label-for="input-7"
            class="event-Text"
          >
            <b-form-input
              v-model="form.place"
              id="input-7"
              type="text"
              placeholder="Ej. Av. Siempre Viva"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="Ciudad"
            label-for="input-8"
            class="event-Text"
          >
            <b-form-input
              v-model="form.city"
              id="input-8"
              type="text"
              placeholder="Ej. Santiago"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-9"
            label="Regíon"
            label-for="input-9"
            class="event-Text"
          >
            <b-form-select
              class="select"
              v-model="form.region"
              :options="options"
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Ingresar</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    form: {
      name: "",
      desc: "",
      img: "https://res.cloudinary.com/dd3sndpg3/image/upload/v1658724230/Hero-template_b0vtby.png",
      place: "",
      price: "",
      priceInclude: "",
      cupos: 0,
      date: "",
      city: null,
      region: null,
      category: "crossfit",
    },
    options: [
      {
        value: null,
        text: "Seleccione una opcion",
      },
      {
        value: "Región Metropolitana",
        text: "Región Metropolitana",
      },
      {
        value: "Región de Arica y Parinacota",
        text: "Región de Arica y Parinacota",
      },
      {
        value: "Región de Tarapacá",
        text: "Región de Tarapacá",
      },
      {
        value: "Región de Atacama",
        text: "Región de Atacama",
      },
      {
        value: "Región de Coquimbo",
        text: "Región de Coquimbo",
      },
      {
        value: "Región de Valparaíso",
        text: "Región de Valparaíso",
      },
      {
        value: "Región de O'Higgins",
        text: "Región de O'Higgins",
      },
      {
        value: "Región del Maule",
        text: "Región del Maule",
      },
      {
        value: "Región de Ñuble",
        text: "Región de Ñuble",
      },
      {
        value: "Región del Bíobío",
        text: "Región del Bíobío",
      },
      {
        value: "Región de la Araucanía",
        text: "Región de la Araucanía",
      },
      {
        value: "Región de los Ríos",
        text: "Región de los Ríos",
      },
      {
        value: "Región de los Lagos",
        text: "Región de los Lagos",
      },
      {
        value: "Región de Aysén",
        text: "Región de Aysén",
      },
      {
        value: "Región de Magallanes",
        text: "Región de Magallanes",
      },
    ],
  }),

  methods: {
    ...mapActions("events", ["addEvent"]),
    async CreateEvent() {
      await this.addEvent({
        name: this.form.name,
        desc: this.form.desc,
        img: this.form.img,
        place: this.form.place,
        price: this.form.price,
        priceInclude: this.form.priceInclude,
        cupos: this.form.cupos,
        date: this.form.date,
        city: this.form.city,
        region: this.form.region,
        category: this.form.category,
        score: 4.3,
        userName: this.user.name,
        userLastName: this.user.lastName,
        userEmail: this.user.email,
      });
      this.$router.push(`/`);
    },
  },
  computed: { ...mapState("session", ["user"]) },
};
</script>

<style scoped>
.container {
  padding-top: 150px;
}
.login-form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.event-Text {
  color: #475569;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

.select {
  width: 100%;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
}

.img-container {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
}
.img-label {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
}
#img-input {
  display: none;
}
</style>
