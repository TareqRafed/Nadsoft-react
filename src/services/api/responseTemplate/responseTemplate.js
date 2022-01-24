import requestFulfilled from './requestFulfilled'
import requestPending from './requestPending'
import requestRejected from './requestRejected'
/**
 * generic async thunk response for apis
 */
const responseTemplate = (request) => ({
  [request.pending]: requestPending,
  [request.fulfilled]: requestFulfilled,
  [request.rejected]: requestRejected,
})
export default responseTemplate
