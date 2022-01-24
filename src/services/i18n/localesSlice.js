import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import localforage from 'localforage'
import i18next from 'i18next'

const initialState = {
  lang: 'ar',
  isRTL: false,
}

export const localesSlice = createSlice({
  name: 'locales',
  initialState,
  reducers: {
    setLang: (state, { payload: { lang } }) => {
      state.lang = lang
      state.isRTL = i18next.dir(lang) === 'rtl'
      return state
    },
  },
})

const localesPersistConfig = {
  key: 'locales',
  storage: localforage,
}

const localesPersistReducer = persistReducer(
  localesPersistConfig,
  localesSlice.reducer,
)

export const { setLang } = localesSlice.actions

export default localesPersistReducer
