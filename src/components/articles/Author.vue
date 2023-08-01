<template>
  <article class="author">
    <div class="author__heading">
      Євген Голота
      <div class="author__heading--color">&nbsp;/&nbsp;Автор программи</div>
    </div>
    <div class="author__underheading">UX/UI дизайнер в Attract Group</div>

    <div class="author__text">
      Продуктовий діджитал дизайнер з майже 10 роками досвіду у розробці цифрових продуктів та управлінні проектами.
      Викладаю більше 7 років індивідуально, а також на онлайн та офлайн курсах, працював із 500+ студентами.
      <br />
      Працював в Ubisoft на проекті з більш ніж 80 млн гравців.
    </div>

    <a
      class="author__link"
      href="https://www.yevhenholota.com/"
    >
      https://www.yevhenholota.com
      <Arrow />
    </a>

    <Video>Хай, го знайомитись</Video>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
import Video from '@/components/Video.vue'
</script>

<style lang="scss" scoped>
.author {
  &__heading {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    &--color {
      color: #D19335;
    }
  }

  &__underheading {
    color: #ffffff4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__link {
    text-decoration: none;
    color: #EB4F3C;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__video{}
}

.video{
  &__control{}
  &__icon{}
}
</style>