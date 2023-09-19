<template>
  <div
    class="menu-wrapper fixed top-100px right-0 min-w-150px bg-[#101722] border-1px border-outline rounded-10px overflow-clip lg:hidden shadow-lg"
    :class="{
      'right-18px': menu.visible,
      'right-[-100%]': !menu.visible,
    }"
    style="z-index: 99; transition: all 0.3s"
  >
    <ul
      class="w-full flex flex-col items-start justify-start gap-0 text-headline py-7px"
    >
      <li
        v-for="link in links"
        :key="link.name"
        style="transition: all 0.1s"
        class="w-full py-8px px-20px bg-background bg-opacity-0 hover:bg-opacity-20 cursor-pointer"
      >
        <NuxtLink :to="link.to" :title="link.name">
          {{ link.name }}
        </NuxtLink>
      </li>
      <li class="w-full px-20px my-12px">
        <NuxtLink to="https://app.alienbase.xzy/">
          <AppButton small>Trade now</AppButton>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { NavConfigs } from "~/configs/NavConfig";
import { useMenuStore } from "~/stores/menu";

const menu = useMenuStore();

const links = ref(NavConfigs);
</script>

<style lang="scss" scoped></style>
