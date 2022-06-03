import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: () => import("@/views/ViewCreateCarton.vue") },
    {
      path: "/pallet",
      component: () => import("@/views/ViewCreatePallet.vue"),
    },
    {
      path: "/additional-data",
      component: () => import("@/views/ViewAdditionalData.vue"),
    },
    {
      path: "/results-pallet",
      component: () => import("@/views/ViewResultsPallet.vue"),
    },
    {
      path: "/semitrailer",
      component: () => import("@/views/ViewCreateSemitrailer.vue"),
    },
  ],
});
