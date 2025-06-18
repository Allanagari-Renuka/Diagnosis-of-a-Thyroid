// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load user from localStorage token on mount
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetchUserProfile(token);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const fetchUserProfile = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/user/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Failed to fetch user profile:', error);
//       localStorage.removeItem('token');
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = (token, userData) => {
//     localStorage.setItem('token', token);
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Export hook for easy access to auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  // Check authentication status on mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('userEmail');
      
      setIsAuthenticated(!!token);
      setUserEmail(email || '');
    };
    
    // Check on initial load
    checkAuthStatus();
    
    // Setup event listener for storage changes
    window.addEventListener('storage', checkAuthStatus);
    
    // Custom event listener for auth updates from other components
    const handleAuthUpdate = () => checkAuthStatus();
    window.addEventListener('auth-update', handleAuthUpdate);
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
      window.removeEventListener('auth-update', handleAuthUpdate);
    };
  }, []);

  // Method to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setUserEmail('');
    
    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  // Values to provide in context
  const value = {
    isAuthenticated,
    setIsAuthenticated,
    userEmail,
    setUserEmail,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;