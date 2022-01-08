<!--<template>-->
<!--  <a @click="$router.go(-1)">back</a>-->
<!--</template>-->

<template>
    <v-container>
      <a @click="$router.go(-1)">Назад</a>
    <div class="text-h3 py-5 text-center">{{ article.name }}</div>
    <v-img
      :src="'/img/' + article.full_image"
      max-height="500"
      class="rounded-lg"
      alt=" "
    ></v-img>
    <div class="text-body-1 py-3">{{ article.desc }}</div>
    <div class="text-body-2 text-right font-weight-bold">
      Опубликовано: {{ article.date }}
    </div>
    <Comments />
  </v-container>
</template>

<script>
import Comments from "../../components/comments";

export default {
  name: 'detailed-news',
  components: Comments,

  async asyncData({route, $axios}) {
    const {data} = await $axios.get("http://demo-api.vsdev.space/api/articles/" + route.params.id);
    return {
      article: data
    }
  },

};

</script>
