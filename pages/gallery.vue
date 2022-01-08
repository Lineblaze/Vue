<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in articles"
        :key="i"
        class="d-flex child-flex"
        cols="2"
      >
        <v-img
          :src="'/img/' + item.preview_image"
          lazy-src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",

  computed: {
    articles() {
      return this.$store.getters.GET_ARTICLES;
    },
  }
};
</script>

<style scoped>

</style>
