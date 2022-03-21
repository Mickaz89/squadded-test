<template>
  <!-- Posts List -->
  <div
    v-for="post in posts"
    class="container max-w-md mx-auto border flex-col pb-2 mb-3"
  >
  <PostCard :post="post" />
  </div>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  name: 'PostsList',
  props: {
    post: Object,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  components: {
    PostCard,
  },
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  </style>
