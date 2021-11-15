import { send } from './send'

export const api = {
    get: async (endpoint) => {
        let method = 'GET'
        return await send({method, path: endpoint})
    },
    put: async (endpoint, data) => {
        let method = 'PUT'
        let res = await send({method, path: endpoint, data})
        return res
    },
    post: async (endpoint, data) => {
        let method = 'POST'
        return await send({method, path: endpoint, data})
    },
    del: async (endpoint, data) => {
        let method = 'DELETE'
        return await send({method, path: endpoint, data})
    }
}