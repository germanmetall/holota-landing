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
      <br /><br />
      Працював в Ubisoft на проекті з більш ніж 80 млн гравців.
    </div>

    <a
      class="author__link"
      href="https://www.yevhenholota.com/"
    >
      yevhenholota.com
      <Arrow />
    </a>

    <Video
      class="author__video"
      :src="'https://www.youtube.com/embed/H5aYFToQZKM'"
      :width="180"
    >Хай, го знайомитись</Video>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
import Video from '@/components/Video.vue'
</script>

<style lang="scss" scoped>
.author {
  width: 1065px;
  display: grid;
  grid-template-columns: 332px auto;
  gap: 0 118px;
  margin: 0 auto;

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
    margin-top: 5px;
    color: #ffffff4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    margin-top: 30px;
    margin-right: 20px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__link {
    margin-top: 74px;
    text-decoration: none;
    color: #EB4F3C;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__video {
    grid-column: 1;
    grid-row: 1 / span 4;
    order: 0;
  }
}

@media screen and (max-width: 800px) {
  .author {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2 * 20px);
    text-align: center;

    &__heading--color {
      font-size: 18px;
    }

    &__underheading {
      margin-top: 10px;
    }

    &__text {
      font-size: 14px;
      margin: 40px 0;
    }

    &__link {
      margin: unset;
    }

    &__video {
      margin-top: 70px;
    }
  }
}
</style>