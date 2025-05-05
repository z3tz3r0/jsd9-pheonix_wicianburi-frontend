import React, { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

// context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
        setUser(null);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("🍺 Response from /users:", res.data);

        if (res.data && res.data.user) {
          setIsLogin(true);
          setUser(res.data.user);
        } else {
          setIsLogin(false);
          setUser(null);
          localStorage.removeItem("token");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        setIsLogin(false);
        setUser(null);
        localStorage.removeItem("token");
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogin(false);
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
