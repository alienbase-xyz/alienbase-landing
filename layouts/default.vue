<template>
  <div class="layout-container h-full max-w-screen overflow-clip relative">
    <div
      class="hero-illustration-container absolute top-0 left-0"
      style="z-index: -1"
    >
      <IllustrationsHero />
    </div>
    <AppImg
      src="/webp/hero-illustration.webp"
      alt="Alien Blue Light"
      class="hero-illustration absolute pointer-events-none select-none top-0 left-[50%] transform translate-x-[-50%]"
      :class="{
        '<md:(w-954px translate-y-[26%]) md:w-2154px <lg:(translate-y-[-17%]) <xl:translate-y-[-15%] xl:(w-2514px translate-y-[-21%])':
          !menu.advertiser,
        '<md:(w-954px translate-y-[35%]) <sm:translate-y-[38%] md:w-2154px <lg:(translate-y-[-13%]) <xl:translate-y-[-11%] xl:(w-2514px translate-y-[-17%])':
          menu.advertiser,
      }"
      v-if="$route.name == 'index'"
    />
    <AppAdvertiser />
    <AppHeader />
    <AppMenu />
    <NuxtPage />
    <AppFooter />
    <AppImg
      src="/webp/footer-illustration.webp"
      alt="Alien Blue Light"
      class="footer-illustration absolute pointer-events-none select-none bottom-0 left-[50%] transform translate-x-[-50%] <md:(w-954px translate-y-[-50%]) md:w-2154px <lg:(translate-y-[5%]) <xl:translate-y-[30%] xl:(w-2514px translate-y-[32%])"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from "~/stores/menu";

const menu = useMenuStore();
</script>

<style lang="scss" scoped>
/* .layout-container {
  background-image: url(/img/footer-illustration.png);
  background-repeat: no-repeat;
  background-size: 954px;
  background-position: center 95.3%;

  @media screen and (min-width: 765px) {
    background-size: 2154px;
    background-position: center 101.5%;
  }

  @media screen and (min-width: 1024px) {
    background-size: 2154px;
    background-position: center 109.5%;
  }

  @media screen and (min-width: 1408px) {
    background-size: 2504px;
    background-position: center 113%;
  }
} */
</style>
