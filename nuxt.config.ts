// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      meta: [
        {charset: 'utf-8'},
        {name:'viewport', content:'width=device-width, initial-scale=1'},
      ],
      link: [
        {
          rel:'stylesheet',
          href:'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        },
        {
          rel:'icon',
          type:'image/x-icon',
          href:'/favicon.ico'
        },
        {
          rel:'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
      ],
      script: [
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          type:'text/javascript'
        },
        {
          src:'https://code.jquery.com/jquery-3.7.1.min.js',
          type:'text/javascript'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
