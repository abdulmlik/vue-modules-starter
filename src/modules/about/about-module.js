import { aboutRoutes } from "./router/about-routes";

export class AboutModule {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.name = "about";
  }

  install(Vue) {
    this.router.addRoutes(aboutRoutes);
  }
}
