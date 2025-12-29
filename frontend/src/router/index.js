import { createRouter, createWebHistory } from "vue-router";

import ContactList from "@/components/ContactList.vue";
import EditContact from "@/components/EditContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Contact List",
      component: ContactList,
    },
    {
      path: "/create-contact",
      name: "Add Contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/AddContact.vue"),
    },
    {
      path: "/contact/:id?",
      name: EditContact,
      component: () => import("../components/EditContact.vue"),
    },
  ],
});

export default router;
