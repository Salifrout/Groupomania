import { createWebHistory, createRouter } from "vue-router";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Publish from "@/views/Publish.vue";
import Published from "@/views/Published.vue";
import Posted from "@/views/Posted.vue";
import NotFound from "@/views/NotFound.vue";
import Rules from "@/views/Rules.vue";
/*import { nextTick } from "vue";*/

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
    path: "/profile/",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/publish",
    name: "Publish",
    component: Publish,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/published",
    name: "Published",
    component: Published,
    /*meta: {
      requiresAuth: true
    }*/
  },
  {
    path: "/posted",
    name: "Posted",
    component: Posted,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/community",
    name: "Rules",
    component: Rules,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.meta.requiresAuth && (!sessionStorage.getItem('Authorization') || sessionStorage.getItem('Authorization') == undefined)) {
    next({name: "Login"});
  } else {
    setTimeout(next(), 3000);
  }
});

export default router;