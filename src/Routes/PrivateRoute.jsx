import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AUTHENTICATIONS_TYPES } from '@/helpers/constants.helpers'
import { useSelector } from 'react-redux'

/**
 *
 * @param {String} routeAuthentication
 * @returns either children or redirect to '/'
 */
function PrivateRoute({ children, routeAuthentication, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth)

  // TODO: Check auth type before redirect
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Route
            element={
              <Navigate
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            }
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  routeAuthentication: PropTypes.oneOf(Object.values(AUTHENTICATIONS_TYPES)),
}

PrivateRoute.defaultProps = {
  children: '',
  routeAuthentication: AUTHENTICATIONS_TYPES.UNAUTHENTICATED,
}

export default PrivateRoute
