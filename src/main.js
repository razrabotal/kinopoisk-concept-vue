import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// route config
let routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  { path: '*', redirect: '/home' }
]

// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
