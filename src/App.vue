<template>
  <Header />
  <Banner1 />
  <Text>Практичний курс дизайну якщо є трохи досвіду, але відчуваєш що чогось бракує щоб зробити х2</Text>
  <Banner2 />
  <Author />
  <Lesson />
  <Program />
  <Motivation />
  <Btn />
  <FeedbackImages />
  <FeedbackVideo />
  <Text>Починай вчитися одразу після оплати, у тебе буде доступ до бота та матеріалів</Text>
  <Tariffs />
  <Hesitate />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Author from './components/articles/Author.vue';
import Banner1 from './components/articles/Banner-1.vue';
import Banner2 from './components/articles/Banner-2.vue';
import Lesson from './components/articles/Lesson.vue';
import Motivation from './components/articles/Motivation.vue';
import Program from './components/articles/Program.vue';
import Text from './components/articles/Text.vue';
import Btn from './components/articles/Btn.vue';
import FeedbackImages from './components/articles/Feedback-images.vue';
import FeedbackVideo from './components/articles/Feedback-video.vue';
import Tariffs from './components/articles/Tariffs.vue';
import Hesitate from './components/articles/Hesitate.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Light.ttf");
  font-weight: 300;
}
@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Regular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Medium.ttf");
  font-weight: 500;
}

* {
  box-sizing: border-box;
  font-family: Unbounded;
}

body {
  padding: 0;
  margin: 0;
  background: #1B1B1B;
}
</style>
