<template>
  <div>
    <b-container
      class="fluid my-5 d-flex justify-content-around"
      style="max-width: 1500px"
    >
      <b-row class="row gx-4">
        <b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="soccer"
                size="24"
                class="categoryButtons-icon"
              />Fútbol</span
            ></b-button
          >
        </b-col>
        <b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="tennis-ball"
                size="24"
                class="categoryButtons-icon"
              />Tenis</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="surfing"
                size="24"
                class="categoryButtons-icon"
              />Surf</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="weight-lifter"
                size="24"
                class="categoryButtons-icon"
              />Crossfit</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols"
          ><b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="kayaking"
                size="24"
                class="categoryButtons-icon"
              />Kayak</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="hiking"
                size="24"
                class="categoryButtons-icon"
              />Trekking</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="snowboard"
                size="24"
                class="categoryButtons-icon"
              />Snowboard</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="dumbbell"
                size="24"
                class="categoryButtons-icon"
              />Calistenia</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="swim"
                size="24"
                class="categoryButtons-icon"
              />Natación</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="tennis"
                size="24"
                class="categoryButtons-icon"
              />Padel</span
            ></b-button
          ></b-col
        ><b-col class="col categoryButtons-cols">
          <b-button class="categoryButtons-button" pill variant="outline-dark">
            <span class="d-flex align-items-center"
              ><mdicon
                name="tennis"
                size="24"
                class="categoryButtons-icon"
              />Padel</span
            ></b-button
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
}
.categoryButtons-button {
  border-color: lightgray;
}
.categoryButtons-cols {
  margin-bottom: 5px;
}
</style>
