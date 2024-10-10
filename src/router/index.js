import { createRouter, createWebHistory } from 'vue-router'
import UI_MP_001 from '../views/UI_MP_001.vue'

import NoticeView from '../views/NoticeView.vue'
import NoticeView1 from '../views/NoticeView1.vue'
import NoticeView2 from '../views/NoticeView2.vue'
import UI_MP_005 from '../views/UI_MP_005.vue'

import FaqView from '../views/FaqView.vue'
import FaqView1 from '../views/FaqView1.vue'
import FaqView2 from '../views/FaqView2.vue'

import ProductView from '../views/ProductView.vue'
import ProductView1 from '../views/ProductView1.vue'
import ProductView2 from '../views/ProductView2.vue'
import UI_MP_003 from '../views/UI_MP_003.vue'

import UI_MP_000_404err from '../views/UI_MP_000_404err.vue'

const routes = [
  {
    path: '/',
    name: 'UI_MP_001',
    component: UI_MP_001
  },
  {
    path: '/noticeView',
    name: 'noticeView',
    component: NoticeView
  },
  {
    path: '/noticeView1',
    name: 'noticeView1',
    component: NoticeView1
  },
  {
    path: '/noticeView2',
    name: 'noticeView2',
    component: NoticeView2
  },
  {
    path: '/UI_MP_005',
    name: 'UI_MP_005',
    component: UI_MP_005
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/faq1',
    name: 'faq1',
    component: FaqView1
  },
  {
    path: '/faq2',
    name: 'faq2',
    component: FaqView2
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product1',
    name: 'product1',
    component: ProductView1
  },
  {
    path: '/product2',
    name: 'product2',
    component: ProductView2
  },
  {
    path: '/UI_MP_003',
    name: 'UI_MP_003',
    component: UI_MP_003
  },
  {
    path: '/UI_MP_000_404err',
    name: 'UI_MP_000_404err',
    component: UI_MP_000_404err
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
