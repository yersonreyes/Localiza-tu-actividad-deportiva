<template>
  <div class="container-login">
    <h2 class="text-center">Bienvenido a fitmapp</h2>
    <p class="text-center subtitle">
      ¡Que gusto verte otra vez! Que tengas una excelente sesión deportiva el
      día de hoy ¡Vamos con todo!
    </p>
    <hr />
    <b-form class="login-form-container" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Correo electronico"
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

      <b-form-group
        v-if="!change"
        id="input-group-2"
        label="Contraseña"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          required
        ></b-form-input>
      </b-form-group>
      <p @click="changelogin" v-if="!change" class="changePassword">
        ¿Olvidaste tu contraseña?
      </p>
      <p @click="changelogin" v-if="change" class="changePassword">
        Iniciar sesión
      </p>
      <b-button
        @click="resetPassword"
        :disabled="message"
        type="button"
        v-if="change"
        variant="primary"
        >Reiniciar contraseña</b-button
      >
      <b-button type="submit" v-if="!change" variant="primary"
        >Ingresar</b-button
      >
    </b-form>
    <b-alert class="mt-3" v-if="activeError" show variant="danger"
      >Email o contraseña no son validos</b-alert
    >
    <b-alert class="mt-3" v-if="message" show variant="primary"
      >Contraseña reiniciada con éxito, revisa tu Correo
    </b-alert>
    <p class="register-p">
      ¿Aún no tienes cuenta?
      <router-link class="register" to="/register">Registrarse</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      change: false,
      message: false,
    };
  },
  methods: {
    ...mapActions("session", [
      "signInWithEmailAndPassword",
      "getUser",
      "sendPasswordResetEmail",
    ]),
    async onSubmit(event) {
      event.preventDefault();
      await this.signInWithEmailAndPassword(this.form);
      await this.getUser();
    },
    async resetPassword() {
      if (this.form.email == "") {
        return;
      }
      this.sendPasswordResetEmail(this.form.email);
      this.message = true;
    },
    changelogin() {
      this.change = !this.change;
      this.message = false;
    },
  },
  computed: {
    ...mapGetters("session", ["activeError"]),
  },
};
</script>

<style scoped>
.container-login {
  position: relative;
  margin-top: 120px;
  max-width: 508px;
  padding: 32px 32px 12px 32px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.login-form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subtitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #94a3b8;
}

.changePassword {
  cursor: pointer;
  margin: 0;
  color: #1d4ed8;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: right;
}

.register-p {
  margin: 0;
  max-width: 500px;
  text-align: center;
  transform: translateY(50px);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.register {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  text-align: center;
  /* Neutral / Gray 50 */
}

hr {
  background-color: lightgray;
}

@media (max-width: 768px) {
  .container-login {
    padding: 16px 16px 6px 16px;
  }
}
</style>
