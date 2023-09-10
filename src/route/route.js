import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../pages/Accueil.vue";
import Contact from "../pages/Contact.vue";
import Projets from "../pages/Projets.vue";

const routes = [
  {
    path: "/accueil",
    name: "accueil",
    component: Accueil,
  },
  {
    path: "/projets",
    name: "projets",
    component: Projets,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
