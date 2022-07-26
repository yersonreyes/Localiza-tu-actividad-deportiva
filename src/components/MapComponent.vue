<template>
  <div class="map-container">
    <div id="map"></div>
    <button v-if="cords" class="btn btn-primary mt-3" @click="paintRute">
      Mostrar ruta mas directa
    </button>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapState } from "vuex";
let map;
export default {
  props: ["city", "region", "address", "comun"],
  data: function () {
    return {
      eventLocation: null,
      rute: null,
    };
  },
  methods: {
    toEvent() {
      map.flyTo({
        center: this.eventLocation.features[0].center,
        essential: true,
        zoom: 15, // this animation is considered essential with respect to prefers-reduced-motion
      });
    },
    async paintRute() {
      await this.getGeocoders();
      let geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              properties: {},
              coordinates: this.rute,
            },
          },
        ],
      };
      new mapboxgl.Marker({ color: "#1d4ed8" })
        .setLngLat(this.cords)
        .setPopup(
          new mapboxgl.Popup(this.cords).setHTML("<h1>Hello World!</h1>")
        )
        .addTo(map);
      map.addSource("LineString", {
        type: "geojson",
        data: geojson,
      });
      map.addLayer({
        id: "LineString",
        type: "line",
        source: "LineString",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#BF93E4",
          "line-width": 5,
        },
      });
      map.flyTo({
        center: this.cords,
        essential: true,
        zoom: 15, // this animation is considered essential with respect to prefers-reduced-motion
      });
    },
    async getGeocoders() {
      let inicio = this.eventLocation.features[0].center[0];
      let final = this.eventLocation.features[0].center[1];
      let inicio2 = this.cords[0];
      let final2 = this.cords[1];
      let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${inicio},${final};${inicio2},${final2}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoieWVyc29uZGV2IiwiYSI6ImNrbXVvaGI1dzEzbXYycG81OGE1aW1ndHoifQ.KbWYHPe1oIQFmkr8ofD6jg`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (this.rute = data.routes[0].geometry.coordinates));
    },
    async getEventLocation() {
      let direccion = this.address;
      let city = this.city;
      let region = this.region;
      let comun = this.comun;
      let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${direccion} ${city} ${region} ${comun}.json?country=cl&limit=1&proximity=-70.65662687109311%2C-33.44235715531418&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoieWVyc29uZGV2IiwiYSI6ImNrbXVvaGI1dzEzbXYycG81OGE1aW1ndHoifQ.KbWYHPe1oIQFmkr8ofD6jg`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => (this.eventLocation = data));
    },
    createMap() {
      map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: this.eventLocation.features[0].center, // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });
      new mapboxgl.Marker({ color: "#1d4ed8" })
        .setLngLat(this.eventLocation.features[0].center)
        .setPopup(
          new mapboxgl.Popup(this.eventLocation.features[0].center).setHTML(
            "<h1>Hello World!</h1>"
          )
        )
        .addTo(map);
      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });
    },
  },
  computed: {
    ...mapState("geolocation", ["cords"]),
  },
  async mounted() {
    await this.getEventLocation();
    this.createMap();
    await this.$store.dispatch("geolocation/getInitialLocation");
  },
};
</script>

<style scoped>
#map {
  height: 320px;
  width: 100%;
}

.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
</style>
