import api from "./api";

export const loginUser = async (loginData) => {
  const res = await api.post("/api/auth/login", loginData, {
    withCredentials: true,
  });
  return res.data;
};

export const registerUser = async (registerData) => {
  const res = await api.post("/api/auth/register", registerData);
  return res.data;
};

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/api/auth/users/me");
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateCurrentUser = async (usersInfo) => {
  try {
    const perpData = {
      firstName: usersInfo.firstName,
      lastName: usersInfo.lastName,
      phone: usersInfo.phone,
      email: usersInfo.email,
      address: {
        street: usersInfo.street,
        subDistrict: usersInfo.subDistrict,
        district: usersInfo.district,
        province: usersInfo.province,
        postal: usersInfo.postal,
      },
    };
    const res = await api.put("/api/auth/users/update", perpData);
    return res.data;
  } catch (error) {
    return error;
  }
};
