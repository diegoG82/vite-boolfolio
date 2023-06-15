import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";

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
  ],
});

export { router };
