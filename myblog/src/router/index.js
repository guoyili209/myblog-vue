import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from 'views/blog/Blog.vue'

const MessageBoard = () => import('views/leavemsg/MessageBoard.vue')
const CurriculumVitae = () => import('views/cv/CurriculumVitae.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Blog',
        component: Blog,
        meta: {
            title: '博客'
        }
    },
    {
        path: '/messageboard',
        name: 'MessageBoard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: MessageBoard,
        meta: {
            title: '留言板'
        }
    },
    {
        path: '/curriculumvitae',
        name: 'CurriculumVitae',
        component: CurriculumVitae,
        meta: {
            title: '简历'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched[0]) {
        //从from跳转到to

    }
    document.title = to.matched[0].meta.title;
    next();
})

export default router
