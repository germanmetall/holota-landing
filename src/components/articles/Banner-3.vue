<template>
  <article class="banner">
    <div class="block">
      <div class="block__heading">Зворотній звʼязок</div>
      <div class="block__text">Відсилай свою роботу та отримай фідбек в індивідуальному чаті, це може будти текстом, а
        може бути відео</div>
      <div class="btn">
        Хочу на курс
        <Arrow />
      </div>
    </div>
    <div class="block">
      <div class="block__heading">
        В форматі loom
        <img
          style="width: 47px; height: 47px; border-radius: 50%;"
          src="@/assets/images/loom.png"
          alt="loom"
        />
      </div>
      <div class="block__text">Я записую видео-фидбек, де розповідаю про твої помилки, та як їх виправити</div>
      <div class="btn">
        приклад фідбеку
        <Arrow />
      </div>
    </div>
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: row;
  width: calc(100% - 2 * 40px);
  margin: 40px auto;
  height: 532px;
  padding: 40px 56px 54px 44px;
  background: lightgray 50%;
  background-image: url('@/assets/images/banner-3-bg.jpeg'), linear-gradient(135deg, #190933 0%, #0C0419 100%);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
}

.block {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    margin-top: 20px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  .btn {
    margin-top: auto;
    width: fit-content;
  }
}
</style>