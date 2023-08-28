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
    '@invictus.codes/nuxt-vuetify',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs'
    ],
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true | false,
      useIconCDN: true | false,

      /* vite-plugin-vuetify options */
      styles: true | 'none' | 'expose' | 'sass',
      autoImport: true | false,
      useVuetifyLabs: true | false,
    }
  },
  imports:{
    dirs: ['stores']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              `
              @import "@/assets/style/baseConstants.scss";
              @import "@/assets/style/baseStyles.scss";
              @import "@/assets/style/mixins.scss";
              `
        },
      },
    },
  },
  // routeRules: {
  //   '/catalog/**': { swr: 3600 },
  // }
})
