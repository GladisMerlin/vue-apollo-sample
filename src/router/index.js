import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BooksList from '../views/BooksList.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/booksList',
        name: 'BooksList',
        component: BooksList
    },
    {
        path: '/authors',
        name: 'Authors',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Authors.vue')
    },
    {
        path: '/books/:id',
        name: 'book',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Book.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router