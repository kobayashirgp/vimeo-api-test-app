import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Player from "../components/Player";
import Videos from "../components/Videos";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/home/:projectId/videos", component: Videos },
    { path: "/player", component: Player },
    { path: "/player/:videoId", component: Player }
  ]
});

export default router;
