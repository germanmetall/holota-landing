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
        @click="activeLink = counter"
      >
        {{ link.name }}
      </a>
    </div>

    <a
      class="header__buy"
      href="#tariffs"
    >
      Придбати одразу
      <Arrow style="margin-left: 10px;" />
    </a>

    <div
      class="header__burger"
      @click="openMenu"
    >Меню</div>

    <div class="menu">
      <div
        class="menu__close"
        @click="closeMenu"
      >Закрити</div>

      <div class="menu__links">
        <a
          class="menu__link"
          v-for="(link, counter) in links"
          :class="{ 'menu__link--active': activeLink == counter }"
          :href="`#${link.href}`"
          @click="closeMenu(); activeLink = counter"
        >
          {{ link.name }}
        </a>
      </div>

      <a
        class="menu__buy"
        href="#tariffs"
      >
        Придбати одразу
        <Arrow style="margin-left: 10px; width: calc(18px); height: calc(18px);" />
      </a>
    </div>
  </header>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
import { onMounted } from 'vue';
import { ref } from 'vue';

const
  links = ref([
    {
      name: 'Про курс',
      href: 'course'
    },
    {
      name: 'Автор',
      href: 'author'
    },
    {
      name: 'Про процес',
      href: 'lesson'
    },
    {
      name: 'Програма',
      href: 'program'
    },
    {
      name: 'Для кого',
      href: 'audience'
    },
    {
      name: 'Відгуки',
      href: 'feedback'
    },
    {
      name: 'Тарифи',
      href: 'tariffs'
    }
  ]),
  activeLink = ref(0)

const openMenu = () => {
  document.body.parentElement.style.overflow = 'hidden';
  document.querySelector('.menu').classList.add('menu--toggled')
}
const closeMenu = () => {
  document.body.parentElement.style.overflow = 'auto';
  document.querySelector('.menu').classList.remove('menu--toggled')
}

onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let elems = []
    links.value.map(link => {
      elems.push(document.querySelector(`#${link.href}`))
    })
    console.log(elems)
    document.addEventListener('scroll', (e) => {
      activeLink.value = 0
      while (activeLink.value+1 < elems.length && document.scrollingElement.scrollTop > elems[activeLink.value+1].offsetTop - 100) {
        activeLink.value++;
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  padding: 0px max(calc((100vw - 1440px) / 2 + 84px), 40px);
  color: #FFF;
  background: rgba(27, 27, 27, 0.10);
  backdrop-filter: blur(25px);

  &__logo {
    position: relative;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-transform: uppercase;
    z-index: 101;
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
    width: 100vw;
    padding: 24px 20px;
    margin: 0 auto;

    &__logo {
      font-size: 18px;
    }

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
      cursor: pointer;
    }
  }

  .menu {
    position: absolute;
    top: 0;
    left: 100vw;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #131212;
    z-index: 100;
    padding-top: inherit;
    transition: .3s;

    &--toggled {
      left: 0;
    }

    &__close {
      top: 17px;
      position: absolute;
      padding: 10px;
      right: 20px;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
      cursor: pointer;
    }

    &__link {
      &s {
        margin-top: 97px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
      }

      color: #ffffff4d;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-decoration: unset;
      transition: .2s;

      &--active {
        color: #fff;
      }
    }

    &__buy {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #EB4F3C;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
      margin: 100px auto;
    }
  }
}
</style>