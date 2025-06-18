
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Thyroid Diagnosis</h3>
          <p className="text-gray-300 mb-4">Early detection for better thyroid health</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/diagnosis" className="text-gray-300 hover:text-white transition-colors">Diagnosis</Link></li>
            <li><Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Thyroid Health Guide</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Diet Recommendations</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find a Specialist</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-2">Email: info@thyroiddiagnosis.com</p>
          <p className="text-gray-300 mb-2">Phone: 123-456-789</p>
          <p className="text-gray-300">Address: 123 Health Street, Medical City</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Thyroid Diagnosis. All rights reserved.</p>
        <p className="text-gray-400 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;