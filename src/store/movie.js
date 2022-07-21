export default {
  namespaced: 'true',
  state: () => ({
    movies: []
  }),
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: {
    searchMovies() {
      
    }
  }
}