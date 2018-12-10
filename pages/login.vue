<template>
  <section class='container'>
    <div>
      <h1 class='subtitle'>login</h1>
      <b-card
        bg-variant='light'
        id='card'
      >
        <b-form-group
          :invalid-feedback='invalidFeedback'
          :state='userLength'
          :valid-feedback='validFeedback'
          id='fieldset1'
          label='Enter your username'
          label-for='user'
        >
          <b-form-input
            :state='userLength'
            @blur='clearPass()'
            id='user'
            v-model.trim='user'
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :description='passDesc'
          :invalid-feedback='invalidFeedbackPass'
          :state='statePass'
          :valid-feedback='validFeedbackPass'
          id='fieldset2'
          label='Enter your password'
          label-for='pass'
        >
          <b-form-input
            :disabled='passInpState'
            :state='statePass'
            id='pass'
            type='password'
            v-model.trim='pass'
          ></b-form-input>
        </b-form-group>
        <div>
          <b-button
            :disabled='loginDisabled'
            block
            exact
            to='/'
          >Login</b-button>
        </div>
      </b-card>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => ({
    user: '',
    pass: '',
    loginDisabled: true
  }),

  watch: {
    user() {
      if (this.user.length < 4) {
        this.loginDisabled = true
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
  methods: {
    blurMe() {
      blur()
    }
  }
}
</script>

<style>
#card {
  width: 50vw;
  height: 50vh;
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
