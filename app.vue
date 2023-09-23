<template>
  <NuxtLayout />
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());

gtag("config", "G-4MYKV1JWT8");
`,
    },
  ],
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&display=swap");

body {
  @apply min-h-screen bg-background;
}

.app-container {
  @apply min-h-screen max-w-screen overflow-x-hidden;
}

.default-layout-padding {
  @apply px-18px;
}

p.body {
  line-height: 24px !important;
}

/* SCROLLBAR */
/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-outline;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-headline bg-opacity-20 rounded-8px bg-opacity-40;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-headline bg-opacity-10;
}
</style>
