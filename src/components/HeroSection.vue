<template>
  <vueper-slides fade :touchable="false">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
      :image="slide.image"
    />
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
        content:
          "A saltar y moverse que la vida es ahora! Súmate al entrenamiento funcional al aire libre para mejorar la funcionalidad de tu cuerpo. Movilidad, fuerza, resistencia, coordinación y capacidad aeróbica.",
        image: require("@/assets/guy-running.jpg"),
      },
      {
        title: "Trail Running Pichilemu",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi laborum.",
        image: require("@/assets/guy-running-bridge.jpg"),
      },
    ],
  }),
};
</script>

<style>
.vueperslide__content-wrapper {
  color: white;
  align-items: flex-start !important;
  justify-content: flex-end !important;
  padding: 36px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(249, 249, 249, 0) 100%
  );
}
.vueperslide__title {
  z-index: 3;
  font-size: 45px;
  font-weight: 600;
}
.vueperslide__content {
  max-width: 45%;
  text-align: left;
}
</style>
