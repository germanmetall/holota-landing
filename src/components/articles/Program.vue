<template>
  <article class="program">
    <div class="program__heading">Програма</div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “База”</div>

      <div
        class="module"
        v-for="(item, counter) in structure.base"
      >
        <div class="module__name">
          <img
            alt="figma icon"
            loading="lazy"
            v-if="item.isFigma"
            style="width: 27px; height: 27px; padding: 4px 5px 3px 5px; border-radius: 50%; background: rgba(255, 255, 255, 0.10);"
            src="@/assets/images/figma.jpg"
          />
          <div>
            <div class="module__heading">Модуль {{ counter + 1 }}.</div>
            {{ item.name }}
          </div>
        </div>
        <div class="module__goal">
          <div class="module__heading">Мета</div>
          <div v-html="item.goal"></div>
        </div>
        <div class="module__keywords">
          <div
            class="keyword"
            v-for="keyword in item.keywords"
          >{{ keyword }}</div>
        </div>
      </div>
    </div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “База + відео-фідбек”</div>

      <div
        class="module module--video"
        v-for="(item, counter) in structure.video"
        :style="counter == 0 ? 'height: 300px;' : ''"
      >
        <div class="module__name">
          <img
            alt="loom icon"
            loading="lazy"
            v-if="item.isLoom"
            style="width: 27px; height: 27px; border-radius: 50%;"
            src="@/assets/images/loom.png"
          />
          {{ item.name }}
        </div>
        <div
          class="module__goal"
          v-html="item.goal"
        ></div>
        <div class="module__keywords">
          <div
            class="keyword"
            v-for="keyword in item.keywords"
          >{{ keyword }}</div>
        </div>
      </div>
    </div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “Індивідуалка”</div>

      <div
        class="module module--personal"
        v-for="(item, counter) in structure.personal"
        :style="counter == 0 ? 'height: 159px;' : ''"
      >
        <div class="module__name">
          {{ item.name }}
        </div>
        <div
          class="module__goal"
          v-html="item.goal"
        ></div>
        <div class="module__keywords">
          <div
            class="keyword"
            v-for="keyword in item.keywords"
          >{{ keyword }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const structure = ref({
  base: [
    {
      name: 'Вступ до професії',
      goal: 'Зрозуміти, як побудована професія в цілому, на що звернути увагу, якими інструментами будемо користуватись, та як проходити курс максимально ефективно для себе.',
      keywords: [
        'Як вчитися та проходити курс',
        'Чим займається Веб дизайнер',
        'Софт скіли та Хард скіли',
        'Хто такий UX/UI дизайнер',
        'Софт та інструменти (огляд)'
      ]
    }, {
      name: 'три фундаменти Дизайну',
      goal: 'Основа основ в візуальному дизайні. Зрозуміти як працювати з цими єлементами та здробити кілька тренувальних вправ.',
      keywords: [
        'Композиція',
        'Типографіка',
        'Колір та палітра'
      ]
    }, {
      isFigma: true,
      name: 'Фігма – основний інструмент',
      goal: 'Найголовніший інструмент у сучасному дизайні. Навчитись основам та фішкам, які допоможуть процювати значно швидше та якісніше.',
      keywords: [
        'Плагіни для Фігми',
        'Уроки'
      ]
    }, {
      name: 'Вправи для тренування',
      goal: 'Здобуття навичку робити швидко, та не думати про інструмент. Це допоможе тобі робити будь-які робочі завдання.',
      keywords: [
        'Робота з фреймами',
        'Перемальовка',
        '“У різних стилях”',
        'Своя дизайн-система',
        'Адаптивний дизайн'
      ]
    }, {
      name: 'Про UI',
      goal: 'Розвиваємо надивленність та дизайнерський смак, Розбираємось як малювати багато крутих варіантів дизайну.',
      keywords: [
        'Як малювати гарний UI',
        'Як прибрати "страх білого екрану"',
        'Де шукати приклади крутого дизайну'
      ]
    }, {
      name: 'Про UX',
      goal: 'Тут говоримо про бізнес. Які у нього цілі, яка мета, як можна покращіти бізнес-процеси за допомогою дизайну.',
      keywords: [
        'Психологія сприйняття',
        'Аналіз конкурентів',
        'Інформаційна архітектура',
        'User flow',
        'Тестування',
        'Mindmap та прототипування'
      ]
    }
  ],
  video: [
    {
      name: 'Весь тариф “База”',
      goal: 'Вся База тобі доступна, всі уроки та завдання.',
      keywords: [
        'Вступ до професії',
        'Три фундаменти Дизайну',
        'Фігма – основний інструмент',
        'Вправи для тренування',
        'Про UI',
        'Про UX'
      ]
    },
    {
      isLoom: true,
      name: 'відео-фідбек 2 місяці',
      goal: 'Що найцінніше в навчанні? Можливість запитати у ментора.<br/><br/>Тут ти відсілаєш мені свою роботу, а я записую тобі зворотній фідбек, де кажу що виправити.',
      keywords: [
        'Відео-фідбек',
        'Loom'
      ]
    }
  ],
  personal: [
    {
      name: 'Весь тариф “База + відео-фідбек”',
      goal: 'Вся База тобі доступна, всі уроки та завдання.',
      keywords: [
        'Тариф “База + відео-фідбек”'
      ]
    }, {
      name: 'індивідуальна работа 2 місяці',
      goal: 'Найцікавіше! У тебе є можливість 2 місяці спілкуватись зі мною безлімітно.<br/><br/>Я розроблю для тебе план розвитку, набагато детальніший фідбек по твоїм роботам.<br/><br/>Допоможу зробити резюме та портфоліо.<br/><br/>В тебе буде персональний арт-директор!',
      keywords: [
        'Безлімітний чат та фідбек',
        'Допомога з Резюме',
        'Допомога з Співбесідами',
        'Допомога з Портфоліо',
        '8 відео звінків – для продуктивної праці',
      ]
    }
  ]
})
</script>

<style lang="scss" scoped>
.program {
  width: min(calc(100% - 2 * 40px), 1100px);
  margin: 147px auto 173px;

  &__heading {
    margin-bottom: 41px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }
}

.tariff {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 80px;

  &__heading {
    color: #ffffff4d;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &:nth-of-type(2) {
    margin-top: 0;
  }
}

.module {
  display: grid;
  grid-template-columns: auto 428px;
  gap: 0 69px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.20);

  &--video {
    border: 1px solid rgba(47, 141, 193, 0.50);
    background: linear-gradient(315deg, rgba(47, 141, 193, 0.10) 0%, rgba(47, 141, 193, 0.00) 100%);
  }

  &--personal {
    border: 1px solid rgba(209, 147, 53, 0.50);
    background: linear-gradient(315deg, rgba(209, 147, 53, 0.10) 0%, rgba(209, 147, 53, 0.00) 100%);
  }

  &__name {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__heading {
    color: #ffffff4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__goal {
    .module__heading {
      margin-bottom: 20px;
    }

    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__keywords {
    margin-top: auto;
    width: 543px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.keyword {
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.10);
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;
}

@media screen and (max-width: 800px) {
  .program {
    width: calc(100% - 2 * 20px);
    margin: 133px auto 81px;

    &__heading {
      font-size: 34px;
      margin-bottom: 30px;
    }
  }

  .tariff {
    gap: 20px;
  }

  .module {
    display: flex;
    flex-direction: column;

    &--video,
    &--personal {
      height: unset !important;
    }

    &__name {
      gap: 20px;
    }

    &__goal {
      margin-top: 30px;
      margin-bottom: 55px;

      .module__heading {
        margin-bottom: 10px;
      }
    }

    &__keywords {
      width: auto;
    }
  }
}
</style>