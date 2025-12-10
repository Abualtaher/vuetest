import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/about", component: () => import("../views/About.vue") },
  { path: "/Contact", component: () => import("../views/Contact.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
