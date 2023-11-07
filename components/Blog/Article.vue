<template>
  <div
    class="w-full flex flex-col items-start justify-start py-40px <md:py-32px border-b-1px border-[#151C27] h-full"
    :class="[
      {
        'gap-30px <md:gap-24px': small,
        'gap-40px col-span-2 <md:gap-24px': !small,
      },
      attrs,
    ]"
  >
    <p
      class="text-headline text-18px leading-normal"
      :class="{
        'text-32px <md:(text-18px  leading-normal)': !small,
      }"
      v-html="title"
    ></p>
    <p
      class="text-body"
      :class="{
        'text-32px <md:(text-18px  leading-normal)': !small,
      }"
      v-if="description && !small"
    >
      {{ description }}
    </p>
    <div class="w-full flex flex-row items-center justify-between">
      <Typo role="caption" class-name="text-body uppercase">
        {{ ttr }} min read
      </Typo>
      <NuxtLink
        :to="to"
        :title="title"
        target="_blank"
        class="cursor-pointer hover:(opacity)"
      >
        <IconsArticleArrow
          class="fill-[#9DA9B9] hover:(fill-[#ffffff])"
          style="transition: all 0.3s"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  small?: boolean;
  title: string;
  to: string;
  description?: string;
  ttr: number;
  attrs?: string;
}

withDefaults(defineProps<Props>(), {
  small: false,
  title:
    "Strategic Update for October: Project Quasar, Concentrated Liquidity & More",
  description:
    "Albtober is coming soon, we're ready to offer a few more sneak peeks of what's coming next from our Mothership.",
  to: "",
  ttr: 4,
});
</script>
