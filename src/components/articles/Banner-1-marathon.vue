<template>
  <article class="banner">
    <h1 class="banner__h1">Марафон "Пекельний тиждень"</h1>
    <h2 class="banner__h2">Зроби свої перші результати за 7 днів</h2>

    <div class="banner__actions">
      <a class="btn" href="#tariffs">
        Придбати одразу
        <Arrow />
      </a>
      <a class="btn btn--transparent" href="#lesson">
        Дізнатись більше
        <Arrow />
      </a>
    </div>

    <div class="banner__text">
      <ul>
        <li>7 днів практики</li>
        <li>Зробиш свої перші роботи в дизайні</li>
        <li>Кожен день зворотній звʼязок</li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.banner {
  display: grid;
  grid-template-columns: auto 560px;
  grid-template-rows: 76px 70px auto;
  gap: 30px 132px;
  width: min(calc(100% - 2 * 40px), 1360px);
  height: 532px;
  padding: 40px 56px 54px 44px;
  margin: 0 auto;
  border-radius: 40px;
  background: lightgray 50%;border-radius: 40px;
  background-image: linear-gradient(135deg, #19093380 0%, #0C041980 100%), url('@/assets/images/banner-1-marathon-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;

  &__h1 {
    margin: unset;
    color: #FFF;
    font-size: 54px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    grid-column: span 2;
  }

  &__h2 {
    margin: unset;
    color: #FFF;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__actions {
    grid-column: 1;
    grid-row: 3;
    margin-top: auto;
    display: flex;
    flex-direction: row;
  }

  &__text {
    grid-row: 3;
    grid-column: 2;
    margin-top: auto;
    margin-left: auto;
    position: relative;
    color: #FFF;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    ul {
      margin: unset;
    }
  }
}

@media screen and (max-width: 800px) {
  .banner {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2 * 20px);
    height: 690px;
    padding: 33px 25px 9px;

    &__h1 {
      font-size: 34px;
    }

    &__h2 {
      font-size: 16px;
    }

    &__text {
      font-size: 16px;
    }

    &__actions {
      display: flex;
      flex-direction: column;
      order: 2;
      text-align: center;
    }
  }
}
</style>