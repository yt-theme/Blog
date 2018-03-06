import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    markdownArea: false
  },
  mutations: {
    markdownAreaAction(state) {
      state.markdownArea = !state.markdownArea
    }
  }
})
