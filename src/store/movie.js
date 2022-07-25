import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    movies: []
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '14c167f8'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data 
      commit('updateState', {
        movies: Search
      })

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10) 
      
      if(pageLength > 1) {
        for(let i = 2; i <= pageLength; i += 1) {
          if ( i > (number / 10)) break
          
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${i}`)
          const { Search } = res.data
          commit('updateState', {
            movies: [...state.movies, ...Search]
          }) 
        }
      }
    }
  }
}
