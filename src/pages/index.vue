<template>
  <Banner1 id="course" />
  <Text>
    Практичний курс дизайну якщо є трохи досвіду, але відчуваєш що чогось бракує, щоб зробити х2
  </Text>
  <Banner2 />
  <Author id="author" />
  <Lesson id="lesson" />
  <Banner3 />
  <Program id="program" />
  <Motivation id="audience" />
  <Btn />
  <FeedbackImages id="feedback" />
  <FeedbackVideo />
  <Text style="margin: 0 auto;">Починай вчитися одразу після оплати, у тебе буде доступ до бота та матеріалів</Text>
  <Tariffs id="tariffs" />
  <Hesitate />
</template>

<script setup>
import Author from '@/components/articles/Author.vue';
import Banner1 from '@/components/articles/Banner-1.vue';
import Banner2 from '@/components/articles/Banner-2.vue';
import Lesson from '@/components/articles/Lesson.vue';
import Motivation from '@/components/articles/Motivation.vue';
import Program from '@/components/articles/Program.vue';
import Text from '@/components/articles/Text.vue';
import Btn from '@/components/articles/Btn.vue';
import FeedbackImages from '@/components/articles/Feedback-images.vue';
import FeedbackVideo from '@/components/articles/Feedback-video.vue';
import Tariffs from '@/components/articles/Tariffs.vue';
import Hesitate from '@/components/articles/Hesitate.vue';
import Banner3 from '@/components/articles/Banner-3.vue';
</script>