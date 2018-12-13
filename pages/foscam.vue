<template>
  <div>{{ fs }}</div>
</template>

<script>
var Foscam = require('foscam-client')
var camera = new Foscam({
  username: 'clc',
  password: '6834v2v',
  host: '192.168.1.103',
  port: 88, // default
  protocol: 'http', // default
  rejectUnauthorizedCerts: true // default
})
var c = camera.getMJStream()
console.log(c)
export default {
  computed: {
    fs() {
      return 'hi'
    }
  }
}
</script>

<style scoped>
</style>
