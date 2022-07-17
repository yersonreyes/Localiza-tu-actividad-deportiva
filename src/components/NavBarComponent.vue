<template>
  <div class="nav-container">
    <div class="container">
      <b-navbar class="nav" toggleable="lg" type="light" variant="light">
        <b-navbar-brand @click="pushHome">
          <div class="logo-container">
            <img
              class="logo"
              src="https://res.cloudinary.com/dd3sndpg3/image/upload/v1657931597/logo_xclfuc.png"
              alt=""
            />
            <p class="logo-title">fitmapp</p>
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="pushHome">Home</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <div v-show="!activeLogin" class="nav-button-container">
              <b-button @click="pushLogin" variant="outline-primary"
                >Sign in</b-button
              >
              <b-button @click="pushRegister" variant="primary"
                >Sign up</b-button
              >
            </div>

            <b-nav-item-dropdown v-show="activeLogin">
              <template #button-content>
                <em class="avatar-title">
                  <img class="avatar" :src="verificateAvatar()" alt="" />
                  {{ user.name + " " + user.lastName }}
                </em>
              </template>
              <b-dropdown-item href="#">
                <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                Profile</b-dropdown-item
              >
              <b-dropdown-item href="#">
                <b-icon icon="plus-lg" aria-hidden="true"></b-icon>
                Publicar</b-dropdown-item
              >
              <b-dropdown-item @click="closeSesion" href="#">
                <b-icon icon="door-closed-fill" aria-hidden="true"></b-icon>
                Sign Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions("session", ["signOut"]),
    async closeSesion() {
      await this.signOut();
    },
    pushLogin() {
      this.$router.push(`/login`);
    },

    pushRegister() {
      this.$router.push(`/register`);
    },

    pushHome() {
      this.$router.push(`/`);
    },

    verificateAvatar() {
      return this.user.avatar
        ? this.user.avatar
        : "https://res.cloudinary.com/dd3sndpg3/image/upload/v1658037467/avatar_wrasff.png";
    },
  },
  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
  },
};
</script>

<style lang="scss" scoped>
#nav-collapse {
  justify-content: space-between;
}

.nav-container {
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.nav {
  background-color: white !important;
}

.nav-button-container {
  display: flex;
  gap: 12px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 2rem;
  height: 2rem;
}

.logo-title {
  font-family: var(--basefontFamily2) !important;
  margin: 0;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
}

.avatar-container {
  display: flex;
}

.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.avatar-title {
  font-family: var(--basefontFamily);
  font-style: normal;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  color: #0f172a;
  text-decoration: none;
}
</style>
