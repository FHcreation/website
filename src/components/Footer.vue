<template>
  <v-footer
    class="fh-footer"
    dark
    :color="color"
  >
    <v-card-text class="white--text">
      Copyright 2022 - {{ new Date().getFullYear() }} FhCreation
    </v-card-text>
    <div>
      <h3 class="pb-2">Retrouvez nous sur :</h3>
      <div
        class="fh-footer__socials"
        v-for="social in socials"
        :key="social.name"
        target="_blank"
        :href="social.link"
      >
        <v-btn class="mx-4" icon>
          <v-icon
            dark
            :color="color"
          >{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FhFooter',
  props: {
    socials: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: null
    }
  }
})
</script>
<style lang="scss">
.fh-footer {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @include breakpoint('tablet-portrait') {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
  }

  &__socials {
    display: inline-flex;
    margin-bottom: 1rem;

     @include breakpoint('tablet-portrait') {
      margin-bottom: 0;
    }
  }
}
</style>
