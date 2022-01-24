import { configureStore } from '@reduxjs/toolkit'
import injectInterceptor from '@/services/axios/interceptors'
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
})

injectInterceptor(store)

export default store
