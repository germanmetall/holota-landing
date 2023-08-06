<template>
  <article class="feedback-videos">
    <Video class="feedback-videos__block">Відгук від Наді</Video>
    <Video class="feedback-videos__block">Відгук від Наді</Video>
    <div class="feedback-videos__block feedback-videos__block--welcome">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M26.292 43.3543C25.5837 43.6043 24.417 43.6043 23.7087 43.3543C17.667 41.2918 4.16699 32.6877 4.16699 18.1043C4.16699 11.6668 9.35449 6.4585 15.7503 6.4585C19.542 6.4585 22.8962 8.29183 25.0003 11.1252C26.0707 9.67907 27.4649 8.50376 29.0712 7.69338C30.6774 6.883 32.4512 6.46008 34.2503 6.4585C40.6462 6.4585 45.8337 11.6668 45.8337 18.1043C45.8337 32.6877 32.3337 41.2918 26.292 43.3543Z"
            stroke="white"
            stroke-width="3.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>

      Велком до нас!
    </div>
  </article>
</template>

<script setup>
import Video from '@/components/Video.vue'
</script>

<style lang="scss" scoped>
.feedback-videos {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: calc(100% - 2 * 126px);
  max-width: 1200px;
  margin: 120px auto 170px;

  &__block {
    width: 100%;
    aspect-ratio: 1/1.25;

    &--welcome {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      border-radius: 40px;
      border: 1px solid rgba(255, 255, 255, 0.10);

      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      text-transform: uppercase;

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .feedback-videos {
    width: calc(100% - 2 * 20px);
    margin: 0 auto 102px;

    &__block {
      &--welcome {
        display: none;
      }
    }
  }
}
</style>