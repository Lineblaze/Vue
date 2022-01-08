<!--:to="{name: 'detailed-news', params: {id: item.id}}"-->


<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(item, i) in articles"
        :key="i"
        cols="4"
      >
        <v-card
          class="mx-auto purple darken-4"
          max-width="800"
          :link="true"
          :to="`news/${item.id}`"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="'/img/' + item.preview_image"
          >
            <v-card-title >{{ item.name }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>{{ item.shortDesc }}</div>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "News",

  computed: {
    articles() {
      return this.$store.getters.GET_ARTICLES;
    },
  },
};
</script>

