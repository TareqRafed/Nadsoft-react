import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import localforage from 'localforage'

/**
 * init state must have a isLoading, to be able to cancel requests
 */
const initialState = {
  isLoading: false,
  token: '',
  entities: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    endSession: (state) => {
      state.entities = {}
      return state
    },
  },
})

const authPersistConfig = {
  key: 'auth',
  storage: localforage,
  whitelist: ['token'],
}

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
)

export const { reset, endSession } = authSlice.actions
