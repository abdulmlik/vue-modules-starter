
import App from './components/App.vue'

export class CoreModule {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.name = 'core';
}
  install(Vue) {
    new Vue({
      router: this.router,
      store: this.store,
      render: h => h(App)
    }).$mount('#app')
  }
}
