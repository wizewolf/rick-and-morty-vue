import { createStore } from 'vuex'

export default createStore({
  state: {
    charaters: [],
    charatersfilters: [],
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactesFilter(state, payload){
      state.charactersFilter = payload
    },
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactesFilter', data.results)
      } catch (e) {
        console.error(e)
      }
    },
    filterByStatus({commit, state}, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactesFilter', results)
    },
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharactesFilter', results)
    }
  },
  modules: {
  }
})
