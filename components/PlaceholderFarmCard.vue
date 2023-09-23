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
          class="icons-container h-30px flex flex-row items-start justify-start w-50px gap-[-10px]"
        >
          <div
            class="bg-outline bg-opacity-50 min-w-30px min-h-30px w-30px h-30px rounded-100px overflow-clip"
          ></div>
          <div
            class="bg-outline min-w-30px min-h-30px w-30px h-30px rounded-100px overflow-clip ml-[-10px]"
          ></div>
        </div>
        <div class="w-80px h-20px bg-outline rounded-4px"></div>
      </div>
      <div
        class="pin px-10px py-9px rounded-50px text-14px text-white bg-[#1E2531]"
      >
        <div class="w-15px h-8px bg-headline bg-opacity-40 rounded-8px"></div>
      </div>
    </header>
    <ul class="w-full flex flex-col items-center justify-start gap-0px px-30px">
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">Earn</p>

        <div class="w-30px h-16px bg-headline rounded-4px bg-opacity-30"></div>
      </li>
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">Total Liquidity</p>
        <div class="w-59px h-16px bg-headline rounded-4px bg-opacity-30"></div>
      </li>
      <li
        class="w-full flex flex-row items-center justify-between gap-32px py-20px border-b-1px border-[#1E2531]"
      >
        <p class="text-14px text-body font-medium">APR</p>
        <div class="w-20px h-16px bg-headline rounded-4px bg-opacity-30"></div>
      </li>
      <li class="w-full">
        <div
          class="flex flex-row items-center justify-between gap-32px py-20px text-headline opacity-40 cursor-not-allowed"
          style="transition: all 0.3s"
        >
          <p class="text-16px font-medium">View Contract</p>
          <IcOutlineArrowRight />
        </div>
      </li>
    </ul>
    <div class="px-20px pb-20px w-full">
      <AppButton type="tertiary" class="w-full"
        ><div class="w-80px h-18px rounded-5px bg-white opacity-10"></div
      ></AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IcOutlineArrowRight from "~icons/ic/outline-arrow-forward";
</script>

<style lang="scss" scoped></style>
