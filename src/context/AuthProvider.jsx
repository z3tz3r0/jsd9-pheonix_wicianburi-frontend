import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

// context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkAuth = async () => {
      console.log('Cookies:', document.cookie);
      try {
        const res = await api.get("/auth/users/me", {
          withCredentials: true,
        });
        console.log("🍺 Response from:", res.data);

        if (res.data && res.data.user) {
          setIsLogin(true);
          setUser(res.data.user);
        } else {
          setIsLogin(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        setIsLogin(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      setIsLogin(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
