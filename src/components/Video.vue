<template>
  <div class="video">
    <iframe
      :src="`${props.src || 'https://www.youtube.com/embed/H5aYFToQZKM'}?controls=0`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="video__video"
    ></iframe>
  </div>
</template>

<script setup>
let props = defineProps(['src'])
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  border-radius: 40px;
  overflow: hidden;

  &__video{
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>