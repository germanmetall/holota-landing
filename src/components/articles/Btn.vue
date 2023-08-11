<template>
  <a class="btn" href="#tariffs">
    Холі щіт, скоріше хочу на курс
    <Arrow/>
  </a>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.btn{
  display: block;
  width: fit-content;
  margin: 96px auto 135px;
  svg {
    margin-left: 40px;
  }
}

@media screen and (max-width: 800px) {
  .btn{
    margin-bottom: 58px;
  }
}
</style>