<template>
  <article class="program">
    <div class="program__heading">Програма</div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “База”</div>
      
      <div class="module" v-for="(item, counter) in structure.base">
        <div class="module__name">
          <img v-if="item.isFigma" style="" src=""/>
          <div class="module__counter">Модуль {{ counter+1 }}.</div>
          {{ item.name }}
        </div>
        <div class="module__keywords">
          <div class="keyword" v-for="keyword in item.keywords">{{ keyword }}</div>
        </div>
        <div class="module__goal" v-html="item.goal"></div>
      </div>
    </div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “База + відео-фідбек”</div>
      
      <div class="module module--video" v-for="item in structure.video">
        <div class="module__name">
          <img v-if="item.isLoom" style="" src=""/>
          {{ item.name }}
        </div>
        <div class="module__keywords">
          <div class="keyword" v-for="keyword in item.keywords">{{ keyword }}</div>
        </div>
        <div class="module__goal" v-html="item.goal"></div>
      </div>
    </div>

    <div class="tariff">
      <div class="tariff__heading">Тариф “Індивідуалка”</div>
      
      <div class="module module--personal" v-for="item in structure.personal">
        <div class="module__name">
          {{ item.name }}
        </div>
        <div class="module__keywords">
          <div class="keyword" v-for="keyword in item.keywords">{{ keyword }}</div>
        </div>
        <div class="module__goal" v-html="item.goal"></div>
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
    },{
      name: 'три фундаменти Дизайну',
      goal: 'Основа основ в візуальному дизайні. Зрозуміти як працювати з цими єлементами та здробити кілька тренувальних вправ.',
      keywords: [
        'Композиція',
        'Типографіка',
        'Колір та палітра'
      ]
    },{
      isFigma: true,
      name: 'Фігма – основний інструмент',
      goal: 'Найголовніший інструмент у сучасному дизайні. Навчитись основам та фішкам, які допоможуть процювати значно швидше та якісніше.',
      keywords: [
        'Плагіни для Фігми',
        'Уроки'
      ]
    },{
      name: 'Вправи для тренування',
      goal: 'Здобуття навичку робити швидко, та не думати про інструмент. Це допоможе тобі робити будь-які робочі завдання.',
      keywords: [
        'Робота з фреймами',
        'Перемальовка',
        '“У різних стилях”',
        'Своя дизайн-система',
        'Адаптивний дизайн'
      ]
    },{
      name: 'Про UI',
      goal: 'Розвиваємо надивленність та дизайнерський смак, Розбираємось як малювати багато крутих варіантів дизайну.',
      keywords: [
        'Як малювати гарний UI',
        'Як прибрати "страх білого екрану"',
        'Де шукати приклади крутого дизайну'
      ]
    },{
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
    },{
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

<style lang="scss" scoped></style>