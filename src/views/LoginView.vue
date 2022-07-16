<template>
  <div class="login-view">
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
