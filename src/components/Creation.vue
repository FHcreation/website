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
      min-width="250"
      :src="image.src"
    />
    <section
      class="creation__text"
      :style="getTextColor"
    >
      <div
        class="creation__text-background"
        :style="getBackground"
      />
      <h3 v-if="title">{{ title }}</h3>
      <p
        v-if="text"
        class="creation__text"
        v-html="truncatedText"
      />
    </section>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

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
    },
    maxText: {
      type: Number,
      default: 2000
    },
    background: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: null
    }
  },
  setup (props) {
    const truncatedText = computed(() => props.text.length > props.maxText ? `${props.text.slice(0, props.maxText)} ...` : props.text)
    const getBackground = computed(() => ({
      'background-color': props.background
    }))
    const getTextColor = computed(() => ({
      color: props.textColor
    }))
    return {
      truncatedText,
      getBackground,
      getTextColor
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

  @include breakpoint('tablet-landscape') {
    flex-direction: row;
  }

  &--inverted {

    @include breakpoint('tablet-landscape') {
      flex-direction: row-reverse;
    }
  }

  &--centered {
    justify-content: center;
  }

  &__image {
    max-height: 150px;
    max-width: 250px;

    @include breakpoint('tablet-portrait') {
      max-height: 300px;
      max-width: 500px;
    }
  }

  &__text {
    flex: 1;
    position: relative;
    padding: 0.5rem;
    overflow: hidden;
    text-align: left;

    @include breakpoint('tablet-portrait') {
      padding: 0.5rem 1rem;
    }

    &-background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 30%;
      inset: 0;
    }
  }
}
</style>
