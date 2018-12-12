<template>
  <section class="container">{{localComputed}}
    <div>
      <h1 class="subtitle">
        {{userMsg}}
      </h1>
      <p class="subtitle">
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      msg: ' is logged in'
    }
  },

  computed: mapState({
    // arrow functions can make the code very succinct!
    email: state => state.user.user.email,

    // passing the string value 'count' is same as `state => state.count`
    userb: 'user',

    // to access local state with `this`, a normal function must be used
    userMsg(state) {
      return state.user.user.email + this.msg
    }
  }),

  mounted() {}
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  word-break: break-all;
}

.links {
  padding-top: 15px;
}
</style>
