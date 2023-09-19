<template>
  <div
    class="min-w-300px max-w-313px rounded-30px overflow-clip flex flex-col items-center justify-start gap-0 border-1px border-[#101722]"
    style="background: linear-gradient(180deg, #070e1a 0%, #131a25 100%)"
  >
    <header
      class="w-full flex flex-row items-center justify-between gap-12px border-b-1px border-[#101722] px-30px py-20px"
    >
      <div class="info flex flex-row items-center justify-start gap-10px">
        <div
          class="icons-container h-30px flex flex-row items-start justify-start"
          :class="{
            'w-50px gap-[-10px]': icons.length > 1,
            'w-30px gap-0': icons.length == 1,
          }"
        >
          <AppImg
            v-for="(icon, i) in props.icons"
            :key="icon"
            :src="icon"
            :class-name="`min-w-30px min-h-30px w-30px h-30px rounded-100px overflow-clip ${
              i == 1 ? 'ml-[-10px]' : ''
            }`"
            :alt="`${props.name} (${i})`"
          />
        </div>
        <h2
          class="font-bold text-18px text-headline uppercase"
          style="letter-spacing: -1px"
        >
          {{ props.name }}
        </h2>
      </div>
      <p
        class="pin px-10px py-9px rounded-50px text-14px text-white bg-[#1E2531]"
      >
        {{ props.multipler }}
      </p>
    </header>
    <ul class="w-full flex flex-col items-center justify-start gap-0px px-30px">
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">Earn</p>
        <p class="text-18px text-headline font-medium uppercase">
          {{
            [props.earn, props.rewards].filter((el) => el != null).join(", ")
          }}
        </p>
      </li>
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">Total Liquidity</p>
        <p class="text-18px text-headline font-medium uppercase">
          ${{ props.liquidity / 1000 }}
        </p>
      </li>
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">APR</p>
        <p class="text-18px text-headline font-medium uppercase">
          {{ props.apr }}%
        </p>
      </li>
      <li class="w-full">
        <NuxtLink
          target="_blank"
          :to="`https://basescan.org/address/${props.contract}`"
          class="flex flex-row items-center justify-between gap-32px py-20px text-headline hover:(opacity-50)"
          style="transition: all 0.3s"
        >
          <p class="text-16px font-medium">View Contract</p>
          <IcOutlineArrowRight />
        </NuxtLink>
      </li>
    </ul>
    <div class="px-20px pb-20px w-full">
      <AppButton type="tertiary" class="w-full">Get {{ props.name }}</AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IcOutlineArrowRight from "~icons/ic/outline-arrow-forward";

interface Props {
  name: string;
  icons: string[];
  multipler: string;
  earn: string;
  liquidity: number;
  rewards?: string;
  apr: number;
  contract: string;
  to: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
