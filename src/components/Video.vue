<template>
  <div class="video">
    <div style="padding:177.78% 0 0 0;position:relative;">
      <iframe
        :title="`video ${props.id}`"
        class="lazyload"
        :id="props.id"
        :data-src="props.url"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '@/stores/player'
import { onMounted } from 'vue';

const props = defineProps(['url', 'id'])
const store = usePlayerStore()

onMounted(() => {
  let iframe = document.querySelector(`#${props.id}`)
  iframe.addEventListener('lazyloaded', () => {
    iframe.src = iframe.getAttribute('data-src');
    iframe.setAttribute('data-src', null);
    store.addPlayer(props.id)
  })
})
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  border-radius: 40px;
  overflow: hidden;

  &__video {
    position: relative;
    padding-top: unset !important;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    urlect-fit: cover;
    cursor: pointer;
  }
}
</style>