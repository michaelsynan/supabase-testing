// https://v3.nuxtjs.org/api/configuration/nuxt.config

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/supabase-testing/', 
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt Tailwind Template',
      meta: [
        { name: 'description', content: 'Speed up your Nuxt 3 and Vue development with this starter template.' }
      ],
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    ['unplugin-icons/nuxt', { autoInstall: true }],
    '@nuxtjs/supabase'
  ],
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'], 
    ],
  },
  vite: {
    plugins: [
        Components({
            resolvers: IconsResolver(),
        }),
        Icons(),
    ]
},
supabase: {
    url: process.env.SUPABASE_URL, 
    key: process.env.SUPABASE_ANON_KEY, 
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/main.css'],
});
