import { createStore } from 'vuex'

export default createStore({
  state: {
    configuration: {
      app: {
        title: 'FhCréation',
        navColor: 'brown',
        footer: {
          color: 'brown',
          socials: [
            {
              name: 'google',
              link: '',
              icon: 'mdi-google'
            },
            {
              name: 'facebook',
              link: '',
              icon: 'mdi-facebook'
            },
            {
              name: 'twitter',
              link: '',
              icon: 'mdi-twitter'
            }
          ]
        },
        address: {}
      },
      homePage: {
        title: 'FhCréation',
        description:
          "<b>FhCréation</b> est une société de personnalisation d'objet",
        background: {
          src: 'https://www.craft-and-co.com/wp-content/uploads/2020/02/bordeaux-convention-bureaux-rencontres-bordelaises-plaque-signaletique-gravure-decoupe-laser-bois-2.jpeg',
          color: '#000000',
          textColor: 'white'
        },
        skills: {
          color: 'brown',
          textColor: 'white',
          content: ['Gravure sur bois', 'Impression 3D', 'Autre']
        },
        content: {
          title: 'Nos Créations',
          items: [
            {
              title: null,
              text: 'some actuality text for example. Can be very long but it just a test.',
              image: {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdxhKiJoX5xcmKgeooEqcy__-it9Hgo5jfYeMSlH9Z7jddu3zvaXScKq_5P9V75RMh8U&usqp=CAU'
              }
            },
            {
              title: 'with title',
              text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              image: {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdxhKiJoX5xcmKgeooEqcy__-it9Hgo5jfYeMSlH9Z7jddu3zvaXScKq_5P9V75RMh8U&usqp=CAU'
              }
            }
          ]
        }
      },
      gallery: {
        menu: 'Galerie',
        title: 'Galerie',
        icon: 'mdi-folder-multiple-image',
        link: '/galerie',
        categories: [
          {
            name: 'gravure',
            title: 'Gravure sur bois',
            content: [
              {
                title: 'premier',
                text: 'some text',
                image: {
                  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSdIiUke8y4Vv5lY36TlxcG_8gccovq0QmtLd1KTfecBnATKIV2XK1-a-bzRBu38p0Iw&usqp=CAU'
                }
              }
            ]
          }
        ]
      }
    }
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
    galeryData: (sate, getters) => getters.getConfiguration.galery,
    filters: (state, getters) => getters.galeryData.map((data) => data.name),
    getGaleryDataByName: (state, getters) => (name) =>
      getters.getGaleryDataByName.find((data) => data.name === name)
  },
  mutations: {},
  actions: {},
  modules: {}
})
