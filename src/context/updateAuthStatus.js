// // This is a utility function to update authentication status
// // It can be used when a user successfully logs in or signs up

// const updateAuthStatus = (userData, token) => {
//     // Store token in localStorage
//     localStorage.setItem('token', token);
    
//     // If there's user data, store it as well
//     if (userData) {
//       localStorage.setItem('userData', JSON.stringify(userData));
//     }
    
//     // You can add additional logic here if needed
//     // For example, updating global state, triggering analytics, etc.
    
//     return true;
//   };
  
//   export default updateAuthStatus;


/**
 * Helper function to update authentication status across the app
 * This is used as a callback after successful login/signup
 */
const updateAuthStatus = () => {
  // Dispatch a custom event that the AuthContext will listen for
  window.dispatchEvent(new Event('auth-update'));
  
  // Also dispatch storage event to ensure Navbar updates
  window.dispatchEvent(new Event('storage'));
};

export default updateAuthStatus;