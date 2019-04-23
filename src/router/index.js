import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Contact from '@/components/Contact'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/user',
      name: 'Users',
      component: Users
    },
    {
      path: '/updateuser/:userid',
      name: 'UpdateUser',
      component: UpdateUser
    }
    
  ]
})
