import { api } from '../utils/api'

export const isLogin = () => {
  const res = (async()=>{await api.get("tokens")})()
  if (!res.id) {
    return false
  }
  return true;
};
