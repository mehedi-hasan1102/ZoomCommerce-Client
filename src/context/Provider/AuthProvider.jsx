import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This is a dummy comment to force Vite to re-process this file.

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference) {
      setIsDarkMode(JSON.parse(darkModePreference));
      if (JSON.parse(darkModePreference)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }    

    setLoading(false);
  }, []);

  const login = (email, password) => {
    const dummyUser = { name: 'Test User', email: email, role: 'admin' };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    setUser(dummyUser);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  const authInfo = { user, loading, login, logout, isDarkMode, toggleDarkMode };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;