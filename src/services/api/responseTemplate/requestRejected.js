const requestRejected = (state, action, type) => {
  if (state.isLoading) {
    state.isLoading = false
    state.error = { type, message: action?.payload?.result?.message }
    state.status = action?.payload?.status
    state.currentRequestId = undefined
  }
}

export default requestRejected
