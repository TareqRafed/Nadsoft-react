const requestPending = (state, action) => {
  if (!state.isLoading) {
    state.isLoading = true
    state.currentRequestId = action.meta.requestId
  }
}

export default requestPending
