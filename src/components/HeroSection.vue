<template>
  <vueper-slides fade :touchable="false">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
    <div class="slider-background">
      <div class="slider-details">
        <div class="slider-details-positioning">
          <b-button style="font-weight: 600" variant="light"
            >Destacado</b-button
          >
          <h1 class="slider-details-title">{{ slides[0].title }}</h1>
          <p class="slider-details-description">
            A saltar y moverse que la vida es ahora! Súmate al entrenamiento
            funcional al aire libre para mejorar la funcionalidad de tu cuerpo.
            Movilidad, fuerza, resistencia, coordinación y capacidad aeróbica.
          </p>
        </div>
      </div>
    </div>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "HeroCarousel",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Running 30k",
        content: "Slide 1 content.",
        image: require("@/assets/guy-running.jpg"),
      },
      {
        title: "Running por Brooklyn",
        content: "Slide 2 content.",
        image: require("@/assets/guy-running-bridge.jpg"),
      },
    ],
  }),
};
</script>

<style>
.slider-background {
  display: flex;
  z-index: 2;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(249, 249, 249, 0) 100%
  );
  padding: 36px;
}
.slider-details {
  font-family: var(--basefontFamily);
  color: white;
  display: flex;
  align-items: flex-end;
}
.slider-details-description {
  max-width: 500px;
  margin: 0;
}
.slider-details-positioning {
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.slider-details-title {
  font-size: 45px;
  margin: 0;
}
</style>
