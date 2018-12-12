<template>
  <section class='container'>
    <div>
      <h1 class='title'>HOME</h1>
      <h2 class='subtitle'>nuxt</h2>
      <PostList :posts='loadedPosts'></PostList>
    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    console.log('async executed')
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title:
              'post 1 Told vet on 11/28 I would have TDIU recon done this week TDIU NOD deadline Jan 30, 2018 Check myhealthEvet with pass eh txt me Follow-up with Vet on supervisor letter  HAVE VET SIGN BLANK FORMS BEFORE LEAVING Me: Draft letter for old supervisor THIS WEEK. See notes in folder. HOLDING TDIU RECON UNTIL NOVEMBER 25 / 5 YEAR 70 PTSD.Vet: To send myhealth pass (UN: markadams66), go to VA for recs, call VA to update address. TDIU NOD, Fibro sep ratings NOD. Other? 30 day f/u congress expedite. Have forms vet signed blank'
          }
        ]
      })
    }, 2500)
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  created() {}
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
}

.links {
  padding-top: 15px;
}
</style>
