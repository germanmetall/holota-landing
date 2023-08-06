<template>
  <Header />
  <div class="page">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss">
@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Light.ttf");
  font-weight: 300;
}

@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: Unbounded;
  src: url("@/assets/fonts/Unbounded-Medium.ttf");
  font-weight: 500;
}

* {
  box-sizing: border-box;
  font-family: Unbounded;
}

body {
  padding: 0;
  margin: 0;
  background: #1B1B1B;
  scroll-behavior: smooth;
}

#app {
  overflow-x: hidden;
}

.page {
  margin-top: calc(66px + 50px);
}

@media screen and (max-width: 800px) {
  .page {
    margin-top: 66px;
  }
}

.btn {
  padding: 40px;
  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(22px);

  color: #FFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;

  cursor: pointer;

  &--transparent {
    background: unset;
    border: unset;
  }

  & svg {
    width: calc(9px * 1.25);
    height: calc(9px * 1.25);
    margin-left: 20px;
  }
}
</style>
