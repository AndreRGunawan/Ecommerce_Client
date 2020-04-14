import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import landingPage from '../views/LandingPage.vue'
import dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
