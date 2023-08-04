<template>
  <article class="lesson">
    <div class="lesson__heading">Як відбувається навчання</div>

    <div class="lesson__text">
      <div class="lesson__text--heading">20% теорії та 80% практики – це мій підхід</div>
      Я знаю, що навчитися можна тільки якщо постійно робити реальні завдання, тому ти отримаєш уроки і багато практичних
      завдань, які ставатимуть складніше як у реальних проектах.
    </div>

    <div class="lesson__text">
      <div class="lesson__text--heading">Зворотній зв'язок</div>
      Навчання проходить у телеграм-боті, тому ти можеш навчатися у будь-який час, там же ставити мені запитання і там
      отримувати зворотний зв'язок.
      <br /><br />
      Більше ніяких складних особистих кабінетів.
    </div>

    <img
      class="lesson__img"
      src="@/assets/images/lesson-structure.svg"
      loading="lazy"
    />
  </article>
</template>

<style lang="scss" scoped>
.lesson {
  display: grid;
  width: 1100px;
  margin: 178px auto;

  &__heading {
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    width: 550px;

    &--heading {
      width: 451px;
      color: #D19335;
      font-size: 26px;
      line-height: 140%;
      margin-bottom: 20px;
    }

    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__img {
    grid-column: 2;
    grid-row: 1 / span 3;
  }
}

@media screen and (max-width: 800px) {
  .lesson {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: calc(100% - 2 * 20px);
    margin: 133px auto;

    &__heading {
      font-size: 22px;
    }

    &__text {
      width: unset;
      font-size: 14px;
      &--heading {
        width: unset;
        font-size: 18px;
      }
    }

    &__img{
      width: calc(100% - 2 * 77px);
      margin: 20px auto 0;
    }
  }
}
</style>