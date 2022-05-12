<template>
  <v-app>
    <v-main>
      <nav-bar
        :title="configApp.title"
        :color="configApp.navColor"
        :menus="appMenus"
      />
      <router-view/>
      <fh-footer
        :socials="footerData.socials"
        :color="footerData.color"
      />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FhFooter from './components/Footer.vue'
import { useStore } from 'vuex'
import { defineComponent, computed, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FhFooter
  },
  setup () {
    const store = useStore()
    const configApp = computed(() => store.getters.appConfig)
    const appMenus = computed(() => store.getters.getMenus)
    const footerData = computed(() => configApp.value.footer)

    onBeforeMount(() => {
      store.dispatch('fetchConfig')
    })

    return {
      configApp,
      appMenus,
      footerData
    }
  }
})
</script>
<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
