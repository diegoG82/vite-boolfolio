import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import AboutPage from "./pages/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectPage,
    },

    {
        path: "/aboutus",
        name: "aboutus",
        component: AboutPage,
      }
  ],
});

export { router };
