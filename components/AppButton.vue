<template>
  <button :class="[{ small: props.small }, props.type]" :disabled="disabled">
    <Typo
      :role="props.type == 'tertiary' ? 'body' : 'cta'"
      :class-name="
        props.type == 'secondary'
          ? 'text-dark  whitespace-nowrap'
          : 'text-white  whitespace-nowrap'
      "
    >
      <slot></slot>
    </Typo>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  small?: boolean;
  icon?: any;
  disabled?: boolean;
  type?: "primary" | "secondary" | "tertiary";
}

const props = withDefaults(defineProps<Props>(), {
  small: false,
  type: "primary",
});
</script>

<style lang="scss" scoped>
button {
  transition: all 0.3s;
  @apply rounded-10px flex flex-row items-center justify-center cursor-pointer;

  &.primary {
    background: linear-gradient(180deg, #0468ff 0%, #0358d8 100%);
    box-shadow: 0 3px 0 rgba(64, 140, 255, 0.5) inset, 0 -3px 0 #0047b2 inset;

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
    @apply text-background;

    &:hover {
      box-shadow: 0px 2px 0px 0px #f9fbff inset, 0px -2px 0px 0px #b1b3b5 inset,
        0 5px 30px rgba(255, 255, 255, 0.2);
      background: linear-gradient(180deg, #c9cbcf 0%, #eff1f5 100%);
    }
  }

  &.tertiary {
    @apply bg-outline bg-opacity-0 border-1px border-outline px-20px py-10px;

    &:hover {
      @apply bg-opacity-100;
    }
  }

  &.small {
    @apply px-20px py-12px h-auto;
  }

  &:not(.small) {
    @apply px-25px py-10px h-50px;
  }
}
</style>
