import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'
//注释掉之后，就可以使用DISPATCH了，原因未知

// import modules from './modules'
import setting from './modules/setting';
import standlib from './modules/standlib';
import otherdata from './modules/otherdata';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setting,
    standlib,
    otherdata
},
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  // strict: process.env.NODE_ENV !== 'production'
})
