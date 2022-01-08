export const state = () => ({
  articles: []
});

export const mutations = {
  SET_ARTICLES(state, payload) {
    state.articles = payload;
  },
};

export const actions = {
  async GET_ARTICLES({commit}) {
    let {data} = await this.$axios.get("http://demo-api.vsdev.space/api/articles");
    commit("SET_ARTICLES", data);
  }
};

export const getters = {
  GET_ARTICLES(state) {
    return state.articles;
  }
};
