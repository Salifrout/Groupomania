import { createWebHistory, createRouter } from "vue-router";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Publish from "@/views/Publish.vue";
import Published from "@/views/Published.vue";
import Posted from "@/views/Posted.vue";
import Warning from "@/views/Warning.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/publish",
    name: "Publish",
    component: Publish,
  },
  {
    path: "/published",
    name: "Published",
    component: Published,
  },
  {
    path: "/posted",
    name: "Posted",
    component: Posted,
  },
  {
    path: "/warning",
    name: "Warning",
    component: Warning,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;