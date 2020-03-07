import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {

        return config
    }, err => {
        return Promise.reject(error)
    })

    instance.interceptors.response.use(response => {

        return response
    }, err => {

        return Promise.reject(err)
    })
    return instance(config)
}
