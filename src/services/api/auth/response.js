import responseTemplate from '../responseTemplate/responseTemplate'

export const AUTH_ERROR = 'authError'
export const EXPIRED_LICENSE = 'expiredLicense'
const authState = [{ name: 'entities', value: undefined }]

export const logoutResponse = (request) => responseTemplate(request, AUTH_ERROR)

export const loginResponse = (request) =>
  responseTemplate(request, AUTH_ERROR, authState)
