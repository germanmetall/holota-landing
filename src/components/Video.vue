<template>
  <div class="video">
    <div style="padding:177.78% 0 0 0;position:relative;">
      <iframe
        :src="props.src"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
      ></iframe>
    </div>
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

  &__video {
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