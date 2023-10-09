<template>
  <header
    class="w-screen relative h-70px flex flex-row items-end justify-center <md:(items-center justify-between) default-layout-padding"
    v-if="menu.advertiser"
  >
    <NuxtLink
      to="https://area51.alienbase.xyz/prediction"
      title="Predict now"
      class="flex flex-row items-center justify-center gap-20px"
    >
      <div class="cup-container">
        <AppImg src="/img/cup.png" alt="Predictions are live on Area 51" />
      </div>
      <div
        class="flex flex-row items-center justify-center gap-60px <md:gap-20px"
      >
        <div
          class="flex flex-row items-center justify-start gap-15px text-headline"
        >
          <p
            class="text-18px font-semibold uppercase <lg:hidden"
            style="font-family: 'Syncopate', sans-serif"
          >
            Predict&Win
          </p>
          <p class="text-18px font-regular <md:(text-14px leading-[120%])">
            Predictions are live on Area 51
          </p>
        </div>
        <NuxtLink
          to="https://area51.alienbase.xyz/prediction"
          title="Predict Now"
        >
          <AppButton type="area-51" small>Predict now</AppButton>
        </NuxtLink>
      </div>
      <div class="cup-container">
        <AppImg
          src="/img/cup-reverse.png"
          alt="Predictions are live on Area 51"
        />
      </div>
    </NuxtLink>
    <button
      class="w-34px h-34px grid place-items-center md:(absolute right-18px top-[50%] transform translate-x-[0%] translate-y-[-50%])"
      @click="menu.untoggleAdveriser"
    >
      <IconsCross />
    </button>
  </header>
</template>

<script lang="ts" setup>
import { useMenuStore } from "~/stores/menu";

const menu = useMenuStore();
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(
    360deg,
    #eee8fd -6.08%,
    #8049fe 21.72%,
    #030014 85.23%
  );
}

.cup-container {
  @apply max-w-86px <md:hidden;
}
</style>
