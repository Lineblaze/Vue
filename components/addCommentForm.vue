<template>
  <v-container style="max-width: 60%">
    <div class="text-h5 pt-13 text-center">Добавить комментарий:</div>
    <v-form ref="form">
      <v-text-field
        ref="name"
        v-model="name"
        :counter="25"
        :rules="nameRules"
        label="Имя"
        required
      ></v-text-field>

      <v-textarea
        ref="comment"
        v-model="comment"
        :counter="300"
        label="Текст комментария"
        rows="3"
        :rules="commentRules"
        class="mb-5 mt-1"
      ></v-textarea>

      <v-btn
        :disabled="valid"
        color="teal darken-3 white--text"
        class="mr-4"
        @click="addComment"
      >Добавить
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Очистить</v-btn>
    </v-form>
  </v-container>
</template>

<script>

export default {
  name: "Form",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Обязательное поле",
      (v) => (v && v.length <= 15) || "Максимум 25 символов",
    ],
    comment: "",
    commentRules: [
      (v) => !!v || "Обязательное поле",
      (v) => v.length <= 300 || "Max 300 characters",
    ],
  }),

  watch: {
    name() {
      this.checkValidity();
    },
    comment() {
      this.checkValidity();
    },
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    addComment() {
      try {
        this.$axios.post(
          `http://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`,
          {
            user_name: this.name,
            comment: this.comment,
          }
        );
        this.$emit('updateCommentsList')
        this.reset()
      } catch (e) {
        console.log(e);
      }
    },
    checkValidity() {
      this.valid = !(
        this.$refs.name.validate() && this.$refs.comment.validate()
      );
    },
  },
};
</script>

<style scoped></style>

