import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import User from '@/components/User'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Detail from '@/components/Detail'
import API from '@/components/API'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail/:title',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/User/:id',
      component: User
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/API',
      name: 'API',
      component: API
    }
  ]
})
