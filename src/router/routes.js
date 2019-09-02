
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/sigin', component: () => import('pages/Sigin.vue') },
      { path: '/users', component: () => import('pages/Users.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
