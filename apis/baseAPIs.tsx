import axios from 'axios'
import join from 'url-join'

const host = "https://dev-natrapak-backend.herokuapp.com/api/v1/"
const hostManageUser = 'https://dev-natrapak-backend.herokuapp.com/api/'

const contentTypeJson = { 'content-type': 'application/json' }

const service = axios.create({
    baseURL: host,
    headers: contentTypeJson
})

axios.interceptors.request.use(async (config) => {
    const token = "";
    const isHasToken = token !== "" && token !== null
    if (isHasToken) {
        config.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + token
        }
    }
    config.url = join(host, config.url)

    return config
})

const requestWithInterceptor = axios.interceptors.request.use(async (config) => {
    const token = "";
    const isHasToken = token !== "" && token !== null
    if (isHasToken) {
        config.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + token
        }
    }
    config.url = join(host, config.url)

    return config
})

export default service

export const serviceManageUser = axios.create({
    baseURL: hostManageUser,
    headers: contentTypeJson
})

export const serviceToken = requestWithInterceptor

// upload
export const serviceUpload = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
})