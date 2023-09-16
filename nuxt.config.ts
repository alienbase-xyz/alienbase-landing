// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon/favicon.ico",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/favicon-16x16.png",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js",
        },
        {
          src: "/js/lenis.js",
          tagPosition: "bodyClose",
        },
      ],
    },
  },
  modules: ["nuxt-windicss", "@pinia/nuxt", "unplugin-icons/nuxt"],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
});
