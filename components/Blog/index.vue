<template>
  <section
    class="blog-trigger w-full default-layout-padding flex flex-col items-center justify-start gap-42px"
  >
    <Typo role="h2" class-name="uppercase text-center"> Our Latest Posts </Typo>
    <div
      class="w-full max-w-980px lg:(grid grid-cols-2) gap-0 border-t-1px border-[#151C27] <lg:(flex flex-col)"
    >
      <BlogArticle
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :to="post.guid"
        :description="post.description"
        :ttr="post.ttr"
        :attrs="
          post.id > 0
            ? post.id % 2 == 0
              ? 'lg:(pl-40px)'
              : 'lg:(pr-40px border-r-1px border-[#151C27])'
            : ''
        "
        :small="post.id > 0"
      />
    </div>
    <NuxtLink
      to="https://medium.com/@alienbase"
      target="_blank"
      title="Go to our Blog"
    >
      <AppButton small type="tertiary">Go to our blog</AppButton>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import { MediumFeed } from "~/configs/interfaces";

const { data: apiPosts, refresh: refreshPosts } = await useAsyncData(
  "medium-articles",
  (_) =>
    $fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alienbase"
    ),
  {
    transform: (data: MediumFeed) => {
      return data;
    },
  }
);

const randomTTR = () => {
  const poss = [2, 3, 4, 5];
  return poss[Math.floor(Math.random()) * poss.length - 1];
};

const posts = computed(() => {
  return apiPosts.value
    ? apiPosts.value.items.slice(0, 3).map((el, i) => ({
        ...el,
        id: i,
        description: el.description.split("<p>")[1].split("</p>")[0] + "..",
        ttr: randomTTR(),
      }))
    : [];
});

onMounted(() => {
  refreshPosts();
});
</script>
