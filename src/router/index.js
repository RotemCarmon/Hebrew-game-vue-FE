import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import prepositionGenerator from '../views/preposition-generator.vue'
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
    path: '/preposition',
    name: 'preposition-generator',
    component: prepositionGenerator
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
