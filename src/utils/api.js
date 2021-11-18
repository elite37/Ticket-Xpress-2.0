import { send } from "./send";
import cookie from './cookie'

const {token} = cookie();

export const api = {
  get: async (endpoint, fallback) => {
console.log(".t", token);
    let method = "GET";
    return await send({ auth: token, method, path: endpoint, fallback });
  },
  put: async (endpoint, data, auth, fallback) => {
    let _auth = auth ? auth : token
    let method = "PUT";
    let res = await send({
      auth: _auth,
      method,
      path: endpoint,
      data,
      fallback,
    });
    return res;
  },
  post: async (endpoint, data, auth, fallback) => {
    let _auth = auth ? auth : token;
    let method = "POST";
    return await send({
      method,
      path: endpoint,
      auth: _auth,
      data,
      fallback,
    });
  },
  del: async (endpoint, data, auth, fallback) => {
    let _auth = auth ? auth : token
    let method = "DELETE";
    return await send({
      method,
      path: endpoint,
      auth: _auth,
      data,
      fallback,
    });
  },
};
