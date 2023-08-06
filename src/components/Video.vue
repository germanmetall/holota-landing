<template>
  <div class="video">
    <video
      class="video__video"
      v-if="inited"
    ></video>
    <img
      class="video__thumbnail"
      src="@/assets/images/video-thumbnail-1.jpeg"
      v-else
    />
    <div
      class="video__control"
      @click="isVideoPlaying = !isVideoPlaying"
    >
      <slot />
      <svg
        class="video__icon"
        v-if="!isVideoPlaying"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
      >
        <path
          d="M13.6632 6.78773C14.9519 7.56556 14.9519 9.43445 13.6632 10.2123L3.03352 16.6283C1.70056 17.4328 1.05616e-06 16.473 1.12421e-06 14.916L1.68512e-06 2.08398C1.75318e-06 0.527035 1.70056 -0.432846 3.03351 0.371716L13.6632 6.78773Z"
          fill="white"
        />
      </svg>
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

const isVideoPlaying = ref(false),
  inited = ref(false)
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  border-radius: 40px;
  overflow: hidden;

  &__video {
    width: 100%;
  }

  &__thumbnail {
    width: 100%;
  }

  &__control {
    position: absolute;
    bottom: 13px;
    left: 13px;
    width: calc(100% - 2 * 13px);
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 1000px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(22px);
    cursor: pointer;

    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
  }
}
</style>