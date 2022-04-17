<template>
  <div
    class="creation"
    :class="[
      inverted && 'creation--inverted',
      centered && 'creation--centered'
    ]"
  >
    <v-img
      v-if="image.src"
      class="creation__image"
      max-height="150"
      max-width="250"
      min-width="250"
      :src="image.src"
    />
    <section
     ref="hoverRef"
    >
      <h3 v-if="title">{{ title }}</h3>
      <p
        v-if="text"
        class="creation__text"
        v-html="truncatedText"
      />
    </section>
    <div v-if="hovering">
      <p
        class="creation__popover"
        v-html="text"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, inject } from 'vue'
import { useHover } from '../assets/scripts/helpers/hover'

export default defineComponent({
  name: 'CreationItem',
  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    image: {
      type: Object,
      default: () => ({})
    },
    text: {
      type: String,
      default: null
    }
  },
  setup (props) {
    const viewport = inject('viewport')
    const truncatedLimit = computed(() => viewport.isTabletLandscapeAndUp ? 250 : 200)
    const truncatedText = computed(() => props.text.length > truncatedLimit.value ? `${props.text.slice(0, truncatedLimit.value)} ...` : props.text)
    const hoverRef = ref(null)
    const hovering = props.text.length > truncatedLimit.value && useHover(hoverRef)

    return {
      truncatedText,
      hoverRef,
      hovering
    }
  }
})
</script>
<style lang="scss">
.creation {
  display: flex;
  $self: &;
  flex-direction: column;
  overflow: hidden;

  @include breakpoint('tablette-landscape') {
    flex-direction: row;
    align-items: center;
  }

  &--inverted {

    @include breakpoint('tablette-landscape') {
      flex-direction: row-reverse;

      #{$self}__image {
        margin-left: 1rem;
        margin-right: 0;
      }
    }
  }

  &--centered {
    justify-content: center;
  }

  &__image {
    margin-right: 1rem;
  }

  &__popover {
    position: absolute;
    inset: 1rem;
    z-index: 100;
  }
}
</style>
