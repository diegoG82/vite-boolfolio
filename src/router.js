import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import AboutPage from "./pages/AboutPage.vue"
import SingleProjectPage from "./pages/SingleProjectPage.vue"
import NotFound from "./pages/NotFound.vue"

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
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProjectPage,
    },

    {
        path: "/aboutus",
        name: "aboutus",
        component: AboutPage,
      },

      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
      },
  ],
});

export { router };
