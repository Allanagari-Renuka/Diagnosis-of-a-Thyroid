import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Thyroid Diagnosis</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Early detection of thyroid disorders can lead to better health outcomes.
          </p>
          <Link to="/diagnosis" className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-100 transition duration-300 shadow-md">
            Get Diagnosed
          </Link>
        </div>
      </section>

      {/* Understanding Thyroid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Understanding Thyroid Disorders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">What is Thyroid?</h3>
              <p className="text-gray-700">
                The thyroid is a butterfly-shaped gland located in the front of your neck that produces hormones that regulate your body's metabolism.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Common Disorders</h3>
              <p className="text-gray-700">
                Hypothyroidism (underactive), hyperthyroidism (overactive), goiter, thyroiditis, and thyroid nodules are common thyroid disorders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Symptoms</h3>
              <p className="text-gray-700">
                Symptoms can include fatigue, weight changes, temperature sensitivity, irregular heartbeat, and swelling in the neck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Platform Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Diagnosis Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl text-indigo-600 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our system uses advanced deep learning to analyze thyroid scan images.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl text-indigo-600 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Results</h3>
              <p className="text-gray-600">
                Get preliminary results within seconds of uploading your scan.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl text-indigo-600 mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized health recommendations based on your results.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;