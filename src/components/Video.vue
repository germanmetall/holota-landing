<template>
  <div class="video">
    <video class="video__video"></video>
    <div
      class="video__control"
      @click="isVideoPlaying = !isVideoPlaying"
    >
      <slot/>
      <img
        class="video__icon"
        v-if="isVideoPlaying"
        src=""
      />
      <img
        class="video__icon"
        v-else
        src=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVideoPlaying = ref(false)
</script>

<style lang="scss" scoped>
.video{
  &__video{
    width: 100%;
  }
  &__control{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>