// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title: 'ssrTest title',
      meta: [
        {
          name: 'description', content: 'ssrTest description'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              `@import "@/assets/style/baseConstants.scss";`
        },
      },
    },
  },
  // routeRules: {
  //   '/catalog/**': { swr: 3600 },
  // }
})
