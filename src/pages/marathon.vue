<template>
  <Banner1Marathon id="course" />
  <Text>
    Практичний марафон з дизайну, якщо зовсім немає досвіду, але хочеш змінити професію та збільшити заробіток
  </Text>
  <Banner2Marathon />
  <Author id="author" />
  <LessonMarathon id="lesson" />
  <Banner3Marathon />
  <ProgramMarathon id="program" />
  <MotivationMarathon id="audience" />
  <Btn />
  <FeedbackImages id="feedback" />
  <FeedbackVideo />
  <Text style="margin: 0 auto;">Починай вчитися одразу після оплати, у тебе буде доступ до бота та матеріалів</Text>
  <TariffsMarathon id="tariffs" />
  <Hesitate />
</template>

<script setup>
import Author from '@/components/articles/Author.vue';
import Text from '@/components/articles/Text.vue';
import Btn from '@/components/articles/Btn.vue';
import FeedbackImages from '@/components/articles/Feedback-images.vue';
import FeedbackVideo from '@/components/articles/Feedback-video.vue';
import Hesitate from '@/components/articles/Hesitate.vue';

import Banner1Marathon from '@/components/articles/Banner-1-marathon.vue';
import Banner2Marathon from '@/components/articles/Banner-2-marathon.vue';
import LessonMarathon from '@/components/articles/Lesson-marathon.vue';
import Banner3Marathon from '@/components/articles/Banner-3-marathon.vue';
import ProgramMarathon from '@/components/articles/Program-marathon.vue';
import MotivationMarathon from '@/components/articles/Motivation-marathon.vue';
import TariffsMarathon from '@/components/articles/Tariffs-marathon.vue';
</script>