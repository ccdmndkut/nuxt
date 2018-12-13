<template>
  <div>
    <fullscreen :fullscreen.sync="fullscreen">
      <img 
        id="cam"
        src="http://192.168.1.103:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=clc&pwd=6834v2v&t="
        onload="setTimeout(function() {src = src.substring(0, (src.lastIndexOf(&quot;t=&quot;)+2))+(new Date()).getTime()}, 150)"
        onerror="setTimeout(function() {src = src.substring(0, (src.lastIndexOf(&quot;t=&quot;)+2))+(new Date()).getTime()}, 2000)" 
        alt="" 
        @click="fsc()" 
      > 
    </fullscreen>
  </div>
</template>

<script>
import Vue from 'vue'
if (process.client) {
  require('vue-fullscreen')
  Vue.use(fullscreen)
}
export default {
  data() {
    return {
      fullscreen: false
    }
  },
  computed: {
    fs() {
      var Foscam = require('foscam-client')
      var camera = new Foscam({
        username: 'clc',
        password: '6834v2v',
        host: '192.168.1.103',
        port: 88, // default
        protocol: 'http', // default
        rejectUnauthorizedCerts: true // default
      })
      var c = camera
      c.setSubStreamFormat(1)
      return c.stream()
      console.log(c.stream())
    }
  },
  // mounted() {
  //   var Foscam = require('foscam-client')
  //   var camera = new Foscam({
  //     username: 'clc',
  //     password: '6834v2v',
  //     host: '192.168.1.103',
  //     port: 88, // default
  //     protocol: 'http', // default
  //     rejectUnauthorizedCerts: true // default
  //   })
  //   var c = camera
  //   c.setSubStreamFormat(1)
  //   var ch = c.stream()
  //   console.table(ch)
  // },
  methods: {
    fsc() {
      var self = this
      if (process.client) {
        console.log('fs')
        self.fullscreen = !self.fullscreen
      }
    }
  }
}
</script>

<style scoped>
#cam {
  height: 100vh;
  width: 100vw;
}
</style>
