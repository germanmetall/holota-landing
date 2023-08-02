<template>
  <article class="hesitate">
    <div class="hesitate__heading">Є сумніви?</div>
    <div class="hesitate__text">
      Через 2-3 тижні ті хто потрапили на курс обженуть тебе на рік а може і більше. Ти цього
      бажаєш? Впевнен що ні.
      <br /><br />
      Почни навчатись зараз, щоб успішно конкурувати з колегами по цеху у найближчому майбутньому.
      <br /><br />
      Ринок праці не любить аутсайдерів. Камон!
    </div>

    <div class="hesitate__actions">
      <div class="btn">
        Маю сумніви
        <Arrow />
      </div>
      <div class="btn btn--transparent">
        Окей, стартуємо
        <Arrow />
      </div>
    </div>

    <img
      class="hesitate__img"
      src="@/assets/images/hesitate.jpeg"
      alt=""
    />
  </article>
</template>

<script setup>
import Arrow from '@/components/Arrow.vue'
</script>

<style lang="scss" scoped>
.hesitate {
  display: grid;
  grid-template-columns: auto 309px;
  margin: 137px auto;
  width: 1077px;

  &__heading {
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    margin-bottom: 28px;
  }

  &__text {
    max-width: 626px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    margin-top: auto;

    .btn {
      width: fit-content;
    }
  }

  &__img {
    grid-column: 2;
    grid-row: 1 / span 3;
    width: 309px;
    height: 463px;
    border-radius: 3300px;
    filter: grayscale(1);
  }
}
</style>