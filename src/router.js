import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from '@/components/Login.vue'
import auth from "@/auth"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      // meta: { requiresAuth: true },
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        auth.logout()
        // I dislike this due to whole page reload, but can't figure out better solution for now to trigger beforeEnter after logout redirect :(
        router.go('/')
        // next('/')
      }


    }
  ],

})

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}


// router.beforeEach((to, from, next) => {
//   console.log('require auth', auth.loggedIn())
//   if (!auth.loggedIn()) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// });

// router.beforeEach((to, from, next) => {
//   alert(auth.loggedIn())
//   if (to.matched.some(record => record.meta.requiresAuth) && !auth.loggedIn()) {
//     next({ path: '/login', query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });

export default router