const requestFulfilled = (state, action) => {
  if (state.isLoading) {
    state.isLoading = false
    state.error = undefined
    state.status = action?.payload?.status
    state.currentRequestId = undefined
  }
}

export default requestFulfilled
