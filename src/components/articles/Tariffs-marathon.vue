<template>
  <article class="tariffs">
    <div class="tariff">
      <div class="tariff__heading">Пекельний тиждень – 7 днів</div>

      <div class="tariff__text">
        <ul>
          <li>Відео-уроки</li>
          <li>Завдання</li>
          <li>Доступ до матеріалів</li>
        </ul>
      </div>

      <div class="tariff__price">
        $ 60
        <div class="tariff__price--old">$ 120</div>
      </div>
      <div class="tariff__hrn">~ 2 217 грн</div>

      <div class="tariff__btn">Стартуємо Пекельний тиждень</div>
    </div>

    <div class="tariffs__under">*Кожні 3 місяці ціна зростає, тому встигни зараз, аби не прогавити момент.</div>

    <div class="tariffs__crypto">
      Можна оплатити <strong>криптовалютою</strong>, напишіть у підтримку за інструкцією.
    </div>
    <div class="tariffs__support">
      <div class="btn btn--transparent">
        підтримка
        <Arrow />
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.tariff {
  position: relative;
  width: 100%;
  height: 405px;
  display: flex;
  flex-direction: column;
  padding: 28px 20px 20px 20px;
  border-radius: 20px;
  border: 1px solid #D19335;
  background: linear-gradient(315deg, rgba(209, 147, 53, 0.10) 0%, rgba(209, 147, 53, 0.00) 100%);
  margin: 0 auto;

  &s {
    position: relative;
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(3, 382px);
    justify-content: space-between;
    width: calc(100% - 2 * 126px);
    max-width: 611px;
    margin: 183px auto 137px;

    &::before {
      content: 'Літній SALE до 1 вересня!';
      position: absolute;
      z-index: 2;
      width: max-content;
      top: -60px;
      left: calc((100% - 480px) / 2 + 40px);
      border-radius: 110px;
      background: #00FFF0;
      transform: rotate(3.27deg);
      padding: 10px 30px;
      color: #1B1B1B;
      font-size: 28px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
    }

    &__heading {
      grid-column: 1 / span 3;
      margin-left: 45px;
      margin-bottom: 30px;
      color: #FFF;
      font-size: 40px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
    }

    &__under {
      margin-top: 30px;
      grid-column: 1 / span 3;
      text-align: center;
      color: #ffffff4d;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
    }

    &__crypto {
      padding: 10px 30px;
      border-radius: 110px;
      background: #D19335;
      color: #1B1B1B;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 150%;
    }

    &__support{
      text-align: center;
    }
  }

  &__heading {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__underheading {
    color: #ffffff4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    margin-top: 20px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    ul {
      margin: 0;
      padding-left: 28px;
    }
  }

  &__price {
    margin-top: auto;
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    &--old {
      display: inline;
      margin-left: 18px;
      color: #ffffff4d;
      font-size: 28px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
      text-decoration-line: line-through;
      text-transform: uppercase;
    }
  }

  &__hrn {
    color: #ffffff4d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__btn {
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.10);

    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    cursor: pointer;
  }
}

@media screen and (max-width: 800px) {
  .tariff {
    width: 100%;
    height: auto;

    &s {
      display: flex;
      flex-direction: column;
      gap: 22px;
      width: calc(100% - 2 * 20px);
      margin: 109px auto 107px;

      &::before {
        top: -55px;
        font-size: 22px;
      }

      &__heading {
        margin-left: 4px;
        margin-bottom: 50px;
      }

      &__under {
        margin-top: 78px;
      }
    }

    &__price {
      margin-top: 50px;
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
    }
  }
}
</style>