// contexts/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    // Verifique as credenciais
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      return true; // Login bem-sucedido
    }
    return false; // Credenciais inválidas
  };

  return (
    <AuthContext.Provider value={{ login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
