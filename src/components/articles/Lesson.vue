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
      <br/>
      Більше ніяких складних особистих кабінетів.
    </div>

    <img class="lesson__img" src="@/assets/images/lesson-structure.svg" loading="lazy"/>
  </article>
</template>

<style lang="scss" scoped>
.lesson{
  display: grid;
  &__heading{
    
  }
  &__text{
    &--heading{}
  }
  &__img{
    grid-column: 2;
    grid-row: 1 / span 3;
  }
}
</style>