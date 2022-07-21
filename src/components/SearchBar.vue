<template>
  <div>
    <b-form @submit="onSubmit">
      <b-row class="my-5 mx-auto" align-h="center">
        <b-input-group class="content-styling">
          <b-input-group-prepend class="btn-outline-secondary">
            <b-dropdown
              size="lg"
              text="Santiago"
              variant="outline-secondary"
              class="btn-softgrey btn-outline-secondary"
            >
              <b-dropdown-item>Action A</b-dropdown-item>
              <b-dropdown-item>Action B</b-dropdown-item>
            </b-dropdown>
          </b-input-group-prepend>
          <b-form-input
            v-model="searchData"
            type="text"
            id="input-large"
            size="lg"
            placeholder="¿Qué actividad buscas?"
            class="text-style"
            ref="formReset"
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
  }),
  props: ["events"],
  methods: {
    onSubmit(event) {
      event.target.reset();
      this.$emit("getSearchData", this.searchData);
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
</style>
