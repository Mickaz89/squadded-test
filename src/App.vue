<template>
  <PostsList msg="Welcome to Your Vue.js App" />
</template>

<script>
import PostCard from './components/PostCard.vue';
import PostsList from './components/PostsList.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PostCard,
    PostsList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
