<template>
  <!-- Posts List -->
  <div class="container max-w-md mx-auto border flex-col pb-2 mb-3">
    <!-- Post Card -->
    <div>
      <!-- Header -->
      <div class="flex flex-row items-center mt-2">
        <div class="w-12 h-12 mr-2 ml-2">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            :src="post.avatar"
            alt="user image"
          >
        </div>
        <div>{{ post.username }}</div>
      </div>
      <!-- Image -->
      <div class="flex flex-col justify-center items-center mt-5 max-h-80 overflow-hidden ">
        <img
          alt="img"
          :src="post.postImage"
        >
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-between items-center">
        <div class="ml-2">
          <p class="font-bold">
            14.56$
          </p>
        </div>
        <div class="flex flex-row ml-2 mr-2">
          <button @click.prevent="incrementLikes(post.id)">
            <div v-if="liked(post.id)">
              <HeartIconSolid class="h-8 w-8 text-black-500" />
            </div>
            <div v-if="!liked(post.id)">
              <HeartIconOutline class="h-8 w-8 text-black-500" />
            </div>
          </button>
          <button @click.prevent="toogleComments(post.id)">
            <div v-if="toogled(post.id)">
              <ChatAlt2IconSolid class="h-8 w-8 text-black-500" />
            </div>
            <div v-if="!toogled(post.id)">
              <ChatAlt2IconOutline class="h-8 w-8 text-black-500" />
            </div>
          </button>
        </div>
      </div>
      <div />

      <div class="flex flex-row justify-end mt-2 mb-2 mr-2">
        <p class="font-bold">
          {{ post.likes }} likes
        </p>
      </div>

      <!-- Comments list -->
      <div class="flex flex-col">
        <!-- Display only First comment -->
        <div v-if="!toogled(post.id)">
          <PostComment :comment="post.comments[0]" />
          <div>
            <button
              class="flex flex-row ml-2"
              @click.prevent="toogleComments(post.id)"
            >
              <p class="text-slate-400">
                View all {{ post.comments.length }} comments
              </p>
            </button>
          </div>
        </div>
        <!-- All comments  -->
        <div
          v-for="comment in post.comments"
          v-if="toogled(post.id)"
        >
          <PostComment :comment="comment" />
        </div>
      </div>
      <hr class="mt-2 mb-2">
      <div class="flex flex-row mr-2 ml-2 ">
        <input
          v-model="commentInput"
          class="container outline-none"
          placeholder="Add a comment..."
        >
        <button @click.prevent="addComment(post.id)">
          Publish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { HeartIcon as HeartIconSolid, ChatAlt2Icon as ChatAlt2IconSolid } from '@heroicons/vue/solid';
import { HeartIcon as HeartIconOutline, ChatAlt2Icon as ChatAlt2IconOutline } from '@heroicons/vue/outline';

import PostComment from './PostComment.vue';

export default {
  name: 'PostCard',
  components: {
    HeartIconSolid,
    ChatAlt2IconSolid,
    // eslint-disable-next-line vue/no-unused-components
    HeartIconOutline,
    // eslint-disable-next-line vue/no-unused-components
    ChatAlt2IconOutline,
    PostComment,
  },
  props: {
    post: { options: Object },
    comment: Object,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    incrementLikes(postId) {
      this.$store.commit('incrementLikes', postId);
    },
    liked(postId) {
      const index = this.$store.state.posts.findIndex((element) => element.id === postId);
      return this.$store.state.posts[index].liked;
    },
    toogled(postId) {
      const index = this.$store.state.posts.findIndex((element) => element.id === postId);
      return this.$store.state.posts[index].showAllComments;
    },
    toogleComments(postId) {
      this.$store.commit('showAllComments', postId);
    },
    addComment(postId) {
      console.log('comment ', this.commentInput);
      this.$store.commit('addComment', { postId, comment: this.commentInput });
      this.commentInput = '';
    },
  },
};
</script>

