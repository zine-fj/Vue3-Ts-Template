
import { StatesProps } from '@/hooks/useInterface'

const state = {
  isLogged: false,
  token: ''
}

const mutations = {
  ISLOGGED_MU: (state: StatesProps, payload: boolean) => {
    state.isLogged = payload
  },
  TOKEN_MU: (state: StatesProps, payload: string) => {
    state.token = payload
  }
}

const actions = {
  ISLOGGED_AC ({ commit }, payload: boolean) {
    commit('ISLOGGED_MU', payload)
  },
  TOKEN_AC ({ commit }, payload: string) {
    commit('TOKEN_MU', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
