<template>
  <div
    class="card p-40px"
    :id="id"
    :class="{
      'pb-80px': props.paddingBottom,
      tap: tapped,
    }"
  >
    <slot></slot>
    <div
      class="hover-content w-full h-full bg-[#060D19] absolute top-0 left-0"
      :class="{ small: props.small }"
    >
      <h2
        class="text-18px font-bold uppercase text-headline"
        style="font-family: 'Syncopate', sans-serif"
      >
        {{ props.title }}
      </h2>
      <p class="text-18px font-medium text-body leading-[140%] max-w-660px">
        {{ props.content }}
      </p>
    </div>
    <button class="cta">
      <IconsPlus class="icon text-headline" />
    </button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  to: string;
  title: string;
  linkTitle: string;
  paddingBottom?: boolean;
  content: string;
  small?: boolean;
}

const id = computed(() => props.title.toLowerCase().replaceAll(" ", "_"));

const props = withDefaults(defineProps<Props>(), {
  to: "",
  paddingBottom: true,
});

const tapped = ref(false);

onMounted(() => {
  const card = document.querySelector(
    `.card#${id.value} button`
  ) as HTMLElement;
  card.addEventListener("touchstart", (e) => {
    tapped.value = !tapped.value;
  });
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #101722;
  @apply relative w-full bg-[#060D19] rounded-30px overflow-clip cursor-pointer;

  .hover-content {
    clip-path: circle(0px at 95.8% 90%);
    transition: clip-path 1s;

    @apply p-40px flex flex-col gap-20px;

    &.small {
      @apply items-start justify-center;
    }

    &:not(.small) {
      @apply items-center justify-center text-center;
    }
  }

  .cta {
    transition: all 0.2s;
    bottom: 20px;
    right: 20px;
    @apply cursor-pointer absolute rounded-100px w-44px h-44px border-1px border-outline grid place-items-center hover:(bg-outline);

    .icon {
      transition: all 0.3s;
    }
  }

  @media screen and (min-width: 764px) {
    &:hover {
      .hover-content {
        clip-path: circle(1100px at 95.8% 90%);
      }

      .icon {
        transform: rotate(135deg);
      }
    }
  }

  &.tap {
    .hover-content {
      clip-path: circle(1100px at 95.8% 90%);
    }
    .icon {
      transform: rotate(135deg);
    }
  }
}
</style>
