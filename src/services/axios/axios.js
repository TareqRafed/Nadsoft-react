import defaultAxios from 'axios'
import { withVersioning, VersioningStrategy } from 'axios-api-versioning'
import { BASE_URL, REQUEST_TIMEOUT } from '@/helpers'

const axiosInstance = defaultAxios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: false,
})

const axios = withVersioning(axiosInstance, {
  apiVersion: 'v1',
  versioningStrategy: VersioningStrategy.UrlPath,
})

export default axios
