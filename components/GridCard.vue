<template>
  <div
    class="card p-40px"
    :class="{
      'pb-80px': props.paddingBottom,
    }"
  >
    <slot></slot>
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
}

const props = withDefaults(defineProps<Props>(), {
  to: "",
  paddingBottom: true,
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #101722;
  @apply relative w-full bg-[#060D19] rounded-30px;

  .cta {
    transition: all 0.2s;
    @apply cursor-pointer absolute rounded-100px w-44px h-44px border-1px border-outline grid place-items-center text-headline hover:(bg-outline);
    bottom: 20px;
    right: 20px;
  }
}
</style>
