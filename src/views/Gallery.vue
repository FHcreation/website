<template>
  <h1 class="home-page__title">{{ homePageData.title }}</h1>
  <v-parallax
    :src="homePageData.background"
    height="300"
  />
  <p
    class="home-page__descriptif"
    v-html="homePageData.descriptif"
  />
  <div v-if="homePageData.content.items.length">
    {{ homePageData.content.title }}
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="item in homePageData.content.items"
        :key="item.text"
      >
        <v-sheet
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div>{{ item. text }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'GalleryView',
  setup () {
    const store = useStore()
    const homePageData = computed(() => store.getters.homeData)
    return {
      homePageData
    }
  }
})
</script>
<style lang="scss">
.home-page {

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
}
</style>
