<template>
  <div>
    <b-navbar
      toggleable='md'
      type='dark'
      variant='info'
    >
      <b-navbar-toggle target='nav_collapse'/>

      <b-navbar-brand to='/'>NavBar</b-navbar-brand>
      <b-collapse
        id='nav_collapse'
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item
            id='login'
            to='/login'
          >login</b-nav-item>
          <b-nav-item
            @click='classToggle('home', $event)'
            exact
            id='home'
            to='/'
          >home</b-nav-item>
          <b-nav-item
            id='locked'
            to='/locked'
          >locked</b-nav-item>
          <b-nav-item
            disabled
            href='#'
          >Disabled</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-form>
            <b-form-input
              class='mr-sm-2'
              placeholder='Search'
              size='sm'
              type='text'
              v-model='test'
            />
            <b-button
              class='my-2 my-sm-0'
              exact
              size='sm'
              to='/'
            >Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-item-dropdown
            right
            text='Lang'
          >
            <b-dropdown-item href='#'>EN</b-dropdown-item>
            <b-dropdown-item href='#'>ES</b-dropdown-item>
            <b-dropdown-item href='#'>RU</b-dropdown-item>
            <b-dropdown-item href='#'>FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot='button-content'>
              <em>User</em>
            </template>
            <b-dropdown-item href='#'>Profile</b-dropdown-item>
            <b-dropdown-item href='#'>Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavrBar',
  data: () => ({
    home: Boolean,
    test: 'test',
    activeClass: ''
  }),
  computed: {
    testc() {
      return 'tesc'
    }
  },
  computed: {},
  mounted() {
    this.activeClass = $nuxt.$route.name
  },
  methods: {
    classToggle(el, event) {
      console.log(this.activeClass)
      // let e = event.target
      // e.classList.add('active')
      // console.log(e)
      // let home = document.getElementById(el).children.item(0)
      // let t = event.target
      // home.classList.remove('active')
      // t.classList.add('active')
      // this.test = event.classList
    }
  }
}
</script>
<style>
a:hover {
  text-decoration: unset;
}
</style>
