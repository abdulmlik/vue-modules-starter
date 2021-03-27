
import Vuex from 'vuex'

export class StoreModule {
  constructor() {
    this.store = null;
    this.name = 'store';
}
  install(Vue) {
    Vue.use(Vuex)
    this.store = new Vuex.Store({
      state: {},
      mutations: {},
      actions: {}
    })
  }
}
