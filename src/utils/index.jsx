export const isLogin = () => false;

export const getAccessToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const setAccessToken = (res) => {
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("userData", JSON.stringify(res.data));
};

export const handleLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userData"));
};
