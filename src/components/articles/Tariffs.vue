<template>
  <article class="tariffs">
    <div class="tariffs__heading">Тарифи</div>

    <div class="tariff">
      <div class="tariff__heading">База</div>
      <div class="tariff__underheading">*без зворотнього звʼязку</div>

      <div class="tariff__text">
        <ul>
          <li>Відео-уроки</li>
          <li>Завдання</li>
          <li>Доступ до матеріалів</li>
        </ul>
      </div>

      <div class="tariff__price">
        $ 150
        <div class="tariff__price--old">$ 200</div>
      </div>
      <div class="tariff__hrn">~ 5 570 грн</div>

      <a class="tariff__btn" href="https://t.me/moveit_academy_bot?start=X8TqxA9nYKAj5Z9G" target="_blank">Стартуємо Базу</a>
      <div class="tariff__btn tariff__btn--hidden">Частинами $50 / місяць</div>
    </div>

    <div class="tariff tariff--video">
      <div class="tariff__heading">База + відео-фідбек</div>
      <div class="tariff__underheading"> </div>

      <div class="tariff__text">
        <ul>
          <li>Відео-уроки</li>
          <li>Завдання</li>
          <li>Доступ до матеріалів</li>
          <br />
          <li>Відео-фідбек 2 місяці</li>
        </ul>
      </div>

      <div class="tariff__price">
        $ 300
        <div class="tariff__price--old">$ 400</div>
      </div>
      <div class="tariff__hrn">~ 11 140 грн</div>

      <a class="tariff__btn" href="https://t.me/moveit_academy_bot?start=Ri7ibNS1u43cY6jV" target="_blank">Стартуємо з Фідбеком</a>
      <div class="tariff__btn tariff__btn--hidden">Частинами $100 / місяць</div>
    </div>

    <div class="tariff tariff--personal">
      <div class="tariff__heading">індивідуалка 2 місяці</div>
      <div class="tariff__underheading"> </div>

      <div class="tariff__text">
        <ul>
          <li>Відео-уроки</li>
          <li>Завдання</li>
          <li>Доступ до матеріалів</li>
          <br />
          <li>Відео-фідбек 2 місяці</li>
          <br />
          <li>Допомога з Резюме</li>
          <li>Допомога з Портфоліо</li>
          <li>Допомога з Співбесідами</li>
          <li>8 відео звінків по 1 годині</li>
        </ul>
      </div>

      <div class="tariff__price">
        $ 1000
        <div class="tariff__price--old">$ 1500</div>
      </div>
      <div class="tariff__hrn">~ 37 150 грн</div>

      <a class="tariff__btn" href="https://t.me/moveit_academy_bot?start=64asJNFmAbqvs9VV" target="_blank">Стартуємо Індивідуалку</a>
      <div class="tariff__btn tariff__btn--hidden">Частинами $250 / місяць</div>
    </div>

    <div class="tariffs__under">*Кожні 3 місяці ціна зростає, тому встигни зараз, аби не прогавити момент.</div>
    <div class="tariffs__crypto">
      Можна оплатити <strong>криптовалютою</strong>, напишіть у підтримку за інструкцією.
    </div>
    <div class="tariffs__support">
      <a class="btn btn--transparent" href="https://t.me/moveit_support_bot?start=V0UCCb6zyKWhpnqH" target="_blank">
        підтримка
        <Arrow />
      </a>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.tariff {
  position: relative;
  width: 383px;
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 28px 20px 20px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.20);

  &--video {
    border: 1px solid #2F8DC1;
    background: linear-gradient(315deg, rgba(47, 141, 193, 0.10) 0%, rgba(47, 141, 193, 0.00) 100%);
  }

  &--personal {
    border: 1px solid #D19335;
    background: linear-gradient(315deg, rgba(209, 147, 53, 0.10) 0%, rgba(209, 147, 53, 0.00) 100%);
  }

  &s {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 382px);
    justify-content: space-between;
    width: 1200px;
    max-width: 1200px;
    margin: 153px auto 137px;

    &::before {
      content: 'Літній SALE до 1 вересня!';
      position: absolute;
      z-index: 2;
      width: max-content;
      top: 35px;
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
      max-width: 486px;
      grid-column: 1 / span 3;
      margin: 85px auto 0;
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

    &__support {
      grid-column: 2;
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
    height: 1em;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
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

    &--hidden {
      display: none !important;
    }
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
        top: 80px;
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