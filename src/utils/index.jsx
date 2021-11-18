export const isLogin = () => false;

export const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export const setAccessToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const handleLogOut = () => {
  localStorage.removeItem("token");
};
