<template>
  <div class="login-view container">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
export default {
  components: {
    LoginComponent,
  },
};
</script>

<style>
.login-view {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
