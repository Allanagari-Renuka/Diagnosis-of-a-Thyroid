// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
  
//   // Check if user is logged in on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userEmail = localStorage.getItem('userEmail');
    
//     if (token && userEmail) {
//       setUser({ email: userEmail });
//     }
//   }, []);
  
//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
  
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
  
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userEmail');
//     setUser(null);
//     navigate('/login');
//   };
  
//   return (
//     <header className="bg-indigo-700 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold">Your App</Link>
        
//         <div className="relative" ref={dropdownRef}>
//           {user ? (
//             <>
//               <button 
//                 onClick={toggleDropdown}
//                 className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-800 py-2 px-4 rounded-full"
//               >
//                 {/* User avatar/symbol */}
//                 <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold">
//                   {user.email.charAt(0).toUpperCase()}
//                 </div>
//                 <span className="hidden md:inline">{user.email}</span>
//               </button>
              
//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                   <Link 
//                     to="/profile" 
//                     className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
//                   >
//                     Profile
//                   </Link>
//                   <Link 
//                     to="/settings" 
//                     className="block px-4 py-2 text-gray-800 hover:bg-indigo-100"
//                   >
//                     Settings
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className="space-x-2">
//               <Link 
//                 to="/login" 
//                 className="bg-indigo-600 hover:bg-indigo-800 py-2 px-4 rounded"
//               >
//                 Login
//               </Link>
//               <Link 
//                 to="/signup" 
//                 className="bg-white text-indigo-700 hover:bg-indigo-100 py-2 px-4 rounded"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-blue-700 font-bold text-2xl">Thyroid Diagnosis</h1>
              <p className="text-gray-500 text-sm">Your health companion</p>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/home" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/diagnosis" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Diagnosis</Link>
            <Link to="/faqs" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">FAQs</Link>
            
            {isLoggedIn ? (
              <button 
                onClick={handleLogout} 
                className="ml-4 px-5 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 font-medium transition duration-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Login</Link>
                <Link 
                  to="/signup" 
                  className="ml-4 px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition duration-200"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg 
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg 
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 font-medium">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 font-medium">About</Link>
          <Link to="/diagnosis" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 font-medium">Diagnosis</Link>
          <Link to="/faqs" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 font-medium">FAQs</Link>
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="w-full mt-2 text-left px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 font-medium"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 font-medium">Login</Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 mt-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 font-medium"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;