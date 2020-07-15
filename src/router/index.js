import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import conjugationGenerator from '../views/conjugation-generator.vue'
import infinitiveGame from '../views/infinitive-game.vue'
import adminPage from '../views/admin-page.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home-page',
    component: homePage
  },
  {
    path: '/conjugation',
    name: 'conjugation-generator',
    component: conjugationGenerator
  },
  {
    path: '/infinitive',
    name: 'infinitive-game',
    component: infinitiveGame
  },
  {
    path: '/admin',
    name: 'admin-page',
    component: adminPage
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
