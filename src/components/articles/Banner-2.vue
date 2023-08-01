<template>
  <article class="banner">
    <div class="item">
      <div class="item__heading">Online</div>
      <div class="item__text">Займайся будь де</div>
    </div>
    <div class="item">
      <div class="item__heading">Старт</div>
      <div class="item__text">В будь-який момент</div>
    </div>
    <div class="item">
      <div class="item__heading">Графік</div>
      <div class="item__text">Коли тобі зручно</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: row;
  gap: 0 112px;
  padding: 28px 73px;
  margin: 0 auto 226px;
  width: 842px;
  height: 192px;
  border-radius: 40px;
  background: linear-gradient(133deg, #154B5A 0%, #002731 100%);
}

.item {
  &__heading {
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__text {
    margin-top: 8px;
    color: #ffffff66;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
  }
}</style>