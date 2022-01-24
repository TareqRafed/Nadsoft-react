import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from '@/services/axios/axios'

let prevRequestToken
// extra config
const genericRequest = ({
  storeName,
  url,
  extraConfig,
  exact,
  ...axiosConfig
}) =>
  createAsyncThunk(
    `${storeName}/${exact}`,
    async (params, { getState, requestId, rejectWithValue }) => {
      const state = getState()
      const { currentRequestId, isLoading } = state.storeName

      // Debouncing double api calls
      if (isLoading && requestId !== currentRequestId) {
        prevRequestToken?.cancel({
          cancelToken: true,
        })
      }

      prevRequestToken = axios?.CancelToken?.source()

      try {
        const result = await axios({
          params,
          url,
          ...axiosConfig,
          cancelToken: prevRequestToken.token,
        })
        return { ...result, ...extraConfig }
      } catch (err) {
        const { response, message } = err
        return rejectWithValue({
          status: response?.status,
          message: response?.data,
          cancelToken: message?.cancelToken,
          ...extraConfig,
          id: nanoid(),
        })
      }
    },
  )

export default genericRequest
