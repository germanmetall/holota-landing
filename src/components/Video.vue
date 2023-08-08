<template>
  <div class="video">
    <iframe
      :width="sizes[0] || 560"
      :height="sizes[1] || 560"
      :src="`${props.src}?controls=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="video__video"
      v-if="inited"
    ></iframe>

    <img
      class="video__thumbnail"
      src="@/assets/images/video-thumbnail-1.jpeg"
      @click="init"
      v-else
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let props = defineProps(['src'])

const inited = ref(false),
  sizes = ref([])

const init = () => {
  let rect = document.querySelector('.video__thumbnail').getClientRects()[0]
  sizes.value = [rect.width, rect.height]
  inited.value = true
}
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  border-radius: 40px;
  overflow: hidden;

  &__video{
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