export const getAccessToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const setAccessToken = (token) => {
  localStorage.setItem("token", token);
};

export const handleLogOut = () => {
  localStorage.removeItem("token");
};

export const getNewAccessToken = () => {
  fetch("https://ticketxpressapp.herokuapp.com/api/auth/refreshtoken", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      setAccessToken(data.accessToken);
      return data.accessToken;
    })
    .catch((err) => console.error(err));
};
