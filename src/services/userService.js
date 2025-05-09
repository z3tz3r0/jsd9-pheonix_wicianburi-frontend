import api from "./api";

export const loginUser = async (loginData) => {
  const res = await api.post("/auth/login", loginData, {
    withCredentials: true,
  });
  return res.data;
};

export const registerUser = async (registerData) => {
  const res = await api.post("/auth/register", registerData);
  return res.data;
};
