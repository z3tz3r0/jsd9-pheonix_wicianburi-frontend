import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";
import { getCurrentUser } from "../services/userService";
import { AuthContext } from "./AuthContext";

// context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkAuth = async () => {
      setUserLoading(true);
      console.log('Cookies:', document.cookie);
      try {
        const res = await getCurrentUser();
        console.log("🍺 Response from:", res);

        if (res && res.user) {
          setIsLogin(true);
          setUser(res.user);
        } else {
          setIsLogin(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        setIsLogin(false);
        setUser(null);
      } finally {
        setUserLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
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
    userLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
