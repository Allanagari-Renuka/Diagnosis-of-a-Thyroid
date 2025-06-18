// // import React, { useState, useEffect, useRef } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const UserProfileIcon = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [userData, setUserData] = useState(null);
// //   const dropdownRef = useRef(null);
// //   const navigate = useNavigate();

// //   // Check if user is logged in when component mounts
// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       setIsLoggedIn(true);
// //       fetchUserData(token);
// //     }
// //   }, []);

// //   // Handle clicks outside of dropdown to close it
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setShowDropdown(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   // Fetch user data from backend
// //   const fetchUserData = async (token) => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/user/profile', {
// //         headers: {
// //           Authorization: `Bearer ${token}`
// //         }
// //       });
// //       setUserData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching user data:', error);
// //     }
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     setIsLoggedIn(false);
// //     setUserData(null);
// //     setShowDropdown(false);
// //     navigate('/login');
// //   };

// //   // If not logged in, don't render anything
// //   if (!isLoggedIn) {
// //     return null;
// //   }

// //   return (
// //     <div className="relative" ref={dropdownRef}>
// //       <button
// //         className="flex items-center focus:outline-none"
// //         onClick={() => setShowDropdown(!showDropdown)}
// //       >
// //         <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
// //           {userData?.email ? userData.email.charAt(0).toUpperCase() : 'U'}
// //         </div>
// //       </button>

// //       {showDropdown && (
// //         <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-10">
// //           <div className="px-4 py-3 border-b border-gray-200">
// //             <p className="text-sm text-gray-500">Hello,</p>
// //             <p className="font-medium">{userData?.email || 'User'}</p>
// //           </div>
          
// //           <ul>
// //             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
// //               My Profile
// //             </li>
// //             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
// //               My Orders
// //             </li>
// //             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
// //               Logout
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default UserProfileIcon;

// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const UserProfileIcon = ({ onLogout }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
  
//   // Use AuthContext to get user data
//   const { user } = useContext(AuthContext);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     setShowDropdown(false);
//   };

//   // Get the first letter of the email or username for the avatar
//   const getInitial = () => {
//     if (user?.email) {
//       return user.email.charAt(0).toUpperCase();
//     }
//     if (user?.username) {
//       return user.username.charAt(0).toUpperCase();
//     }
//     return 'U';
//   };

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
//         onClick={() => setShowDropdown(!showDropdown)}
//       >
//         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
//           {getInitial()}
//         </div>
//         <span className="hidden sm:inline">My Account</span>
//         <svg 
//           className="h-4 w-4 hidden sm:inline" 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {showDropdown && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
//           <div className="px-4 py-3 border-b border-gray-200">
//             <p className="text-sm text-gray-500">Signed in as</p>
//             <p className="text-sm font-medium text-gray-900 truncate">
//               {user?.email || user?.username || 'User'}
//             </p>
//           </div>
          
//           <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//             My Profile
//           </Link>
//           <Link to="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//             Diagnosis History
//           </Link>
//           <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//             Settings
//           </Link>
//           <button 
//             onClick={handleLogout}
//             className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfileIcon;