<template>
  <Header />
  <Banner1Marathon />
  <Text>
    Практичний марафон з дизайну, якщо зовсім немає досвіду, але хочеш змінити професію та збільшити заробіток
  </Text>
  <Banner2Marathon />
  <Author />
  <LessonMarathon />
  <Banner3Marathon />
  <ProgramMarathon />
  <MotivationMarathon />
  <Btn />
  <FeedbackImages />
  <FeedbackVideo />
  <Text style="margin: 0 auto;">Починай вчитися одразу після оплати, у тебе буде доступ до бота та матеріалів</Text>
  <TariffsMarathon />
  <Hesitate />
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Author from '@/components/articles/Author.vue';
import Text from '@/components/articles/Text.vue';
import Btn from '@/components/articles/Btn.vue';
import FeedbackImages from '@/components/articles/Feedback-images.vue';
import FeedbackVideo from '@/components/articles/Feedback-video.vue';
import Hesitate from '@/components/articles/Hesitate.vue';
import Footer from '@/components/Footer.vue';

import Banner1Marathon from '@/components/articles/Banner-1-marathon.vue';
import Banner2Marathon from '@/components/articles/Banner-2-marathon.vue';
import LessonMarathon from '@/components/articles/Lesson-marathon.vue';
import Banner3Marathon from '@/components/articles/Banner-3-marathon.vue';
import ProgramMarathon from '@/components/articles/Program-marathon.vue';
import MotivationMarathon from '@/components/articles/Motivation-marathon.vue';
import TariffsMarathon from '@/components/articles/Tariffs-marathon.vue';
</script>