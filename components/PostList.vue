<template>
  <section class='container'>
    <div
      :id='post.id'
      :key='post.id'
      :title='post.title'
      v-for='post in posts'
    >{{post.title}}</div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  data() {
    return {}
  }
}
</script>

<style>
</style>
