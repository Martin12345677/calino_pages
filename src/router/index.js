import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import animal from '../components/animal'
import warn from '../components/warn'
import warns from '../components/warns'
import technology from '../components/technology'
import news from '../components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, 
    {
      path: '/:bid/pig/:pid',
      name: 'pig',
      component: animal
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/technology',
      name: 'technology',
      component: technology
    },
    {
      path: '/warns',
      name: 'warns',
      component: warns
    }
  ]
})
