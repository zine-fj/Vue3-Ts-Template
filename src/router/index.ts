import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'
import { getToken } from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(
        /* webpackChunkName: "Login" */ '@/views/Login.vue'
      ),
    meta: {
      requireLogin: true,
      title: '登录',
      keepAlive: true
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import(
        /* webpackChunkName: "List" */ '@/views/List.vue'
      ),
    meta: {
      requireLogin: true,
      title: '列表页面',
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () =>
      import(
        /* webpackChunkName: "Detail" */ '@/views/Detail.vue'
      ),
    meta: {
      requireLogin: true,
      title: '详情页面',
      keepAlive: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    // component: () => import('@/components/Home'),
    redirect: '/list'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const whiteList = ['/login']
// 路由全局守卫
router.beforeEach(
  (
    to: RouteLocationNormalized & { meta: { title: string } },
    from: RouteLocationNormalized,
    next
  ) => {
    console.log('--- 路由全局守卫 ---')
    const hasToken = getToken()
    console.log('token: ', hasToken)
    if (hasToken) {
      if (to.name === 'Login') {
        next({ name: 'List' })
      } else {
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
       next(`/login?redirect=${to.path}`)
      }
    }
    document.title = to.meta.title ? to.meta.title : ''
  }
)

export default router
