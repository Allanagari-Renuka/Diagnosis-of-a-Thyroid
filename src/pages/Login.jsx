// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaUserCircle } from 'react-icons/fa';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // Check if user is already logged in
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle clicks outside the dropdown to close it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });

//       // Store token and user email
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userEmail', email);

//       // Set logged-in state
//       setIsLoggedIn(true);
//     } catch (err) {
//       console.error('Login error:', err);
//       if (err.response) {
//         if (err.response.status === 401) {
//           setError('Invalid email or password.');
//         } else {
//           setError('An error occurred during login.');
//         }
//       } else {
//         setError('An unexpected error occurred.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userEmail');
//     setIsLoggedIn(false);
//     setDropdownOpen(false);
//   };

//   // Function to navigate to profile page
//   const handleProfile = () => {
//     setDropdownOpen(false);
//     navigate('/profile');
//   };

//   // Function to navigate to settings page
//   const handleSettings = () => {
//     setDropdownOpen(false);
//     navigate('/settings');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top navigation bar with just the user icon when logged in */}
//       <div className="w-full bg-indigo-700 text-white p-4 flex justify-end items-center">
//         {/* <div className="text-xl font-bold">Thyroid Diagnosis</div> */}
//         {isLoggedIn && (
//           <div className="relative" ref={dropdownRef}>
//             <button 
//               onClick={toggleDropdown}
//               className="flex items-center focus:outline-none"
//             >
//               <FaUserCircle className="text-2xl" />
//             </button>
            
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                 <Link
//                   to="/profile"
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Settings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Login form (only shown when not logged in) */}
//       {!isLoggedIn ? (
//         <div className="flex items-center justify-center h-full py-16">
//           <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold text-center text-indigo-800 mb-6">Login</h1>

//             {error && (
//               <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-gray-700" htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700" htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Logging In...' : 'Login'}
//               </button>
//             </form>

//             <p className="mt-4 text-center">
//               Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center h-full py-16">
//           <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
//             <h1 className="text-2xl font-bold text-indigo-800 mb-6">Welcome!</h1>
//             <p className="mb-4">You are successfully logged in.</p>
//             <p className="text-gray-600">Click on your user icon in the top right to access your profile, settings, or log out.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const { login } = useAuth();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); // Redirect to home/dashboard if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      // Store token and user email
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', email);
      
      // Update authentication status
      setIsAuthenticated(true);
      
      // Call the onLoginSuccess callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      // Trigger storage event for navbar to detect the change
      window.dispatchEvent(new Event('storage'));
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        if (err.response.status === 401) {
          setError('Invalid email or password.');
        } else {
          setError('An error occurred during login.');
        }
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Login form */}
      <div className="flex items-center justify-center h-full py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">Login</h1>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
              disabled={isLoading}
            >
              {isLoading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-center">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;