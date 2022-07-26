<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-row class="my-5 mx-auto" align-h="center">
        <b-input-group class="content-styling">
          <b-input-group-prepend
            class="btn-outline-secondary searchbar__dropdown"
          >
            <b-dropdown
              size="lg"
              :text="locationFilter"
              variant="outline-secondary"
              class="btn-softgrey btn-outline-secondary searchbar__dropdown"
            >
              <b-dropdown-item disabled value="0" class="searchbar__dropdown"
                >Elije una región</b-dropdown-item
              >
              <b-dropdown-item
                class="searchbar__dropdown"
                v-for="option in regiones.options"
                :key="option.value"
                :value="option.value"
                @click="locationFilter = option.value"
              >
                {{ option.text }}</b-dropdown-item
              >
            </b-dropdown>
          </b-input-group-prepend>
          <b-form-input
            v-model="searchData"
            type="text"
            id="input-large"
            size="lg"
            placeholder="¿Qué actividad buscas?"
            class="text-style searchbar__input"
            ref="formReset"
            required
          ></b-form-input>

          <b-input-group-append>
            <b-button
              type="submit"
              id="button-shape"
              size="lg"
              variant="primary"
              >Buscar</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    searchData: "",
    locationFilter: "Región Metropolitana",
    regiones: {
      options: [
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
    },
  }),
  props: ["events"],
  methods: {
    onSubmit(event) {
      event.target.reset();
      this.$emit("getSearchData", this.searchData);
      this.$emit("getLocationFilter", this.locationFilter);
      console.log(this.searchData);
    },
  },
};
</script>

<style>
.text-style {
  font-size: 16px !important;
}
#input-large {
  color: #212529;
}
.content-styling {
  font-size: 14px !important;
  max-width: 770px !important;
}
#button-shape {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-softgrey {
  border-color: #e2e8f0;
  color: white;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.btn-outline-secondary button {
  color: #0f172a;
  border-color: #e2e8f0;
}
.btn-outline-secondary:hover {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  background-color: black !important;
  color: white;
}
.btn-outline-secondary:active {
  background-color: black !important;
  color: white;
}
.btn-lg {
  min-height: 48px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}

@media (max-width: 576px) {
  .searchbar__dropdown {
    width: 100%;
  }
  .searchbar__input {
    width: 100%;
  }
} ;
</style>
