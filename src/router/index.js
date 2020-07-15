import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/work",
    name: "Work",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Work.vue");
    }
  },
  {
    path: "/work/discover-bp",
    name: "DiscoverBp",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/DiscoverBp.vue");
    }
  },
  {
    path: "/work/trp-metrics",
    name: "TrpMetrics",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/TrpMetrics.vue");
    }
  },
  {
    path: "/work/ey",
    name: "Ey",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Ey.vue");
    }
  },
  {
    path: "/work/project-dastaan",
    name: "ProjectDastaan",
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/ProjectDastaan.vue"
      );
    }
  },
  {
    path: "/work/placeholder",
    name: "Placeholder",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Placeholder.vue");
    }
  },
  {
    path: "/work/gighub",
    name: "GigHub",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/GigHub.vue");
    }
  },
  {
    path: "/work/photography-ldn",
    name: "PhotographyLdn",
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/PhotographyLdn.vue"
      );
    }
  },
  {
    path: "/work/squares",
    name: "Squares",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Squares.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
