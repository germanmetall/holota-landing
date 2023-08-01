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

    <svg
      class="header__burger"
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9638 14.1963C31.0784 14.1963 32.1473 13.7535 32.9355 12.9654C33.7236 12.1773 34.1663 11.1083 34.1663 9.99376C34.1663 8.87919 33.7236 7.81027 32.9355 7.02214C32.1473 6.23402 31.0784 5.79126 29.9638 5.79126C28.8493 5.79126 27.7803 6.23402 26.9922 7.02214C26.2041 7.81027 25.7613 8.87919 25.7613 9.99376C25.7613 11.1083 26.2041 12.1773 26.9922 12.9654C27.7803 13.7535 28.8493 14.1963 29.9638 14.1963ZM11.0355 14.1963C12.1501 14.1963 13.219 13.7535 14.0071 12.9654C14.7952 12.1773 15.238 11.1083 15.238 9.99376C15.238 8.87919 14.7952 7.81027 14.0071 7.02214C13.219 6.23402 12.1501 5.79126 11.0355 5.79126C9.92094 5.79126 8.85201 6.23402 8.06389 7.02214C7.27577 7.81027 6.83301 8.87919 6.83301 9.99376C6.83301 11.1083 7.27577 12.1773 8.06389 12.9654C8.85201 13.7535 9.92094 14.1963 11.0355 14.1963ZM29.9638 35.2088C30.5157 35.2088 31.0622 35.1001 31.5721 34.8889C32.0819 34.6777 32.5452 34.3681 32.9355 33.9779C33.3257 33.5876 33.6353 33.1244 33.8464 32.6145C34.0576 32.1046 34.1663 31.5581 34.1663 31.0063C34.1663 30.4544 34.0576 29.9079 33.8464 29.398C33.6353 28.8882 33.3257 28.4249 32.9355 28.0346C32.5452 27.6444 32.0819 27.3348 31.5721 27.1237C31.0622 26.9125 30.5157 26.8038 29.9638 26.8038C28.8493 26.8038 27.7803 27.2465 26.9922 28.0346C26.2041 28.8228 25.7613 29.8917 25.7613 31.0063C25.7613 32.1208 26.2041 33.1898 26.9922 33.9779C27.7803 34.766 28.8493 35.2088 29.9638 35.2088ZM11.0355 35.2088C11.5874 35.2088 12.1339 35.1001 12.6437 34.8889C13.1536 34.6777 13.6169 34.3681 14.0071 33.9779C14.3974 33.5876 14.7069 33.1244 14.9181 32.6145C15.1293 32.1046 15.238 31.5581 15.238 31.0063C15.238 30.4544 15.1293 29.9079 14.9181 29.398C14.7069 28.8882 14.3974 28.4249 14.0071 28.0346C13.6169 27.6444 13.1536 27.3348 12.6437 27.1237C12.1339 26.9125 11.5874 26.8038 11.0355 26.8038C9.92094 26.8038 8.85201 27.2465 8.06389 28.0346C7.27577 28.8228 6.83301 29.8917 6.83301 31.0063C6.83301 32.1208 7.27577 33.1898 8.06389 33.9779C8.85201 34.766 9.92094 35.2088 11.0355 35.2088Z"
        stroke="white"
        stroke-width="2.5625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

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
    }
  }
}
</style>