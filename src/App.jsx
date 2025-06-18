// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Diagnosis from './pages/Diagnosis.jsx';
// import Results from './pages/Results.jsx';
// import FAQs from './pages/FAQs.jsx';
// import Login from './pages/Login.jsx';
// import SignUp from './pages/SignUp.jsx';
// import Footer from './components/Footer.jsx';
// import Profile from './components/Profile.jsx';
// import Settings from './components/Settings.jsx';
// import { AuthProvider } from './context/AuthContext';
// import updateAuthStatus from './context/updateAuthStatus';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="min-h-screen flex flex-col bg-gray-50">
//           <Navbar />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/diagnosis" element={<Diagnosis />} />
//               <Route path="/results" element={<Results />} />
//               <Route path="/faqs" element={<FAQs />} />
//               <Route path="/login" element={<Login onLoginSuccess={updateAuthStatus} />} />
//               <Route path="/signup" element={<SignUp onSignupSuccess={updateAuthStatus} />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Diagnosis from './pages/Diagnosis.jsx';
import Results from './pages/Results.jsx';
import FAQs from './pages/FAQs.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/Settings.jsx';
import { AuthProvider } from './context/AuthContext';
import updateAuthStatus from './context/updateAuthStatus';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/diagnosis" element={<Diagnosis />} />
              <Route path="/results" element={<Results />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/login" element={<Login onLoginSuccess={updateAuthStatus} />} />
              <Route path="/signup" element={<SignUp onSignupSuccess={updateAuthStatus} />} />
              
              {/* Protected routes that require authentication */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;