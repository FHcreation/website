<template>
  <v-parallax
    :src="homePageData.background.src"
    height="700"
  >
    <div
      class="home-page__top"
      :style="getTopStyle"
    >
      <div
        class="home-page__top-background"
        :style="getBackgroundStyle"
      />
      <h1 class="home-page__top-title">{{ homePageData.title }}</h1>
      <p
        class="home-page__top-description"
        v-html="homePageData.description"
      />
    </div>
  </v-parallax>
  <div
    class="home-page__skills"
    :style="getSkillsTextColor"
  >
    <ul class="home-page__skills-list">
      <li
        class="home-page__skills-list-skill"
        v-for="skill in homePageData.skills.content"
        :key="skill"
      >
        <div
          class="home-page__skills-list-skill-background"
          :style="getSkillsBackground"
        />
        <span>
          {{ skill }}
        </span>
      </li>
    </ul>
  </div>
  <div v-if="homePageData.content.items.length">
    <h2 class="home-page__content-title">
      {{ homePageData.content.title }}
    </h2>
    <v-carousel v-model="content">
      <v-carousel-item
        v-for="(item, i) in homePageData.content.items"
        :key="item.text"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <creation
            class="home-page__content-item"
            :title="item.title"
            :text="item.text"
            :image="item.image"
            :inverted="i % 2 === 0"
          />
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import Creation from '../components/Creation.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Creation
  },
  setup () {
    const store = useStore()
    const homePageData = computed(() => store.getters.homeData)
    const content = ref(0)

    const getTopStyle = computed(() => ({
      color: homePageData.value.background.textColor
    }))
    const getBackgroundStyle = computed(() => ({
      'background-color': homePageData.value.background.color
    }))
    const getSkillsBackground = computed(() => ({
      'background-color': homePageData.value.skills.color
    }))
    const getSkillsTextColor = computed(() => ({
      color: homePageData.value.skills.textColor
    }))

    return {
      homePageData,
      content,
      getTopStyle,
      getBackgroundStyle,
      getSkillsBackground,
      getSkillsTextColor
    }
  }
})
</script>
<style lang="scss">
.home-page {

  &__top {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-background {
      position: absolute;
      inset: 0;
      opacity: 50%;
    }

    &-title {
      margin-top: 1rem;
      text-align: center;
      width: 100%;
      z-index: 2;
    }

    &-description {
      margin: 1rem;
      text-align: center;
      z-index: 2;
    }
  }

  &__skills {
    margin: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      list-style: none;
      flex-wrap: wrap;
      z-index: 2;

      &-skill {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 1rem;
        position: relative;
        padding: 1rem;
        border-radius: 1rem;
        overflow: hidden;

        &-background {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 40%;
          z-index: -1;
        }
      }
    }

  }

  &__content {
    &-title {
      margin-left: 1rem;
    }

    &-item {
      max-width: 60%;
      max-height: 20rem;

      @include breakpoint('tablet-landscape') {
        max-height: auto;
      }
    }
  }
}
</style>
