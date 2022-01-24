import { AUTHENTICATIONS_TYPES } from '@/helpers/constants.helpers'
import { Home, Next, Error404 } from '@/pages'

const routes = [
  {
    path: '/',
    component: Home,
    authenticationType: AUTHENTICATIONS_TYPES.UNAUTHENTICATED,
  },
  {
    path: '/next',
    component: Next,
    authenticationType: AUTHENTICATIONS_TYPES.UNAUTHENTICATED,
  },
  {
    path: '*',
    component: Error404,
  },
]

export default routes
