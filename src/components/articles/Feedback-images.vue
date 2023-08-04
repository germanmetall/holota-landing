<template>
  <article class="feedback-images">
    <div
      class="card"
      id="card-1"
    >
      <div class="card__heading">
        <img
          class="card__avatar"
          src=""
          alt=""
        />
        Natalia Gorbacheva
      </div>
      <div class="card__text">
        Трохи із запізненням, але приєднаюся до всіх слів подяки @golota. Женя, дякую тобі за твою працю, за твої поради
        та терпіння. Дуже багато корисної інформації ти дав нам. Тобі творчих успіхів та успіхів у подальшому розвитку. Ти
        в нас вірив, і ми в тебе теж віримо!
      </div>
    </div>

    <div
      class="card"
      id="card-2"
    >
      <div class="card__heading">
        <img
          class="card__avatar"
          src=""
          alt=""
        />
        Anna
      </div>
      <div class="card__text">
        Женя @golota, дякую за знання, терпіння та наставництво. Думаю, ще зустрінемося на конференціях! І так, завдяки
        навчанню потрапила до продуктової компанії і працюватиму над цим проектом ще не один місяць! Дякую!
      </div>
    </div>

    <div
      class="card"
      id="card-3"
    >
      <div class="card__heading">
        <img
          class="card__avatar"
          src=""
          alt=""
        />
        Anzelika
      </div>
      <div class="card__text">
        @golota Жень, блін, дуже крутий стрим, багато корисної інформації зі спілкуванням з розробниками! Аби якщо він був
        пару днів тому)) Перед тим, як замовляти верстку))
      </div>
    </div>

    <div
      class="card"
      id="card-4"
    >
      <div class="card__heading">
        <img
          class="card__avatar"
          src=""
          alt=""
        />
        Anka Mart
      </div>
      <div class="card__text">
        Я теж хочу подякувати, Женя! Дякую тобі за розбори, поради, відповіді на купу запитань! За всю допомогу та
        натхнення. Дуже рада, що вдалося потрапити до тебе в группу!
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.feedback-images {
  position: relative;
  width: 100%;
  height: 820px;
  max-width: 1200px;
  margin: 120px auto 170px;
}

.card {
  position: absolute;
  padding: 20px 24px 28px 34px;
  border-radius: 40px;
  background: #FFF;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  /* 25.6px */

  &__heading {
    color: #1B1B1B;
    margin-bottom: 24px;
  }

  &__avatar {
    width: 67px;
    height: 67px;
    background-color: aquamarine;
    border-radius: 50%;
    margin-right: 11px;
  }

  &__text {
    color: #1b1b1bb3;
    font-size: 14px;
  }
}

#card- {
  &1 {
    width: 500px;
    left: 0px;
    top: 0;
    transform: rotate(-12.835deg);
  }

  &2 {
    width: 500px;
    right: 90px;
    top: 140px;
  }

  &3 {
    width: 450px;
    left: 40px;
    top: 500px;
    transform: rotate(7.012deg);
  }

  &4 {
    width: 430px;
    right: 80px;
    top: 550px;
    transform: rotate(-5.765deg);
  }
}

@media screen and (max-width: 800px) {
  .feedback-images {
    height: 360px;
    margin: 58px auto 81px;
  }

  .card {
    width: 220px !important;
    padding: 10px 12px;
    border-radius: 20px;

    &__heading {
      font-size: 7.246px;
      margin-bottom: 12px;
      line-height: 160%;
    }

    &__text {
      font-size: 6.341px;
      line-height: 160%;
    }

    &__avatar {
      width: 30px;
      height: 30px;
    }
  }

  #card {
    &-2 {
      transform: rotate(-9.869deg);
      right: -6px;
      top: 90px;
    }

    &-3 {
      left: -7px;
      top: 170px;
    }

    &-4 {
      right: -7px;
      top: 240px;
    }
  }
}
</style>