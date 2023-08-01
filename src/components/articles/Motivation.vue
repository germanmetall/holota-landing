<template>
  <article class="motivation">
    <div class="motivation__heading">Курс для тебе, якщо ти</div>

    <div class="block">
      <div class="block__heading">Дизайнер з досвідом</div>
      <div class="block__text">
        <ul>
          <li>вже були самостійні проекти але відчуваєш що чогось бракує для того щоб зробити х2…х3</li>
          <li>вже був на якихось курсах, та все одно відчуваєш, що того було недостатньо для тебе</li>
          <li>маєш багато питань, але не можеш знайти потрібні відповіді</li>
        </ul>
      </div>
    </div>

    <div class="block">
      <div class="block__heading">Закінчили марафон для новачків</div>
      <div class="block__text">
        <ul>
          <li>Марафон "Пекельна неділя"</li>
        </ul>
        <a
          class="block__link"
          href=""
        >
          я новачок, їду дивитись
          <Arrow />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>