<template>
  <article class="banner">
    <div class="block">
      <div class="block__heading">Зворотній звʼязок</div>
      <div class="block__text">Відсилай свою роботу та отримай фідбек в індивідуальному чаті, це може будти текстом, а
        може бути відео</div>
      <a
        class="btn"
        href="#tariffs"
      >
        Хочу на курс
        <Arrow />
      </a>
    </div>
    <div class="block">
      <div class="block__heading block__heading--loom">
        В форматі loom
        <img
          class="block__loom"
          src="@/assets/images/loom.png"
          alt="loom icon"
          loading="lazy"
        />
      </div>
      <div class="block__text">Я записую видео-фидбек, де розповідаю про твої помилки, та як їх виправити</div>
      <div class="btn">
        приклад фідбеку
        <Arrow />
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: row;
  width: min(calc(100% - 2 * 40px), 1360px);
  margin: 0 auto;
  height: 532px;
  padding: 40px 56px 54px 44px;
  background: lightgray 50%;
  background-image: linear-gradient(135deg, #19093380 0%, #0C041980 100%), url('@/assets/images/banner-3-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
}

.block {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    max-width: 80%;
    margin-top: 20px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__loom {
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }

  .btn {
    margin-top: auto;
    width: fit-content;
  }
}

@media screen and (max-width: 800px) {
  .banner {
    width: calc(100% - 2 * 20px);
    height: unset;
    display: flex;
    flex-direction: column;
    padding: 40px 26px 32px;
    gap: 105px;
  }

  .block {
    &__heading {
      font-size: 34px;

      &--loom {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    &__text {
      margin-top: 25px;
      font-size: 16px;
    }

    &__loom {
      margin-right: auto;
    }

    .btn {
      text-align: center;
      width: 100%;
      margin: 50px auto 0;
    }
  }
}</style>