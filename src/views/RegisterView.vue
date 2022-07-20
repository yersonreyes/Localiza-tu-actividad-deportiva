<template>
  <div class="container register-view">
    <RegisterComponent />
  </div>
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent.vue";
export default {
  components: {
    RegisterComponent,
  },
};
</script>

<style>
.register-view {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
