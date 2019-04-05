import HelloWorld from '@/components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsCreate from '../components/Accounts/Create.vue'
import AccountsEdit from '../components/Accounts/Edit.vue'
import AccountsView from '../components/Accounts/View.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/contas', component: AccountsList },
  { path: '/contas/novo', component: AccountsCreate },
  { path: '/contas/editar/:id', component: AccountsEdit },
  { path: '/contas/:id', component: AccountsView }
]

export default routes
