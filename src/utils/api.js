import { send } from './send'

export const api = {
    get: async (endpoint, fallback) => {
        let method = 'GET'
        return await send({method, path: endpoint, fallback})
    },
    put: async (endpoint, data, fallback) => {
        let method = 'PUT'
        let res = await send({method, path: endpoint, data, fallback})
        return res
    },
    post: async (endpoint, data, fallback) => {
        let method = 'POST'
        return await send({method, path: endpoint, data, fallback})
    },
    del: async (endpoint, data, fallback) => {
        let method = 'DELETE'
        return await send({method, path: endpoint, data, fallback})
    }
}