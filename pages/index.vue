<template>
  <div>
    <div
      v-if="!$store.state.authUser"
      class="container"
    >
      <b-link to="login">
        <div id="sl"></div>
      </b-link>

      <div>
        <flag class="flag"></flag>

        <div class="subtitle">{{ storeMsg }}</div>
        <b-button
          size="lg"
          class="large"
          href="https://www.ebenefits.va.gov/ebenefits/homepage"
        >{{count}}</b-button>
        <!-- <logo :msg="msg"/> -->
      </div>
    </div>

    <!-- <div>
      <b-navbar type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import flag from '~/static/flag.svg'
export default {
  components: { flag },
  props: {},
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  },
  mounted() {},
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',

      msg: 'i am a message',
      stateStr: mapState.toString()
    }
  },
  computed: mapState(['storeMsg', 'count'])
}
</script>

<style scoped>
body {
  background-color: #fafafa;
}
#sl {
  width: 20px;
  height: 20px;
  background-color: yellow;
  position: absolute;
  top: 150px;
  left: 50vw;
  opacity: 0;
}
#sl:hover {
  cursor: default;
}
.flag {
  width: 300px;
  padding-bottom: 30px;
}
.container {
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  padding-top: 56px;
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
  width: 380px;
}

.links {
  padding-top: 15px;
}
</style>
