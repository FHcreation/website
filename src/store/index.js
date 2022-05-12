import { createStore } from 'vuex'
import config from '@/config'
import axios from 'axios'

export default createStore({
  state: {
    configuration: config
  },
  getters: {
    getConfiguration: (state) => state.configuration,
    appConfig: (state) => state.configuration.app,
    getMenus: (state) =>
      Object.entries(state.configuration)
        .map(([key, value]) => {
          if (['app', 'homePage'].includes(key)) return null
          return {
            title: value.menu,
            icon: value.icon,
            link: value.link
          }
        })
        .filter((v) => !!v),
    homeData: (state) => state.configuration.homePage,
    galleryData: (state) => state.configuration.gallery,
    contactData: (state) => state.configuration.contact,
    filters: (state, getters) => getters.galeryData.map((data) => data.name),
    getGaleryDataByName: (state, getters) => (name) =>
      getters.getGaleryDataByName.find((data) => data.name === name)
  },
  mutations: {
    SET_CONFIG (state, payload) {
      state.configuration = payload
    }
  },
  actions: {
    async fetchConfig ({ commit }) {
      try {
        const { data } = (await axios.get('https://raw.githubusercontent.com/FHcreation/website/master/src/config/index.json'))
        console.info(data)
        commit('SET_CONFIG', data)
      } catch (error) {
        console.error('Error during fetch config', error)
      }
    }
  },
  modules: {}
})
