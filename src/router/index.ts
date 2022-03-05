import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/modules/auth/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@s/views/HomeView.vue"),
    },
    {
      path: "/auth",
      ...authRoutes,
      redirect: { name: "auth-login" },
    },
  ],
});

export default router;
