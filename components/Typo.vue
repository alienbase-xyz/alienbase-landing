<template>
  <h1
    v-if="props.role == 'h1'"
    :class="[props.className, { gradient: props.gradient }]"
  >
    <slot></slot>
  </h1>
  <h2
    v-if="props.role == 'h2'"
    :class="[props.className, { gradient: props.gradient }]"
  >
    <slot></slot>
  </h2>
  <p
    v-if="['body', 'caption', 'cta'].includes(props.role)"
    :class="[props.role, props.className]"
  >
    <slot></slot>
  </p>
</template>

<script lang="ts" setup>
interface Props {
  role?: "h1" | "h2" | "cta" | "body" | "caption";
  gradient?: boolean;
  className?: string | object;
}

const props = withDefaults(defineProps<Props>(), {
  role: "body",
});
</script>

<style lang="scss">
h1,
h2 {
  font-family: "Syncopate", sans-serif;
  @apply text-headline;

  &.gradient {
    background: linear-gradient(180deg, #ebedf2 0%, #bed0ed 100%);
    text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
  }
}

p {
  font-family: "DM Sans", sans-serif;
  @apply font-medium;
}
</style>

<style lang="scss" scoped>
h1 {
  line-height: 100%; /* 79px */
  letter-spacing: -5px;

  @apply font-bold text-6xl <lg:text-4xl;
}

h2 {
  letter-spacing: -2px;
  @apply font-bold text-32px;
}

p {
  line-height: 24px;
  &.cta {
    font-family: "Syncopate", sans-serif;
    letter-spacing: -1px;
    line-height: 100%;
    @apply text-18px uppercase font-bold;
  }

  &.body {
    @apply text-18px;
  }

  &.caption {
    @apply text-14px;
  }
}
</style>
