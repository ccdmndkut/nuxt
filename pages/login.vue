<template>
  <section class="container">
    <div>
      <h1 class="title">
        login
      </h1>
      <b-card bg-variant="light">
        <b-form-group
          horizontal
          breakpoint="lg"
          label="Login Here"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            horizontal
            label="Email:"
            label-class="text-sm-right"
            label-for="nestedStreet"
          >
            <b-form-input id="nestedStreet" />
          </b-form-group>
          <b-form-group
            horizontal
            label="City:"
            label-class="text-sm-right"
            label-for="nestedCity"
          >
            <b-form-input id="nestedCity" />
          </b-form-group>
          <b-form-group
            horizontal
            label="State:"
            label-class="text-sm-right"
            label-for="nestedState"
          >
            <b-form-input id="nestedState" />
          </b-form-group>
          <b-form-group
            horizontal
            label="Country:"
            label-class="text-sm-right"
            label-for="nestedCountry"
          >
            <b-form-input id="nestedCountry" />
          </b-form-group>
          <b-form-group
            horizontal
            label="Ship via:"
            label-class="text-sm-right"
            class="mb-0"
          >
            <b-form-radio-group
              :options="['Air', 'Courier', 'Mail']"
              class="pt-2"
            />
          </b-form-group>
        </b-form-group>
      </b-card>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
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
