<template>
  <div>
    <div v-if="!$store.state.authUser">
      <div>
        <b-link to="/">
          <flag class="flag"></flag>
        </b-link>
      </div>
      <div class="container">
        <form @submit.prevent="login">
          <p
            v-if="formError"
            class="error"
          >
            {{ formError }}
          </p>
          <p>Username: <input
              v-model="formUsername"
              type="text"
              name="username"
            ></p>
          <p>Password: <input
              v-model="formPassword"
              type="password"
              name="password"
            ></p>
          <button type="submit">
            Login
          </button>
        </form>
      </div>

    </div>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">
        Logout
      </button>
      <p>
        <NuxtLink to="/secret">
          Super secret page
        </NuxtLink>
      </p>
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
  overflow: hidden;
}
.flag {
  width: 300px;
  padding-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-top: 56px;
}
.container {
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
  width: 380px;
}

.links {
  padding-top: 15px;
}
</style>
