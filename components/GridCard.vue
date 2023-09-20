<template>
  <div
    class="card p-40px"
    :class="{
      'pb-80px': props.paddingBottom,
    }"
  >
    <slot></slot>
    <div
      class="hover-content w-full h-full bg-[#0358D8] absolute top-0 left-0 grid place-items-center"
    >
      <p>{{ props.content }}</p>
    </div>
    <NuxtLink :to="to" class="cta" :title="title">
      <IcOutlineArrowForward />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import IcOutlineArrowForward from "~icons/ic/outline-arrow-forward";

interface Props {
  to: string;
  title: string;
  paddingBottom?: boolean;
  content: string;
}

const props = withDefaults(defineProps<Props>(), {
  to: "",
  paddingBottom: true,
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #101722;
  @apply relative w-full bg-[#060D19] rounded-30px overflow-clip cursor-pointer;

  .hover-content {
    clip-path: circle(0px at 95.8% 90%);
    transition: clip-path 1s;

    @apply p-40px;

    p {
      @apply text-headline text-xl <md:(text-18px leading-[140%]) leading-[140%] text-center max-w-300px;
    }
  }

  .cta {
    transition: all 0.2s;
    bottom: 20px;
    right: 20px;
    @apply cursor-pointer absolute rounded-100px w-44px h-44px border-1px border-outline grid place-items-center text-headline hover:(bg-outline);
  }

  &:hover {
    .hover-content {
      clip-path: circle(1100px at 95.8% 90%);
    }
  }
}
</style>
