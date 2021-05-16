import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/url/decode',
    name: 'decode',
    component: () => import('../views/url/Decode.vue'),
  },
  {
    path: '/url/encode',
    name: 'encode',
    component: () => import('../views/url/Encode.vue'),
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;