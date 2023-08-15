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
      Працював в Ubisoft на проекті з понад 80 млн гравців.
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
      :id="'author-1'"
      :url="'https://player.vimeo.com/video/852674221?h=de988bf8e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'"
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

    &:deep(>div){
      padding-top: 130% !important;
    }
    &:deep(iframe) {
      width: calc(100% + 2 * 359px) !important;
      height: 100% !important;
      left: -359px !important;
      scale: 1.6;
    }
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
      margin: 70px 64px 0;

      &:deep(iframe) {
        width: calc(100% + 2 * (359px + 150px)) !important;
        height: 100% !important;
        left: calc(-1 * ((359px + 150px))) !important;
      }
    }
  }
}
</style>