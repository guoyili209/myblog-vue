import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from 'views/blog/Blog.vue'

const MessageBoard = () => import('views/leavemsg/MessageBoard.vue')
const CurriculumVitae=()=>import('views/cv/CurriculumVitae.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/messageboard',
    name: 'MessageBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:MessageBoard
  },
  {
    path:'/curriculumvitae',
    name:'CurriculumVitae',
    component:CurriculumVitae
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
