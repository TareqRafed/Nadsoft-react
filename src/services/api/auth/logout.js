import genericRequest from '../requestTemplate/genericRequest'

const logout = () =>
  genericRequest({
    storeName: 'auth',
    _url: 'Logout',
    exact: 'logout',
    method: 'get',
  })

export default logout
