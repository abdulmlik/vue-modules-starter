const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");

export const aboutRoutes = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
];
