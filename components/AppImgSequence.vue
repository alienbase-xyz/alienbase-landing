<template>
  <canvas :id="id" :class="class"></canvas>
</template>

<script lang="ts" setup>
interface Props {
  id: string;
  class: string | object;
  sequence: string;
}
const props = defineProps<Props>();

const sequencePath = computed(() => `/sequences/${props.sequence}/`);

const frameCount = 15;

const images = [];
const seq = {
  frame: 0,
};

const render = () => {};

onMounted(() => {});
</script>
