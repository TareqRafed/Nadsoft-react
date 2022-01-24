import { authPersistReducer } from '@/services/api/auth/authReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { localesPersistReducer } from '@/services/i18n'

export default combineReducers({
  auth: authPersistReducer,
  locales: localesPersistReducer,
})
