import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  // TODO : please add other context below


  // TODO : after add context above please add things in to this object.
  const value = {
    isLogin,
    setIsLogin,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider