<template>
  <div id="app">
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
export default {
  components: { NavBarComponent },
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>

<style>
:root {
  --basefontFamily: "Inter", sans-serif;
  --basefontFamily2: "Open Sans", sans-serif;
}
</style>
