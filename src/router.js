import { createWebHistory, createRouter } from "vue-router";
import ListComponent from './components/ListComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import DetailComponent from './components/DetailComponent.vue'

const routes = [
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/detail",
    component: DetailComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;