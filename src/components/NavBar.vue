<template>
  <v-toolbar app :color="color">
    <v-toolbar-title tag="h1">
      <router-link
        to="/"
        custom
        v-slot="{ navigate }"
      >
        <span
          style="cursor: pointer;"
          @click="navigate"
        >{{ title }}</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-for="item in menus" :key="item.title" :to="item.link">
        <v-icon left dark>{{ item.icon }}</v-icon>
        <span class="d-none d-sm-flex">
          {{ item.title }}
        </span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null
    },
    menus: {
      type: Array,
      default: () => []
    }
  }
})
</script>
<style lang="scss">
</style>
