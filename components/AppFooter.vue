<template>
  <div
    class="footer-container relative w-full flex flex-col items-center justify-start gap-120px"
  >
    <div
      class="join-community flex flex-col items-center justify-start gap-40px"
    >
      <Typo role="h2" class-name="uppercase text-center"
        >Join our community</Typo
      >
      <div class="flex flex-row items-center justify-center gap-24px">
        <NuxtLink
          to="https://t.me/alienbaseDEX"
          title="Telegram Group"
          target="_blank"
          class="hover:opacity-60"
          style="transition: all 0.3s"
        >
          <IconsTelegram />
        </NuxtLink>
        <NuxtLink
          to="https://discord.gg/q9vFy6GwFx"
          title="Discord"
          target="_blank"
          class="hover:opacity-60"
          style="transition: all 0.3s"
        >
          <IconsDiscord />
        </NuxtLink>
      </div>
    </div>
    <footer class="w-full flex flex-col items-center justify-start gap-40px">
      <NuxtLink
        class="footer-cta"
        to="https://app.alienbase.xyz/"
        title="Get Started"
      >
        <IconButton
          icon-side="right"
          icon-class="text-headline"
          :icon="IcOutlineArrowForward"
        >
          <Typo role="cta" class-name="text-white whitespace-nowrap">
            Get Started
          </Typo>
        </IconButton>
      </NuxtLink>
      <div class="w-full flex flex-col items-center justify-start gap-0">
        <div
          class="top px-60px w-full flex flex-col items-center lg:(flex-row items-center justify-between) gap-32px py-20px border-b-1px border-outline"
        >
          <NuxtLink
            class="flex flex-row items-center justify-start gap-10px h-30px hover:opacity-60"
            style="transition: all 0.3s"
            to="/"
            title="AlienBase"
          >
            <IconsAlienBaseWhite class="h-30px w-30px" />
            <p
              class="uppercase text-headline whitespace-nowrap text-18px font-bold"
              style="font-family: 'Syncopate', sans-serif"
            >
              Alien Base
            </p>
          </NuxtLink>
          <ul
            class="lg:(absolute left-[50%] transform translate-x-[-50%] flex-row gap-40px) gap-24px flex flex-col items-center justify-center"
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
          <ul class="policy flex flex-row items-center lg:justify-end gap-20px">
            <li
              class="text-14px text-headline font-medium"
              style="font-family: 'DM Sans', sans-serif"
            >
              <NuxtLink to="/privacy-policy" title="Privacy Policy"
                >Privacy Policy</NuxtLink
              >
            </li>
            <li
              class="text-14px text-headline font-medium"
              style="font-family: 'DM Sans', sans-serif"
            >
              <NuxtLink to="/terms" title="Terms of Service"
                >Terms of Service</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="bottom w-full flex flex-row <lg:flex-col-reverse items-center justify-between gap-32px py-20px px-60px"
        >
          <p class="text-body text-14px font-medium">
            © {{ new Date().getFullYear() }} Alien Base. All rights reserved
          </p>
          <p
            class="text-body text-14px font-medium lg:text-right text-center leading-[140%]"
          >
            Alien Base is developed and managed <br />
            independently of the Coinbase / Base team
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import IcOutlineArrowForward from "~icons/ic/outline-arrow-forward";
import { NavConfigs } from "~/configs/NavConfig";

const links = ref(NavConfigs);
</script>

<style lang="scss" scoped></style>
