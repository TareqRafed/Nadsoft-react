import axios from './axios'

const injectInterceptors = (store) => {
  axios.interceptors.request.use(
    (next) => {
      const config = next
      const { token } = store.getState().session
      config.headers.Authorization = `Bearer ${token}`
      return Promise.resolve(config)
    },
    (error) => Promise.reject(error),
  )
  axios.interceptors.response.use(
    (next) => Promise.resolve(next),
    (error) => {
      if (error.response.status === 401) {
        // TODO: Handle unauth access
      }
      return Promise.reject(error)
    },
  )
}
export default injectInterceptors
