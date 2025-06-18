// import React from 'react';

// const Profile = () => {
//   const email = localStorage.getItem('userEmail');
  
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex items-center space-x-4 mb-4">
//           <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
//             {email.charAt(0).toUpperCase()}
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold">{email}</h2>
//             <p className="text-gray-600">User</p>
//           </div>
//         </div>
//         <div className="border-t pt-4">
//           <p className="mb-2"><strong>Email:</strong> {email}</p>
//           <p className="mb-2"><strong>Account Created:</strong> [Date will appear from backend]</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';


const Profile = () => {
  const { userEmail } = useAuth();
  const [accountCreated, setAccountCreated] = useState('');
  
  // You can fetch additional user information from the backend here
  useEffect(() => {
    // For demonstration purposes, we'll just use a placeholder date
    // In a real app, you would fetch this from your API
    const fetchUserData = async () => {
      try {
        // Mock API call - replace with actual API call in production
        // const response = await axios.get('http://localhost:5000/api/user', {
        //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        // });
        // setAccountCreated(response.data.createdAt);
        
        // For now, just set a placeholder date
        setAccountCreated(new Date().toLocaleDateString());
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">User Profile</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{userEmail || 'User'}</h2>
            <p className="text-black-600">Account User</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">EMAIL ADDRESS</p>
              <p className="font-medium">{userEmail || 'Not available'}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-500 text-sm">ACCOUNT CREATED</p>
              <p className="font-medium">{accountCreated || 'Not available'}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t pt-6">
          <p className="text-gray-600 mb-4">
            Your account profile information is displayed above. To update your password,
            please visit the <Link to="/settings" className="text-blue-600 hover:underline">Settings</Link> Settings page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;