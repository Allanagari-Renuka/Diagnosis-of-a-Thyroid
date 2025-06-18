// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa'; // User Icon
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
  
//   // Use the auth context
//   const { isAuthenticated, logout, userEmail } = useAuth();

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

//   const handleLogout = () => {
//     logout(); // Use the logout function from auth context
//     setDropdownOpen(false);
//     navigate('/login'); // Redirect to login page
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <header className="bg-blue-50 border-b border-blue-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0">
//               <h1 className="text-blue-700 font-bold text-2xl">Thyroid Diagnosis</h1>
//               <p className="text-gray-500 text-sm">Your health companion</p>
//             </Link>
//           </div>

//           {/* Menu Items */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
//             <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About</Link>
//             <Link to="/diagnosis" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Diagnosis</Link>
//             <Link to="/faqs" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">FAQs</Link>

//             {isAuthenticated ? (
//               <div className="relative" ref={dropdownRef}>
//                 <button 
//                   onClick={toggleDropdown} 
//                   className="flex items-center text-blue-600 text-2xl focus:outline-none"
//                   aria-label="User menu"
//                 >
//                   <FaUserCircle />
//                 </button>
                
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                     <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
//                       {userEmail || 'User'}
//                     </div>
//                     <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Profile</Link>
//                     <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Settings</Link>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Login</Link>
//                 <Link
//                   to="/signup"
//                   className="ml-4 px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition duration-200"
//                 >
//                   SignUp
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User Icon
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  // Use the auth context
  const { isAuthenticated, logout, userEmail } = useAuth();

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout(); // Use the logout function from auth context
    setDropdownOpen(false);
    navigate('/login'); // Redirect to login page
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-blue-700 font-bold text-2xl">Thyroid Diagnosis</h1>
              <p className="text-gray-500 text-sm">Your health companion</p>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/diagnosis" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Diagnosis</Link>
            <Link to="/faqs" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">FAQs</Link>

            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center text-blue-600 text-2xl focus:outline-none"
                  aria-label="User menu"
                >
                  <FaUserCircle />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-68 bg-white rounded-md shadow-lg py-2 z-50">
                    <div className="px-4 py-2 text-sm text-black-500 bold border-b border-black-100 cursor-pointer">
                      {userEmail || 'User'}
                    </div>
                    <Link 
                      to="/profile" 
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/settings" 
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 border-t border-gray-100 mt-1"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;