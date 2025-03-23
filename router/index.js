import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../src/components/DefaultLayout.vue";
import GuestLayout from "../src/components/GuestLayout.vue";
import Home from "../views/Home.vue";
import MealDetail from "../views/MealDetail.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetail",
        component: MealDetail,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
