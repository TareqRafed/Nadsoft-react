import genericRequest from '../requestTemplate/genericRequest'

const signIn = (email, password) =>
  genericRequest({
    storeName: 'auth',
    _url: 'Login',
    exact: 'login',
    data: JSON.stringify({
      email,
      password,
    }),
  })

export default signIn
