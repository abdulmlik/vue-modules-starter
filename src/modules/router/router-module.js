import Router from 'vue-router'

export class RouterModule {
  
  constructor() {
    this.router = null;
    this.name = 'router';
}
  install(Vue) {
    Vue.use(Router)

    this.router = new Router({
      mode: 'history',
      base: process.env.BASE_URL
    })
  }
}
