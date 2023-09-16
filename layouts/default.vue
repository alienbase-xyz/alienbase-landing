<template>
  <div class="layout-container h-full max-w-screen overflow-clip">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout-container {
  background-image: url(/img/footer-illustration.png);
  background-repeat: no-repeat;
  background-size: 954px;
  background-position: center 95%; /* 95.3 farms */

  @media screen and (min-width: 765px) {
    background-size: 2154px;
    background-position: center 102%; /* 101.5 farms */
  }

  @media screen and (min-width: 1024px) {
    background-size: 2154px;
    background-position: center 111.5%; /* 109.5 farms */
  }

  @media screen and (min-width: 1408px) {
    background-size: 2504px;
    background-position: center 116%; /* 113 farms */
  }
}
</style>
