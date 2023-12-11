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
    // params: {
    //   default: true,
    //   pid: undefined
    // },
    // params: {
    //   pid: 0
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/BlogDetailsView.vue')
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
  // console.log('to');
  // console.log(to);
  // console.log('from');
  // console.log(from);
  next();
});

export default router;
