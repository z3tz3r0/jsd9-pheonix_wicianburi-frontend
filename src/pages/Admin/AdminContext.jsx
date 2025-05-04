import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import adminApi from './services/adminApi.js';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await adminApi.get('/admin/auth/verify');
        setAdmin(response.data.admin);
      } catch (error) {
        console.error("Not authenticated: ", error);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    }
    fetchAdmin();
  }, []);

  const loginAdmin = (adminData) => {
    setAdmin(adminData);
    navigate('/admin');
  }

  const logoutAdmin = async () => {
    setLoading(true);
    console.log("Logout button is clicked, Attempting to logout")
    try {
      await adminApi.post('/admin/auth/logout');
      console.log("Logged out")
    } catch (error) {
      console.error("Logout failed: ", error);
    } finally {
      setAdmin(null);
      setLoading(false);
      navigate('/admin');
    }
  }

  const value = {
    admin, setAdmin,
    loading,
    loginAdmin, logoutAdmin
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )

}

export const useAdminAuth = () => useContext(AdminContext);