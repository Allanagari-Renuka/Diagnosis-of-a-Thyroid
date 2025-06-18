import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  

  console.log("Results component - location:", location);
  

  const state = location.state || { 
    probability: 0, 
    diagnosis: 'No Data',
    confidence: 0,
    error: 'No diagnosis data was provided. Please try again.'
  };
  
  console.log("Results component - using state:", state);
  
  
  const status = state.error ? 'consult' : (state.probability < 0.5 ? 'healthy' : 'consult');

  
  const getThyroidImage = (probability) => {
    if (probability < 0.5) {
      return "/images/t14.jpg"; 
    } else {
      return "/images/t15.jpg"; 
    }
  };

  const renderHealthyResult = () => (
    <div className="text-center p-8 bg-green-50 rounded-xl">
      <div className="w-20 h-20 bg-green-100 text-green-600 text-4xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
        ✓
      </div>
      <h2 className="text-3xl font-bold text-green-800 mb-4">Good News!</h2>
      <p className="text-lg text-gray-700 mb-6">
        Based on our analysis, no significant thyroid abnormalities were detected.
      </p>
      <p className="text-gray-600 mb-8">
        Probability of thyroid disorder: <span className="font-bold text-green-700">{(state.probability * 100).toFixed(2)}%</span>
      </p>
      
      {/* Image visualization for healthy result */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Recommended For You</h3>
        <div className="flex justify-center items-center">
          <div className="border border-green-200 rounded-lg p-4 bg-white max-w-md">
            <img 
              src={"/images/t14.jpg"} 
              alt="Balanced diet recommendation" 
              className="mx-auto rounded mb-3 w-full h-64 object-cover"
            />
            <p className="text-sm text-gray-500 italic">
              Maintain a healthy thyroid with a balanced diet rich in iodine, selenium, and other essential nutrients.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-green-700 mb-6">Maintain Your Thyroid Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-medium text-green-600 mb-3">Regular Check-ups</h4>
            <p className="text-gray-600">
              Continue with regular medical check-ups to monitor your thyroid health.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-medium text-green-600 mb-3">Balanced Diet</h4>
            <p className="text-gray-600">
              Maintain a diet with iodine-rich foods like seafood, dairy, and iodized salt.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-medium text-green-600 mb-3">Stay Active</h4>
            <p className="text-gray-600">
              Regular exercise helps maintain overall health, including thyroid function.
            </p>
          </div>
        </div>
      </div>
      <Link 
        to="/diagnosis" 
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
      >
        Run Another Diagnosis
      </Link>
    </div>
  );

  const renderConsultResult = () => (
    <div className="p-8 bg-orange-50 rounded-xl">
      <div className="w-20 h-20 bg-orange-100 text-orange-600 text-4xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
        !
      </div>
      <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">Attention Required</h2>
      <div className="text-center">
        {state.error ? (
          <div className="text-lg text-red-600 mb-6">
            {state.error}
          </div>
        ) : (
          <>
            <div className="text-lg text-gray-700 mb-6">
              Our analysis indicates potential thyroid abnormalities that require further evaluation.
            </div>
            <div className="text-gray-600 mb-8">
              Probability of thyroid disorder: <span className="font-bold text-orange-700">{(state.probability * 100).toFixed(2)}%</span>
            </div>
          </>
        )}
      </div>
      
      {/* Image visualization for abnormal result */}
      {!state.error && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-orange-700 mb-4 text-center">Recommended Next Step</h3>
          <div className="flex justify-center items-center">
            <div className="border border-orange-200 rounded-lg p-4 bg-white max-w-md">
              <img 
                src={"/images/t15.jpg"} 
                alt="Consult a doctor specialist" 
                className="mx-auto rounded mb-3 w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 italic">
                We recommend consulting with a thyroid specialist to properly evaluate your condition and discuss treatment options.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-orange-700 mb-6">Next Steps</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h4 className="text-xl font-medium text-orange-600 mb-3">Consult a Healthcare Provider</h4>
          <p className="text-gray-600">
            Please schedule an appointment with an endocrinologist or your primary care physician for a comprehensive evaluation.
          </p>
        </div>
        <h3 className="text-2xl font-semibold text-orange-700 mb-6">Precautions & Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-medium text-orange-600 mb-3">Diet Recommendations</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Consume iodine-rich foods (seafood, dairy)</li>
              <li>Include selenium sources (Brazil nuts, seafood)</li>
              <li>Avoid excessive goitrogenic foods</li>
              <li>Limit processed foods and added sugars</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-medium text-orange-600 mb-3">Lifestyle Tips</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Manage stress through meditation or yoga</li>
              <li>Ensure adequate sleep (7-8 hours)</li>
              <li>Exercise moderately (30 minutes daily)</li>
              <li>Avoid cigarette smoke and excessive alcohol</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          to="/diagnosis" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
        >
          Run Another Diagnosis
        </Link>
        <a 
          href="https://www.maxhealthcare.in/condition/india/thyroid-disorders-doctors-in-india" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
        >
          Find a Thyroid Specialist
        </a>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h1 className="text-4xl font-bold text-indigo-800 p-6 border-b border-gray-200">Diagnosis Results</h1>
        <div className="p-6">
          {status === 'healthy' ? renderHealthyResult() : renderConsultResult()}
        </div>
      </div>
    </div>
  );
};

export default Results;