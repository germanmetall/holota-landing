<template>
  <header class="header">
    <div class="header__logo">
      Move IT
    </div>

    <div class="header__links">
      <a
        class="header__link"
        v-for="(link, counter) in links"
        :class="{ 'header__link--active': activeLink == counter }"
        :href="`#${link.href}`"
      >
        {{ link.name }}
      </a>
    </div>

    <div class="header__buy">
      Придбати одразу
      <Arrow style="margin-left: 10px;" />
    </div>

    <div class="header__burger">Меню</div>

    <div class="menu">

    </div>
  </header>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
import { ref } from 'vue';

const
  links = ref([
    {
      name: 'Про курс',
      href: 'about'
    },
    {
      name: 'Автор',
      href: 'author'
    },
    {
      name: 'Програма',
      href: 'program'
    },
    {
      name: 'Про процес',
      href: 'about'
    },
    {
      name: 'Відгуки',
      href: 'feedback'
    },
    {
      name: 'Для кого',
      href: 'audience'
    },
    {
      name: 'Тарифи',
      href: 'tariffs'
    }
  ]),
  activeLink = ref(0)
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  z-index: 3;
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  padding: 0px 84px;
  color: #FFF;
  background: rgba(27, 27, 27, 0.10);
  backdrop-filter: blur(25px);

  &__logo {
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__link {
    text-decoration: none;
    color: #ffffff4d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    transition: .2s;

    &--active {
      color: #fff;
    }

    &s {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 32px;
    }
  }

  &__buy {
    color: #EB4F3C;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__burger {
    display: none;
  }
}

.menu {
  display: none;
}

@media screen and (max-width: 800px) {
  .header {

    &__links,
    &__buy {
      display: none;
    }

    &__burger {
      display: block;
      padding: 10px;
      border-radius: 20px;
      background: #FFF;

      color: #1C1C1C;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
    }
  }
}
</style>