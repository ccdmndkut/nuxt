<template>
  <div class="subtitle">
    {{msg}}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: String,
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
