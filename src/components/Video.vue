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
      <div class="video__text" ref="videoText" ><slot/></div>
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
      <svg
        class="video__icon"
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <path
          d="M7.65 16.11V1.89C7.65 0.54 7.08 0 5.64 0H2.01C0.57 0 0 0.54 0 1.89V16.11C0 17.46 0.57 18 2.01 18H5.64C7.08 18 7.65 17.46 7.65 16.11ZM18.002 16.11V1.89C18.002 0.54 17.432 0 15.992 0H12.362C10.932 0 10.352 0.54 10.352 1.89V16.11C10.352 17.46 10.922 18 12.362 18H15.992C17.432 18 18.002 17.46 18.002 16.11Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

let props = defineProps(['width'])

const isVideoPlaying = ref(false),
  inited = ref(false),
  videoText = ref()

watch(isVideoPlaying, () => {
  console.log(videoText.value);
  if(!isVideoPlaying.value) {
    videoText.value.style.width = props.width + 'px';
    videoText.value.style.marginRight = 0;
  }
  else {
    videoText.value.style.width = 0;
    videoText.value.style.marginRight = '-20px';
  }
})

onMounted(() => {
  videoText.value.style.width = props.width + 'px';
})
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

  &__text{
    white-space: nowrap;
    transition: .3s;
    overflow: hidden;
  }

  &__icon{
    width: 23px;
    height: 23px;
  }
}
</style>