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
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs'
    ],
  },
  imports:{
    dirs: ['stores']
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
