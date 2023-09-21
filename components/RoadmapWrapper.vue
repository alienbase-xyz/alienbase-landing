<template>
  <main
    class="w-full max-w-980px h-420px <md:h-380px relative bg-outline rounded-30px bg-opacity-20 overflow-clip border-1px border-outline"
  >
    <div
      class="background-container w-full absolute max-h-420px"
      style="z-index: -1"
    >
      <img
        class="min-w-980px left-[50%] absolute top-0"
        src="/img/tokenomics.png"
        alt="We landed on Earth, but we're going to the Moon"
        style="transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1)"
        :style="{
          transform: `translateX(-50%) translateY(-${
            (sections.length - 1 - step) * 420
          }px)`,
        }"
      />
    </div>
    <div
      class="navigator-container h-full relative flex flex-row items-end justify-between"
    >
      <div
        class="navigator-progress relative h-full flex flex-col items-center justify-center"
      >
        <div
          class="navigator-steps h-full w-9px px-20px flex flex-col-reverse items-center justify-between py-20px"
        >
          <div
            class="step rounded-7px"
            :class="{
              'bg-body': i <= step,
              'bg-outline': i > step,
              'w-7px h-7px': i != step,
              'w-9px h-9px': i == step,
            }"
            v-for="(_, i) in sections"
            style="z-index: 1; transition: all 1s"
            :key="i"
          ></div>
        </div>
        <div
          class="absolute line h-full w-2px bg-outline flex flex-col items-center justify-end"
        >
          <div
            class="progress w-full bg-body"
            :class="{
              'h-20px': step == 0,
              'h-150px': step == 1,
              'h-270px': step == 2,
              'h-[calc(100%-20px)]': step == sections.length - 1,
            }"
            style="transition: all 1s"
          ></div>
        </div>
      </div>
      <div
        class="navigation-controllers flex flex-col items-end justify-end gap-10px p-20px <md:hidden"
      >
        <button
          @click="goToStep(1)"
          :disabled="step == sections.length - 1"
          class="w-44px h-44px rounded-44px border-2px border-outline grid place-items-center hover:(bg-outline) disabled:(cursor-not-allowed opacity-30)"
          style="transition: all 0.3s"
        >
          <IcOutlineArrowUp class="text-body w-28px h-28px" />
        </button>
        <button
          @click="goToStep(-1)"
          :disabled="step == 0"
          class="w-44px h-44px rounded-44px border-2px border-outline grid place-items-center hover:(bg-outline) disabled:(cursor-not-allowed opacity-30)"
          style="transition: all 0.3s"
        >
          <IcOutlineArrowDown class="text-body w-28px h-28px" />
        </button>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-[50%] transform translate-x-[-50%] flex flex-col items-center justify-center gap-20px pb-20px md:pb-50px <md:w-full"
    >
      <div class="rocket-container" :class="status">
        <IconsRocket />
      </div>
      <header
        class="w-full flex flex-col items-center justify-start gap-10px <md:px-40px"
      >
        <div class="h-32px <md:h-20px overflow-clip">
          <div
            class="flex flex-col-reverse items-center justify-end gap-10px <md:h-20px h-34px"
            :style="{
              transition: 'all 1s',
              transform: `translateY(-${
                sections.length - step == 1
                  ? 0
                  : (sections.length - step) * 100 -
                    (step + 1) * (isMobile ? (step == 0 ? 0 : 20) : 30)
              }%)`,
            }"
          >
            <h2
              class="text-32px <md:text-18px text-center gradient font-bold uppercase whitespace-nowrap"
              v-for="s in sections"
            >
              {{ s.title }}
            </h2>
          </div>
        </div>
        <p
          class="text-14px text-body text-center leading-[140%] w-full max-w-340px"
        >
          {{ sections[step].paragraph }}
        </p>
      </header>
      <NuxtLink
        :class="{
          'h-0': !sections[step].cta,
          'h-auto': sections[step].cta,
        }"
        :to="sections[step].cta?.to"
        target="_blank"
      >
        <button
          class="text-headline text-15px font-medium hover:opacity-60"
          style="transition: all 0.3s"
        >
          {{ sections[step].cta?.name }}
        </button>
      </NuxtLink>
      <div class="flex flex-row items-center justify-center gap-16px md:hidden">
        <button
          @click="goToStep(1)"
          :disabled="step == sections.length - 1"
          class="w-44px h-44px rounded-44px border-2px border-outline grid place-items-center hover:(bg-outline) disabled:(cursor-not-allowed opacity-30)"
          style="transition: all 0.3s"
        >
          <IcOutlineArrowUp class="text-body w-28px h-28px" />
        </button>
        <button
          @click="goToStep(-1)"
          :disabled="step == 0"
          class="w-44px h-44px rounded-44px border-2px border-outline grid place-items-center hover:(bg-outline) disabled:(cursor-not-allowed opacity-30)"
          style="transition: all 0.3s"
        >
          <IcOutlineArrowDown class="text-body w-28px h-28px" />
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import IcOutlineArrowUp from "~icons/ic/outline-arrow-upward";
import IcOutlineArrowDown from "~icons/ic/outline-arrow-downward";

interface Section {
  title: string;
  paragraph: string;
  cta?: {
    name: string;
    to: string;
  };
}
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const sections = ref<Section[]>([
  {
    title: "Our Landing",
    paragraph:
      "We joined the earthly beings on 9 Aug 2023 with the best platform on Base Chain. We released cool features like Yield Farming, Single Staking and StableSwap , but this was just the beginning",
  },
  {
    title: "Area 51",
    paragraph:
      "Area 51 is a unique space for humans to experiment with tokens that carry higher risk than the usual assets listed on Alien Base.",
    cta: {
      name: "Read more",
      to: "https://docs.alienbase.xyz/area-51",
    },
  },
  {
    title: "Perpetual Futures",
    paragraph:
      "Perpetuals are the best place to trade long and short with leverage, which we hear is very appreciated by Earth degens.",
    cta: {
      name: "Read more",
      to: "https://docs.alienbase.xyz/roadmap",
    },
  },
  {
    title: "Project Nebula",
    paragraph:
      "We don't know if humans are ready for this. Nebula is an innovative alien technology, the ultimate concentrated liquidity and single-sided staking platform. No cap, we have the technology, we're just adapting it to earthly beings.",
  },
]);
const step = ref<number>(0);
const status = ref<"idle" | "next" | "prev">("idle");

const goToStep = (dir: number) => {
  if (dir == -1 && step.value == 0) return; // Can't go back
  if (dir == 1 && sections.value.length - 1 == step.value) return; // Can't continue
  step.value += dir;
  if (dir > 0) {
    status.value = "next";
  } else {
    status.value = "prev";
  }
};

watch(status, (v) => {
  if (v != "idle") {
    setTimeout(() => {
      status.value = "idle";
    }, 500);
  }
});
</script>

<style lang="scss" scoped>
.rocket-container {
  transition: transform 1s;

  &.idle {
    transform: translateY(10px);
  }

  &.next {
    transform: translateY(-30px);
  }
}
</style>
