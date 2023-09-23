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
};

const canvas = ref<HTMLCanvasElement>();

const render = () => {
  if (seq.frame < frameCount) seq.frame += 1;
  else if (seq.frame == frameCount) seq.frame = 0;
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
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      delay: 0.2,
      scrollTrigger: {
        trigger: `canvas#${props.id}`,
        start: "top 80%",
        end: "center top",
        scrub: 0.2,
        /*  markers: true, */
      },
      onUpdate: render,
    });
  }, scope.value);

  images[0].onload = render;
});

onUnmounted(() => {
  gsapContext.revert();
});
</script>
