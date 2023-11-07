<template>
  <header
    class="w-screen relative h-70px flex flex-row items-stretch justify-center <md:(justify-between) default-layout-padding overflow-clip"
    v-if="menu.advertiser"
  >
    <div
      class="advertisers-container max-w-510px <md:max-w-[90%] flex flex-col items-center justify-start w-full h-140px"
      style="transition: transform 0.5s"
      :style="{
        transform: `translateY(-${current * 70}px)`,
      }"
    >
      <NuxtLink
        :title="adv.alt"
        class="flex flex-row items-center justify-center gap-20px min-h-70px max-h-70px"
        v-for="adv in advs"
        :key="adv.to"
        :to="adv.to"
        target="_blank"
      >
        <AppImg :src="adv.img" :alt="adv.alt" />
      </NuxtLink>
    </div>
    <button
      class="w-34px h-34px grid my-auto place-items-center md:(absolute right-18px top-[50%] transform translate-x-[0%] translate-y-[-50%])"
      @click="menu.untoggleAdveriser"
    >
      <IconsCross />
    </button>
  </header>
</template>

<script lang="ts" setup>
import { ADVS } from "~/configs/NavConfig";
import { useMenuStore } from "~/stores/menu";

const advs = ref(ADVS);
const current = ref(0);

const menu = useMenuStore();

let interval: NodeJS.Timeout;

onMounted(() => {
  interval = setInterval(() => {
    current.value =
      current.value == advs.value.length - 1 ? 0 : current.value + 1;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
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
</style>
