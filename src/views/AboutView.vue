<template>
  <div class="contact">
    <section class="contact__wrapper">
      <h1 class="contact__title">{{ contactPageData.title }}</h1>
      <p
        class="contact__descriptif"
        v-html="contactPageData.description"
      />
      <a
        class="contact__link"
        :href="`mailto:${contactPageData.email}`"
      >
        {{ contactPageData.contactLink }}
        <v-icon
          v-if="contactPageData.contactLinkIcon"
          class="contact__link-icon"
          left dark
        >{{ contactPageData.contactLinkIcon }}</v-icon>
      </a>
    </section>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  setup () {
    const store = useStore()
    const contactPageData = computed(() => store.getters.contactData)

    return {
      contactPageData
    }
  }
})
</script>
<style lang="scss">
.contact {
  min-height: 81.5vh;
  display: flex;
  justify-content: center;
  width: 100%;

  &__wrapper {
    max-width: 1200px;
    width: 100%;
  }

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

  &__link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    &-icon {
      margin-left: 0.25rem;
    }
  }
}
</style>
