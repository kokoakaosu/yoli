export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    redirect: to => '/'
  }
]
