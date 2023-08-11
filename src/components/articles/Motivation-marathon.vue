<template>
  <article class="motivation">
    <div class="motivation__heading">Курс для тебе, якщо ти</div>

    <div class="block">
      <div class="block__heading">Взагалі новачок</div>
      <div class="block__text">
        <ul>
          <li>вже</li>
          <li>вже</li>
          <li>маєш багато питань, але не можеш знайти потрібні відповіді чи навпаки, інформації дуже багато</li>
        </ul>
      </div>
    </div>

    <div class="block">
      <div class="block__heading">Хочеш підготуватися до наступного рівня</div>
      <div class="block__text">
        <ul>
          <li>Курс "Мідл UX/UI дизайнер"</li>
        </ul>
        <a
          class="block__link"
          href="/"
        >
          погнали наступний рівень
          <Arrow style="width: 15px; height: 15px; margin-left: 20px;" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.motivation {
  width: min(calc(100% - 2 * 40px), 1020px);
  display: grid;
  grid-template-columns: auto 330px;
  gap: 28px 0;
  margin: 0 auto;

  &__heading {
    grid-column: 1 / span 2;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }
}

.block {
  max-width: 500px;

  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;

  &__heading {
    color: #D19335;
    margin-bottom: 15px;
  }

  &__text {
    color: #FFF;

    ul {
      list-style-type: '— ';
      padding-left: 22px;
      margin: unset;

      li:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__link {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Unbounded;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
    color: #EB4F3C;
    text-decoration: unset;
  }
}

@media screen and (max-width: 800px) {
  .motivation {
    width: calc(100% - 2 * 20px);
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__heading {
      font-size: 34px;
    }
  }

  .block {
    &:nth-of-type(3) {
      margin-top: 35px;
    }
  }
}
</style>