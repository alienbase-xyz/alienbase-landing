<template>
  <button :class="[{ small: props.small }, props.type]" :disabled="disabled">
    <div class="icon-container" v-if="iconSide == 'left'">
      <component :is="icon" class="w-25px h-25px" :class="[props.iconClass]" />
    </div>
    <div class="text-container">
      <slot></slot>
    </div>
    <div class="icon-container right" v-if="iconSide == 'right'">
      <component :is="icon" class="w-25px h-25px" :class="[props.iconClass]" />
    </div>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  icon: any;
  iconSide?: "left" | "right";
  iconClass?: string;
  type?: "primary" | "secondary" | "tartiary";
  small?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  iconSide: "left",
});
</script>

<style lang="scss" scoped>
button {
  transition: all 0.3s;
  @apply rounded-10px flex flex-row items-center justify-center gap-0 cursor-pointer;

  &.small {
    @apply max-h-44px h-44px;

    .icon-container {
      @apply px-11px py-10px;
    }
  }

  &:not(.small) {
    @apply max-h-60px h-60px;

    .icon-container {
      @apply px-15px;
    }
  }

  .icon-container {
    @apply h-full grid place-items-center py-8px border-outline;

    &.right {
      @apply border-l-2px;
    }

    &:not(.right) {
      @apply border-r-2px;
    }
  }

  .text-container {
    @apply px-14px;
  }

  &.primary {
    background: linear-gradient(180deg, #0468ff 0%, #0358d8 100%);
    box-shadow: 0 3px 0 rgba(64, 140, 255, 0.5) inset, 0 -3px 0 #0047b2 inset;
    .icon-container {
      @apply border-opacity-20;
    }

    &:hover {
      box-shadow: 0 3px 0 rgba(64, 140, 255, 0.5) inset, 0 -3px 0 #0047b2 inset,
        0 5px 30px rgba(64, 140, 255, 0.2);
      background: linear-gradient(
        180deg,
        rgba(4, 104, 255, 0.8) 0%,
        rgba(3, 88, 216, 0.9) 100%
      );
    }
  }

  &.secondary {
    background: linear-gradient(180deg, #eff1f5 0%, #c9cbcf 100%);
    box-shadow: 0px 2px 0px 0px #f9fbff inset, 0px -2px 0px 0px #b1b3b5 inset;

    .icon-container {
      @apply border-opacity-10;
    }

    &:hover {
      box-shadow: 0px 2px 0px 0px #f9fbff inset, 0px -2px 0px 0px #b1b3b5 inset,
        0 5px 30px rgba(255, 255, 255, 0.2);
      background: linear-gradient(180deg, #c9cbcf 0%, #eff1f5 100%);
    }
  }

  &.tertiary {
    @apply bg-outline bg-opacity-0 border-1px border-outline;

    &:hover {
      @apply bg-opacity-100;
    }
  }
}
</style>
