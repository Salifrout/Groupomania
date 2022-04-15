import { createWebHistory, createRouter } from "vue-router";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Publish from "@/views/Publish.vue";
import Published from "@/views/Published.vue";
import Posted from "@/views/Posted.vue";
import NotFound from "@/views/NotFound.vue";
import Rules from "@/views/Rules.vue";

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

/*router.beforeEach((to, from, next)=>{
  const correctSession = new RegExp(/.{100,}/);
  if(to.meta.requiresAuth && !sessionStorage.getItem('Authentification')) { //ou bien !req.headers.authorisation
    next({name:"Login"})
    console.log('test 1 ' + sessionStorage.getItem('Authentification'))
  } else if (to.meta.requiresAuth && (!sessionStorage.getItem('Authorization') || !correctSession.test(sessionStorage.getItem('Authorization')))) {
    next({name: "Login"})
    console.log('test 2')
   } else if (to.meta.requiresAuth && !sessionStorage.getItem('Authorization')) {
    console.log('bin bin ' + sessionStorage.getItem('Authorization'));
  } else if (to.meta.requiresAuth && !correctSession.test(sessionStorage.getItem('Authorization'))) {
   console.log('bo bo ' + correctSession.test(sessionStorage.getItem('Authorization')));
  } else {
    console.log('test 3');
    next()
  }
});*/

/*router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && sessionStorage.getItem('Authentification')) { //ou bien !req.headers.authorisation
    /*console.log('123');
    console.log(sessionStorage.getItem('Authentification') );
    console.log(req.headers.authorization);
    next()
    sessionStorage.clear();
  } else {
    console.log("321");
    next({name:"Login"})
  }
});*/

export default router;