<template>
  <div class="container">
    <div>
      <b-alert show>{{ storeMsg }}</b-alert>
      <b-alert show>{{ count }}</b-alert>
      <b-alert show>{{ stateStr }}</b-alert>

      <logo :msg="msg"/>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Logo
  },
  props: {},
  mounted() {
    console.log(mapState.toString())
  },
  data() {
    return {
      msg: 'i am a message',
      stateStr: mapState.toString()
    }
  },
  computed: mapState(['storeMsg', 'count'])
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
