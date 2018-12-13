<template>
  <div class="container">
    <div>
      <div>
        <flag class="flag"></flag>
      </div>
      <div class="subtitle">{{ storeMsg }}</div>
      <b-button href="https://www.ebenefits.va.gov/ebenefits/homepage">{{count}}</b-button>
      <!-- <logo :msg="msg"/> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import flag from '~/static/flag.svg'
export default {
  components: { flag },
  props: {},
  methods: {},
  mounted() {},
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
.flag {
  height: 200px;
}
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
