import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import {_} from 'vue-underscore'

// axios.defaults.baseURL = 'http://www.mocky.io/v2/5b1ff2c0310000bf2d230a8f'
// axios.defaults.baseURL = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'

const state = {
  isLight: true
  // inputSearchTxt: '',
}

// getter
const getters = {
  // filterLocate: state => {
  //   return _.uniq(newList)
  // }
}

// methods
const mutations = {
  Mode (state, txt) {
    state.isLight = txt
  }
}

const actions = {
  // getApi ({commit}) {
  //   axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
  //     .then(res => {
  //       commit('CHECK_LOCATE', res.data.result.records)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
