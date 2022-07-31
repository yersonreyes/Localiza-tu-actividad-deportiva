<template>
  <div class="container">
    <b-container class="my-5">
      <div class="row container-row">
        <div class="col-sm-12 col-lg-9 col-xl-6">
          <h1>Editar evento</h1>

          <b-form @submit.prevent="CreateEvent()" class="login-form-container">
            <div class="img-container">
              <b-img
                v-if="event.img"
                :src="event.img"
                fluid
                class="eventcreateview__preview-img my-3"
              />

              <label class="btn btn-primary img-label" for="img-input">
                Cargar foto
              </label>
              <input id="img-input" type="file" @change="selectImg($event)" />
            </div>
            <b-form-group
              id="input-group-1"
              label="Nombre del evento"
              label-for="input-1"
              class="event-Text width70"
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
              class="event-Text width70"
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
              class="event-Text width40"
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
              class="event-Text width70"
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
              class="event-Text width70"
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
              class="event-Text width70"
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
              class="event-Text width70"
            >
              <b-form-select
                class="select"
                v-model="event.region"
                :options="options"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-10"
              label="Categoria"
              label-for="input-10"
              class="event-Text width70"
            >
              <b-form-select
                class="select"
                v-model="event.category"
                :options="categoryOption"
              ></b-form-select>
            </b-form-group>

            <div class="button-container">
              <b-button
                @click="pushHome"
                type="button"
                variant="outline-primary"
                >Cancelar</b-button
              >
              <b-button @click="eventDelete" type="button" variant="danger"
                >Eliminar</b-button
              >
              <b-button type="submit" variant="primary">Guardar</b-button>
            </div>
            <div class="button-container button-top">
              <b-button
                @click="pushHome"
                type="button"
                variant="outline-primary"
                >Cancelar</b-button
              >
              <b-button type="submit" variant="primary">Guardar</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { db, storageRef } from "../main";
import { doc, setDoc, deleteDoc } from "firebase/firestore/lite";
import router from "@/router";
export default {
  data: () => ({
    events: [],
    img: "",
    selectedImg: false,
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

    categoryOption: [
      {
        value: null,
        text: "Seleccione una opción",
      },
      {
        value: "Football",
        text: "Football",
      },
      {
        value: "Trekking",
        text: "Trekking",
      },
      {
        value: "Tennis",
        text: "Tenis",
      },
      {
        value: "Crossfit",
        text: "Crossfit",
      },
      {
        value: "Calisthenics",
        text: "Calistenia",
      },
      {
        value: "Surf",
        text: "Surf",
      },
      {
        value: "Swimming",
        text: "Natación",
      },
      {
        value: "Snowboard",
        text: "Snowboard",
      },
      {
        value: "Otro",
        text: "Otro",
      },
    ],
  }),

  methods: {
    ...mapActions("events", ["addEvent"]),
    async CreateEvent() {
      try {
        let urlImg;
        if (this.selectedImg) {
          await storageRef.child("images").child(this.img.name).put(this.img);
          urlImg = await storageRef
            .child("images")
            .child(this.img.name)
            .getDownloadURL();
        } else {
          urlImg = this.event.img;
        }
        const ref = doc(db, "events", this.$route.params.id);
        await setDoc(
          ref,
          {
            name: this.event.name,
            desc: this.event.desc,
            img: urlImg,
            price: this.event.price,
            priceInclude: this.event.priceInclude,
            cupos: this.event.cupos,
            date: this.event.date,
            address: this.event.address,
            city: this.event.city,
            comun: this.event.comun,
            region: this.event.region,
            category: this.event.category,
            userName: this.user.name,
            userLastName: this.user.lastName,
            userEmail: this.user.email,
            userAvatar: this.user.avatar,
          },
          { merge: true }
        );

        this.error = "Imagen subida con éxito";
        this.file = null;
      } catch (error) {
        console.log(error);
      } finally {
        router.push("/");
      }
    },
    async selectImg(event) {
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
        this.event.img = e.target.result;
        this.selectedImg = e.target.result;
      };
    },

    pushHome() {
      router.push("/");
    },

    async eventDelete() {
      await deleteDoc(doc(db, "events", this.$route.params.id));
      router.push("/");
    },
  },
  computed: {
    ...mapState("session", ["user"]),

    ...mapGetters("events", ["getEventById"]),

    event() {
      return this.getEventById(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter";
}
.eventcreateview__preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 182px;
  position: relative;
  flex-direction: column;
  position: relative;
  border-radius: 0.5rem;
  background-color: #e2e8f0;
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

.container-row {
  position: relative;
}

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: end;
}

.button-top {
  position: absolute;
  top: 0;
  right: 0;
}

.width70 {
  width: 70%;
}

.width40 {
  width: 40%;
}

@media only screen and (max-width: 700px) {
  .width70 {
    width: 100%;
  }

  .width40 {
    width: 100%;
  }

  .button-top {
    display: none;
  }
}
</style>
