<template>
  <article class="banner">
    <div class="block">
      <div class="block__heading">Зворотній звʼязок</div>
      <div class="block__text">Відсилай свою роботу та отримай фідбек в індивідуальному чаті, це може будти текстом, а
        може бути відео</div>
      <div class="btn">
        Хочу на курс
        <Arrow />
      </div>
    </div>
    <div class="block">
      <div class="block__heading">
        В форматі loom <img style="" src="" alt="loom" />
      </div>
      <div class="block__text">Я записую видео-фидбек, де розповідаю про твої помилки, та як їх виправити</div>
      <div class="btn">
        приклад фідбеку
        <Arrow />
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.banner{
  
}
.block{
  &__heading{}
  &__text{}
}
</style>