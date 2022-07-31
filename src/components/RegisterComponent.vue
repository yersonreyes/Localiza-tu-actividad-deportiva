<template>
  <div class="container-login">
    <h2 class="text-center">Registro</h2>
    <p class="text-center subtitle">
      ¡Que gusto verte! Que tengas una excelente sesión deportiva el día de hoy
      ¡Vamos con todo!
    </p>
    <hr />
    <b-form class="login-form-container" @submit="onSubmit">
      <div class="d-flex align-items-center justify-content-right">
        <div class="img-container mx-2">
          <b-img
            v-if="selectedImg"
            :src="selectedImg"
            fluid
            class="registercomponent__preview-img my-3"
          />
        </div>
        <div>
          <label class="btn btn-primary img-label" for="img-input">
            Cargar foto
          </label>
          <input
            id="img-input"
            required
            type="file"
            @change="selectImg($event)"
          />
        </div>
      </div>
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
      <div class="container-name">
        <b-form-group id="input-group-5" label="Nombre" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.name"
            placeholder="Nombre"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-6" label="Apellido" label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="form.lastName"
            placeholder="Apellido"
            required
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Contraseña (Debe tener 8 caracteres o más)"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Repetir contraseña"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.password2"
          type="password"
          placeholder="Contraseña"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Registrar</b-button>
    </b-form>
    <b-alert class="mt-3" v-if="errorRegister" show variant="danger">{{
      errorRegister
    }}</b-alert>
    <b-alert class="mt-3" v-if="passwordValidator" show variant="danger">{{
      passwordValidator
    }}</b-alert>
    <p class="register-p">
      ¿Ya tienes una cuenta?
      <router-link class="register" to="/login">Iniciar Sesíon</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { storageRef } from "@/main.js";
export default {
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        avatar: "",
      },
      passwordValidator: false,
      selectedImg: "",
    };
  },
  methods: {
    ...mapActions("session", ["registerUser", "getUser"]),
    async onSubmit(event) {
      event.preventDefault();
      if (this.form.password !== this.form.password2) {
        this.passwordValidator = "Las contraseñas no son iguales";
        return;
      } else {
        await this.registerUser(this.form);
        this.passwordValidator = false;
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
        this.selectedImg = e.target.result;
      };
      await storageRef.child("avatars").child(this.img.name).put(this.img);
      const urlImg = await storageRef
        .child("avatars")
        .child(this.img.name)
        .getDownloadURL();
      this.form.avatar = urlImg;
    },
  },
  computed: {
    ...mapGetters("session", ["errorRegister"]),
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

.container-name {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.changePassword {
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
.img-container {
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: relative;
  flex-direction: column;
  position: relative;
  border-radius: 50%;
  background-color: #e2e8f0;
}
.img-label {
  display: inline-flex;
}

#img-input {
  display: none;
}

hr {
  background-color: lightgray;
}

@media (max-width: 768px) {
  .container-login {
    padding: 16px 16px 6px 16px;
  }

  .container-name {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
