<template>
  <div class="fetch-posts">
    <!--we loop through those posts that we get from our api and display their info:-->
    <div v-for='post in posts' :key='post.id'>
        <h3>Post Title: </h3>  {{post.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FetchPosts',
  computed: {
    //posts from the state of store:
    posts() {
    return this.$store.state.posts
    }
  },
  mounted() {
    //dispatch the action getPosts() that gets posts from an api and commits the set_posts() mutation:
    this.$store.dispatch("getPosts");
  }
}
</script>