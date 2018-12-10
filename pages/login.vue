<template>
  <section class="container">
    <div>
      <h1 class="subtitle">
        login
      </h1>
      <b-card
        id="card"
        bg-variant="light"
      >
        <b-form-group
          id="fieldset1"
          label="Enter your username"
          label-for="user"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input
            @blur="clearPass()"
            id="user"
            :state="state"
            v-model.trim="name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset2"
          :description="passDesc"
          label="Enter your password"
          label-for="pass"
          :invalid-feedback="invalidFeedbackPass"
          :valid-feedback="validFeedbackPass"
          :state="statePass"
        >
          <b-form-input
            id="pass"
            :state="statePass"
            :disabled="passInpState"
            v-model.trim="pass"
          ></b-form-input>
        </b-form-group>
        <div>
          <b-button
            block
            :disabled="loginDisabled"
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
    name: '',
    pass: ''
  }),
  mounted() {
    document.getElementById('user').addEventListener('blur', function() {
      let userField = document.getElementById('user').value
      if (userField.length < 4) {
        document.getElementById('pass').value = ''
        this.pass = ''
      }
    })
  },
  computed: {
    loginDisabled() {
      return this.pass.length > 3 ? false : true
    },
    passDesc() {
      return this.pass.length > 0 ? '' : 'Password'
    },
    passInpState() {
      return this.state ? false : true
    },
    state() {
      return this.name.length >= 4 ? true : false
    },
    statePass() {
      if (this.pass.length < 1) {
        return false
      } else {
        return this.pass.length >= 4 ? true : false
      }
    },
    invalidFeedback() {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter your email'
      }
    },
    validFeedback() {
      if (this.pass.length > 0) {
        return '&nbsp'
      } else {
        return this.state === true ? 'Enter password below' : '&nbsp'
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
    clearPass() {
      this.pass = ''
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
