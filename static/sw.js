importScripts('/public/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/public/179c586ed95fb91f011f.js",
    "revision": "dfb8308b666b6e33e46c47b8e0fdce93"
  },
  {
    "url": "/public/282c4c28508bd6b8004e.js",
    "revision": "63543beb8ec178fd38fb12f288264b7c"
  },
  {
    "url": "/public/334fec27fe5cdbe5e982.js",
    "revision": "b94a1e0cfe19922debdce6d47d9d506a"
  },
  {
    "url": "/public/494676b3e503e484d932.js",
    "revision": "983767f57c02fe2ccf37e349fbefbe9b"
  },
  {
    "url": "/public/76540bcf76a3428948ee.js",
    "revision": "07ef3f64f8d46a6350e901bf675bd3b2"
  },
  {
    "url": "/public/776f78f991a14123dd69.js",
    "revision": "b05b18ae356de841ef99dd057afd8056"
  },
  {
    "url": "/public/e417dbe26dba09daa438.js",
    "revision": "449d0ea3dd17d9a4b09ed93b90d2a94c"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/public/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
