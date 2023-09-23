<template>
  <canvas
    :id="id"
    :class="class"
    :ref="scope"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
let gsapContext: gsap.Context;
let context: CanvasRenderingContext2D;

interface Props {
  id: string;
  class?: string | object;
  sequence: string;
  width: number;
  height: number;
}
const props = defineProps<Props>();

const scope = ref();

const sequencePath = computed(() => `/sequences/${props.sequence}`);

const frameCount = 15;
const currentFrame = (index: number) =>
  `${sequencePath.value}/${index >= 10 ? "000" : "0000"}${index}.png`;

const images: HTMLImageElement[] = [];
const seq = {
  frame: 0,
  backwards: false,
};

const canvas = ref<HTMLCanvasElement>();

let interval: NodeJS.Timeout;

const render = () => {
  if (seq.frame < frameCount && !seq.backwards) {
    seq.frame += 1;
  } else if (seq.frame > 0 && seq.backwards) {
    seq.frame -= 1;
  } else if (seq.frame == frameCount && !seq.backwards) {
    setTimeout(() => (seq.backwards = true), 500);
  } else if (seq.frame == 0 && seq.backwards) {
    setTimeout(() => (seq.backwards = false), 500);
  }
  context.clearRect(0, 0, props.width, props.height);
  context.drawImage(images[seq.frame], 0, 0);
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  canvas.value = document.querySelector(
    `canvas#${props.id}`
  ) as HTMLCanvasElement;
  context = canvas.value.getContext("2d") as CanvasRenderingContext2D;

  for (let i = 0; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsapContext = gsap.context((self) => {
    gsap.to(seq, {
      frame: () => (seq.backwards ? 0 : frameCount),
      snap: "frame",
      ease: "none",
      duration: 1,
      onStart: () => {
        interval = setInterval(render, 60);
      },
      onComplete: () => {},
      scrollTrigger: {
        trigger: `canvas#${props.id}`,
        start: "top bottom",
        end: "bottom center",
        /* markers: true, */
      },
    });
  }, scope.value);

  images[0].onload = render;
});

onUnmounted(() => {
  clearInterval(interval);
  gsapContext.revert();
});
</script>
