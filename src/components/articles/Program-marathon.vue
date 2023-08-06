<template>
  <article class="program">
    <div class="program__heading">Програма “Пекельний тиждень”</div>

    <div class="tariff">

      <div
        class="module"
        v-for="(item, counter) in structure"
      >
        <div class="module__name">
          <div>
            <div class="module__heading">День {{ counter + 1 }}</div>
          </div>
        </div>
        <div class="module__goal">
          <div v-html="item.goal"></div>
        </div>
        <div class="module__keywords">
          <div
            class="keyword"
            v-for="keyword in item.keywords"
          >{{ keyword }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const structure = ref([
  {
    goal: 'Знайомимось з Figma. Це основний інструмент для UX/UI дизайнера. Робимо перші спроби.',
    keywords: [
      'Сам заповниш'
    ]
  }
])
</script>

<style lang="scss" scoped>
.program {
  width: min(calc(100% - 2 * 40px), 1100px);
  margin: 147px auto 173px;

  &__heading {
    margin-bottom: 41px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }
}

.module {
  display: grid;
  grid-template-columns: auto 428px;
  gap: 0 69px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(209, 147, 53, 0.50);
  background: linear-gradient(315deg, rgba(209, 147, 53, 0.10) 0%, rgba(209, 147, 53, 0.00) 100%);

  &__name {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__heading {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &__goal {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
  }

  &__keywords {
    margin-top: auto;
    width: 543px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.keyword {
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.10);
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%;
}

@media screen and (max-width: 800px) {
  .program {
    width: calc(100% - 2 * 20px);
    margin: 133px auto 81px;

    &__heading {
      font-size: 34px;
      margin-bottom: 30px;
    }
  }

  .module {
    display: flex;
    flex-direction: column;

    &__name {
      gap: 20px;
    }

    &__goal {
      margin-top: 30px;
      margin-bottom: 55px;
    }

    &__keywords {
      width: auto;
    }
  }
}
</style>