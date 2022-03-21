<template>
  <!-- Posts List -->
     <div class="container max-w-md mx-auto border flex-col">
      <!-- Post Card -->
       <div>
            <!-- Header -->
            <div class="flex flex-row items-center mt-2">
              <div class="w-12 h-12 mr-2 ml-2">
                <img class="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/api/portraits/women/81.jpg"
                    alt="user image" />
              </div>
              <div>Jenny</div>
            </div>
            <!-- Image -->
            <div class="flex flex-col justify-center items-center mt-5 ">
              <img alt="img" src="https://source.unsplash.com/featured?technology" class="max-h-80 max-w-80">
            </div>

            <!-- Footer -->
            <div class="flex flex-row">
              <HeartIcon class="h-5 w-5 text-red-500"/>
              <span>12 Likes</span>
            </div>
       </div>
    </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/solid';

export default {
  name: 'CardUI',
  props: {
    msg: String,
  },
  components: { HeartIcon },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
