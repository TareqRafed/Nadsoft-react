import { AUTHENTICATIONS_TYPES } from '@/helpers/constants.helpers'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import routes from './routes'

function RouterProvider() {
  return (
    <Routes>
      {routes.map((route) => {
        if (
          route.authenticationType !== AUTHENTICATIONS_TYPES.UNAUTHENTICATED &&
          route.authenticationType
        ) {
          return (
            <Route
              key={`${route.path}private`}
              element={
                <PrivateRoute routeAuthentication={route.authenticationType}>
                  <Route key={route.path} {...route} />
                </PrivateRoute>
              }
            />
          )
        }
        if (!route.authenticationType)
          return (
            <Route
              key={route.path}
              element={<route.component />}
              path={route.path}
            />
          )
        return (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
          />
        )
      })}
    </Routes>
  )
}

export default RouterProvider
