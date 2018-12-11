const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },
  manifest: {
    name: 'Vet2Vet',
    short_name: 'V2V',
    description: 'VA Claim Assistance',
    lang: 'en-US',
    scope: '/',
    start_url: '/login',
    icons: [
      {
        src: '/windows10/Square71x71Logo.scale-400.png',
        sizes: '284x284'
      },
      {
        src: '/windows10/Square71x71Logo.scale-200.png',
        sizes: '142x142'
      },
      {
        src: '/windows10/Square71x71Logo.scale-100.png',
        sizes: '71x71'
      },
      {
        src: '/windows10/Square71x71Logo.scale-150.png',
        sizes: '107x107'
      },
      {
        src: '/windows10/Square71x71Logo.scale-125.png',
        sizes: '89x89'
      },
      {
        src: '/windows10/Square150x150Logo.scale-400.png',
        sizes: '600x600'
      },
      {
        src: '/windows10/Square150x150Logo.scale-200.png',
        sizes: '300x300'
      },
      {
        src: '/windows10/Square150x150Logo.scale-100.png',
        sizes: '150x150'
      },
      {
        src: '/windows10/Square150x150Logo.scale-150.png',
        sizes: '225x225'
      },
      {
        src: '/windows10/Square150x150Logo.scale-125.png',
        sizes: '188x188'
      },
      {
        src: '/windows10/Wide310x150Logo.scale-400.png',
        sizes: '1240x600'
      },
      {
        src: '/windows10/Wide310x150Logo.scale-200.png',
        sizes: '620x300'
      },
      {
        src: '/windows10/Wide310x150Logo.scale-100.png',
        sizes: '310x150'
      },
      {
        src: '/windows10/Wide310x150Logo.scale-150.png',
        sizes: '465x225'
      },
      {
        src: '/windows10/Wide310x150Logo.scale-125.png',
        sizes: '388x188'
      },
      {
        src: '/windows10/Square310x310Logo.scale-400.png',
        sizes: '1240x1240'
      },
      {
        src: '/windows10/Square310x310Logo.scale-200.png',
        sizes: '620x620'
      },
      {
        src: '/windows10/Square310x310Logo.scale-100.png',
        sizes: '310x310'
      },
      {
        src: '/windows10/Square310x310Logo.scale-150.png',
        sizes: '465x465'
      },
      {
        src: '/windows10/Square310x310Logo.scale-125.png',
        sizes: '388x388'
      },
      {
        src: '/windows10/Square44x44Logo.scale-400.png',
        sizes: '176x176'
      },
      {
        src: '/windows10/Square44x44Logo.scale-200.png',
        sizes: '88x88'
      },
      {
        src: '/windows10/Square44x44Logo.scale-100.png',
        sizes: '44x44'
      },
      {
        src: '/windows10/Square44x44Logo.scale-150.png',
        sizes: '66x66'
      },
      {
        src: '/windows10/Square44x44Logo.scale-125.png',
        sizes: '55x55'
      },
      {
        src: '/windows10/Square44x44Logo.targetsize-256.png',
        sizes: '256x256'
      },
      {
        src: '/windows10/Square44x44Logo.targetsize-48.png',
        sizes: '48x48'
      },
      {
        src: '/windows10/Square44x44Logo.targetsize-24.png',
        sizes: '24x24'
      },
      {
        src: '/windows10/Square44x44Logo.targetsize-16.png',
        sizes: '16x16'
      },
      {
        src:
          '/static/windows10/Square44x44Logo.targetsize-256_altform-unplated.png',
        sizes: '256x256'
      },
      {
        src:
          '/static/windows10/Square44x44Logo.targetsize-48_altform-unplated.png',
        sizes: '48x48'
      },
      {
        src:
          '/static/windows10/Square44x44Logo.targetsize-24_altform-unplated.png',
        sizes: '24x24'
      },
      {
        src:
          '/static/windows10/Square44x44Logo.targetsize-16_altform-unplated.png',
        sizes: '16x16'
      },
      {
        src: '/windows10/StoreLogo.scale-400.png',
        sizes: '200x200'
      },
      {
        src: '/windows10/StoreLogo.scale-200.png',
        sizes: '100x100'
      },
      {
        src: '/windows10/StoreLogo.scale-150.png',
        sizes: '75x75'
      },
      {
        src: '/windows10/StoreLogo.scale-125.png',
        sizes: '63x63'
      },
      {
        src: '/windows10/StoreLogo.scale-100.png',
        sizes: '50x50'
      },
      {
        src: '/windows10/StoreLogo.png',
        sizes: '50x50'
      },
      {
        src: '/windows10/SplashScreen.scale-400.png',
        sizes: '2480x1200'
      },
      {
        src: '/windows10/SplashScreen.scale-200.png',
        sizes: '1240x600'
      },
      {
        src: '/windows10/SplashScreen.scale-150.png',
        sizes: '930x450'
      },
      {
        src: '/windows10/SplashScreen.scale-125.png',
        sizes: '775x375'
      },
      {
        src: '/windows10/SplashScreen.scale-100.png',
        sizes: '620x300'
      },
      {
        src: '/windows/windows-smallsquare-24-24.png',
        sizes: '24x24'
      },
      {
        src: '/windows/windows-smallsquare-30-30.png',
        sizes: '30x30'
      },
      {
        src: '/windows/windows-smallsquare-42-42.png',
        sizes: '42x42'
      },
      {
        src: '/windows/windows-smallsquare-54-54.png',
        sizes: '54x54'
      },
      {
        src: '/windows/windows-splashscreen-1116-540.png',
        sizes: '1116x540'
      },
      {
        src: '/windows/windows-splashscreen-868-420.png',
        sizes: '868x420'
      },
      {
        src: '/windows/windows-splashscreen-620-300.png',
        sizes: '620x300'
      },
      {
        src: '/windows/windows-squarelogo-270-270.png',
        sizes: '270x270'
      },
      {
        src: '/windows/windows-squarelogo-210-210.png',
        sizes: '210x210'
      },
      {
        src: '/windows/windows-squarelogo-150-150.png',
        sizes: '150x150'
      },
      {
        src: '/windows/windows-squarelogo-120-120.png',
        sizes: '120x120'
      },
      {
        src: '//static/windows/windows-storelogo-90-90.png',
        sizes: '90x90'
      },
      {
        src: '/windows/windows-storelogo-70-70.png',
        sizes: '70x70'
      },
      {
        src: '/windows/windows-storelogo-50-50.png',
        sizes: '50x50'
      },
      {
        src: '/windows/windowsphone-appicon-106-106.png',
        sizes: '106x106'
      },
      {
        src: '/windows/windowsphone-appicon-62-62.png',
        sizes: '62x62'
      },
      {
        src: '/windows/windowsphone-appicon-44-44.png',
        sizes: '44x44'
      },
      {
        src: '/windows/windowsphone-mediumtile-360-360.png',
        sizes: '360x360'
      },
      {
        src: '/windows/windowsphone-mediumtile-210-210.png',
        sizes: '210x210'
      },
      {
        src: '/windows/windowsphone-mediumtile-150-150.png',
        sizes: '150x150'
      },
      {
        src: '/windows/windowsphone-smalltile-170-170.png',
        sizes: '170x170'
      },
      {
        src: '/windows/windowsphone-smalltile-99-99.png',
        sizes: '99x99'
      },
      {
        src: '/windows/windowsphone-smalltile-71-71.png',
        sizes: '71x71'
      },
      {
        src: '/windows/windowsphone-storelogo-120-120.png',
        sizes: '120x120'
      },
      {
        src: '/windows/windowsphone-storelogo-70-70.png',
        sizes: '70x70'
      },
      {
        src: '/windows/windowsphone-storelogo-50-50.png',
        sizes: '50x50'
      },
      {
        src: '/android/android-launchericon-512-512.png',
        sizes: '512x512'
      },
      {
        src: '/android/android-launchericon-192-192.png',
        sizes: '192x192'
      },
      {
        src: '/android/android-launchericon-144-144.png',
        sizes: '144x144'
      },
      {
        src: '/android/android-launchericon-96-96.png',
        sizes: '96x96'
      },
      {
        src: '/android/android-launchericon-72-72.png',
        sizes: '72x72'
      },
      {
        src: '/android/android-launchericon-48-48.png',
        sizes: '48x48'
      },
      {
        src: '/ios/ios-appicon-1024-1024.png',
        sizes: '1024x1024'
      },
      {
        src: '/ios/ios-appicon-180-180.png',
        sizes: '180x180'
      },
      {
        src: '/ios/ios-appicon-152-152.png',
        sizes: '152x152'
      },
      {
        src: '/ios/ios-appicon-120-120.png',
        sizes: '120x120'
      },
      {
        src: '/ios/ios-appicon-76-76.png',
        sizes: '76x76'
      },
      {
        src: '/ios/ios-launchimage-750-1334.png',
        sizes: '750x1334'
      },
      {
        src: '/ios/ios-launchimage-1334-750.png',
        sizes: '1334x750'
      },
      {
        src: '/ios/ios-launchimage-1242-2208.png',
        sizes: '1242x2208'
      },
      {
        src: '/ios/ios-launchimage-2208-1242.png',
        sizes: '2208x1242'
      },
      {
        src: '/ios/ios-launchimage-640-960.png',
        sizes: '640x960'
      },
      {
        src: '/ios/ios-launchimage-640-1136.png',
        sizes: '640x1136'
      },
      {
        src: '/ios/ios-launchimage-1536-2048.png',
        sizes: '1536x2048'
      },
      {
        src: '/ios/ios-launchimage-2048-1536.png',
        sizes: '2048x1536'
      },
      {
        src: '/ios/ios-launchimage-768-1024.png',
        sizes: '768x1024'
      },
      {
        src: '/ios/ios-launchimage-1024-768.png',
        sizes: '1024x768'
      },
      {
        src: '/chrome/chrome-extensionmanagementpage-48-48.png',
        sizes: '48x48'
      },
      {
        src: '/chrome/chrome-favicon-16-16.png',
        sizes: '16x16'
      },
      {
        src: '/chrome/chrome-installprocess-128-128.png',
        sizes: '128x128'
      },
      {
        src: '/firefox/firefox-marketplace-512-512.png',
        sizes: '512x512'
      },
      {
        src: '/firefox/firefox-marketplace-128-128.png',
        sizes: '128x128'
      },
      {
        src: '/firefox/firefox-general-256-256.png',
        sizes: '256x256'
      },
      {
        src: '/firefox/firefox-general-128-128.png',
        sizes: '128x128'
      },
      {
        src: '/firefox/firefox-general-90-90.png',
        sizes: '90x90'
      },
      {
        src: '/firefox/firefox-general-64-64.png',
        sizes: '64x64'
      },
      {
        src: '/firefox/firefox-general-48-48.png',
        sizes: '48x48'
      },
      {
        src: '/firefox/firefox-general-32-32.png',
        sizes: '32x32'
      },
      {
        src: '/firefox/firefox-general-16-16.png',
        sizes: '16x16'
      }
    ],
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#fafafa',
    orientation: 'any'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    optimizeCSS: true,
    publicPath: 'https://vaclaims-194006.appspot.com',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
