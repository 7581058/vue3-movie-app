<template>
  <RouterLink to="/" class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style scoped lang="scss">
@import "~/scss/main";
  .logo {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: $red-100;
    text-decoration: none;
    &:hover {
      color: $red-100;
    }
    span {
      color: $primary;
    }
  }  
</style>