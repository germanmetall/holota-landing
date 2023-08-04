<template>
  <article class="text">
    <slot />
  </article>
</template>

<style scoped>
.text {
  margin: 127px auto;
  width: 864px;
  text-align: center;
  color: #D19335;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
}

@media screen and (max-width: 800px) {
  .text {
    width: calc(100% - 2 * 34px);
    font-size: 22px;
    margin: 70px auto 74px;
  }
}
</style>