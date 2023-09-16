<template>
  <div
    class="nav-wrapper w-screen fixed top-0 left-0 h-100px"
    style="z-index: 999"
  >
    <nav
      class="w-full h-full relative flex flex-row items-center justify-between gap-32px default-layout-padding bg-[##0e1218] bg-opacity-20 backdrop-filter backdrop-blur-4px"
    >
      <div
        class="area flex flex-row gap-0 items-center justify-start rounded-10px border-1px border-outline h-40px"
      >
        <NuxtLink
          class="flex flex-row items-center justify-center gap-8px p-8px border-b-2px border-[#0358D8] rounded-bl-10px"
          to="https://alienbase.xyz"
        >
          <div class="icon-container w-24px h-24px">
            <IconsAlienBase />
          </div>
          <p
            class="font-bold text-12px uppercase text-headline"
            style="font-family: 'Syncopate', sans-serif"
          >
            Alien Base
          </p>
        </NuxtLink>
        <NuxtLink
          class="flex flex-row items-center justify-center gap-8px p-8px border-l-1px border-outline rounded-br-10px opacity-50 hover:opacity-100"
          style="transition: all 0.3s"
          to="https://area51.alienbase.xyz/"
        >
          <div class="icon-container w-24px h-24px">
            <IconsArea51 />
          </div>
          <p
            class="font-bold text-12px uppercase text-headline"
            style="font-family: 'Syncopate', sans-serif"
          >
            Area 51
          </p>
        </NuxtLink>
      </div>
      <ul
        class="absolute left-[50%] transform translate-x-[-50%] flex flex-row items-center justify-center gap-40px <lg:hidden"
      >
        <li v-for="link in links" :key="link.name" class="cursor-pointer">
          <NuxtLink
            :to="link.to"
            class="text-headline opacity-70 hover:opacity-100 font-medium"
            style="transition: all 0.3s; font-family: 'DM Sans', sans-serif"
            :title="link.name"
            target="_blank"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="cta-wrapper <lg:hidden">
        <AppButton type="tertiary">CONNECT</AppButton>
      </div>
      <button
        class="menu-wrapper w-44px h-44px rounded-10px grid place-items-center cursor-pointer lg:hidden"
        :class="{
          'border-outline border-1px hover:border-2px': !menu.visible,
          'border-[#0358D8] border-2px': menu.visible,
        }"
        style="transition: all 0.3s"
        @click="menu.toggle(!menu.visible)"
      >
        <IconsMenu v-if="!menu.visible" />
        <IconsCross v-else />
      </button>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { NavConfigs } from "~/configs/NavConfig";
import { useMenuStore } from "@/stores/menu";

const links = ref(NavConfigs);
const menu = useMenuStore();
</script>

<style lang="scss" scoped></style>
