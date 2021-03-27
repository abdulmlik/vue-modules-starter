import { homeRoutes } from "./router/home-routes";
import { homeStore } from "./store";

export class HomeModule {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.name = "home";
  }

  install(/*Vue*/) {
    // this.router.addRoutes(homeRoutes);
    for (let homeRoute of homeRoutes) {
      this.router.addRoute(homeRoute);
    }
    this.store.registerModule([this.name], homeStore);
  }
}
