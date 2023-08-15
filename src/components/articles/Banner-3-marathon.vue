<template>
  <article class="banner">
    <div class="block">
      <div class="block__heading">Зворотній звʼязок</div>
      <div class="block__text">Кожен день тобі буде відкриватися новий урок і завдання. Якщо ти робиш у цей же день та
        відправляєш мені то я записую тобі на це завдання один відео-фідбек.</div>
      <a
        class="btn"
        href="#tariffs"
      >
        Хочу на курс
        <Arrow />
      </a>
    </div>
    <div class="block">
      <div class="block__heading block__heading--loom">
        В форматі loom
        <img
          class="block__loom"
          src="@/assets/images/loom.png"
          alt="loom icon"
          loading="lazy"
        />
      </div>
      <div class="block__text">Відео-фідбек, де розповідаю про твої помилки, та як їх виправити.<br /><br />І
        так 7 днів.</div>
      <div
        class="btn"
        @click="isPopupToggled = true"
      >
        приклад фідбеку
        <Arrow />
      </div>
    </div>
  </article>

  <div
    class="popup__wrapper"
    :class="{ 'popup__wrapper--active': isPopupToggled }"
    @click="isPopupToggled = false"
  >
    <div
      class="popup"
      @click.stop
    >
      <div style="position: relative; padding-bottom: 64.86486486486486%; height: 0;"><iframe
          src="https://www.loom.com/embed/dcd716a5bc584d72b0b435c9f2d1eb07?sid=ac0d1719-fbb4-49df-97bb-b721ee76a95a"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        ></iframe></div>
    </div>
  </div>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
import { watch } from 'vue';
import { ref } from 'vue';

let isPopupToggled = ref(false)

watch(isPopupToggled, () => {
  document.body.classList.toggle('no-scroll')
})
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  width: 800px;
  height: 600px;
  margin: auto;
  scale: 0;
  transition: inherit;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -10;
    pointer-events: none;
    background-color: #00000000;
    transition: .5s;
    cursor: pointer;
    overflow: hidden;

    &--active {
      z-index: 10000;
      pointer-events: all;
      background-color: #000000b0;

      .popup {
        scale: 1;
      }
    }
  }
}

.banner {
  display: flex;
  flex-direction: row;
  width: min(calc(100% - 2 * 40px), 1360px);
  margin: 0 auto;
  height: 532px;
  padding: 40px 56px 54px 44px;
  background: lightgray 50%;
  background-image: linear-gradient(135deg, #19093380 0%, #0C041980 100%), url('@/assets/images/banner-3-marathon-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
}

.block {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    max-width: 80%;
    margin-top: 20px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__loom {
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }

  .btn {
    margin-top: auto;
    width: fit-content;
  }
}

@media screen and (max-width: 800px) {
  .banner {
    width: calc(100% - 2 * 20px);
    height: unset;
    display: flex;
    flex-direction: column;
    padding: 40px 26px 32px;
    gap: 105px;
  }

  .block {
    &__heading {
      font-size: 34px;

      &--loom {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    &__text {
      margin-top: 25px;
      font-size: 16px;
    }

    &__loom {
      margin-right: auto;
    }

    .btn {
      text-align: center;
      width: 100%;
      margin: 50px auto 0;
    }
  }
}
</style>