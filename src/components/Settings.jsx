// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../context/AuthContext';

// // const Settings = () => {
// //   const [currentPassword, setCurrentPassword] = useState('');
// //   const [newPassword, setNewPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [message, setMessage] = useState({ type: '', text: '' });
// //   const [isLoading, setIsLoading] = useState(false);
  
// //   const { userEmail } = useAuth();
// //   const token = localStorage.getItem('token');
  
// //   const handleChangePassword = async (e) => {
// //     e.preventDefault();
// //     setMessage({ type: '', text: '' });
    
// //     if (newPassword !== confirmPassword) {
// //       setMessage({ type: 'error', text: 'New passwords do not match.' });
// //       return;
// //     }
    
// //     if (newPassword.length < 6) {
// //       setMessage({ type: 'error', text: 'New password must be at least 6 characters long.' });
// //       return;
// //     }
    
// //     setIsLoading(true);
    
// //     try {
// //       await axios.post('http://localhost:5000/api/change-password', 
// //         { currentPassword, newPassword },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
      
// //       setMessage({ type: 'success', text: 'Password changed successfully!' });
// //       setCurrentPassword('');
// //       setNewPassword('');
// //       setConfirmPassword('');
      
// //     } catch (err) {
// //       console.error('Change password error:', err);
      
// //       if (err.response && err.response.data && err.response.data.error) {
// //         setMessage({ type: 'error', text: err.response.data.error });
// //       } else {
// //         setMessage({ type: 'error', text: 'Failed to change password. Please try again.' });
// //       }
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };
  
// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-4 text-blue-700">Account Settings</h1>
      
// //       <div className="bg-white p-6 rounded-lg shadow-md">
// //         <h2 className="text-xl font-semibold mb-4">Account Information</h2>
// //         <div className="p-4 bg-gray-50 rounded-md mb-6">
// //           <p className="mb-2"><strong>Email:</strong> {userEmail || 'Not available'}</p>
// //         </div>
        
// //         <h2 className="text-xl font-semibold mb-4 mt-6">Change Password</h2>
        
// //         {message.text && (
// //           <div className={`p-4 mb-4 rounded ${
// //             message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
// //           }`}>
// //             {message.text}
// //           </div>
// //         )}
        
// //         <form onSubmit={handleChangePassword} className="space-y-4">
// //           <div>
// //             <label className="block text-gray-700 mb-1" htmlFor="current-password">
// //               Current Password
// //             </label>
// //             <input
// //               type="password"
// //               id="current-password"
// //               value={currentPassword}
// //               onChange={(e) => setCurrentPassword(e.target.value)}
// //               required
// //               className="w-full border border-gray-300 rounded p-2"
// //             />
// //           </div>
          
// //           <div>
// //             <label className="block text-gray-700 mb-1" htmlFor="new-password">
// //               New Password
// //             </label>
// //             <input
// //               type="password"
// //               id="new-password"
// //               value={newPassword}
// //               onChange={(e) => setNewPassword(e.target.value)}
// //               required
// //               className="w-full border border-gray-300 rounded p-2"
// //             />
// //           </div>
          
// //           <div>
// //             <label className="block text-gray-700 mb-1" htmlFor="confirm-password">
// //               Confirm New Password
// //             </label>
// //             <input
// //               type="password"
// //               id="confirm-password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="w-full border border-gray-300 rounded p-2"
// //             />
// //           </div>
          
// //           <button
// //             type="submit"
// //             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-400"
// //             disabled={isLoading}
// //           >
// //             {isLoading ? 'Updating...' : 'Update Password'}
// //           </button>
// //         </form>
        
// //         <div className="mt-8 pt-6 border-t">
// //           <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
// //           <div className="bg-red-50 p-4 rounded-md">
// //             <h3 className="font-semibold mb-2">Delete Account</h3>
// //             <p className="text-gray-700 mb-4">
// //               Once you delete your account, there is no going back. Please be certain.
// //             </p>
// //             <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
// //               Delete Account
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Settings;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Settings = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [deletePassword, setDeletePassword] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
  
//   const { userEmail, logout } = useAuth();
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();
  
//   // Direct password update function without complex error handling
//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     setMessage({ type: '', text: '' });
    
//     // Basic validation
//     if (newPassword !== confirmPassword) {
//       setMessage({ type: 'error', text: 'New passwords do not match.' });
//       return;
//     }
    
//     if (newPassword.length < 6) {
//       setMessage({ type: 'error', text: 'New password must be at least 6 characters long.' });
//       return;
//     }
    
//     setIsLoading(true);
    
//     // Simplified API call with direct success path
//     try {
//       // Make the API call to update password
//       await axios.post(
//         'http://localhost:5000/api/change-password', 
//         { 
//           currentPassword, 
//           newPassword 
//         },
//         { 
//           headers: { 
//             Authorization: `Bearer ${token}` 
//           } 
//         }
//       );
      
//       // If we reach here, the request succeeded
//       setMessage({ type: 'success', text: 'Password updated successfully!' });
      
//       // Clear the form
//       setCurrentPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//     } catch (error) {
//       console.error('Change password error:', error);
//       if (error.response) {
//         console.error('Change password error response data:', error.response.data);
//       }
//       // Simple error handling
//       setMessage({ 
//         type: 'error', 
//         text: error.response?.data?.message || 'Failed to update password. Please try again.' 
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   // Simplified delete account function
//   const handleDeleteAccount = async (e) => {
//     e.preventDefault();
//     setMessage({ type: '', text: '' });
//     setIsDeleting(true);
    
//     try {
//       // Simple direct API call
//       await axios.post(
//         'http://localhost:5000/api/delete-account', 
//         { password: deletePassword },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       // If we get here, it succeeded - show message briefly
//       setMessage({ type: 'success', text: 'Your account has been deleted successfully!' });
      
//       // Immediately remove credentials and log out
//       setTimeout(() => {
//         localStorage.removeItem('token');
//         logout();
//         navigate('/signup');
//       }, 1500);
      
//     } catch (error) {
//       console.error('Delete account error:', error);
//       if (error.response) {
//         console.error('Delete account error response data:', error.response.data);
//       }
//       // Simple error handling
//       setMessage({ 
//         type: 'error', 
//         text: error.response?.data?.message || 'Failed to delete account. Please try again.' 
//       });
//       setIsDeleting(false);
//     }
//   };
  
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4 text-blue-700">Account Settings</h1>
      
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Account Information</h2>
//         <div className="p-4 bg-gray-50 rounded-md mb-6">
//           <p className="mb-2"><strong>Email:</strong> {userEmail || 'Not available'}</p>
//         </div>
        
//         <h2 className="text-xl font-semibold mb-4 mt-6">Change Password</h2>
        
//         {message.text && (
//           <div className={`p-4 mb-4 rounded ${
//             message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
//           }`}>
//             {message.text}
//           </div>
//         )}
        
//         <form onSubmit={handleChangePassword} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="current-password">
//               Current Password
//             </label>
//             <input
//               type="password"
//               id="current-password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="new-password">
//               New Password
//             </label>
//             <input
//               type="password"
//               id="new-password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="confirm-password">
//               Confirm New Password
//             </label>
//             <input
//               type="password"
//               id="confirm-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded p-2"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-400"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Updating...' : 'Update Password'}
//           </button>
//         </form>
        
//         <div className="mt-8 pt-6 border-t">
//           <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
//           <div className="bg-red-50 p-4 rounded-md">
//             <h3 className="font-semibold mb-2">Delete Account</h3>
//             <p className="text-gray-700 mb-4">
//               Once you delete your account, there is no going back. Please be certain.
//             </p>
            
//             {!showDeleteConfirm ? (
//               <button 
//                 onClick={() => {
//                   setShowDeleteConfirm(true);
//                   setMessage({ type: '', text: '' });
//                 }}
//                 className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
//               >
//                 Delete Account
//               </button>
//             ) : (
//               <div className="bg-red-100 p-4 rounded-md">
//                 <p className="font-medium mb-3">Please confirm your password to delete your account:</p>
//                 <form onSubmit={handleDeleteAccount} className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1" htmlFor="delete-password">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="delete-password"
//                       value={deletePassword}
//                       onChange={(e) => setDeletePassword(e.target.value)}
//                       required
//                       className="w-full border border-red-300 rounded p-2"
//                     />
//                   </div>
//                   <div className="flex space-x-3">
//                     <button
//                       type="submit"
//                       className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:bg-red-400"
//                       disabled={isDeleting}
//                     >
//                       {isDeleting ? 'Deleting...' : 'Confirm Delete'}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setShowDeleteConfirm(false);
//                         setDeletePassword('');
//                         setMessage({ type: '', text: '' });
//                       }}
//                       className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { userEmail, logout } = useAuth();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  // Password update handler
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!token) {
      setMessage({ type: 'error', text: 'Session expired. Please log in again.' });
      logout();
      navigate('/login');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters long.' });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/change-password',
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data && response.data.success) {
        setMessage({ type: 'success', text: 'Password updated successfully!' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Failed to update password. Please try again.' });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to update password. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Account deletion handler
  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!token) {
      setMessage({ type: 'error', text: 'Session expired. Please log in again.' });
      logout();
      navigate('/login');
      return;
    }

    setIsDeleting(true);

    try {
      // If your backend expects DELETE, use axios.delete with data in config
      // Otherwise, keep as POST if that's what your backend expects
      const response = await axios.post(
        'http://localhost:5000/api/delete-account',
        { password: deletePassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data && response.data.success) {
        setMessage({ type: 'success', text: 'Your account has been deleted successfully!' });
        setTimeout(() => {
          localStorage.removeItem('token');
          logout();
          navigate('/signup');
        }, 1500);
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Failed to delete account. Please try again.' });
        setIsDeleting(false);
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to delete account. Please try again.'
      });
      setIsDeleting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Account Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="p-4 bg-gray-50 rounded-md mb-6">
          <p className="mb-2"><strong>Email:</strong> {userEmail || 'Not available'}</p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-6">Change Password</h2>

        {message.text && (
          <div className={`p-4 mb-4 rounded ${
            message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="current-password">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="new-password">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="confirm-password">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
          <div className="bg-red-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Delete Account</h3>
            <p className="text-gray-700 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>

            {!showDeleteConfirm ? (
              <button 
                onClick={() => {
                  setShowDeleteConfirm(true);
                  setMessage({ type: '', text: '' });
                }}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Delete Account
              </button>
            ) : (
              <div className="bg-red-100 p-4 rounded-md">
                <p className="font-medium mb-3">Please confirm your password to delete your account:</p>
                <form onSubmit={handleDeleteAccount} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="delete-password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="delete-password"
                      value={deletePassword}
                      onChange={(e) => setDeletePassword(e.target.value)}
                      required
                      className="w-full border border-red-300 rounded p-2"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:bg-red-400"
                      disabled={isDeleting}
                    >
                      {isDeleting ? 'Deleting...' : 'Confirm Delete'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDeleteConfirm(false);
                        setDeletePassword('');
                        setMessage({ type: '', text: '' });
                      }}
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;