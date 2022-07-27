<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 gx-4">
      <div v-for="(booking, index) in bookings" :key="index">
        <BookingCard :booking="booking" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BookingCard from "../components/BookingCard.vue";
export default {
  mounted() {
    this.getAllBookings();
  },
  components: { BookingCard },
  computed: {
    ...mapState("events", ["bookings"]),
  },
  methods: {
    ...mapActions("events", {
      getAllBookings: "getBookings",
    }),
  },
};
</script>

<style></style>
