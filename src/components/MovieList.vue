<template>
  <div class="container">
    <div class="inner">
      <MovieItem v-for="moviez in movies" :key="moviez.imdbID" :movie="moviez" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
    }
  }
}
</script>