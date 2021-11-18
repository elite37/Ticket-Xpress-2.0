<<<<<<< HEAD
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
=======
export const isLogin = () => {
  return false;
>>>>>>> 88e56ec05e3c14e93e687bbbe53ecb90c4a9140b
};
