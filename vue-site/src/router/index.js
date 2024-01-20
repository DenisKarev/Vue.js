import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogListView from "../views/BlogListView.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectDetailsView from "../views/ProjectDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog/:page?",
    name: "blog",
    component: BlogListView,
  },
  {
    path: "/blogdetails",
    name: "blogdetails",
    component: BlogDetailsView,
  },
  {
    path: "/projects/:page?",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/projectdetails/:pid?",
    name: "projectdetails",
    component: ProjectDetailsView,
  },
  {
    path: "*",
    name: "nf",
    redirect: '404',
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
