<template>
  <article class="banner">
    <h1 class="banner__h1">Курс "Мідл UX/UI дизайнер"</h1>
    <h2 class="banner__h2">Як UX/UI або Product дизайнеру зробити мінімум х2 до свого доходу</h2>

    <div class="btn">
      Придбати одразу
      <Arrow />
    </div>
    <div class="btn btn--transparent">
      Маю сумніви
      <Arrow />
    </div>

    <div class="banner__text">
      <ul>
        <li>без сильних знань англійської</li>
        <li>навіть якщо думаєш, що роботи немає</li>
        <li>та навіть якщо не віриш в себе</li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 0 40px;
  border-radius: 40px;
}
</style>