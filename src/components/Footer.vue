<template>
  <footer class="footer">
    <div class="filter"></div>
    <div class="footer__top">
      <div class="block logo">
        <div class="logo__heading">Move IT</div>
        <div class="logo__underheading">Digital Design Academy</div>
      </div>
      <div class="block">
        <div class="block__heading">Курси</div>
        <a class="block__text" href="/marathon">Марафон "Пекельна неділя"</a>
        <a class="block__text" href="/">Курс "Мідл UX/UI дизайнер"</a>
      </div>
      <div class="block">
        <div class="block__heading">Контакти</div>
        <a
          href="mailto:info@moveitacademy.com"
          class="block__text"
        >info@moveitacademy.com</a>
        <a class="block__button">
          Маю сумніви
          <Arrow style="margin-left: 10px; width: calc(8px * 1.25); height: calc(8px * 1.25);" />
        </a>
        <a class="block__button block__button--color" href="#tariffs">
          Придбати одразу
          <Arrow style="margin-left: 10px; width: calc(8px * 1.25); height: calc(8px * 1.25);" />
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <div>© 2020 – 2023 MOVE IT – Digital Design Academy</div>
      <div style="margin-left: auto;">Договір оферти</div>
      <div>Політика надання послуг</div>
      <div>Політика конфіденційності</div>
    </div>
  </footer>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: min(calc(100% - 2 * 40px), 1360px);
  max-width: 1360px;
  margin: 40px auto;
  padding: 60px;
  padding-bottom: 38px;
  border-radius: 40px;
  background: lightgray 50%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('@/assets/images/footer-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;

  &__top {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-bottom: 30px;
  }

  &__bottom {
    position: relative;
    z-index: 1;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    color: #ffffff4d;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    &__copy {
      font-weight: 400;
    }
  }
}

.filter {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: inherit;
  z-index: 0;
  backdrop-filter: blur(25px);
}

.block {
  &:last-of-type {
    margin-left: auto;
  }

  &__heading {
    color: #ffffff4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    margin-bottom: 13px;
  }

  &__text {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    text-decoration: unset;

    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }

  &__button {
    &:nth-of-type(2) {
      margin-top: 60px;
    }

    &:nth-of-type(3) {
      margin-top: 16px;
      margin-bottom: 19px;
    }

    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;

    &--color {
      color: #EB4F3C;
    }
  }
}

.logo {
  &__heading {
    color: #FFF;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
    margin-bottom: 13px;
  }

  &__underheading {
    color: #4E5669;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%;
  }
}

@media screen and (max-width: 800px) {
  .footer {
    width: calc(100% - 2 * 20px);
    margin: 0 20px 40px;
    padding: 40px 35px;

    &__top {
      display: flex;
      flex-direction: column;

      .logo {
        &__heading {
          font-size: 22px;
        }
      }

      .block {
        margin-left: unset;

        &__button:nth-of-type(3) {
          margin-bottom: unset;
        }
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;

      >div {
        margin-left: unset !important;

        &:nth-of-type(1) {
          order: 2;
        }
      }
    }
  }
}
</style>