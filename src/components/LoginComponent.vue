<template>
  <div class="container-login">
    <h2 class="text-center">Bienvenido a fitmapp</h2>
    <p class="text-center">
      PRTAL es Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit duis enim velit mollit.
    </p>
    <hr />
    <b-form class="login-form-container" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Correo electronico:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Correo electronico"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          required
        ></b-form-input>
        <a href="">¿Olvidaste tu contraseña?</a>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("session", ["signInWithEmailAndPassword"]),
    async onSubmit(event) {
      event.preventDefault();
      await this.signInWithEmailAndPassword(this.form);
    },
  },
};
</script>

<style scoped>
.container-login {
  max-width: 508px;
  padding: 32px;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
