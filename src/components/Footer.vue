<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="block logo">
        <div class="logo__heading">Move IT</div>
        <div class="logo__underheading">Digital Design Academy</div>
      </div>
      <div class="block">
        <div class="block__heading">Курси</div>
        <div class="block__text">Марафон "Пекельна неділя"</div>
        <div class="block__text">Курс "Мідл UX/UI дизайнер"</div>
      </div>
      <div class="block">
        <div class="block__text">Політика надання послуг</div>
        <div class="block__text">Політика конфіденційності</div>
      </div>
      <div class="block">
        <div class="block__heading">Контакти</div>
        <a href="mailto:info@moveitacademy.com" class="block__text">info@moveitacademy.com</a>
        <div class="block__button">
          Маю сумніви
          <Arrow/>
        </div>
        <div class="block__button block__button--color">
          Придбати одразу
          <Arrow/>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      © 2020 – 2023 MOVE IT – Digital Design Academy
    </div>
  </footer>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>