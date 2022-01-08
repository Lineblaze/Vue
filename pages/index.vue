<template>
  <v-container>
    <div class="text-h3 py-5 text-center">Добро пожаловать!</div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in articles"
        :key="i"
        :src="'/img/' + item.full_image"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),

  computed: {
    articles() {
      return this.$store.getters.GET_ARTICLES.filter(
        (item) => item.slider === true
      );
    },
  },

};
</script>

<style scoped>

</style>
