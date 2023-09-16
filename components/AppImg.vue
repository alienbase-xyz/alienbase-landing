<template>
  <picture>
    <source :type="`image/${type == 'svg' ? 'svg+xml' : type}`" :srcset="src" />
    <img :src="src" :alt="alt" :class="['select-none pointer-events-none', className]" />
  </picture>
</template>

<script lang="ts" setup>
interface Props {
  alt?: string;
  className?: string | object;
  src: string;
}

const type = computed(() => props.src.split(".")[1]);

const props = defineProps<Props>();
</script>
