<template>
  <div id="app">
    <NavBarComponent />
    <router-view class="container-margin" />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
export default {
  components: { NavBarComponent },

  async mounted() {
    await this.$store.dispatch("session/subscribeToAuthStateChange");
    await this.$store.dispatch("session/getUser");
  },
};
</script>

<style>
:root {
  --basefontFamily: "Inter", sans-serif;
  --basefontFamily2: "Open Sans", sans-serif;
}
.container-margin {
  padding-top: 58px;
}
</style>
