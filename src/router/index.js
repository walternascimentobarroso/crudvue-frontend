import HelloWorld from '@/components/HelloWorld'
import CategorysList from '../components/Category/List'
import CategorysCreate from '../components/Category/Create.vue'
import CategorysEdit from '../components/Category/Edit.vue'
import CategorysView from '../components/Category/View.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/category', component: CategorysList },
  { path: '/category/novo', component: CategorysCreate },
  { path: '/category/editar/:id', component: CategorysEdit },
  { path: '/category/:id', component: CategorysView }
]

export default routes
