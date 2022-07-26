<template>
  <div class="container">
    <b-container class="my-5">
      <div class="row">
        <div class="col-sm-12 col-lg-9 col-xl-6">
          <h1>Crear evento</h1>
          <div class="mt-4">
            <h5 class="d-flex justify-content-start">
              Sube una imagen para tu evento
            </h5>
            <b-img
              :src="selectedImg"
              fluid
              class="eventcreateview__preview-img my-3"
            />
          </div>

          <b-form @submit.prevent="CreateEvent()" class="login-form-container">
            <div class="img-container">
              <b-img fluid></b-img>
              <div class="input-group">
                <input
                  required
                  label="a"
                  type="file"
                  @change="selectImg($event)"
                />
              </div>
            </div>
            <b-form-group
              id="input-group-1"
              label="Nombre del evento"
              label-for="input-1"
              class="event-Text"
            >
              <b-form-input
                v-model="event.name"
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
                v-model="event.desc"
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
                v-model="event.price"
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
                v-model="event.priceInclude"
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
                v-model="event.cupos"
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
                v-model="event.date"
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
                v-model="event.address"
                id="input-7"
                type="text"
                placeholder="Ej. Av. Siempre Viva 123"
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
                v-model="event.city"
                id="input-8"
                type="text"
                placeholder="Ej. Santiago"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-8"
              label="Comuna"
              label-for="input-8"
              class="event-Text"
            >
              <b-form-input
                v-model="event.comun"
                id="input-8"
                type="text"
                placeholder="Ej. Providencia"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-9"
              label="Región"
              label-for="input-9"
              class="event-Text"
            >
              <b-form-select
                class="select"
                v-model="event.region"
                :options="options"
              ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Ingresar</b-button>
          </b-form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { db, storageRef } from "../main";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import router from "@/router";
export default {
  data: () => ({
    events: [],
    event: {
      name: "",
      desc: "",
      price: "",
      priceInclude: "",
      cupos: 0,
      date: "",
      address: "",
      comun: "",
      city: "",
      region: "",
      category: "crossfit",
    },
    img: "",
    selectedImg: "",
    options: [
      {
        value: null,
        text: "Seleccione una opción",
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
    async getEvents() {
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        let event = doc.data();
        event.id = doc.id;
        this.events.push(event);
        console.log(event);
      });
    },
    async CreateEvent() {
      try {
        await storageRef.child("images").child(this.img.name).put(this.img);
        const urlImg = await storageRef
          .child("images")
          .child(this.img.name)
          .getDownloadURL();
        await addDoc(collection(db, "events"), {
          name: this.event.name,
          desc: this.event.desc,
          img: urlImg,
          price: this.event.price,
          priceInclude: this.event.priceInclude,
          cupos: this.event.cupos,
          date: this.event.date,
          address: this.event.address,
          city: this.event.city,
          region: this.event.region,
          category: this.event.category,
          score: 4.3,
          userName: this.user.name,
          userLastName: this.user.lastName,
          userEmail: this.user.email,
        });
        this.error = "Imagen subida con éxito";
        this.file = null;
      } catch (error) {
        console.log(error);
      } finally {
        router.push("/");
      }
    },
    async selectImg(event) {
      console.log(event.target.files[0]);
      const typeImg = event.target.files[0].type;
      if (typeImg === "image/jpeg" || typeImg === "image/png") {
        this.img = event.target.files[0];
        this.error = null;
      } else {
        this.error = "Archivo no válido";
        this.img = null;
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.img);
      reader.onload = (e) => {
        this.selectedImg = e.target.result;
      };
    },
  },
  computed: { ...mapState("session", ["user"]) },
};
</script>

<style scoped>
* {
  font-family: "Inter";
}
.eventcreateview__preview-img {
  max-width: 75%;
  max-height: 75%;
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
