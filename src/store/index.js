import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  count: 100
  },
  mutations: {
	  mutationsAddCount(state,n = 0){
		  return (state.count += n)
	  },
	  mutationsReduceCount(state,n = 0){
		  return (state.count -= n)
	  }
  },
  actions: { 
	  actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
  },
  modules: {
  },
  getters:{
	     getterCount(state, n = 0) {
	          return (state.count += n)
	      }
  }
})
