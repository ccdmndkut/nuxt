<template>
  <section class="container">
    <div>
      <h1 class="subtitle">login</h1>
      <b-card
        id="card"
        bg-variant="light"
      >
        <b-form>
          <b-form-group
            id="fieldset1"
            :invalid-feedback="invalidFeedback"
            :state="userLength"
            :valid-feedback="validFeedback"
            label="Enter your username"
            label-for="user"
          >
            <b-form-input
              id="user"
              :state="userLength"
              v-model.trim="user"
              type="text"
              autocomplete="username"
            />
          </b-form-group>
          <b-form-group
            id="fieldset2"
            :description="passDesc"
            :invalid-feedback="invalidFeedbackPass"
            :state="statePass"
            :valid-feedback="validFeedbackPass"
            label="Enter your password"
            label-for="pass"
          >
            <b-form-input
              id="pass"
              :disabled="passInpState"
              :state="statePass"
              v-model.trim="pass"
              type="password"
              autocomplete="current-password"
            />
          </b-form-group>
          <div>
            <b-button
              :disabled="loginDisabled"
              variant="primary"
              @click="emailLogin()"
            >Submit</b-button>
            <b-button
              type="reset"
              variant="danger"
            >Reset</b-button>
          </div>
        </b-form>
      </b-card>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  fetch({ store, redirect }) {
    if (store.state.user) {
      return redirect('/')
    }
  },
  components: {
    Logo
  },
  data() {
    return {
      user: '',
      pass: '',
      loginDisabled: true
    }
  },
  computed: {
    userLength() {
      return this.user.length > 3 ? true : false
    },
    passDesc() {
      return this.pass.length > 0 ? '' : 'Password'
    },
    passInpState() {
      return this.userLength ? false : true
    },
    statePass() {
      if (this.pass.length < 1) {
        return false
      } else {
        return this.pass.length >= 4 ? true : false
      }
    },
    invalidFeedback() {
      if (this.user.length > 4) {
        return ''
      } else if (this.user.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter your email'
      }
    },
    validFeedback() {
      if (this.pass.length > 0) {
        return '&nbsp'
      } else {
        return this.userLength === true ? 'Enter password below' : '&nbsp'
      }
    },
    invalidFeedbackPass() {
      if (this.pass.length >= 1) {
        return 'Password must be at least 4 characters'
      } else {
        return ''
      }
    },
    validFeedbackPass() {
      return this.statePass === true ? 'Login below' : '&nbsp'
    }
  },

  watch: {
    user() {
      if (this.user.length < 4) {
        this.loginDisabled = true
        this.pass = ''
      } else if (this.user.length > 3 && this.pass.length > 3) {
        this.loginDisabled = false
      }
    },
    pass() {
      if (this.pass.length > 3) {
        this.loginDisabled = false
      } else {
        this.loginDisabled = true
      }
    }
  },
  methods: {
    emailLogin() {
      var self = this
      this.$store
        .dispatch('signInWithEmail', {
          email: self.user,
          password: self.pass
        })
        .then(() => {
          self.user = ''
          self.pass = ''
          this.$router.push('/locked')
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    onReset() {
      console.log('reset')
    }
  },
  mounted() {
    console.log('mounted login')
  }
}
</script>

<style>
#card {
  width: 50vw;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-top: 50px;
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
