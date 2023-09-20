<template>
  <div
    class="nav-wrapper w-screen fixed top-0 left-0 h-100px"
    style="z-index: 999"
  >
    <nav
      class="w-full h-full relative flex flex-row items-center justify-between default-layout-padding bg-[##0e1218] bg-opacity-20 backdrop-filter backdrop-blur-4px"
    >
      <div
        class="area lg:h-54px h-40px flex flex-row gap-0 items-center justify-start rounded-10px border-1px border-outline"
      >
        <NuxtLink
          class="h-full flex flex-row items-center justify-center gap-8px lg:(px-15px py-12px) p-8px border-b-2px border-[#0358D8] rounded-bl-10px"
          to="/"
        >
          <div class="icon-container w-24px h-24px">
            <IconsAlienBase />
          </div>
          <p
            class="font-bold text-12px uppercase text-headline whitespace-nowrap"
            style="font-family: 'Syncopate', sans-serif"
          >
            Alien Base
          </p>
        </NuxtLink>
        <NuxtLink
          class="h-full flex flex-row items-center justify-center gap-8px lg:(px-15px py-12px) p-8px border-l-1px border-outline rounded-br-10px opacity-50 hover:opacity-100"
          style="transition: all 0.3s"
          to="https://area51.alienbase.xyz/"
        >
          <div class="icon-container w-24px h-24px">
            <IconsArea51 />
          </div>
          <p
            class="font-bold text-12px uppercase text-headline whitespace-nowrap"
            style="font-family: 'Syncopate', sans-serif"
          >
            Area 51
          </p>
        </NuxtLink>
      </div>
      <ul
        class="absolute left-[50%] transform translate-x-[-50%] flex flex-row items-center justify-center gap-40px <lg:hidden"
      >
        <li
          v-for="link in links"
          :key="link.name"
          class="nav-link cursor-pointer transform translate-y-[7px]"
        >
          <NuxtLink
            :to="link.to"
            class="text-headline opacity-70 hover:opacity-100 font-medium flex flex-col items-center justify-start gap-2px"
            style="transition: all 0.3s; font-family: 'DM Sans', sans-serif"
            :title="link.name"
            target="_blank"
          >
            {{ link.name }}
            <IconsStar class="star w-12px h-12px" />
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        to="https://app.alienbase.xyz/"
        title="Trade Now"
        class="cta-wrapper <lg:hidden"
      >
        <AppButton type="tertiary">Trade Now</AppButton>
      </NuxtLink>
      <button
        class="menu-wrapper min-w-44px w-44px h-44px rounded-10px grid place-items-center cursor-pointer lg:hidden"
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

<style lang="scss" scoped>
.nav-link {
  .star {
    transition: all 0.3s;
    @apply opacity-0 transform translate-y-[10px];
  }

  &:hover {
    text-shadow: 0 1px 10px rgba(255, 255, 255, 0.6);
    @apply shadow-white;

    .star {
      @apply opacity-100 transform translate-y-0;
    }
  }
}
</style>
