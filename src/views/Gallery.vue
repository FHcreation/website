<template>
  <div class="gallery">
    <h1 class="gallery__title">{{ galleryPageData.title }}</h1>
    <p
      class="gallery__descriptif"
      v-html="galleryPageData.description"
    />
    <ul
      class="gallery__filters"
    >
      <li
        class="gallery__filters-filter"
        :class="filter.name === currentFilter && 'gallery__filters-filter--actif'"
        v-for="filter in galleryPageData.categories"
        :key="filter.name"
        @click="onChangeFilter(filter)"
      >
        <div
          class="gallery__filters-filter-background"
          :style="getFilterBackground(filter)"
        />
        <span
          class="gallery__filters-filter-text"
          :style="getFilterTextColor(filter)"
        >
          {{ filter.name }}
        </span>
      </li>
    </ul>
    <h2 class="gallery__category">{{ getCurrentCatTitle }}</h2>
    <ul class="gallery__content">
      <li
        class="gallery__content-item"
        v-for="(item, i) in currentCat.contents"
        :key="item.text"
      >
        <creation
          :title="item.title"
          :text="item.text"
          :image="item.image"
          :inverted="i % 2 === 0"
          :background="getCurrentCatBackground"
          :text-color="getCurrentCatTextColor"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import Creation from '../components/Creation.vue'

export default defineComponent({
  name: 'GalleryView',
  components: {
    Creation
  },
  setup () {
    const store = useStore()
    const galleryPageData = computed(() => store.getters.galleryData)

    const getFilterTextColor = (filter) => ({
      color: filter.textColor
    })

    const getFilterBackground = (filter) => ({
      'background-color': filter.color
    })

    const currentFilter = ref(galleryPageData.value.categories[0].name)

    const currentCat = computed(() => {
      return galleryPageData.value.categories.find(cat => cat.name === currentFilter.value)
    })

    const getCurrentCatTitle = computed(() => {
      return currentCat.value.title
    })

    const getCurrentCatBackground = computed(() => {
      return currentCat.value.color
    })

    const getCurrentCatTextColor = computed(() => {
      return currentCat.value.textColor
    })

    const onChangeFilter = (filter) => {
      currentFilter.value = filter.name
    }

    return {
      galleryPageData,
      getFilterTextColor,
      getFilterBackground,
      getCurrentCatTitle,
      currentCat,
      getCurrentCatBackground,
      getCurrentCatTextColor,
      onChangeFilter,
      currentFilter
    }
  }
})
</script>
<style lang="scss">
.gallery {
  min-height: 80vh;

  &__title {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
  }

  &__descriptif {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
  }

  &__filters {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-top: 0.75rem;

    &-filter {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5rem 1rem;
      position: relative;
      padding: 1rem;
      border-radius: 1rem;
      overflow: hidden;
      cursor: pointer;

      &--actif {
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.45);
      }

      &-background {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 40%;
      }

      &-text {
        z-index: 1;
      }
    }
  }

  &__category {
    margin-left: 1rem;

    @include breakpoint('tablet-portrait') {
      margin-left: 2rem;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    @include breakpoint('tablet-portrait') {
      padding: 2rem 5rem;
    }

    &-item {
      margin-top: 1.5rem;

      @include breakpoint('tablet-portrait') {
        width: 100%;
      }
    }
  }
}
</style>
