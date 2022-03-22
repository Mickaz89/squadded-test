<template>
  <div class="flex flex-row ml-2 comment">
    <h4 class="font-bold mr-2">
      {{ comment.username }}
    </h4>
    <p>{{ comment.content }}</p>
  </div>
</template>

<script>

export default {
  name: 'PostComment',
  props: {
    comment: { options: Object },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $commentFontColor: rgb(4, 9, 50);
    p{
        color: $commentFontColor;
    }
</style>
